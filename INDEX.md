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
- 组件真实 DOM / class / CSS / Token 只从组件样式库和 `06-vue-code/component-runtime-contract.md` 获取。
- `02-components/` 只用于组件语义、状态和行为判断；不作为 HTML DOM / class / CSS 来源。
- 未来新增组件调用清单后，清单只作为组件定位入口，不替代运行时契约。

## 2. 任务读取 Profile

### 2.1 html-demo-list-page

用于生成列表页 HTML Demo / 高保真可点击预览。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
04-pages/list-page.md
03-interaction/list-search.md
03-interaction/list-table.md
06-vue-code/preview-html.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
07-checklists/html-demo-acceptance.md
```

按需读取：

```text
02-components/component-semantic-boundary.md
02-components/对应组件文档
06-vue-code/deprecated-class-blacklist.md
```

### 2.2 html-demo-form-page

用于生成表单页 HTML Demo / 高保真可点击预览。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
04-pages/form-page.md
03-interaction/form-entry.md
06-vue-code/preview-html.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
07-checklists/html-demo-acceptance.md
```

按需读取：

```text
02-components/component-semantic-boundary.md
02-components/对应组件文档
06-vue-code/deprecated-class-blacklist.md
```

### 2.3 html-demo-detail-page

用于生成详情页 / 详情抽屉 HTML Demo。

```text
SKILL.md
06-vue-code/templates/common-single-nav.html
04-pages/detail-page.md
03-interaction/page-container.md
06-vue-code/preview-html.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
07-checklists/html-demo-acceptance.md
```

按需读取：

```text
02-components/component-semantic-boundary.md
02-components/对应组件文档
06-vue-code/deprecated-class-blacklist.md
```

### 2.4 html-demo-review

用于检查 HTML Demo 是否符合规范。

```text
SKILL.md
对应页面规范
对应交互规范
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
07-checklists/html-demo-acceptance.md
```

只有排查旧 class 或私有 class 污染时，额外读取：

```text
06-vue-code/deprecated-class-blacklist.md
```

### 2.5 docs-maintenance

用于修改、合并、删除规范文档。

```text
SKILL.md
INDEX.md
目标文档
相关唯一真源文档
```

维护文档时，先确认唯一真源归属，再修改对应文件；不要在多个文件重复维护同一规则。

## 3. 页面类型索引

| 页面类型 | 页面规范 | 交互规范 | 验收 |
|---|---|---|---|
| 列表页 | `04-pages/list-page.md` | `03-interaction/list-search.md`、`03-interaction/list-table.md` | `07-checklists/html-demo-acceptance.md` |
| 表单页 | `04-pages/form-page.md` | `03-interaction/form-entry.md` | `07-checklists/html-demo-acceptance.md` |
| 详情页 | `04-pages/detail-page.md` | `03-interaction/page-container.md` | `07-checklists/html-demo-acceptance.md` |
| 工作台 | `04-pages/dashboard.md` | 按需读取组件语义和反馈规则 | `07-checklists/html-demo-acceptance.md` |
| 分步流程页 | `04-pages/step-flow-page.md` | 按需读取表单和反馈规则 | `07-checklists/html-demo-acceptance.md` |
| 异常页 | `04-pages/exception-page.md` | 按需读取反馈规则 | `07-checklists/html-demo-acceptance.md` |
| 用户管理 | `04-pages/user-management.md` | 列表、表格、表单规则 | `07-checklists/html-demo-acceptance.md` |
| 系统设置 | `04-pages/system-settings.md` | 表单、确认、权限状态 | `07-checklists/html-demo-acceptance.md` |
| 系统配置 | `04-pages/system-config.md` | 表单、表格、确认、权限状态 | `07-checklists/html-demo-acceptance.md` |

## 4. 组件实现索引

| 主题 | 读取文件 | 读取时机 |
|---|---|---|
| 真实 DOM / class / CSS / Token | `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` | 生成或检查组件实现时必读 |
| 组件运行时抽取和注入契约 | `06-vue-code/component-runtime-contract.md` | 生成或检查 HTML Demo 时必读 |
| 组件语义边界 | `02-components/component-semantic-boundary.md` | 需要判断组件语义、状态、行为时读取 |
| 具体组件语义 | `02-components/*.md` | 需要判断某个组件的适用场景和状态时读取 |
| 旧 class 完整排查 | `06-vue-code/deprecated-class-blacklist.md` | 命中旧 class、做深度 review、排查污染时读取 |

未来如果新增组件调用清单，应加入本表作为“组件定位入口”，但运行时规则仍以 `component-runtime-contract.md` 为准。

## 5. 目录职责

| 路径 | 职责 |
|---|---|
| `README.md` | 给人看的项目简介和目录说明 |
| `SKILL.md` | AI 生成高保真 HTML Demo 的执行契约 |
| `INDEX.md` | 唯一文档索引和最小读取路径 |
| `01-foundation/` | Token、颜色、字体、布局、投影等基础规则 |
| `02-components/` | 组件语义、状态、行为说明；不提供真实 DOM / class / CSS |
| `03-interaction/` | 页面交互规则，例如搜索区、表格区、表单录入、权限状态 |
| `04-pages/` | 页面类型结构和信息层级 |
| `06-vue-code/` | 历史目录名；当前保留 HTML Demo、母版、组件运行时契约、旧 class 诊断和历史入口 |
| `07-checklists/` | HTML Demo 输出验收清单 |
| `docs/component-style-library/` | 真实组件 DOM / class / CSS / Token |

## 6. 唯一真源归属

| 规则主题 | 唯一真源 |
|---|---|
| AI 默认交付方式、硬约束、冲突优先级 | `SKILL.md` |
| 任务最小读取路径、目录职责、文档索引 | `INDEX.md` |
| HTML 母版结构 | `06-vue-code/templates/*.html` |
| HTML Demo 生成要求 | `06-vue-code/preview-html.md` |
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

## 7. 内层导读规则

01～08 目录内不得新增以下类型文件：

```text
overview.md
README.md
reference.md
skill.md
index.md
```

如果需要新增目录说明、读取路径、规则归属或文档索引，统一更新根目录 `INDEX.md`。
