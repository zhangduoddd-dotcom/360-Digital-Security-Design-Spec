# 02 组件文档使用边界
## Component Docs Boundary

Keywords: 02-components, semantic rules, component class boundary, ant class, css source

## 1. 定位

`02-components/` 目录保留，但职责降级为：

```text
设计语义层 / 状态规则层 / 交互要求层
```

本目录不再作为 HTML Demo 的真实 class / CSS 来源。

## 2. 保留价值

`02-components/` 仍用于说明：

- 组件什么时候使用。
- 组件有哪些类型。
- 组件必须覆盖哪些状态。
- 组件和业务场景如何匹配。
- 危险操作、异步反馈、空状态、错误状态如何处理。
- Vue 工程中应使用哪个 Ant Design Vue 组件。

例如：

- `button.md` 说明主按钮、次按钮、危险按钮、AI 按钮的使用边界。
- `table.md` 说明列类型、批量操作、空状态、行操作和分页衔接。
- `form.md` 说明表单分组、校验、字段录入和提交反馈。
- `tag.md` 说明状态标签不能只依赖颜色，必须保留文字。

## 3. 不再承担的职责

`02-components/` 不再用于决定：

- HTML Demo 里的真实 class 名称。
- 基础组件 CSS 写法。
- 组件 DOM 的最终可运行结构。
- `.ant-*` 样式是否存在。
- 组件 CSS 是否已注入。

以下旧别名不能再由 `02-components/` 推导或输出：

```text
.btn
.btn-primary
.form-input
.search-input
.select
.select-panel
.select-option
data-table
.tag
.tag-status
.status-tag
.pagination
alert-button
alert-table
alert-input
```

## 4. 真实实现来源

HTML Demo 中组件真实 class 与 CSS 来源必须是：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
docs/component-style-library/component_style_library_index.md
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
```

真实基础 class 示例：

```text
.ant-btn
.ant-input
.ant-input-affix-wrapper
.ant-select
.ant-select-selector
.ant-table-wrapper
.ant-table
.ant-table-compact
.ant-tag
.ant-tag-success
.ant-tag-warning
.ant-tag-error
.ant-pagination
.toast-holder
.toast
```

## 5. 读取顺序

生成 HTML Demo 或检查组件样式时，必须按以下顺序读取：

```text
1. docs/component-style-library/backend_ai_ui_component_kit_with_index.html
2. docs/component-style-library/component_style_library_index.md
3. 06-vue-code/component-style-code-map.md
4. 06-vue-code/business-component-reuse-rules.md
5. 06-vue-code/component-style-import-rules.md
6. 02-components/component-doc-boundary.md
7. 02-components/overview.md
8. 02-components/对应组件文档
```

也就是说，先确定真实 class 和 CSS，再读取 `02-components` 补充语义和状态。

## 6. 冲突处理

如果 `02-components/` 中任何文档与组件样式库出现冲突：

```text
涉及 class / CSS / DOM 结构：以组件样式库和 component-style-code-map.md 为准。
涉及组件语义 / 使用场景 / 状态要求：以 02-components 为准。
涉及页面框架：以 06-vue-code/templates/ 母版为准。
```

## 7. HTML Demo 生成规则

AI 生成 HTML Demo 时：

1. 不能根据 `02-components` 自行创造基础组件 class。
2. 不能把 `02-components` 中的组件名称直接转成 `.xxx-button`、`.xxx-table`、`.xxx-tag`。
3. 必须使用真实 `.ant-*` class。
4. 必须按 `component-style-import-rules.md` 注入对应 CSS。
5. 页面私有 class 只能作为业务修饰追加。

正确示例：

```html
<button class="ant-btn ant-btn-primary threat-action-btn">批量处置</button>
<div class="ant-table-wrapper threat-alert-table">
  <table class="ant-table ant-table-compact"></table>
</div>
<span class="ant-tag ant-tag-error risk-high">高危</span>
<div class="ant-pagination table-pagination"></div>
```

错误示例：

```html
<button class="alert-button">批量处置</button>
<table class="alert-table"></table>
<span class="status-tag danger">高危</span>
<div class="pagination"></div>
```

## 8. 02 组件文档后续维护原则

后续维护 `02-components/` 时，只保留以下内容：

- 使用场景。
- 不适用场景。
- 类型和语义。
- 状态要求。
- 交互规则。
- Vue 组件映射。
- HTML Demo 真实 class 以组件样式库为准的提醒。

需要删除或避免新增：

- 直接 class 命名建议。
- 与 `.ant-*` 体系冲突的旧别名 class。
- 可运行 CSS 片段。
- 可能诱导 AI 重造组件样式的私有 class 示例。