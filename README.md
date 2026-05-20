# 后台设计规范
## Backend Design Standards

Keywords: backend design, design skill, ai readable, html demo, vue codegen, component dom extraction

这是面向 B 端后台产品的一份当前有效设计 Skill，用于帮助设计师、产品、AI Agent 和前端工程师生成、检查和统一后台 UI、HTML Demo 与 Vue 页面代码。

## 1. 优先阅读

```text
SKILL.md
DOCS-STRUCTURE.md
INDEX.md
```

## 2. 目录结构

```text
Backend-Design-Standards/
├── README.md
├── SKILL.md
├── INDEX.md
├── DOCS-STRUCTURE.md
├── CHANGELOG.md
├── 01-foundation/
├── 02-components/
├── 03-interaction/
├── 04-pages/
├── 06-vue-code/
├── 07-checklists/
└── docs/component-style-library/
```

## 3. 核心原则

- 线上文档即最新最准版本，不保留历史规范目录。
- 文档使用英文短路径、中文正文、中英标题和英文 Keywords。
- AI 按任务读取少量文档，但首次生成必须先读取固定框架、页面类型、组件样式库、组件 DOM 抽取、组件样式注入、组件映射和验收清单。
- demo / 预览 / 可点击页面默认只输出 HTML；明确要求 Vue / 前端代码 / 工程接入时输出 Vue 代码，并可同时提供 HTML 预览。
- HTML Demo 必须完整继承框架母版，业务组件 DOM / class / CSS / Token 必须从组件样式库成对抽取。
- 列表页不得只实现“搜索区 + 表格 + 分页”的粗结构；读取搜索区、表格区交互文档后，必须按 `06-vue-code/list-page-interaction-enforcement.md` 和 `07-checklists/frontend-acceptance.md` 逐项落地验收。
- `02-components/` 只作为组件语义、状态和交互规则来源，不作为 HTML Demo 的真实 DOM / class / CSS 来源。

## 4. 常用读取路径

生成可演示 HTML Demo：

```text
SKILL.md
→ DOCS-STRUCTURE.md
→ INDEX.md
→ 06-vue-code/templates/common-single-nav.html
→ 04-pages/overview.md
→ 对应页面规范
→ docs/component-style-library/backend_ai_ui_component_kit_with_index.html
→ docs/component-style-library/component_style_library_index.md
→ 06-vue-code/component-dom-extraction-rules.md
→ 06-vue-code/component-style-code-map.md
→ 06-vue-code/business-component-reuse-rules.md
→ 06-vue-code/component-style-import-rules.md
→ 06-vue-code/component-reading-order-rules.md
→ 06-vue-code/deprecated-class-blacklist.md
→ 02-components/component-doc-boundary.md
→ 07-checklists/ai-output.md
```

生成列表页 HTML Demo / Vue 页面时额外读取：

```text
03-interaction/list-search.md
→ 03-interaction/list-table.md
→ 06-vue-code/list-page-interaction-enforcement.md
→ 07-checklists/frontend-acceptance.md
```

生成 Vue 页面代码：

```text
SKILL.md
→ DOCS-STRUCTURE.md
→ INDEX.md
→ 04-pages/overview.md
→ 对应页面规范
→ 06-vue-code/codegen-rules.md
→ 06-vue-code/component-style-code-map.md
→ 06-vue-code/antdv-adapter.md
→ 07-checklists/frontend-acceptance.md
```

## License

MIT License.