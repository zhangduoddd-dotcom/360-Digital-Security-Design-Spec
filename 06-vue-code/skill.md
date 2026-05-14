# Vue 代码生成 Skill
## Vue Code Generation Skill

Keywords: vue codegen, typescript, ant design vue, preview html, html demo, backend

本文用于约束 AI 生成 Vue 页面代码和 HTML 可演示页面时的默认读取顺序、技术栈和交付物。

## 1. 默认技术栈

正式 Vue 工程代码默认技术栈：

```text
Vue 3 + TypeScript + Ant Design Vue + Composition API + <script setup lang="ts">
```

可演示页面默认交付形态：

```text
单文件 HTML + CSS + JavaScript + mock 数据
```

## 2. 默认交付物

### 2.1 生成可演示页面 / demo / 可点击预览

当用户要求生成页面 demo、可演示页面、可点击预览、高保真演示环境或 HTML 预览时，默认只输出：

```text
可直接打开预览的 HTML 文件
```

HTML 文件必须能直接打开，支持基础点击交互，不依赖构建工具，不请求真实接口。

### 2.2 生成 Vue 代码 / 工程代码

当用户明确要求生成 Vue 代码、前端代码、工程代码、接入项目或 Vue3 + TypeScript + Ant Design Vue 页面时，输出：

```text
1. Vue 3 + TypeScript + Ant Design Vue 页面代码
2. 可直接打开预览的 HTML 文件
```

HTML 文件用于设计预览和快速调整，不替代正式 Vue 工程代码。

## 3. 判断原则

- “演示、demo、预览、可点击、高保真演示环境”默认走 HTML 预览。
- “代码、工程、Vue、组件、接入项目、TypeScript”默认走 Vue 代码 + HTML 预览。
- 用户明确只要 HTML 时，不输出 Vue。
- 用户明确只要 Vue 时，可以不输出 HTML。