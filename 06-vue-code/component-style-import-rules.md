# HTML Demo 组件 DOM 与样式注入规则
## Component DOM and Style Import Rules

Keywords: html demo, component dom, component css, style injection, token, ant class

本文用于约束 HTML Demo 中组件 DOM、CSS 与 Token 的成对抽取和注入。

## 1. 总原则

```text
框架样式来自 HTML 母版。
业务组件 DOM、CSS、Token 来自组件样式库。
页面业务 CSS 只做布局和局部修饰。
```

生成最终 HTML Demo 时必须同时满足：

1. 完整复制框架母版。
2. 从组件样式库抽取业务所需组件 DOM。
3. 从组件样式库抽取业务所需组件 CSS。
4. 同步抽取组件 CSS 依赖的 Token。
5. 页面业务 CSS 放在最后，只做布局、列宽、间距和局部业务修饰。
6. 不得只写 `.ant-*` class 而不抽取对应 DOM / CSS / Token。

组件样式库来源：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

## 2. 组件 CSS 与 Token 来源

读取组件样式库时，按实际使用组件抽取对应 CSS 和依赖 Token，包括但不限于：

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

如果框架母版已经定义同名 Token，应复用母版 Token；只有母版缺失某个组件 Token 时，才允许补充。

## 3. 注入位置

最终 HTML 的 `<style>` 必须按以下顺序组织：

```text
1. 框架母版 CSS
2. 组件样式库 CSS
3. 页面业务 CSS
```

不得把组件 CSS 写在页面业务 CSS 后面，避免业务样式覆盖组件基础状态。

## 4. DOM 与 CSS 成对要求

| 最终 HTML 使用 | 必须同时满足 |
|---|---|
| Button | 抽取组件库 Button DOM、CSS、Token |
| Input / Search | 抽取组件库 Input DOM、CSS、Token |
| Select | 抽取组件库 Select DOM、CSS、Token |
| Table | 抽取组件库 Table DOM、CSS、Token |
| Tag | 抽取组件库 Tag DOM、CSS、Token |
| Pagination | 抽取组件库 Pagination DOM、CSS、Token |
| Toast / Message | 抽取组件库 Toast DOM、CSS、Token |

只出现 class、只出现 CSS、或只手写近似 DOM，都不算通过。

## 5. 生成流程

生成 HTML Demo 时必须按以下顺序：

```text
1. 读取并完整复制 HTML 母版。
2. 读取组件样式库 HTML。
3. 确认业务页面需要哪些基础组件。
4. 从组件样式库抽取对应组件 DOM。
5. 从组件样式库抽取对应组件 CSS 与依赖 Token。
6. 将组件 CSS 注入到母版 CSS 之后。
7. 替换业务文案、字段、mock 数据和状态文案。
8. 追加业务修饰 class。
9. 只在最后追加页面业务 CSS。
10. 输出前扫描 DOM、CSS、Token 是否成对出现。
```

## 6. 输出前必须检查

- [ ] 最终 HTML 是否包含框架母版原始 CSS。
- [ ] 最终 HTML 是否包含所用组件的真实 DOM。
- [ ] 最终 HTML 是否包含所用组件的 CSS。
- [ ] 最终 HTML 是否包含所用组件 CSS 依赖的 Token。
- [ ] 组件 CSS 是否放在框架母版 CSS 之后、页面业务 CSS 之前。
- [ ] 页面业务 CSS 是否只做布局和局部修饰。
- [ ] 是否执行 `06-vue-code/component-dom-extraction-rules.md`。
- [ ] 是否执行 `06-vue-code/deprecated-class-blacklist.md`。
- [ ] 是否没有用页面业务 CSS 重新实现基础组件。

只要 DOM、CSS、Token 未成对抽取，必须先修正后交付。