# Vue 代码生成 Skill
## Vue Code Generation Skill

Keywords: vue codegen, typescript, ant design vue, preview html, backend

本文用于约束 AI 生成 Vue 页面代码时的默认读取顺序、技术栈和交付物。

## 1. 默认技术栈

```text
Vue 3 + TypeScript + Ant Design Vue + Composition API + <script setup lang="ts">
```

## 2. 默认交付物

当用户要求生成代码、页面 demo、可演示页面或前端页面时，必须同时输出：

```text
1. Vue 3 + TypeScript + Ant Design Vue 页面代码
2. 可直接打开预览的 HTML 文件
```

HTML 文件用于设计预览和快速调整，不替代正式 Vue 工程代码。