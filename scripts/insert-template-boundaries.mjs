#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();

const targets = [
  '06-vue-code/templates/common-single-nav.html',
  '06-vue-code/templates/double-nav-frame.html'
];

const markers = {
  frameStart: '<!-- FRAME_LOCKED_START: top navigation / side navigation / page shell. Do not rewrite. -->',
  frameEnd: '<!-- FRAME_LOCKED_END -->',
  businessStart: '<!-- BUSINESS_CONTENT_START: replace only this block for page business content. -->',
  businessEnd: '<!-- BUSINESS_CONTENT_END -->'
};

function insertOnce(content, needle, beforeText) {
  if (content.includes(beforeText)) return content;
  const index = content.indexOf(needle);
  if (index === -1) {
    throw new Error(`Cannot find insertion point: ${needle}`);
  }
  return content.slice(0, index) + beforeText + '\n' + content.slice(index);
}

function insertAfterOnce(content, needle, afterText) {
  if (content.includes(afterText)) return content;
  const index = content.indexOf(needle);
  if (index === -1) {
    throw new Error(`Cannot find insertion point: ${needle}`);
  }
  const endIndex = index + needle.length;
  return content.slice(0, endIndex) + '\n' + afterText + content.slice(endIndex);
}

function wrapBusinessContent(content) {
  if (content.includes(markers.businessStart) && content.includes(markers.businessEnd)) {
    return content;
  }

  const mainCandidates = [
    '<main class="main-content"',
    '<div class="main-content"',
    '<div class="content-area"',
    '<section class="main-content"'
  ];

  let startNeedle = null;
  for (const candidate of mainCandidates) {
    if (content.includes(candidate)) {
      startNeedle = candidate;
      break;
    }
  }

  if (!startNeedle) {
    throw new Error('Cannot find business content start container. Please add BUSINESS_CONTENT markers manually.');
  }

  content = insertOnce(content, startNeedle, markers.businessStart);

  const scriptIndex = content.indexOf('<script');
  if (scriptIndex === -1) {
    throw new Error('Cannot find script boundary for BUSINESS_CONTENT_END. Please add marker manually.');
  }

  const beforeScript = content.slice(0, scriptIndex);
  const afterScript = content.slice(scriptIndex);
  if (!beforeScript.includes(markers.businessEnd)) {
    return beforeScript.replace(/\s*$/, '\n' + markers.businessEnd + '\n') + afterScript;
  }
  return content;
}

function updateFile(relativePath) {
  const absolutePath = path.join(repoRoot, relativePath);
  let content = fs.readFileSync(absolutePath, 'utf8');
  const original = content;

  const firstBodyChild = '<body>';
  content = insertAfterOnce(content, firstBodyChild, markers.frameStart);

  content = wrapBusinessContent(content);

  if (!content.includes(markers.frameEnd)) {
    const scriptIndex = content.indexOf('<script');
    if (scriptIndex === -1) {
      throw new Error('Cannot find script boundary for FRAME_LOCKED_END.');
    }
    content = content.slice(0, scriptIndex) + markers.frameEnd + '\n' + content.slice(scriptIndex);
  }

  if (content !== original) {
    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log(`Updated ${relativePath}`);
  } else {
    console.log(`No changes ${relativePath}`);
  }
}

for (const target of targets) {
  updateFile(target);
}
