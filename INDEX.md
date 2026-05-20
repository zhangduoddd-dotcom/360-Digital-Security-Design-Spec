# 文档索引
## Document Index

Keywords: index, ai routing, backend design, html demo, vue codegen, ui generation, single navigation frame, double navigation frame, template routing, component mapping, documentation structure

> 本文件是 AI 读取仓库时的主导航，也方便人工快速跳转查阅。

## 0. 角色与执行入口

| 文件 | 内容 |
|---|---|
| [ROLE.md](./ROLE.md) | B 端产品 UI/UX 设计师角色限定：业务目标、用户任务、页面类型、信息层级、交互路径、组件映射、工程落地和输出前自检 |
| [SKILL.md](./SKILL.md) | Skill 总入口：HTML Demo 优先、首次生成硬约束、任务读取顺序、交付物判定 |
| [DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md) | 文档结构与职责边界：目录分层、组件语义层 / 样式层 / 映射层关系、HTML Demo 读取顺序、冲突优先级 |

任何 B 端页面生成、优化、检查、HTML Demo 或 Vue 工程代码任务，默认先读取 `ROLE.md`、`SKILL.md` 与 `DOCS-STRUCTURE.md`，再按本文件分流。

---

## 1. 目录地图

| 目录 | 内容 |
|---|---|
| [01-foundation/](./01-foundation/) | 全局设计基础：原则、布局、颜色、字体、Token、投影 |
| [02-components/](./02-components/) | 组件语义规范：组件使用场景、状态要求、交互规则；不作为 HTML Demo 真实 class / CSS 来源 |
| [03-interaction/](./03-interaction/) | 交互规范：页面容器、导航、搜索区、表格区、表单录入、权限状态 |
| [04-pages/](./04-pages/) | 页面规范：总览、工作台、列表页、表单页、详情页、分步流程页、异常页、用户管理、系统设置、系统配置 |
| [06-vue-code/](./06-vue-code/) | HTML 演示与 Vue 代码生成：HTML 预览、代码规则、组件样式代码映射、组件 CSS 注入、业务组件复用、旧 class 黑名单、固定框架模板 |
| [07-checklists/](./07-checklists/) | 验收清单：设计走查、AI 输出、前端实现 |
| [docs/component-style-library/](./docs/component-style-library/) | 可运行组件样式库：真实 `.ant-*` class、组件 CSS、组件状态和样式细节 |

---

## 2. 文档职责分层

生成 HTML Demo 时，按以下职责理解文档：

```text
ROLE.md / SKILL.md / INDEX.md / DOCS-STRUCTURE.md
= 入口层 / 路由层 / 职责边界层

06-vue-code/templates/*.html
= 页面框架母版层

docs/component-style-library/*.html / *.md
= 真实组件 class 与 CSS 层

06-vue-code/component-style-code-map.md
= 组件语义到真实 .ant-* class 的映射层

06-vue-code/business-component-reuse-rules.md
= 禁止私有 class 和旧别名 class 的约束层

06-vue-code/component-style-import-rules.md
= 组件 CSS 注入保障层

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
02-components 不决定 HTML Demo 的真实 class / CSS。
真实 class / CSS 以 docs/component-style-library 和 06-vue-code 映射规则为准。
```

---

## 3. 框架模板调用优先级

固定 HTML 母版只保留两套：

| 场景 | 必须调用 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html) |
| 用户明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html) |
| 用户明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | [06-vue-code/templates/double-nav-frame.html](./06-vue-code/templates/double-nav-frame.html) |
| 用户明确要求自定义导航框架 | 按用户指定方案处理 |

判断规则：

```text
1. 用户明确要求自定义导航框架 → 按用户指定方案处理。
2. 用户明确要求双层导航框架 → 使用 double-nav-frame.html。
3. 用户明确要求单层导航框架 → 使用 common-single-nav.html。
4. 用户只说“基于本套 GitHub / 本仓库规范 / 本套设计规范” → 默认使用 common-single-nav.html。
5. 用户没有说明导航框架 → 默认使用 common-single-nav.html。
```

模板使用规则详见：

```text
06-vue-code/templates/README.md
```

---

## 4. HTML Demo 标准读取顺序

生成可演示页面 / demo / 可点击预览时，必须按以下顺序读取：

```text
1. ROLE.md
2. SKILL.md
3. DOCS-STRUCTURE.md
4. INDEX.md
5. 06-vue-code/templates/README.md
6. 06-vue-code/templates/common-single-nav.html 或 double-nav-frame.html
7. 04-pages/overview.md
8. 对应页面规范，例如 04-pages/list-page.md
9. docs/component-style-library/backend_ai_ui_component_kit_with_index.html
10. docs/component-style-library/component_style_library_index.md
11. 06-vue-code/component-style-code-map.md
12. 06-vue-code/business-component-reuse-rules.md
13. 06-vue-code/component-style-import-rules.md
14. 06-vue-code/component-reading-order-rules.md
15. 06-vue-code/deprecated-class-blacklist.md
16. 02-components/component-doc-boundary.md
17. 02-components/overview.md
18. 对应 02-components 组件语义文档
19. 07-checklists/ai-output.md
```

禁止先读取 `02-components` 后自行推导 HTML class。

---

## 5. 固定框架使用硬约束

生成页面时，HTML 母版是页面底座，不是参考稿。

```text
先完整复制对应 HTML 母版。
再替换业务内容和 mock 数据。
不重新推导、不重新拼装、不重写框架结构。
```

### 5.1 可变内容

```text
Logo 图片或 Logo 文案
顶部导航业务文案、导航数量、路由含义、选中项
顶部右侧信息区中的用户名、组织名、状态数据
左侧菜单文案、菜单数量、路由含义、默认展开项、默认选中项
页头标题、页头右侧业务按钮、面包屑或页签文案
页面主体业务内容
表格 / 表单 / 详情 / 工作台 / 异常页等业务模块
mock 数据、筛选项、分页数据、图表数据、状态数据
业务弹窗 / 抽屉中的字段、说明文案、确认文案
明确语义的业务 icon
```

### 5.2 不可变内容

```text
HTML 外层容器层级
顶部导航高度、背景、布局、hover / active / open 状态
左侧菜单宽度、收起宽度、缩进、icon 尺寸、hover / active / disabled 状态
左侧菜单展开收起逻辑、收起态级联浮层
页头高度、结构、层级、与内容区的上下关系
内容区外层 padding、背景、滚动规则、最小宽度和自适应逻辑
iconfont 字体族、Font Class 使用方式、状态 icon 规则
字体渲染规则
CSS Token：品牌色、间距、圆角、边框、阴影、控件高度
JS 交互：导航展开收起、菜单联级浮层、下拉显示隐藏、状态同步、响应式处理
```

---

## 6. 组件 class 与 CSS 决策规则

HTML Demo 中基础组件 class 必须来自组件样式库和映射规则：

| 组件 | 正确基础 class |
|---|---|
| Button | `.ant-btn`、`.ant-btn-primary`、`.ant-btn-text`、`.ant-btn-link` |
| Input | `.ant-input`、`.ant-input-affix-wrapper` |
| Select | `.ant-select`、`.ant-select-selector` |
| Table | `.ant-table-wrapper`、`.ant-table`、`.ant-table-compact` |
| Tag | `.ant-tag`、`.ant-tag-success`、`.ant-tag-warning`、`.ant-tag-error` |
| Pagination | `.ant-pagination`、`.ant-pagination-item` |
| Toast | `.toast-holder`、`.toast` |

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

只要最终 HTML 使用 `.ant-*` class，就必须有对应 CSS 定义。

---

## 7. 任务路由

| 用户任务 | 优先读取 | 辅助读取 |
|---|---|---|
| 任何 B 端页面生成 / 优化 / 检查任务 | [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)、[INDEX.md](./INDEX.md) | 对应页面规范、组件语义规范、代码生成规则、验收清单 |
| 生成任何后台页面 / HTML demo / Vue 页面 | [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md) | 对应页面规范、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/business-component-reuse-rules.md](./06-vue-code/business-component-reuse-rules.md)、[06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md)、[06-vue-code/component-reading-order-rules.md](./06-vue-code/component-reading-order-rules.md)、[06-vue-code/deprecated-class-blacklist.md](./06-vue-code/deprecated-class-blacklist.md) |
| 查询组件语义 / 使用场景 / 状态要求 | [02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md)、[02-components/overview.md](./02-components/overview.md)、[02-components/component-size.md](./02-components/component-size.md) | 对应组件文档，例如 button / input / select / table / tag / pagination |
| 查询组件真实 class / CSS | [docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)、[docs/component-style-library/component_style_library_index.md](./docs/component-style-library/component_style_library_index.md) | [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/business-component-reuse-rules.md](./06-vue-code/business-component-reuse-rules.md)、[06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md)、[06-vue-code/deprecated-class-blacklist.md](./06-vue-code/deprecated-class-blacklist.md) |
| 生成列表页 UI | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/list-page.md](./04-pages/list-page.md) | [docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/business-component-reuse-rules.md](./06-vue-code/business-component-reuse-rules.md)、[06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md)、[06-vue-code/deprecated-class-blacklist.md](./06-vue-code/deprecated-class-blacklist.md)、[02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md)、[02-components/table.md](./02-components/table.md)、[02-components/tag.md](./02-components/tag.md)、[02-components/pagination.md](./02-components/pagination.md)、[02-components/button.md](./02-components/button.md) |
| 生成表单页 UI | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/form-page.md](./04-pages/form-page.md) | [docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/business-component-reuse-rules.md](./06-vue-code/business-component-reuse-rules.md)、[06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md)、[06-vue-code/deprecated-class-blacklist.md](./06-vue-code/deprecated-class-blacklist.md)、[02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md)、[02-components/form.md](./02-components/form.md)、[02-components/input.md](./02-components/input.md)、[02-components/select.md](./02-components/select.md)、[02-components/button.md](./02-components/button.md) |
| 生成详情页 UI / 详情抽屉 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/detail-page.md](./04-pages/detail-page.md) | [docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/business-component-reuse-rules.md](./06-vue-code/business-component-reuse-rules.md)、[06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md)、[06-vue-code/deprecated-class-blacklist.md](./06-vue-code/deprecated-class-blacklist.md)、[02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md)、[02-components/table.md](./02-components/table.md)、[02-components/tag.md](./02-components/tag.md)、[02-components/tabs.md](./02-components/tabs.md)、[02-components/button.md](./02-components/button.md) |
| 生成可演示页面 / demo / 可点击预览 | [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md) | [docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)、[docs/component-style-library/component_style_library_index.md](./docs/component-style-library/component_style_library_index.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/business-component-reuse-rules.md](./06-vue-code/business-component-reuse-rules.md)、[06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md)、[06-vue-code/component-reading-order-rules.md](./06-vue-code/component-reading-order-rules.md)、[06-vue-code/deprecated-class-blacklist.md](./06-vue-code/deprecated-class-blacklist.md)、[02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md)、对应组件文档、[07-checklists/ai-output.md](./07-checklists/ai-output.md) |
| 生成 Vue 页面代码 / 工程代码 | [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md) | 对应页面规范、[02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md)、对应组件语义文档、[07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) |
| 检查设计输出 / 前端实现 | [ROLE.md](./ROLE.md)、[DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)、[07-checklists/design-review.md](./07-checklists/design-review.md)、[07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) | 对应页面、基础、组件语义、组件样式库和代码生成规范 |

---

## 8. 完整文档清单

### 8.0 角色与总入口

- [ROLE.md](./ROLE.md)
- [SKILL.md](./SKILL.md)
- [INDEX.md](./INDEX.md)
- [DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)

### 8.1 基础规范

- [01-foundation/overview.md](./01-foundation/overview.md)
- [01-foundation/layout.md](./01-foundation/layout.md)
- [01-foundation/color.md](./01-foundation/color.md)
- [01-foundation/typography.md](./01-foundation/typography.md)
- [01-foundation/tokens.md](./01-foundation/tokens.md)
- [01-foundation/shadow.md](./01-foundation/shadow.md)

### 8.2 组件语义规范

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

### 8.3 交互规范

- [03-interaction/platform-frame.md](./03-interaction/platform-frame.md)
- [03-interaction/page-container.md](./03-interaction/page-container.md)
- [03-interaction/navigation.md](./03-interaction/navigation.md)
- [03-interaction/list-search.md](./03-interaction/list-search.md)
- [03-interaction/list-table.md](./03-interaction/list-table.md)
- [03-interaction/form-entry.md](./03-interaction/form-entry.md)
- [03-interaction/permission-state.md](./03-interaction/permission-state.md)

### 8.4 页面规范

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

### 8.5 HTML 演示与 Vue 代码生成

- [06-vue-code/skill.md](./06-vue-code/skill.md)
- [06-vue-code/reference.md](./06-vue-code/reference.md)
- [06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)
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

### 8.6 组件样式库

- [docs/component-style-library/component_style_library_index.md](./docs/component-style-library/component_style_library_index.md)
- [docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)

### 8.7 验收清单

- [07-checklists/design-review.md](./07-checklists/design-review.md)
- [07-checklists/ai-output.md](./07-checklists/ai-output.md)
- [07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md)

---

## 9. AI 读取原则

- 不要一次性读取所有文件。
- 任何 B 端页面生成、优化、检查、HTML Demo 或 Vue 工程代码任务，默认先读取 [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)。
- 基于本套 GitHub / 本仓库规范生成任何后台页面、HTML demo、Vue 页面、页面截图或高保真界面时，默认必须优先读取并完整套用 [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)。
- 生成可演示页面、demo、可点击预览时，必须读取组件样式库、组件映射、业务组件复用、组件 CSS 注入、读取顺序规则和旧 class 黑名单，不能只读取 02 组件文档。
- 只有当用户明确指定“基于双层导航框架 / 双层顶部导航 / 双层导航页面”时，才读取并完整套用 [06-vue-code/templates/double-nav-frame.html](./06-vue-code/templates/double-nav-frame.html)。
- 只有当用户明确要求“自定义导航框架”时，才允许不使用默认单层导航框架母版。
- 生成具体页面前，应读取 [04-pages/overview.md](./04-pages/overview.md) 判断页面类型和最小读取路径。
- 固定底层框架不可改动，只允许替换 Logo 占位、业务文案、菜单数据、mock 数据和母版指定业务内容区内的内容。
- 涉及组件语义、使用场景、状态要求时，读取 [02-components/component-doc-boundary.md](./02-components/component-doc-boundary.md) 与对应 02 组件文档。
- 涉及组件真实 class / CSS / HTML Demo 实现时，读取 [docs/component-style-library/backend_ai_ui_component_kit_with_index.html](./docs/component-style-library/backend_ai_ui_component_kit_with_index.html)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/business-component-reuse-rules.md](./06-vue-code/business-component-reuse-rules.md)、[06-vue-code/component-style-import-rules.md](./06-vue-code/component-style-import-rules.md)、[06-vue-code/component-reading-order-rules.md](./06-vue-code/component-reading-order-rules.md)、[06-vue-code/deprecated-class-blacklist.md](./06-vue-code/deprecated-class-blacklist.md)。
- 涉及视觉基础、Token、投影或响应式时，读取 [01-foundation/layout.md](./01-foundation/layout.md)、[01-foundation/tokens.md](./01-foundation/tokens.md)、[01-foundation/shadow.md](./01-foundation/shadow.md)。
- 涉及图标、图标按钮、操作 icon 或状态 icon 时，读取 [02-components/icon.md](./02-components/icon.md)。
- 只有明确要求 Vue 代码、前端代码、工程代码或接入项目时，才读取完整 Vue 代码生成规则并输出 Vue 代码。
- 每个文档应尽量自包含，AI 读到当前文档即可完成主要判断。