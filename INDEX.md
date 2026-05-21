# 文档索引
## Document Index

本文是本仓库唯一目录导读和 AI 最小读取路径索引。01～08 目录内不再维护 overview、reference、README 或子级导读文件。

本仓库当前只服务：

```text
高保真可点击 HTML Demo 生成与验收
```

不维护 Vue / React / Tailwind / 前端工程代码生成规范。

## 1. 最小读取原则

- 不要一次性读取全仓库。
- 先识别页面类型，再读取对应 HTML Demo profile。
- 页面结构、交互、组件运行时、验收分别读取对应唯一真源。
- 组件真实 DOM / class / CSS / Token 只从组件样式库、组件 snippet manifest 和 `06-vue-code/component-runtime-contract.md` 获取。
- 母版可替换区域只按 `06-vue-code/template-boundary-contract.md` 判断。
- `02-components/` 只用于组件语义、状态和行为判断；不作为 HTML DOM / class / CSS 来源。
- 生成页面前必须形成当前页面执行契约；执行契约缺失时不得直接进入 HTML / CSS / JS 输出。

## 2. 公共运行时读取链路

所有 HTML Demo profile 都必须包含以下公共运行时链路：

```text
06-vue-code/preview-html.md
06-vue-code/template-boundary-contract.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
07-checklists/html-demo-acceptance.md
```

如果需要判断组件语义、状态和行为，再读取：

```text
02-components/component-semantic-boundary.md
02-components/对应组件文档
```

只有排查旧 class 或私有 class 污染时，额外读取：

```text
06-vue-code/deprecated-class-blacklist.md
```

## 3. HTML Demo Profile

### 3.1 html-demo-list-page

用于生成列表页 HTML Demo / 高保真可点击预览。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
06-vue-code/template-boundary-contract.md
04-pages/list-page.md
03-interaction/list-search.md
03-interaction/list-table.md
06-vue-code/preview-html.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
02-components/table.md
02-components/input.md
02-components/select.md
02-components/checkbox.md
02-components/tag.md
02-components/pagination.md
02-components/button.md
02-components/feedback.md
02-components/toast-message.md
07-checklists/html-demo-acceptance.md
```

列表页必须根据当前页面组件清单动态补充读取对应组件语义文档；搜索、筛选、分页、更多菜单、Tooltip、弹窗确认、空状态、loading、Toast 等不得因 profile 未列全而跳过 manifest/snippet 映射。

### 3.2 html-demo-form-page

用于生成表单页 HTML Demo / 高保真可点击预览。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
06-vue-code/template-boundary-contract.md
04-pages/form-page.md
03-interaction/form-entry.md
06-vue-code/preview-html.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
02-components/form.md
02-components/input.md
02-components/select.md
02-components/button.md
02-components/toast-message.md
07-checklists/html-demo-acceptance.md
```

### 3.3 html-demo-detail-page

用于生成详情页 / 详情抽屉 HTML Demo。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
06-vue-code/template-boundary-contract.md
04-pages/detail-page.md
03-interaction/page-container.md
06-vue-code/preview-html.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
02-components/table.md
02-components/tag.md
02-components/tabs.md
02-components/button.md
02-components/toast-message.md
07-checklists/html-demo-acceptance.md
```

### 3.4 html-demo-dashboard-page

用于生成工作台 / Dashboard HTML Demo。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
06-vue-code/template-boundary-contract.md
04-pages/dashboard.md
06-vue-code/preview-html.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
02-components/table.md
02-components/tag.md
02-components/button.md
02-components/toast-message.md
07-checklists/html-demo-acceptance.md
```

### 3.5 html-demo-step-flow-page

用于生成分步流程页 HTML Demo。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
06-vue-code/template-boundary-contract.md
04-pages/step-flow-page.md
03-interaction/form-entry.md
06-vue-code/preview-html.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
02-components/form.md
02-components/button.md
02-components/toast-message.md
07-checklists/html-demo-acceptance.md
```

### 3.6 html-demo-exception-page

用于生成异常页 / 无权限页 / 空结果页 HTML Demo。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
06-vue-code/template-boundary-contract.md
04-pages/exception-page.md
06-vue-code/preview-html.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
02-components/feedback.md
02-components/button.md
07-checklists/html-demo-acceptance.md
```

### 3.7 html-demo-user-management-page

用于生成用户管理页面 HTML Demo。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
06-vue-code/template-boundary-contract.md
04-pages/user-management.md
03-interaction/list-search.md
03-interaction/list-table.md
03-interaction/form-entry.md
06-vue-code/preview-html.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
02-components/table.md
02-components/input.md
02-components/select.md
02-components/checkbox.md
02-components/form.md
02-components/tag.md
02-components/pagination.md
02-components/button.md
02-components/feedback.md
02-components/toast-message.md
07-checklists/html-demo-acceptance.md
```

### 3.8 html-demo-system-settings-page

用于生成系统设置页面 HTML Demo。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
06-vue-code/template-boundary-contract.md
04-pages/system-settings.md
03-interaction/form-entry.md
03-interaction/permission-state.md
06-vue-code/preview-html.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
02-components/form.md
02-components/input.md
02-components/select.md
02-components/button.md
02-components/alert.md
02-components/toast-message.md
07-checklists/html-demo-acceptance.md
```

### 3.9 html-demo-system-config-page

用于生成系统配置页面 HTML Demo。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
06-vue-code/template-boundary-contract.md
04-pages/system-config.md
03-interaction/form-entry.md
03-interaction/list-table.md
03-interaction/permission-state.md
06-vue-code/preview-html.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
02-components/form.md
02-components/input.md
02-components/select.md
02-components/checkbox.md
02-components/table.md
02-components/tag.md
02-components/pagination.md
02-components/button.md
02-components/feedback.md
02-components/toast-message.md
07-checklists/html-demo-acceptance.md
```

### 3.10 html-demo-acceptance-report-page

用于生成验收报告页 / 检查结果展示页 / HTML Demo 质量报告页。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
06-vue-code/template-boundary-contract.md
07-checklists/html-demo-acceptance.md
06-vue-code/preview-html.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
02-components/table.md
02-components/tag.md
02-components/feedback.md
02-components/button.md
07-checklists/html-demo-acceptance.md
```

### 3.11 html-demo-review

用于检查 HTML Demo 是否符合规范。

```text
SKILL.md
对应页面规范
对应交互规范
06-vue-code/template-boundary-contract.md
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
07-checklists/html-demo-acceptance.md
```

只有排查旧 class 或私有 class 污染时，额外读取：

```text
06-vue-code/deprecated-class-blacklist.md
```

### 3.12 docs-maintenance

用于修改、合并、删除规范文档。

```text
SKILL.md
INDEX.md
目标文档
相关唯一真源文档
```

维护文档时必须遵守以下原则：

- 先确认唯一真源归属，再修改对应文件；不要在多个文件重复维护同一规则。
- 采用最小改动原则，只改与目标问题直接相关的规则、索引和引用。
- 修改某个真源规则后，同步检查 `SKILL.md`、`INDEX.md`、相关 profile、组件语义文档、运行时契约和验收清单是否需要联动更新。
- 组件真实 DOM / class / CSS / Token 的来源只能指向 manifest、snippets、组件样式库和 `component-runtime-contract.md`，不得重新把历史入口作为运行时必读。
- `02-components/` 只能维护语义、状态和行为；不得沉淀可运行 DOM、工程代码或替代 snippet 的 class 写法。
- 不确定规则来源时必须明确标注待确认，不得把推测内容写成标准。
- 预览页默认按单文件 HTML Demo 语义维护，不回退到 Vue / React / Tailwind / shadcn 输出模式。

## 4. 页面类型索引

| 页面类型 | Profile | 页面规范 | 交互规范 | 验收 |
|---|---|---|---|---|
| 列表页 | `html-demo-list-page` | `04-pages/list-page.md` | `03-interaction/list-search.md`、`03-interaction/list-table.md` | `07-checklists/html-demo-acceptance.md` |
| 表单页 | `html-demo-form-page` | `04-pages/form-page.md` | `03-interaction/form-entry.md` | `07-checklists/html-demo-acceptance.md` |
| 详情页 | `html-demo-detail-page` | `04-pages/detail-page.md` | `03-interaction/page-container.md` | `07-checklists/html-demo-acceptance.md` |
| 工作台 | `html-demo-dashboard-page` | `04-pages/dashboard.md` | 按需读取组件语义和反馈规则 | `07-checklists/html-demo-acceptance.md` |
| 分步流程页 | `html-demo-step-flow-page` | `04-pages/step-flow-page.md` | `03-interaction/form-entry.md` | `07-checklists/html-demo-acceptance.md` |
| 异常页 | `html-demo-exception-page` | `04-pages/exception-page.md` | 按需读取反馈规则 | `07-checklists/html-demo-acceptance.md` |
| 用户管理 | `html-demo-user-management-page` | `04-pages/user-management.md` | 列表、表格、表单规则 | `07-checklists/html-demo-acceptance.md` |
| 系统设置 | `html-demo-system-settings-page` | `04-pages/system-settings.md` | 表单、确认、权限状态 | `07-checklists/html-demo-acceptance.md` |
| 系统配置 | `html-demo-system-config-page` | `04-pages/system-config.md` | 表单、表格、确认、权限状态 | `07-checklists/html-demo-acceptance.md` |
| 验收报告页 | `html-demo-acceptance-report-page` | `07-checklists/html-demo-acceptance.md` | 按报告内容读取 | `07-checklists/html-demo-acceptance.md` |

## 5. 组件实现索引

| 主题 | 读取文件 | 读取时机 |
|---|---|---|
| 组件 snippet 定位 | `docs/component-style-library/component_snippet_manifest.json` | 生成或检查组件实现时必读 |
| 真实 DOM / class / CSS / Token | `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` | 生成或检查组件实现时必读 |
| 组件运行时抽取和注入契约 | `06-vue-code/component-runtime-contract.md` | 生成或检查 HTML Demo 时必读 |
| 母版替换边界 | `06-vue-code/template-boundary-contract.md` | 生成或检查 HTML Demo 时必读 |
| 组件语义边界 | `02-components/component-semantic-boundary.md` | 需要判断组件语义、状态、行为时读取 |
| 具体组件语义 | `02-components/*.md` | 需要判断某个组件的适用场景和状态时读取 |
| 旧 class 完整排查 | `06-vue-code/deprecated-class-blacklist.md` | 命中旧 class、做深度 review、排查污染时读取 |

## 6. 目录职责

| 路径 | 职责 |
|---|---|
| `README.md` | 给人看的项目简介和目录说明 |
| `SKILL.md` | AI 生成高保真 HTML Demo 的执行契约 |
| `INDEX.md` | 唯一文档索引和最小读取路径 |
| `01-foundation/` | Token、颜色、字体、布局、投影等基础规则 |
| `02-components/` | 组件语义、状态、行为说明；不提供真实 DOM / class / CSS |
| `03-interaction/` | 页面交互规则，例如搜索区、表格区、表单录入、权限状态 |
| `04-pages/` | 页面类型结构和信息层级 |
| `06-vue-code/` | 历史目录名；当前保留 HTML Demo、母版、母版边界契约、组件运行时契约、旧 class 诊断和历史入口 |
| `07-checklists/` | HTML Demo 输出验收清单 |
| `docs/component-style-library/` | 真实组件 DOM / class / CSS / Token 与 snippet manifest |

## 7. 唯一真源归属

| 规则主题 | 唯一真源 |
|---|---|
| AI 默认交付方式、硬约束、冲突优先级 | `SKILL.md` |
| 任务最小读取路径、目录职责、文档索引 | `INDEX.md` |
| HTML 母版结构 | `06-vue-code/templates/*.html` |
| 母版替换边界 | `06-vue-code/template-boundary-contract.md` |
| HTML Demo 生成要求 | `06-vue-code/preview-html.md` |
| 组件 snippet 定位 | `docs/component-style-library/component_snippet_manifest.json` |
| 组件真实 DOM / class / CSS / Token | `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` |
| 组件运行时抽取、CSS 注入、Token 成对规则 | `06-vue-code/component-runtime-contract.md` |
| `02-components/` 语义边界 | `02-components/component-semantic-boundary.md` |
| 组件语义、状态、行为 | `02-components/*.md` |
| 旧 class 与私有组件 class 诊断 | `06-vue-code/deprecated-class-blacklist.md` |
| 搜索区交互 | `03-interaction/list-search.md` |
| 表格区交互 | `03-interaction/list-table.md` |
| 表单录入交互 | `03-interaction/form-entry.md` |
| 页面类型结构 | `04-pages/*.md` |
| HTML Demo 输出验收 | `07-checklists/html-demo-acceptance.md` |

以下文件为历史入口或维护说明，不再作为 AI 生成 HTML Demo 的运行时必读：

```text
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/component-reading-order-rules.md
06-vue-code/business-component-reuse-rules.md
02-components/component-doc-boundary.md
```

## 8. 内层导读规则

01～08 目录内不得新增以下类型文件：

```text
overview.md
README.md
reference.md
skill.md
index.md
```

如果需要新增目录说明、读取路径、规则归属或文档索引，统一更新根目录 `INDEX.md`。