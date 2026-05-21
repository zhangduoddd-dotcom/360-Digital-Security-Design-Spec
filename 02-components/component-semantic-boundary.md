# 组件语义边界
## Component Semantic Boundary

Keywords: 02-components, component semantics, state rules, html demo, component boundary

本文是 `02-components/` 的唯一语义边界文件。它只回答：组件在业务页面中应该何时使用、表达什么语义、覆盖哪些状态、触发哪些交互反馈。

它不回答组件真实 DOM、class、CSS、Token 从哪里来。HTML Demo 的运行时实现规则统一读取：

```text
06-vue-code/component-runtime-contract.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/snippets/
```

## 1. 02-components 负责什么

`02-components/` 用于说明：

- 组件适用场景和不适用场景。
- 组件类型、层级和业务语义。
- 默认、hover、active、disabled、loading、empty、error、success 等状态要求。
- 危险操作、异步反馈、空状态、错误状态的处理方式。
- 组件与页面交互规则的衔接。

示例：

- `button.md` 说明主按钮、次按钮、危险按钮、AI 按钮的使用边界。
- `table.md` 说明列类型、批量操作、空状态、行操作和分页衔接。
- `form.md` 说明表单分组、校验、字段录入和提交反馈。
- `tag.md` 说明状态标签不能只依赖颜色，必须保留文字。

## 2. 02-components 不负责什么

`02-components/` 不得作为以下内容的来源：

- HTML Demo 里的真实 class 名称。
- 基础组件 CSS 写法。
- 组件 DOM 的最终可运行结构。
- `.ant-*` 样式是否存在。
- 组件 CSS 是否已注入。
- 组件 manifest、snippet 文件、组件 CSS / Token 来源。
- Vue、React、Tailwind 或前端工程实现方式。

如果组件语义文档中出现可运行 DOM / CSS / class / Vue / Ant Design Vue / a-* 组件示例，只能视为历史说明，不得优先于 `component_snippet_manifest.json`、`snippets/*.html` 和 `component-runtime-contract.md`。

## 3. AI 读取策略

生成 HTML Demo 时：

1. 先按 `INDEX.md` 读取页面 profile。
2. 用 `component_snippet_manifest.json` 定位稳定组件。
3. 从 `snippets/*.html` 复制稳定组件 DOM。
4. 用 `component-runtime-contract.md` 和组件样式库校验 CSS / Token。
5. 只有在需要判断组件语义、状态覆盖或交互反馈时，才读取对应 `02-components/*.md`。
6. 读取 `02-components/*.md` 后，只提取语义、状态和行为要求，不提取 DOM / CSS / class / 工程组件写法。

这样可以减少 AI 运行时读取内容，同时避免组件实现从语义文档里发散。

## 4. 冲突处理

当文档发生冲突时：

```text
涉及组件定位：以 component_snippet_manifest.json 为准。
涉及稳定组件 DOM：以 snippets/*.html 为准。
涉及组件 CSS / Token：以 backend_ai_ui_component_kit_with_index.html 为准。
涉及运行时抽取和注入：以 component-runtime-contract.md 为准。
涉及组件语义 / 使用场景 / 状态要求：以 02-components/*.md 为准。
涉及页面结构：以 04-pages/*.md 为准。
涉及交互流程：以 03-interaction/*.md 为准。
```

## 5. 当前组件实现分层

当前组件实现已分为三层：

```text
component_snippet_manifest.json
= 组件定位入口，声明组件 key、snippetFile、requiredClasses、cssScopes、tokens、states。

snippets/*.html
= 稳定组件 DOM 复制入口。

backend_ai_ui_component_kit_with_index.html
= 组件 CSS、Token、视觉状态和完整样式参考来源。
```

`02-components/` 只负责语义、状态和行为说明，不改造成组件源码目录，也不作为工程组件调用指南。