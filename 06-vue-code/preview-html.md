# HTML 预览文件规范
## Preview HTML Rules

Keywords: preview html, clickable demo, frontend preview, backend page

本文用于约束 AI 生成可直接预览的 HTML 文件。该文件服务于设计调整和快速演示，不替代正式 Vue 工程代码。

## 1. 文件要求

- 单文件可打开。
- 包含完整 HTML、CSS、JavaScript。
- 不依赖构建工具。
- 不请求真实接口。
- 使用 mock 数据。
- 支持基础交互。
- 视觉风格应接近正式 Vue 版本。

## 2. 基础交互

列表页支持搜索、重置、分页切换、行操作、弹窗确认。表单页支持字段输入、校验提示、提交 loading、成功提示。详情页支持标签页切换、展开收起、抽屉或弹窗查看。工作台支持卡片 hover、快捷入口点击、简单筛选或切换。