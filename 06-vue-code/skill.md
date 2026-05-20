# Vue 代码生成 Skill
## Vue Code Generation Skill

Keywords: vue codegen, typescript, ant design vue, preview html, html demo, backend, ant class, component css injection

本文用于约束 AI 生成 Vue 页面代码和 HTML 可演示页面时的默认读取顺序、技术栈和交付物。

## 0. 执行边界

生成 HTML Demo 或 Vue 页面代码时，必须先遵循仓库总入口：

```text
ROLE.md
SKILL.md
DOCS-STRUCTURE.md
INDEX.md
```

本文是 `06-vue-code/` 子入口，只负责 HTML Demo 和 Vue 代码生成阶段的实现规则，不替代总入口、页面规范、组件语义规范或验收清单。

## 1. 默认技术栈

正式 Vue 工程代码默认技术栈：

```text
Vue 3 + TypeScript + Ant Design Vue + Composition API + <script setup lang="ts">
```

可演示页面默认交付形态：

```text
单文件 HTML + CSS + JavaScript + mock 数据
```

## 2. 默认交付物

### 2.1 生成可演示页面 / demo / 可点击预览

当用户要求生成页面 demo、可演示页面、可点击预览、高保真演示环境或 HTML 预览时，默认只输出：

```text
可直接打开预览的 HTML 文件
```

HTML 文件必须能直接打开，支持基础点击交互，不依赖构建工具，不请求真实接口。

### 2.2 生成 Vue 代码 / 工程代码

当用户明确要求生成 Vue 代码、前端代码、工程代码、接入项目或 Vue3 + TypeScript + Ant Design Vue 页面时，输出：

```text
1. Vue 3 + TypeScript + Ant Design Vue 页面代码
2. 如用户未排除，补充可直接打开预览的 HTML 文件
```

HTML 文件用于设计预览和快速调整，不替代正式 Vue 工程代码。

## 3. 判断原则

- “演示、demo、预览、可点击、高保真演示环境”默认走 HTML 预览。
- “代码、工程、Vue、组件、接入项目、TypeScript”默认走 Vue 代码 + HTML 预览。
- 用户明确只要 HTML 时，不输出 Vue。
- 用户明确只要 Vue 时，可以不输出 HTML。
- 不得因为存在 Vue 技术栈，就跳过 HTML Demo 的组件样式验证。

## 4. HTML Demo 必读文件

生成 HTML Demo 时，必须读取：

```text
ROLE.md
SKILL.md
DOCS-STRUCTURE.md
INDEX.md
06-vue-code/templates/README.md
06-vue-code/templates/common-single-nav.html 或 06-vue-code/templates/double-nav-frame.html
04-pages/overview.md
对应页面规范
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
docs/component-style-library/component_style_library_index.md
06-vue-code/preview-html.md
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
02-components/component-doc-boundary.md
02-components/overview.md
对应 02-components 组件语义文档
07-checklists/ai-output.md
```

禁止只读取 `02-components/` 后自行推导 HTML class。

## 5. Vue 工程代码必读文件

生成 Vue 页面代码 / 工程代码时，必须读取：

```text
ROLE.md
SKILL.md
DOCS-STRUCTURE.md
INDEX.md
06-vue-code/codegen-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/antdv-adapter.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-reading-order-rules.md
02-components/component-doc-boundary.md
对应 02-components 组件语义文档
07-checklists/frontend-acceptance.md
```

Vue 代码生成时以 Ant Design Vue 组件为主，不手写低保真替代组件。

## 6. HTML Demo 组件实现规则

HTML Demo 不强制真实引入 Ant Design Vue，但必须模拟 Ant Design Vue 的结构、状态和视觉。

基础组件 class 必须来自组件样式库真实 `.ant-*` 体系：

```text
.ant-btn
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

禁止使用旧别名或私有组件 class：

```text
.btn
.btn-primary
.form-input
.search-input
.select
.data-table
.tag
.tag-status
.status-tag
.pagination
alert-button
alert-table
alert-input
```

业务 class 只能追加修饰：

```html
<button class="ant-btn ant-btn-primary threat-action-btn">批量处置</button>
<div class="ant-table-wrapper threat-alert-table">
  <table class="ant-table ant-table-compact"></table>
</div>
<span class="ant-tag ant-tag-error risk-high">高危</span>
<div class="ant-pagination table-pagination"></div>
```

## 7. HTML Demo 样式注入规则

最终 HTML 的 `<style>` 必须按以下顺序组织：

```text
1. 框架母版 CSS
2. 组件样式库 CSS
3. 当前页面业务 CSS
```

规则：

- 框架 CSS 来自 `06-vue-code/templates/*.html`。
- 组件 CSS 来自 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html`。
- 页面业务 CSS 只能补充布局、列宽、间距和业务修饰。
- 只要最终 HTML 使用 `.ant-*` class，就必须存在对应 CSS 定义。
- 不得只复制框架母版 CSS，却在业务区直接写 `.ant-btn`、`.ant-table`、`.ant-tag`。
- 不得把组件 CSS 放在页面业务 CSS 之后，避免业务样式误覆盖基础状态。

## 8. 02-components 使用规则

`02-components/` 只作为组件语义、状态和交互规则来源，不作为 HTML Demo 的真实 class / CSS 来源。

读取 `02-components` 前，必须先读取：

```text
02-components/component-doc-boundary.md
06-vue-code/component-reading-order-rules.md
```

如果 `02-components` 与组件样式库或组件映射冲突：

```text
class / CSS / DOM 结构：以组件样式库和 component-style-code-map.md 为准。
组件语义 / 使用场景 / 状态要求：以 02-components 为准。
```

## 9. 输出前自检

HTML Demo 输出前必须检查：

- 是否完整复制对应 HTML 母版。
- 是否保留母版 DOM、CSS、JS、iconfont、hover、active、open、collapsed 和响应式规则。
- 是否读取组件样式库和组件映射规则。
- 是否读取 `business-component-reuse-rules.md`。
- 是否读取 `component-style-import-rules.md`。
- 是否读取 `component-reading-order-rules.md`。
- 是否读取 `02-components/component-doc-boundary.md`。
- 业务组件是否使用真实 `.ant-*` class。
- 最终 HTML 中使用的 `.ant-*` class 是否有对应 CSS。
- 是否存在 `.btn`、`.form-input`、`.data-table`、`.tag-status`、`.pagination` 等旧别名基础 class。
- 是否存在 `.alert-button`、`.alert-table`、`.alert-input` 等私有重造组件样式。
- 页面业务 CSS 是否只做局部修饰，没有重写基础组件。
- 是否包含 loading、empty、error、success、confirm 等必要状态。

## 10. 冲突优先级

当多个文档之间存在冲突时，按以下优先级判断：

```text
1. 页面框架：以 06-vue-code/templates/*.html 为准。
2. 组件 class / CSS：以 docs/component-style-library/backend_ai_ui_component_kit_with_index.html 为准。
3. 组件 class 映射：以 06-vue-code/component-style-code-map.md 为准。
4. 业务组件复用：以 06-vue-code/business-component-reuse-rules.md 为准。
5. 组件 CSS 注入：以 06-vue-code/component-style-import-rules.md 为准。
6. 组件读取顺序：以 06-vue-code/component-reading-order-rules.md 为准。
7. 组件语义和状态：以 02-components/*.md 为准。
8. 页面结构：以 04-pages/*.md 为准。
9. 输出验收：以 07-checklists/*.md 为准。
```