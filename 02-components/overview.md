# 组件规范总览
## Components Overview

Keywords: components, ant design vue, backend components, ui states

本文定义后台产品的组件使用原则。Vue 代码生成时优先使用 Ant Design Vue，HTML 预览文件应模拟同样的结构、层级和交互状态。

## 1. 组件原则

- 组件样式、尺寸、状态和交互在同一产品内保持一致。
- 优先使用成熟组件，不手写低保真替代物。
- 组件状态必须完整，包括 default、hover、active、disabled、loading、empty、error、focus。
- 状态表达不能只依赖颜色，必须保留文字。
- 组件视觉应服务于任务效率，不应过度装饰。

## 2. 组件分类

| 类别 | 典型组件 | 主要用途 |
|---|---|---|
| 操作组件 | 按钮、图标按钮、下拉按钮、AI 按钮 | 触发操作 |
| 数据录入 | 表单、输入框、选择器、日期、开关、上传 | 收集和校验数据 |
| 数据展示 | 表格、卡片、标签、徽标、描述列表、时间轴 | 展示结构化信息 |
| 反馈组件 | Message、Notification、Alert、Modal、Drawer、Empty、Result | 反馈状态和结果 |