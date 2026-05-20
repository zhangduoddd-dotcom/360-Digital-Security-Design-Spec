# 组件样式与前端代码映射
## Component Style and Code Mapping

Keywords: component mapping, ant design vue, html demo, css token, style implementation, codegen, ant class

## 1. 定位

本文用于把 `02-components/` 中的组件规范，映射到 Vue 3 + TypeScript + Ant Design Vue 页面代码和单文件 HTML Demo 实现。

AI 生成页面代码或 HTML Demo 时，不能只读取组件设计规范，还必须读取本文完成组件到代码的映射。

生成 HTML Demo 时还必须读取：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
docs/component-style-library/component_style_library_index.md
06-vue-code/business-component-reuse-rules.md
```

其中 `backend_ai_ui_component_kit_with_index.html` 是真实可运行组件样式库。HTML Demo 的组件 class 必须以该文件中真实存在的 `.ant-*` class 为准。不得使用 `.btn`、`.form-input`、`.data-table`、`.tag-status`、`.pagination` 等未在样式库中定义或不稳定的别名 class 作为基础组件 class。

## 2. 通用规则

- 组件样式来源以 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 中真实可运行 class 为准。
- `02-components/` 负责组件设计原则与语义说明；当其文字说明与组件样式库 class 不一致时，以组件样式库为准。
- Vue 工程代码优先使用 Ant Design Vue 组件。
- HTML Demo 可以不真实引入 Ant Design Vue，但结构、状态和视觉必须模拟正式 Ant Design Vue 页面。
- HTML Demo 基础组件 class 必须使用 `.ant-*` 体系，例如 `.ant-btn`、`.ant-input`、`.ant-select`、`.ant-table`、`.ant-tag`、`.ant-pagination`。
- 样式优先调用 `01-foundation/tokens.md` 与组件样式库中的 Token。
- 普通主色统一使用 `p6 #00AB7A`。
- AI 按钮继续使用原有 AI 三态渐变 Token，不参与普通主色替换。
- 不要用普通 div 模拟 Button、Table、Form、Select、Modal、Drawer 等成熟组件。
- 不要散落大量 inline style。
- 每个交互组件必须覆盖 default、hover、focus、disabled、loading、error 等必要状态。
- 业务区组件必须采用“真实基础 class + 业务修饰 class”的组合方式，不得只使用页面私有 class 替代基础组件 class。

## 3. 组件映射总表

| 规范文档 | Vue 组件 | HTML Demo 真实结构 / class | 样式 Token / class | 必须状态 |
|---|---|---|---|---|
| `button.md` | `a-button` | `.ant-btn`、`.ant-btn-primary`、`.ant-btn-dashed`、`.ant-btn-text`、`.ant-btn-link`、`.ant-btn-ai` | 普通按钮 `p6/p5/p7`，AI 使用原 AI Token | default / hover / active / disabled / loading / danger |
| `input.md` | `a-input`、`a-input-search` | `.ant-input`、`.ant-input-affix-wrapper`、`.ant-input-status-error` | border `gray-5`，focus `p6 + p1 ring` | default / hover / focus / filled / disabled / error |
| `textarea.md` | `a-textarea` | `.ant-input.ant-textarea`、`.ant-input-show-count` | 同 Input，高度按场景 | focus / disabled / error / count |
| `select.md` | `a-select`、`a-tree-select`、`a-cascader` | `.ant-select`、`.ant-select-selector`、`.ant-select-dropdown`、`.ant-select-item`、`.ant-select-item-option-selected` | selected `p1 + p7`，focus `p6` | open / hover / selected / disabled / loading / empty |
| `checkbox.md` | `a-checkbox`、`rowSelection` | `.ant-checkbox-wrapper`、`.ant-checkbox`、`.ant-checkbox-checked`、`.ant-checkbox-indeterminate` | checked `p6` | unchecked / checked / indeterminate / disabled |
| `radio.md` | `a-radio`、`a-radio-group` | `.ant-radio-wrapper`、`.ant-radio`、`.ant-radio-checked`、`.ant-radio-button-wrapper` | checked `p6` | unchecked / checked / disabled / focus |
| `switch.md` | `a-switch` | `.ant-switch`（样式库待补齐，需最小补充样式） | on `p6` | off / on / loading / disabled |
| `tabs.md` | `a-tabs` | `.ant-tabs`、`.ant-tabs-nav`、`.ant-tabs-tab`、`.ant-tabs-tab-active`、`.ant-tabs-content` | active `p6/p7` | default / hover / active / disabled |
| `table.md` | `a-table` | `.ant-table-wrapper`、`.ant-table-toolbar`、`.ant-table-scroll`、`.ant-table`、`.ant-table-compact`、`.ant-table-cell-actions` | header `gray-2/3`，border `gray-4` | loading / empty / hover / selected / error |
| `pagination.md` | `a-pagination` | `.ant-pagination`、`.ant-pagination-item`、`.ant-pagination-item-active`、`.ant-pagination-prev`、`.ant-pagination-next`、`.ant-pagination-options` | active `p6` | default / hover / active / disabled |
| `tag.md` | `a-tag` | `.ant-tag`、`.ant-tag-primary`、`.ant-tag-success`、`.ant-tag-processing`、`.ant-tag-warning`、`.ant-tag-error` | 主色 `p1 + p7`，语义色按状态 | default / status / removable |
| `alert.md` | `a-alert` | `.ant-alert`（样式库待补齐，需最小补充样式） | info/success/warning/error 语义色 | info / success / warning / error / closable |
| `toast-message.md` | `message`、`notification` | `.toast-holder`、`.toast` | 语义色 icon + 文案 | info / success / warning / error |
| `motion.md` | CSS transition | 组件样式库内置 motion token | 150ms / 200ms / 300ms | hover / open / close / loading |

## 4. 页面级组件读取规则

### 4.1 列表页

生成列表页时必须读取：

```text
04-pages/list-page.md
03-interaction/list-search.md
03-interaction/list-table.md
02-components/table.md
02-components/tag.md
02-components/pagination.md
02-components/checkbox.md
02-components/button.md
02-components/motion.md
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
07-checklists/frontend-acceptance.md
```

代码或 HTML Demo 必须包含：

- 查询表单。
- 表格。
- 分页。
- 状态标签。
- 行操作。
- 批量选择。
- loading / empty / error。
- 删除或高风险操作确认。

### 4.2 表单页

生成表单页时必须读取：

```text
04-pages/form-page.md
03-interaction/form-entry.md
02-components/form.md
02-components/input.md
02-components/textarea.md
02-components/select.md
02-components/radio.md
02-components/checkbox.md
02-components/switch.md
02-components/button.md
02-components/alert.md
02-components/motion.md
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
07-checklists/frontend-acceptance.md
```

代码或 HTML Demo 必须包含：

- 表单分组。
- 输入、选择、单选、多选、开关等控件。
- 必填和校验规则。
- submit loading。
- validation error。
- success / error feedback。
- 高风险配置确认。

### 4.3 详情页 / 详情抽屉

生成详情页或详情抽屉时必须读取：

```text
04-pages/detail-page.md
03-interaction/page-container.md
02-components/table.md
02-components/tag.md
02-components/tabs.md
02-components/button.md
02-components/alert.md
02-components/motion.md
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
07-checklists/frontend-acceptance.md
```

代码或 HTML Demo 必须包含：

- 详情容器或 Drawer。
- 对象摘要。
- Descriptions / Tabs / Timeline / Table 等信息组织。
- 状态 Tag。
- 操作按钮。
- 高风险操作确认。

### 4.4 工作台 / 仪表盘

生成工作台或仪表盘时必须读取：

```text
04-pages/dashboard.md
02-components/table.md
02-components/tag.md
02-components/button.md
02-components/alert.md
02-components/motion.md
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
07-checklists/frontend-acceptance.md
```

代码或 HTML Demo 必须包含核心指标、风险入口、趋势 / 分布 / 排行、待办任务、快捷入口和最近动态或处理建议。

### 4.5 组件样式库校验

检查或修正 HTML Demo 的组件样式、组件状态、控件高度、Token 使用、状态标签、分页器、表格状态、日期选择器、下拉选择器等内容时，必须补充读取：

```text
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/business-component-reuse-rules.md
```

使用原则：

- `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 负责提供真实可运行组件 class，是 HTML Demo 组件 class 的最高依据。
- `docs/component-style-library/component_style_library_index.md` 负责说明样式库覆盖范围、Token、组件章节和待补齐组件。
- `02-components/` 负责定义组件设计原则与文字规范。
- `06-vue-code/component-style-code-map.md` 负责把文字规范映射到 HTML / Vue 代码结构。
- `06-vue-code/business-component-reuse-rules.md` 负责约束业务区组件必须复用真实基础 class，禁止用页面私有 class 或旧别名 class 重造基础组件。
- 如果 Markdown 文字说明与可运行组件样式库 Demo 存在细节差异，应先记录差异；涉及页面框架时以 `06-vue-code/templates/` 母版为准，涉及组件 class 与状态细节时以组件样式库 Demo 为准。

## 5. Vue 代码生成规则

生成 Vue 代码时，必须：

- 使用 `<script setup lang="ts">`。
- 定义清晰的类型接口。
- 使用 mock 数据或接口占位。
- 使用 Ant Design Vue 组件，不重造基础组件。
- 样式覆盖集中在 CSS 变量、主题 Token 或页面 class 中。
- 不使用大量 inline style。
- 普通主按钮映射到 `p6 #00AB7A`。
- AI 按钮继续使用原有 AI 三态渐变 Token。
- 包含 loading、empty、error、success、confirm 等状态。
- 高风险操作使用 `Modal.confirm` 或 `Popconfirm`。
- 表格使用 `rowKey`、`columns`、`dataSource`、`pagination`、`loading`。
- 页面私有 class 只能作为业务模块命名空间或修饰 class，不能替代 Ant Design Vue 基础组件或 HTML Demo 基础组件 class。

## 6. HTML Demo 生成规则

HTML Demo 不强制真实引入 Ant Design Vue，但必须模拟：

- 同等组件结构。
- 同等状态表现。
- 同等 Token 色值。
- 同等交互反馈。
- 基础点击交互。
- mock 数据。
- loading / empty / error。
- 高风险确认操作。
- 真实基础组件 class 继承。

HTML Demo class 命名必须优先使用组件样式库真实 class：

```text
.ant-btn
.ant-btn-primary
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

业务语义 class 只能追加，例如：

```text
.ant-btn.ant-btn-primary.threat-action-btn
.ant-table-wrapper.threat-alert-table
.ant-tag.ant-tag-error.risk-high
.ant-pagination.table-pagination
```

禁止只使用以下同义私有组件 class 或旧别名 class：

```text
.alert-button
.alert-table
.alert-input
.alert-pagination
.xxx-btn
.xxx-table
.xxx-tag
.xxx-pagination
.btn
.btn-primary
.form-input
data-table
.tag-status
.status-tag
.pagination
```

当生成内容涉及 Button、Tabs、Input、Select、Checkbox、Radio、Table、Tag、Tooltip、DatePicker、Pagination 等基础组件的细节样式时，应参考 `docs/component-style-library/` 中的完整 HTML Demo，并同时遵循 `06-vue-code/business-component-reuse-rules.md`。该 Demo 用于校验视觉和状态，不替代 `06-vue-code/templates/` 页面框架母版。

## 7. 输出前自检

生成完成后必须检查：

- 是否使用了正确 Ant Design Vue 组件？
- 是否读取了对应 `02-components` 组件规范？
- 是否在涉及组件细节时读取了 `docs/component-style-library/` 的索引和 Demo？
- 是否读取并执行了 `06-vue-code/business-component-reuse-rules.md`？
- 普通主色是否使用 `p6 #00AB7A`？
- AI 渐变是否保持原 Token？
- 是否存在用 div 伪造基础组件？
- 是否存在只用页面私有 class 重造 Button、Input、Table、Tag、Pagination、Alert、Drawer、Modal？
- 是否错误使用 `.btn`、`.form-input`、`.data-table`、`.tag-status`、`.status-tag`、`.pagination` 等旧别名 class 作为基础组件？
- 业务组件是否采用“真实基础 class + 业务修饰 class”的组合方式？
- 是否覆盖 loading / empty / error？
- 是否有 hover / focus / disabled？
- 表格是否有分页、空状态、行操作？
- 表单是否有校验、错误说明、提交 loading？
- 高风险操作是否二次确认？

## 8. 与其他文档的关系

本文不替代 `06-vue-code/antdv-adapter.md`，而是补充组件规范到代码实现的读取路径。

执行顺序建议：

```text
ROLE.md
→ SKILL.md
→ INDEX.md
→ 页面规范
→ 组件规范
→ docs/component-style-library/component_style_library_index.md
→ docs/component-style-library/backend_ai_ui_component_kit_with_index.html
→ 06-vue-code/component-style-code-map.md
→ 06-vue-code/business-component-reuse-rules.md
→ 06-vue-code/antdv-adapter.md
→ 07-checklists/frontend-acceptance.md
```

如果本文与可运行组件样式库出现 class 冲突，以 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 为准。