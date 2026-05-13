# Ant Design Vue 组件规范
## Ant Design Vue Component Rules

Keywords: ant design vue, component mapping, vue codegen, backend components

本文用于约束 Vue 页面代码生成时的组件选择。默认使用 Ant Design Vue 作为后台页面组件基础。

## 1. 基础原则

- Vue 代码生成时优先使用 Ant Design Vue 组件。
- 表格、表单、选择器、弹窗、抽屉等成熟控件应使用组件库能力。
- 只做必要的局部样式适配，不做大范围全局覆盖。
- HTML 预览文件不强制真实引入 Ant Design Vue，但结构和视觉应尽量对齐正式 Vue 版本。

## 2. 推荐组件

按钮使用 `a-button`，表格使用 `a-table`，表单使用 `a-form` 和 `a-form-item`，输入使用 `a-input`、`a-textarea`、`a-input-number`，选择使用 `a-select`、`a-tree-select`、`a-cascader`，弹窗使用 `a-modal`，抽屉使用 `a-drawer`。

## 3. 样式边界

允许对页面容器、卡片、间距、背景、表格列宽、操作列、状态标签、表单布局和按钮区对齐做局部样式适配。不建议大量覆盖组件库内部 class。