# Vue 代码生成规则
## Vue Code Generation Rules

Keywords: vue codegen, ant design vue, preview html, typescript, backend page

本文用于约束 AI 生成后台页面代码。默认输出 Vue 3 + TypeScript + Ant Design Vue，同时必须提供一个可直接打开预览的 HTML 文件。

## 1. Vue 代码要求

必须包含类型定义、mock 数据或接口占位、loading、empty、error 状态、必要交互、操作反馈和符合页面规范的结构。

## 2. HTML 预览文件要求

HTML 文件用于给设计师快速看效果，应满足：单文件可打开，包含完整 HTML、CSS、JavaScript，不依赖构建工具，不请求真实接口，使用 mock 数据，支持基础点击交互，视觉风格接近 Vue 版本。

## 3. 页面类型要求

列表页必须包含搜索、表格、分页和状态。表单页必须包含字段分组、表单校验和提交反馈。详情页必须包含对象摘要、状态和关联信息。工作台必须包含核心指标、待办、风险和快捷入口。