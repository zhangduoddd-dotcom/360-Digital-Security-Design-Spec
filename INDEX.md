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
- 只读取当前任务需要的页面规范、交互规范、组件样式库和验收清单。
- 组件真实 DOM / class / CSS / Token 只从组件样式库和 06-vue-code 抽取注入规则获取。
- `02-components/` 只用于组件语义、状态和交互说明，不作为 HTML DOM / class / CSS 来源。

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
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/deprecated-class-blacklist.md
07-checklists/html-demo-acceptance.md
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
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/deprecated-class-blacklist.md
07-checklists/html-demo-acceptance.md
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
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/deprecated-class-blacklist.md
07-checklists/html-demo-acceptance.md
```

### 2.4 html-demo-review

用于检查 HTML Demo 是否符合规范。

```text
SKILL.md
对应页面规范
对应交互规范
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/deprecated-class-blacklist.md
07-checklists/html-demo-acceptance.md
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
| 工作台 | `04-pages/dashboard.md` | 按需读取组件和反馈规则 | `07-checklists/html-demo-acceptance.md` |
| 分步流程页 | `04-pages/step-flow-page.md` | 按需读取表单和反馈规则 | `07-checklists/html-demo-acceptance.md` |
| 异常页 | `04-pages/exception-page.md` | 按需读取反馈规则 | `07-checklists/html-demo-acceptance.md` |
| 用户管理 | `04-pages/user-management.md` | 列表、表格、表单规则 | `07-checklists/html-demo-acceptance.md` |
| 系统设置 | `04-pages/system-settings.md` | 表单、确认、权限状态 | `07-checklists/html-demo-acceptance.md` |
| 系统配置 | `04-pages/system-config.md` | 表单、表格、确认、权限状态 | `07-checklists/html-demo-acceptance.md` |

## 4. 组件实现索引

| 组件 | DOM / CSS / Token 来源 | 语义补充 |
|---|---|---|
| Button | `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` | `02-components/button.md` |
| Input | 同上 | `02-components/input.md` |
| Textarea | 同上 | `02-components/textarea.md` |
| Select | 同上 | `02-components/select.md` |
| Checkbox | 同上 | `02-components/checkbox.md` |
| Radio | 同上 | `02-components/radio.md` |
| Switch | 同上或按待补齐组件处理 | `02-components/switch.md` |
| Tabs | 同上 | `02-components/tabs.md` |
| Table | 同上 | `02-components/table.md` |
| Pagination | 同上 | `02-components/pagination.md` |
| Tag | 同上 | `02-components/tag.md` |
| Alert | 同上或按待补齐组件处理 | `02-components/alert.md` |
| Toast / Message | 同上 | `02-components/toast-message.md` |
| Icon | 模板 iconfont / 组件样式库 | `02-components/icon.md` |

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
| `06-vue-code/` | 历史目录名；当前只保留 HTML Demo、组件 DOM 抽取、CSS 注入、旧 class 黑名单、母版 |
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
| 组件 DOM 抽取 | `06-vue-code/component-dom-extraction-rules.md` |
| 组件 CSS / Token 注入 | `06-vue-code/component-style-import-rules.md` |
| 组件语义到 HTML 实现映射 | `06-vue-code/component-style-code-map.md` |
| 业务组件复用边界 | `06-vue-code/business-component-reuse-rules.md` |
| 旧 class 与私有组件 class 黑名单 | `06-vue-code/deprecated-class-blacklist.md` |
| 组件语义、状态、行为 | `02-components/*.md` |
| 搜索区交互 | `03-interaction/list-search.md` |
| 表格区交互 | `03-interaction/list-table.md` |
| 表单录入交互 | `03-interaction/form-entry.md` |
| 页面类型结构 | `04-pages/*.md` |
| HTML Demo 输出验收 | `07-checklists/html-demo-acceptance.md` |

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
