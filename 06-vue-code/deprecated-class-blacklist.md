# 旧组件 Class 黑名单
## Deprecated Component Class Blacklist

Keywords: deprecated class, blacklist, old alias class, private component class, ant class

本文集中收敛所有不允许在 HTML Demo 业务组件中使用的旧别名 class 和页面私有组件 class，避免这些旧 class 分散在多个规范文件中导致 AI 误读。

## 1. 使用原则

HTML Demo 中基础组件必须使用组件样式库真实存在的 `.ant-*` class，并按 `06-vue-code/component-style-import-rules.md` 注入对应 CSS。

以下 class 只能作为黑名单项、反例或迁移检查目标出现，不能作为生成结果中的基础组件 class。

## 2. 禁止使用的旧别名 class

```text
.btn
.btn-primary
.btn-secondary
.btn-danger
.form-input
.search-input
.form-select
.form-textarea
.select
.select-panel
.select-option
.checkbox
.radio
.radio-button
.tabs
.tab-item
data-table
.tag
.tag-status
.status-tag
.pagination
.alert
.drawer
.modal
.tooltip
```

说明：这些 class 可能来自早期草稿或抽象组件命名，但当前真实组件样式库已经统一为 `.ant-*` 体系，不应再作为 HTML Demo 的基础组件 class。

## 3. 禁止使用的页面私有组件 class

```text
.alert-button
.alert-table
.alert-input
.alert-select
.alert-tag
.alert-status-tag
.alert-pagination
.alert-modal
.alert-detail-drawer
.alert-toast
.threat-btn
.threat-table
.threat-input
.risk-table
.risk-input
.risk-tag
.xxx-btn
.xxx-table
.xxx-input
.xxx-select
.xxx-tag
.xxx-pagination
```

说明：页面业务 class 只能作为真实基础 class 的修饰类追加，不能替代基础组件 class。

## 4. 正确替代关系

| 组件 | 禁止使用 | 正确基础 class |
|---|---|---|
| Button | 旧别名按钮或页面私有按钮 class | `.ant-btn`、`.ant-btn-primary`、`.ant-btn-text`、`.ant-btn-link`、`.ant-btn-ai` |
| Input | 旧别名输入框或页面私有输入框 class | `.ant-input`、`.ant-input-affix-wrapper` |
| Select | 旧别名选择器或页面私有选择器 class | `.ant-select`、`.ant-select-selector`、`.ant-select-dropdown`、`.ant-select-item` |
| Table | 旧别名表格或页面私有表格 class | `.ant-table-wrapper`、`.ant-table`、`.ant-table-compact` |
| Tag | 旧别名标签或页面私有标签 class | `.ant-tag`、`.ant-tag-success`、`.ant-tag-warning`、`.ant-tag-error` |
| Pagination | 旧别名分页或页面私有分页 class | `.ant-pagination`、`.ant-pagination-item`、`.ant-pagination-options` |
| Toast | 页面私有 Toast class | `.toast-holder`、`.toast` |

## 5. 正确写法

```html
<button class="ant-btn ant-btn-primary threat-action-btn">批量处置</button>
<div class="ant-input-affix-wrapper threat-search-input">
  <input class="ant-input" />
</div>
<div class="ant-table-wrapper threat-alert-table">
  <table class="ant-table ant-table-compact"></table>
</div>
<span class="ant-tag ant-tag-error risk-high">高危</span>
<div class="ant-pagination table-pagination"></div>
```

## 6. 输出前检查

生成或检查 HTML Demo 时：

1. 如果最终 HTML 中出现本文件列出的黑名单 class，必须先移除或替换为真实 `.ant-*` 基础 class。
2. 如果这些 class 只出现在规范文档的黑名单说明中，可以保留。
3. 主规范文件不应重复列出完整黑名单，应引用本文，避免旧 class 在上下文中过度曝光。
4. 页面业务 class 只能作为修饰类追加，例如 `.threat-action-btn`、`.threat-alert-table`，但必须同时保留真实基础 class。