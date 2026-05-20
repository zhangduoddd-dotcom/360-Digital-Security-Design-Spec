# 组件文档读取顺序规则
## Component Reading Order Rules

Keywords: component reading order, component dom extraction, html demo, semantic layer

## 1. 目的

本文用于统一 HTML Demo 生成时的组件文档读取顺序，确保先确认真实组件实现，再读取组件语义文档。

## 2. 总原则

```text
先确定真实组件 DOM / class / CSS / Token，再读取 02-components 补充语义和状态。
```

`02-components/` 只作为组件语义、状态和交互规则来源，不作为 HTML Demo 的真实 DOM / class / CSS 来源。

## 3. 正确读取顺序

生成 HTML Demo 或检查组件实现时，必须按以下顺序读取：

```text
1. docs/component-style-library/backend_ai_ui_component_kit_with_index.html
2. docs/component-style-library/component_style_library_index.md
3. 06-vue-code/component-dom-extraction-rules.md
4. 06-vue-code/component-style-code-map.md
5. 06-vue-code/business-component-reuse-rules.md
6. 06-vue-code/component-style-import-rules.md
7. 06-vue-code/deprecated-class-blacklist.md
8. 02-components/component-doc-boundary.md
9. 02-components/overview.md
10. 02-components/对应组件文档
```

## 4. 组件职责划分

```text
02-components
= 设计语义层 / 状态规则层 / 交互要求层

component-style-library
= 真实组件 DOM / class / CSS / Token 层

component-dom-extraction-rules.md
= DOM 抽取约束层

component-style-code-map.md
= 语义到真实组件实现的映射层

business-component-reuse-rules.md
= 业务组件复用真实 DOM / class / CSS / Token 的规则层

component-style-import-rules.md
= CSS / Token 注入保障层

deprecated-class-blacklist.md
= 旧别名和页面私有组件 class 清单
```

## 5. 生成 HTML Demo 时必须执行

- Button、Input、Select、Table、Tag、Pagination、Toast 等基础组件 DOM 来自组件样式库。
- 所用组件 CSS 与 Token 来自组件样式库或复用母版同名 Token。
- 页面业务 class 只能追加修饰。
- 最终 HTML 必须通过旧 class 清单检查。
- 最终 HTML 必须通过 DOM / CSS / Token 成对抽取检查。

## 6. 冲突处理

```text
页面框架：以 06-vue-code/templates/ 母版为准。
组件 DOM / class / CSS / Token：以组件样式库和 06-vue-code 抽取、映射、注入规则为准。
组件语义 / 使用场景 / 状态要求：以 02-components 为准。
```

## 7. 输出前检查

- 是否先读取组件样式库，再读取 02 组件文档。
- 是否读取 `component-dom-extraction-rules.md`。
- 是否读取 `component-style-import-rules.md`。
- 是否读取 `deprecated-class-blacklist.md`。
- 是否读取 `02-components/component-doc-boundary.md`。
- 业务组件 DOM 是否来自组件样式库。
- 业务组件 CSS 与 Token 是否来自组件样式库或复用母版同名 Token。
- 是否通过 `07-checklists/ai-output.md`。