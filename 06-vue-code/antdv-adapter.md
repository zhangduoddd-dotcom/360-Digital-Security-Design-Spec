# Ant Design Vue 适配规范
## Ant Design Vue Adapter Rules

Keywords: ant design vue, adapter, style override, vue codegen

本文定义 Vue 代码生成时如何使用和适配 Ant Design Vue 组件。

## 1. 使用原则

Ant Design Vue 是默认组件基础。优先使用组件库能力，再做局部样式适配。不要重写组件库已有的核心交互。

## 2. 表格适配

表头高度稳定，行高稳定，操作列固定在右侧，状态标签可读，空值统一展示为 `-`，列多时支持横向滚动，分页位置稳定。

## 3. 表单适配

label 对齐清晰，必填项有标识，校验错误有文案，placeholder 有统一规则，提交按钮和取消按钮层级明确，长表单应分组或分步。

## 4. HTML 预览关系

HTML 预览文件不强制真实引入 Ant Design Vue，但视觉和结构应尽量模拟正式 Vue 版本。