# 组件文档读取顺序规则
## Component Reading Order Rules

Keywords: component reading order, 02-components, semantic layer, ant class, css source

## 1. 目的

本文用于修正 AI 生成 HTML Demo 时的组件文档读取顺序，避免先读取 `02-components/` 后自行推导 HTML class，导致 `.btn`、`.data-table`、`.tag-status`、`.pagination` 等旧别名或私有 class 被错误生成。

## 2. 总原则

```text
先确定真实 class 和 CSS，再读取 02-components 补充语义和状态。
```

`02-components/` 不是 HTML Demo 的真实 class / CSS 来源，只是组件语义、状态和交互规则来源。

## 3. 正确读取顺序

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

## 4. 错误读取顺序

禁止采用以下顺序：

```text
1. 02-components/对应组件文档
2. 根据文字规范自行推导 HTML class
3. 编写 .btn / .data-table / .tag-status / .pagination 等 class
4. 再尝试补样式
```

这种顺序会导致组件样式引用不稳定。

## 5. 组件职责划分

```text
02-components = 设计语义层 / 状态规则层 / 交互要求层
component-style-library = 真实样式层 / 可运行 CSS 层
component-style-code-map.md = 语义到真实 .ant-* class 的映射层
business-component-reuse-rules.md = 防私有样式和旧别名约束层
component-style-import-rules.md = 组件 CSS 注入保障层
```

## 6. 生成 HTML Demo 时必须执行

- Button 使用 `.ant-btn` 体系，不使用 `.btn`。
- Input 使用 `.ant-input` / `.ant-input-affix-wrapper`，不使用 `.form-input`。
- Select 使用 `.ant-select` 体系，不使用 `.select`。
- Table 使用 `.ant-table-wrapper` + `.ant-table`，不使用 `.data-table`。
- Tag 使用 `.ant-tag` 体系，不使用 `.tag` / `.tag-status` / `.status-tag`。
- Pagination 使用 `.ant-pagination` 体系，不使用 `.pagination`。
- Toast 使用 `.toast-holder` / `.toast`。
- 页面业务 class 只能追加修饰，不得替代真实基础 class。
- 最终 HTML 必须注入对应 `.ant-*` CSS。

## 7. 冲突处理

如果 `02-components` 与组件样式库、组件映射或复用规则冲突：

```text
class / CSS / DOM 结构：以组件样式库和 component-style-code-map.md 为准。
组件语义 / 使用场景 / 状态要求：以 02-components 为准。
页面框架：以 06-vue-code/templates/ 母版为准。
```

## 8. 输出前检查

生成结果必须检查：

- 是否先读取了组件样式库，再读取 02 组件文档。
- 是否读取了 `02-components/component-doc-boundary.md`。
- 是否使用真实 `.ant-*` class。
- 是否没有使用 `.btn`、`.form-input`、`.data-table`、`.tag-status`、`.status-tag`、`.pagination` 等旧别名基础 class。
- 是否没有使用 `.alert-button`、`.alert-table`、`.alert-input` 等私有重造 class。
- 是否已按 `component-style-import-rules.md` 注入对应 CSS。