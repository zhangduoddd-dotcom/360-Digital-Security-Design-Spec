# 文档索引
## Document Index

Keywords: index, ai routing, backend design, html demo, vue codegen, component dom extraction, template routing

> 本文件是 AI 读取仓库时的主导航，也方便人工快速跳转查阅。

## 0. 角色与执行入口

| 文件 | 内容 |
|---|---|
| [ROLE.md](./ROLE.md) | B 端产品 UI/UX 设计师角色限定 |
| [SKILL.md](./SKILL.md) | Skill 总入口：HTML Demo 优先、首次生成硬约束、任务读取顺序 |
| [DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md) | 文档结构与职责边界：组件语义层 / DOM 抽取层 / 样式层 / 映射层关系 |
| [RULE-OWNERSHIP.md](./RULE-OWNERSHIP.md) | 规则唯一真源：重复规则归属、冲突处理和清理边界 |

任何 B 端页面生成、优化、检查、HTML Demo 或 Vue 工程代码任务，默认先读取 `ROLE.md`、`SKILL.md`、`DOCS-STRUCTURE.md` 与 `RULE-OWNERSHIP.md`，再按本文件分流。

## 1. 目录地图

| 目录 | 内容 |
|---|---|
| [01-foundation/](./01-foundation/) | 全局设计基础：原则、布局、颜色、字体、Token、投影 |
| [02-components/](./02-components/) | 组件语义规范：组件使用场景、状态要求、交互规则；不作为 HTML Demo 真实 DOM / class / CSS 来源 |
| [03-interaction/](./03-interaction/) | 交互规范：页面容器、导航、搜索区、表格区、表单录入、权限状态 |
| [04-pages/](./04-pages/) | 页面规范：总览、工作台、列表页、表单页、详情页、分步流程页、异常页、用户管理、系统设置、系统配置 |
| [06-vue-code/](./06-vue-code/) | HTML 演示与 Vue 代码生成：DOM 抽取、样式注入、组件映射、业务组件复用、旧 class 黑名单、固定框架模板 |
| [07-checklists/](./07-checklists/) | 验收清单：设计走查、AI 输出、前端实现 |
| [docs/component-style-library/](./docs/component-style-library/) | 可运行组件样式库：真实组件 DOM、`.ant-*` class、CSS、Token、组件状态 |

## 1.1 规则唯一真源

同一规则只维护一份唯一真源。新增、修改或清理规则时，先读取 [RULE-OWNERSHIP.md](./RULE-OWNERSHIP.md)，确认规则归属后再编辑对应文件。

当页面规范、组件语义规范、HTML 母版、组件样式库和验收清单发生冲突时，按 `RULE-OWNERSHIP.md` 的冲突处理执行；验收清单只负责检查结果，不反向创造新的生成规则。

## 2. 文档职责分层

生成 HTML Demo 时，按以下职责理解文档：

```text
ROLE.md / SKILL.md / INDEX.md / DOCS-STRUCTURE.md
= 入口层 / 路由层 / 职责边界层

06-vue-code/templates/*.html
= 页面框架母版层

docs/component-style-library/*.html / *.md
= 真实组件 DOM / class / CSS / Token 层

06-vue-code/component-dom-extraction-rules.md
= 组件 DOM 抽取层

06-vue-code/component-style-code-map.md
= 组件语义到真实 .ant-* class 的映射层

06-vue-code/business-component-reuse-rules.md
= 业务组件复用真实 DOM / class / CSS / Token 的规则层

06-vue-code/component-style-import-rules.md
= 组件 CSS 与 Token 注入保障层

06-vue-code/component-reading-order-rules.md
= 组件文档读取顺序规则层

06-vue-code/deprecated-class-blacklist.md
= 旧别名 class 和页面私有组件 class 黑名单

02-components/*.md
= 组件语义、状态、交互规则层

04-pages/*.md
= 页面结构和页面模式层

07-checklists/*.md
= 输出验收层
```

核心原则：

```text
02-components 不决定 HTML Demo 的真实 DOM / class / CSS。
真实组件 DOM / class / CSS / Token 以 docs/component-style-library 和 06-vue-code 抽取、映射、注入规则为准。
```

## 3. HTML Demo 标准读取顺序

生成可演示页面 / demo / 可点击预览时，必须按以下顺序读取：

```text
1. ROLE.md
2. SKILL.md
3. DOCS-STRUCTURE.md
4. RULE-OWNERSHIP.md
5. INDEX.md
6. 06-vue-code/templates/README.md
7. 06-vue-code/templates/common-single-nav.html 或 double-nav-frame.html
8. 04-pages/overview.md
9. 对应页面规范，例如 04-pages/list-page.md
10. docs/component-style-library/backend_ai_ui_component_kit_with_index.html
11. docs/component-style-library/component_style_library_index.md
12. 06-vue-code/component-dom-extraction-rules.md
13. 06-vue-code/component-style-code-map.md
14. 06-vue-code/business-component-reuse-rules.md
15. 06-vue-code/component-style-import-rules.md
16. 06-vue-code/component-reading-order-rules.md
17. 06-vue-code/deprecated-class-blacklist.md
18. 02-components/component-doc-boundary.md
19. 02-components/overview.md
20. 对应 02-components 组件语义文档
21. 07-checklists/ai-output.md
```

禁止先读取 `02-components` 后自行推导 HTML class 或组件 DOM。

## 4. 固定框架使用硬约束

生成页面时，HTML 母版是页面底座，不是参考稿。

```text
先完整复制对应 HTML 母版。
再替换业务内容和 mock 数据。
不重新推导、不重新拼装、不重写框架结构。
```

固定框架 DOM、CSS、JS、iconfont、hover、active、open、collapsed、级联浮层、响应式规则不可改动。

## 5. 组件 DOM / class / CSS 决策规则

HTML Demo 中基础组件必须来自组件样式库：

| 组件 | 正确来源 |
|---|---|
| Button | 组件样式库 Button DOM / class / CSS / Token |
| Input | 组件样式库 Input DOM / class / CSS / Token |
| Select | 组件样式库 Select DOM / class / CSS / Token |
| Table | 组件样式库 Table DOM / class / CSS / Token |
| Tag | 组件样式库 Tag DOM / class / CSS / Token |
| Pagination | 组件样式库 Pagination DOM / class / CSS / Token |
| Toast | 组件样式库 Toast DOM / class / CSS / Token |

旧别名 class 和页面私有组件 class 统一集中到：

```text
06-vue-code/deprecated-class-blacklist.md
```

最终 HTML 的 `<style>` 应按以下顺序组织：

```text
1. 框架母版 CSS
2. 组件样式库 CSS
3. 当前页面业务 CSS
```

## 6. 任务路由

| 用户任务 | 优先读取 | 辅助读取 |
|---|---|---|
| 任何 B 端页面生成 / 优化 / 检查任务 | [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)、[INDEX.md](./INDEX.md) | 对应页面规范、组件语义规范、代码生成规则、验收清单 |
| 生成任何后台页面 / HTML demo / Vue 页面 | [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md) | 对应页面规范、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)、[06-vue-code/component-dom-extraction-rules.md](./06-vue-code/component-dom-extraction-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/business-component-reuse-rules.md](./06-vue-code/business-component-reuse-rules.md)、[06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md)、[06-vue-code/component-reading-order-rules.md](./06-vue-code/component-reading-order-rules.md)、[06-vue-code/deprecated-class-blacklist.md](./06-vue-code/deprecated-class-blacklist.md) |
| 查询组件语义 / 使用场景 / 状态要求 | [02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md)、[02-components/overview.md](./02-components/overview.md)、[02-components/component-size.md](./02-components/component-size.md) | 对应组件文档，例如 button / input / select / table / tag / pagination |
| 查询组件真实 DOM / class / CSS | [docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)、[docs/component-style-library/component_style_library_index.md](./docs/component-style-library/component_style_library_index.md) | [06-vue-code/component-dom-extraction-rules.md](./06-vue-code/component-dom-extraction-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md) |
| 生成可演示页面 / demo / 可点击预览 | [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md) | [docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)、[docs/component-style-library/component_style_library_index.md](./docs/component-style-library/component_style_library_index.md)、[06-vue-code/component-dom-extraction-rules.md](./06-vue-code/component-dom-extraction-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/business-component-reuse-rules.md](./06-vue-code/business-component-reuse-rules.md)、[06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md)、[06-vue-code/component-reading-order-rules.md](./06-vue-code/component-reading-order-rules.md)、[06-vue-code/deprecated-class-blacklist.md](./06-vue-code/deprecated-class-blacklist.md)、[02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md)、对应组件文档、[07-checklists/ai-output.md](./07-checklists/ai-output.md) |
| 生成 Vue 页面代码 / 工程代码 | [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md) | 对应页面规范、[02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md)、对应组件语义文档、[07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) |
| 检查设计输出 / 前端实现 | [ROLE.md](./ROLE.md)、[DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)、[07-checklists/design-review.md](./07-checklists/design-review.md)、[07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) | 对应页面、基础、组件语义、组件样式库和代码生成规范 |

## 7. 完整文档清单

### 7.0 角色与总入口

- [ROLE.md](./ROLE.md)
- [SKILL.md](./SKILL.md)
- [INDEX.md](./INDEX.md)
- [DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)
- [RULE-OWNERSHIP.md](./RULE-OWNERSHIP.md)

### 7.1 基础规范

- [01-foundation/overview.md](./01-foundation/overview.md)
- [01-foundation/layout.md](./01-foundation/layout.md)
- [01-foundation/color.md](./01-foundation/color.md)
- [01-foundation/typography.md](./01-foundation/typography.md)
- [01-foundation/tokens.md](./01-foundation/tokens.md)
- [01-foundation/shadow.md](./01-foundation/shadow.md)

### 7.2 组件语义规范

- [02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md)
- [02-components/overview.md](./02-components/overview.md)
- [02-components/ant-design-vue.md](./02-components/ant-design-vue.md)
- [02-components/component-size.md](./02-components/component-size.md)
- [02-components/motion.md](./02-components/motion.md)
- [02-components/button.md](./02-components/button.md)
- [02-components/icon.md](./02-components/icon.md)
- [02-components/form.md](./02-components/form.md)
- [02-components/input.md](./02-components/input.md)
- [02-components/textarea.md](./02-components/textarea.md)
- [02-components/select.md](./02-components/select.md)
- [02-components/checkbox.md](./02-components/checkbox.md)
- [02-components/radio.md](./02-components/radio.md)
- [02-components/switch.md](./02-components/switch.md)
- [02-components/tabs.md](./02-components/tabs.md)
- [02-components/table.md](./02-components/table.md)
- [02-components/pagination.md](./02-components/pagination.md)
- [02-components/tag.md](./02-components/tag.md)
- [02-components/alert.md](./02-components/alert.md)
- [02-components/toast-message.md](./02-components/toast-message.md)
- [02-components/feedback.md](./02-components/feedback.md)

### 7.3 交互规范

- [03-interaction/platform-frame.md](./03-interaction/platform-frame.md)
- [03-interaction/page-container.md](./03-interaction/page-container.md)
- [03-interaction/navigation.md](./03-interaction/navigation.md)
- [03-interaction/list-search.md](./03-interaction/list-search.md)
- [03-interaction/list-table.md](./03-interaction/list-table.md)
- [03-interaction/form-entry.md](./03-interaction/form-entry.md)
- [03-interaction/permission-state.md](./03-interaction/permission-state.md)

### 7.4 页面规范

- [04-pages/overview.md](./04-pages/overview.md)
- [04-pages/dashboard.md](./04-pages/dashboard.md)
- [04-pages/list-page.md](./04-pages/list-page.md)
- [04-pages/form-page.md](./04-pages/form-page.md)
- [04-pages/detail-page.md](./04-pages/detail-page.md)
- [04-pages/step-flow-page.md](./04-pages/step-flow-page.md)
- [04-pages/exception-page.md](./04-pages/exception-page.md)
- [04-pages/user-management.md](./04-pages/user-management.md)
- [04-pages/system-settings.md](./04-pages/system-settings.md)
- [04-pages/system-config.md](./04-pages/system-config.md)

### 7.5 HTML 演示与 Vue 代码生成

- [06-vue-code/skill.md](./06-vue-code/skill.md)
- [06-vue-code/reference.md](./06-vue-code/reference.md)
- [06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)
- [06-vue-code/component-dom-extraction-rules.md](./06-vue-code/component-dom-extraction-rules.md)
- [06-vue-code/component-reading-order-rules.md](./06-vue-code/component-reading-order-rules.md)
- [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)
- [06-vue-code/business-component-reuse-rules.md](./06-vue-code/business-component-reuse-rules.md)
- [06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md)
- [06-vue-code/deprecated-class-blacklist.md](./06-vue-code/deprecated-class-blacklist.md)
- [06-vue-code/preview-html.md](./06-vue-code/preview-html.md)
- [06-vue-code/vue-engineering.md](./06-vue-code/vue-engineering.md)
- [06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md)
- [06-vue-code/templates/README.md](./06-vue-code/templates/README.md)
- [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)
- [06-vue-code/templates/double-nav-frame.html](./06-vue-code/templates/double-nav-frame.html)

### 7.6 组件样式库

- [docs/component-style-library/component_style_library_index.md](./docs/component-style-library/component_style_library_index.md)
- [docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)

### 7.7 验收清单

- [07-checklists/design-review.md](./07-checklists/design-review.md)
- [07-checklists/ai-output.md](./07-checklists/ai-output.md)
- [07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md)

## 8. AI 读取原则

- 不要一次性读取所有文件。
- 任何 B 端页面生成、优化、检查、HTML Demo 或 Vue 工程代码任务，默认先读取 [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)。
- 修改、合并或删除规则前，先读取 [RULE-OWNERSHIP.md](./RULE-OWNERSHIP.md)，避免同一规则在多个文件中重复维护。
- 基于本套 GitHub / 本仓库规范生成任何后台页面、HTML demo、Vue 页面、页面截图或高保真界面时，默认必须优先读取并完整套用 [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)。
- 生成可演示页面、demo、可点击预览时，必须读取组件样式库、组件 DOM 抽取、组件映射、业务组件复用、组件 CSS 注入、读取顺序规则和旧 class 黑名单，不能只读取 02 组件文档。
- 涉及组件语义、使用场景、状态要求时，读取 [02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md) 与对应 02 组件文档。
- 涉及组件真实 DOM / class / CSS / HTML Demo 实现时，读取 [docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)、[06-vue-code/component-dom-extraction-rules.md](./06-vue-code/component-dom-extraction-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/business-component-reuse-rules.md](./06-vue-code/business-component-reuse-rules.md)、[06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md)、[06-vue-code/component-reading-order-rules.md](./06-vue-code/component-reading-order-rules.md)、[06-vue-code/deprecated-class-blacklist.md](./06-vue-code/deprecated-class-blacklist.md)。
