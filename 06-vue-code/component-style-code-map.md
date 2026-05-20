# 组件实现映射
## Component Implementation Mapping

Keywords: component mapping, html demo, component dom extraction, token

本文用于把 `02-components/` 中的组件语义规范，映射到 HTML Demo 的真实组件 DOM / class / CSS / Token。

## 1. 定位

AI 生成 HTML Demo 时，不能只读取组件语义规范，也不能只读取 class 列表。必须读取组件样式库并完成真实组件 DOM、CSS、Token 的成对抽取。

生成 HTML Demo 时必须读取：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
docs/component-style-library/component_style_library_index.md
06-vue-code/component-dom-extraction-rules.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
```

其中 `backend_ai_ui_component_kit_with_index.html` 是真实可运行组件样式库。HTML Demo 的基础组件 DOM、class、CSS 和 Token 必须以该文件为准。

旧别名 class 和页面私有组件 class 不在本文展开，统一集中到：

```text
06-vue-code/deprecated-class-blacklist.md
```

## 2. 通用规则

- `02-components/` 负责组件语义、状态和交互要求，不负责 HTML Demo 的真实 DOM / class / CSS。
- HTML Demo 基础组件 DOM 必须从组件样式库抽取。
- HTML Demo 基础组件 CSS 和依赖 Token 必须从组件样式库抽取或复用母版同名 Token。
- HTML Demo 必须使用组件样式库中的真实 DOM、状态节点和样式。
- 页面业务 class 只能作为命名空间、布局钩子或修饰 class 追加。
- 普通主色统一使用 `p6 #00AB7A`。
- AI 按钮继续使用原有 AI 三态渐变 Token，不参与普通主色替换。
- 不要用普通 div 模拟 Button、Table、Form、Select、Modal、Drawer 等成熟组件。
- 不要散落大量 inline style。
- 每个交互组件必须覆盖 default、hover、focus、disabled、loading、error 等必要状态。

## 3. 组件映射总表

| 规范文档 | HTML Demo 来源 | Token / 样式来源 | 必须状态 |
|---|---|---|---|
| `button.md` | 组件样式库 Button DOM / class | 组件样式库 Button CSS / Token | default / hover / active / disabled / loading / danger |
| `input.md` | 组件样式库 Input DOM / class | 组件样式库 Input CSS / Token | default / hover / focus / filled / disabled / error |
| `textarea.md` | 组件样式库 Textarea DOM / class | 组件样式库 Textarea CSS / Token | focus / disabled / error / count |
| `select.md` | 组件样式库 Select DOM / class | 组件样式库 Select CSS / Token | open / hover / selected / disabled / loading / empty |
| `checkbox.md` | 组件样式库 Checkbox DOM / class | 组件样式库 Checkbox CSS / Token | unchecked / checked / indeterminate / disabled |
| `radio.md` | 组件样式库 Radio DOM / class | 组件样式库 Radio CSS / Token | unchecked / checked / disabled / focus |
| `switch.md` | 样式库待补齐，需最小补充样式 | on `p6` | off / on / loading / disabled |
| `tabs.md` | 组件样式库 Tabs DOM / class | 组件样式库 Tabs CSS / Token | default / hover / active / disabled |
| `table.md` | 组件样式库 Table DOM / class | 组件样式库 Table CSS / Token | loading / empty / hover / selected / error |
| `pagination.md` | 组件样式库 Pagination DOM / class | 组件样式库 Pagination CSS / Token | default / hover / active / disabled |
| `tag.md` | 组件样式库 Tag DOM / class | 组件样式库 Tag CSS / Token | default / status / removable |
| `alert.md` | 样式库待补齐，需最小补充样式 | info / success / warning / error Token | info / success / warning / error / closable |
| `toast-message.md` | 组件样式库 Toast DOM / class | 组件样式库 Toast CSS / Token | info / success / warning / error |
| `motion.md` | CSS transition | 组件样式库内置 motion token | hover / open / close / loading |

## 4. 页面级组件读取规则

### 4.1 列表页

生成列表页 HTML Demo 时必须读取：

```text
04-pages/list-page.md
03-interaction/list-search.md
03-interaction/list-table.md
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
02-components/table.md
02-components/tag.md
02-components/pagination.md
02-components/checkbox.md
02-components/button.md
02-components/motion.md
07-checklists/html-demo-acceptance.md
```

HTML Demo 必须包含查询表单、表格、分页、状态标签、行操作、批量选择、loading / empty / error 和高风险操作确认。组件 DOM、CSS、Token 必须来自组件样式库。

### 4.2 表单页

生成表单页 HTML Demo 时必须读取：

```text
04-pages/form-page.md
03-interaction/form-entry.md
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
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
07-checklists/html-demo-acceptance.md
```

HTML Demo 必须包含表单分组、输入、选择、单选、多选、开关、必填、校验、submit loading、validation error、success / error feedback 和高风险配置确认。

### 4.3 详情页 / 详情抽屉

生成详情页或详情抽屉 HTML Demo 时必须读取：

```text
04-pages/detail-page.md
03-interaction/page-container.md
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
02-components/table.md
02-components/tag.md
02-components/tabs.md
02-components/button.md
02-components/alert.md
02-components/motion.md
07-checklists/html-demo-acceptance.md
```

HTML Demo 必须包含详情容器或 Drawer、对象摘要、Descriptions / Tabs / Timeline / Table、状态 Tag、操作按钮和高风险操作确认。Drawer 若样式库未提供稳定 DOM，应按待补齐组件处理。

### 4.4 工作台 / 仪表盘

生成工作台或仪表盘 HTML Demo 时必须读取：

```text
04-pages/dashboard.md
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
02-components/table.md
02-components/tag.md
02-components/button.md
02-components/alert.md
02-components/motion.md
07-checklists/html-demo-acceptance.md
```

HTML Demo 必须包含核心指标、风险入口、趋势 / 分布 / 排行、待办任务、快捷入口和最近动态或处理建议。

## 5. 组件样式库校验

检查或修正 HTML Demo 的组件样式、组件状态、控件高度、Token 使用、状态标签、分页器、表格状态、日期选择器、下拉选择器等内容时，必须补充读取：

```text
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-dom-extraction-rules.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
```

使用原则：

- 组件样式库负责提供真实可运行组件 DOM、class、CSS、Token，是 HTML Demo 组件实现的最高依据。
- `component-dom-extraction-rules.md` 负责约束组件 DOM 必须从组件样式库抽取。
- `component-style-import-rules.md` 负责约束组件 CSS 与 Token 必须注入。
- `business-component-reuse-rules.md` 负责约束业务区组件必须复用真实 DOM / class / CSS / Token。
- `deprecated-class-blacklist.md` 负责集中维护旧别名和私有组件 class 清单。
- `02-components/` 负责定义组件设计原则与语义说明。

## 6. HTML Demo 生成规则

HTML Demo 必须复用组件样式库中的真实 DOM、状态表现、Token 色值、交互反馈、mock 数据、loading / empty / error 和高风险确认操作。

禁止根据 class 名称自行拼装基础组件 DOM。

当生成内容涉及 Button、Tabs、Input、Select、Checkbox、Radio、Table、Tag、Tooltip、DatePicker、Pagination 等基础组件的细节样式时，应参考 `docs/component-style-library/` 中的完整 HTML Demo，并同时遵循 `component-dom-extraction-rules.md`、`business-component-reuse-rules.md`、`component-style-import-rules.md` 和 `deprecated-class-blacklist.md`。

## 7. 输出前自检

生成完成后必须检查：

- 是否读取组件样式库。
- 是否读取并执行 `component-dom-extraction-rules.md`。
- 是否读取并执行 `business-component-reuse-rules.md`。
- 是否读取并执行 `component-style-import-rules.md`。
- 是否读取并执行 `deprecated-class-blacklist.md`。
- 业务组件 DOM 是否来自组件样式库。
- 业务组件 CSS 与 Token 是否来自组件样式库或复用母版同名 Token。
- 普通主色是否使用 `p6 #00AB7A`。
- AI 渐变是否保持原 Token。
- 是否存在用 div 伪造基础组件。
- 是否出现黑名单文件中列出的旧别名 class 或页面私有组件 class。
- 是否覆盖 loading / empty / error。
- 是否有 hover / focus / disabled。
- 表格是否有分页、空状态、行操作。
- 表单是否有校验、错误说明、提交 loading。
- 高风险操作是否二次确认。

如果本文与可运行组件样式库出现 DOM、class 或 CSS 冲突，以 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 为准。
