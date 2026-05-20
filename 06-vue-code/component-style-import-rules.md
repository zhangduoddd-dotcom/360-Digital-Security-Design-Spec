# HTML Demo 组件样式注入规则
## Component Style Import Rules

Keywords: html demo, component css, style injection, ant class, component library

## 1. 问题背景

`06-vue-code/templates/common-single-nav.html` 和 `06-vue-code/templates/double-nav-frame.html` 是页面框架母版，主要负责顶部导航、左侧菜单、页头、内容区、iconfont、框架 Token 和框架交互。

`docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 是组件样式库，里面包含 `.ant-btn`、`.ant-input`、`.ant-select`、`.ant-table`、`.ant-tag`、`.ant-pagination`、`.toast` 等真实可运行组件样式。

因此生成 HTML Demo 时，不能只复制框架母版并在业务区写 `.ant-btn`、`.ant-table`。如果最终 HTML 没有同时带上组件样式库中的组件 CSS，这些 class 不会生效。

---

## 2. 总原则

```text
框架样式来自 HTML 母版，业务组件样式来自组件样式库。
```

生成最终 HTML Demo 时必须同时满足：

1. 完整复制框架母版。
2. 保留框架母版 DOM、CSS、JS、iconfont 和响应式交互。
3. 业务组件使用组件样式库真实 `.ant-*` class。
4. 最终 HTML 中必须包含这些 `.ant-*` class 对应的 CSS 定义。
5. 不得只写 class 而不注入组件 CSS。

---

## 3. 必须注入的组件 CSS 来源

组件 CSS 来源文件：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

读取时必须提取其中与以下组件相关的 CSS：

```text
.ant-btn
.loading-spinner
.ant-tabs
.ant-input
.ant-input-affix-wrapper
.ant-textarea
.ant-select
.ant-checkbox
.ant-radio
.ant-table-wrapper
.ant-table
.ant-table-toolbar
.ant-table-cell-actions
.ant-table-empty
.ant-table-loading
.ant-table-error
.ant-tag
.tooltip-anchor
.ant-tooltip
.ant-picker
.ant-pagination
.toast-holder
.toast
```

同时必须保留这些组件 CSS 依赖的 Token：

```text
--primary
--primary-hover
--primary-active
--primary-bg
--primary-bg-soft
--gray-2
--gray-3
--gray-4
--border
--border-strong
--text-title
--text-body
--text-secondary
--text-tertiary
--text-disabled
--success
--success-bg
--success-border
--info
--info-bg
--info-border
--warning
--warning-bg
--warning-border
--error
--error-bg
--error-border
--shadow-popover
--motion-fast
--motion-base
--color-ai-default
--color-ai-hover
--color-ai-active
```

如果框架母版中已经定义了同名 Token，不得重复定义冲突值；应复用母版 Token。只有母版缺失某个组件 Token 时，才允许补充该 Token。

---

## 4. 注入位置

在生成的最终 HTML 中，组件 CSS 必须放在：

```text
框架母版 CSS 之后
页面业务私有 CSS 之前
```

推荐结构：

```html
<style>
  /* 1. 框架母版原始 CSS：完整保留，不改写 */

  /* 2. 组件样式库 CSS：从 backend_ai_ui_component_kit_with_index.html 提取 */

  /* 3. 当前页面业务样式：只写布局、列宽、局部间距和业务修饰 */
</style>
```

不得把组件 CSS 写在业务样式之后，避免业务样式无意覆盖组件基础状态。

---

## 5. 不允许的实现

不允许：

```html
<button class="ant-btn ant-btn-primary">提交</button>
```

但最终 HTML 中没有 `.ant-btn`、`.ant-btn-primary` 的 CSS 定义。

不允许：

```css
.alert-button { ... }
.alert-table { ... }
```

用私有 class 替代组件样式库。

不允许：

```css
.btn { ... }
.data-table { ... }
```

用旧别名 class 重新造组件。

不允许为了“代码简洁”只复制组件样式库的一小段静态样式，而遗漏 hover、active、focus、disabled、loading、empty、error 等状态。

---

## 6. 允许的实现

允许：

```html
<button class="ant-btn ant-btn-primary threat-action-btn">处置</button>
```

并在最终 HTML 中包含组件样式库中的：

```css
.ant-btn { ... }
.ant-btn-primary { ... }
.ant-btn-primary:hover:not(:disabled) { ... }
.ant-btn:disabled { ... }
```

允许：

```html
<div class="ant-table-wrapper threat-alert-table">
  <table class="ant-table ant-table-compact">...</table>
</div>
```

并在最终 HTML 中包含组件样式库中的：

```css
.ant-table-wrapper { ... }
.ant-table { ... }
.ant-table-compact th,
.ant-table-compact td { ... }
.ant-table tbody tr:hover td { ... }
.ant-table-empty,
.ant-table-loading,
.ant-table-error { ... }
```

允许页面业务样式只做修饰：

```css
.threat-alert-page .threat-alert-table {
  min-width: 960px;
}

.threat-alert-page .risk-high {
  font-weight: 500;
}
```

---

## 7. 生成流程

生成 HTML Demo 时必须按以下顺序：

```text
1. 读取并完整复制 HTML 母版。
2. 读取组件样式库 HTML。
3. 确认业务页面需要哪些组件。
4. 从组件样式库中提取对应组件 CSS 与依赖 Token。
5. 将组件 CSS 注入到母版 CSS 之后。
6. 业务区 DOM 使用真实 .ant-* class。
7. 只在最后追加当前页面业务样式。
8. 输出前扫描最终 HTML，确认所有已使用的 .ant-* class 都有对应 CSS。
```

---

## 8. 输出前必须检查

- [ ] 最终 HTML 是否包含框架母版原始 CSS。
- [ ] 最终 HTML 是否包含所用组件的 `.ant-*` CSS 定义。
- [ ] `.ant-btn`、`.ant-input`、`.ant-select`、`.ant-table`、`.ant-tag`、`.ant-pagination` 等已用 class 是否都有样式来源。
- [ ] 组件 CSS 是否放在框架 CSS 之后、业务 CSS 之前。
- [ ] 是否遗漏 hover / active / focus / disabled / loading / empty / error 状态。
- [ ] 是否错误使用 `.btn`、`.form-input`、`.data-table`、`.tag-status`、`.pagination` 等旧别名 class。
- [ ] 是否出现 `.alert-button`、`.alert-table`、`.alert-input` 等私有重造组件样式。
- [ ] 当前页面业务 CSS 是否只做布局和局部修饰，没有重写基础组件。

只要最终 HTML 中使用了 `.ant-*` class 但没有对应 CSS 定义，就必须视为未通过验收。