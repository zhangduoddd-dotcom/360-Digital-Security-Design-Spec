---
name: backend-design-standards
description: Use this skill when generating, reviewing, or standardizing B-end SaaS backend UI designs, AI image prompts, or Vue 3 + TypeScript + Ant Design Vue frontend pages.
version: 1.0.0
---

# 后台设计规范 Skill
## Backend Design Standards Skill

Keywords: backend design, ai routing, vue codegen, ai image, ant design vue

## 1. 默认定位

这是 B 端后台界面设计 Skill 的总入口。AI 应先判断用户任务类型，再读取最少但足够的文档。

默认前端技术栈：

```text
Vue 3 + TypeScript + Ant Design Vue + Composition API + <script setup lang="ts">
```

## 2. 默认读取顺序

所有任务先读取 `INDEX.md`，然后按任务分流：

| 任务 | 默认读取 |
|---|---|
| 查询设计规则 | `01-foundation/`、`02-components/`、`03-interaction/` |
| 生成页面结构 | `04-pages/` + 对应交互规范 |
| 生成 AI 生图 Prompt | `05-ai-image/` + 对应页面规范 |
| 生成 Vue 页面代码 | `06-vue-code/` + 对应页面规范与交互规范 |
| 检查输出质量 | `07-checklists/` |

## 3. 代码生成特别要求

当用户要求“生成代码”“开发页面”“做 demo”“做可演示页面”时，必须同时生成：

```text
1. Vue 3 + TypeScript + Ant Design Vue 页面代码
2. 一个可直接打开预览的 HTML 文件
```

HTML 预览文件用于快速查看页面效果和基础点击交互；正式交付仍以 Vue 代码为准。

## 4. 输出约束

- 界面必须专业、清晰、适合企业级 B 端后台。
- 优先保证信息效率、任务路径和交互完整性。
- Vue 代码生成时必须优先使用 Ant Design Vue 组件。
- 页面应包含 loading、empty、error、反馈等基础状态。