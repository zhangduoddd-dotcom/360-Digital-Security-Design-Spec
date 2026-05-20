# Vue 代码生成 Skill
## Vue Code Generation Skill

Keywords: vue codegen, html demo, component dom extraction, component css injection, ant design vue

本文用于约束 AI 生成 Vue 页面代码和 HTML 可演示页面时的默认读取顺序、技术栈和交付物。

## 0. 执行边界

生成 HTML Demo 或 Vue 页面代码时，必须先遵循仓库总入口：

```text
ROLE.md
SKILL.md
DOCS-STRUCTURE.md
INDEX.md
```

本文是 `06-vue-code/` 子入口，只负责 HTML Demo 和 Vue 代码生成阶段的实现规则。

## 1. 默认技术栈

正式 Vue 工程代码默认技术栈：

```text
Vue 3 + TypeScript + Ant Design Vue + Composition API + <script setup lang="ts">
```

可演示页面默认交付形态：

```text
单文件 HTML + CSS + JavaScript + mock 数据
```

## 2. HTML Demo 最高优先级

生成 HTML Demo 时，最高优先级是：

```text
完整继承框架母版
→ 从组件样式库抽取真实组件 DOM
→ 从组件样式库抽取对应 CSS 与依赖 Token
→ 只替换业务文案、字段、mock 数据和业务修饰 class
→ 追加页面业务 CSS
→ 执行旧 class 清单校验
→ 执行输出验收
```

必须满足：

```text
组件库真实 DOM + 真实基础 class + 对应组件 CSS + 依赖 Token 成对出现。
```

只出现 `.ant-*` class、只注入组件 CSS、或根据 class 列表自行拼装近似 DOM，都不算通过。

## 3. HTML Demo 必读文件

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
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
02-components/overview.md
对应 02-components 组件语义文档
07-checklists/ai-output.md
```

## 4. Vue 工程代码必读文件

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
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
对应 02-components 组件语义文档
07-checklists/frontend-acceptance.md
```

Vue 代码生成时以 Ant Design Vue 组件为主，不手写低保真替代组件。

## 5. HTML Demo 组件实现规则

HTML Demo 不强制真实引入 Ant Design Vue，但必须复用组件样式库中的真实组件 DOM、基础 class、CSS 与 Token。

基础组件包括但不限于：

```text
Button
Input / Search
Select
Checkbox
Radio
Tabs
Table
Tag
Pagination
Toast / Message
DatePicker
Tooltip
```

组件 DOM、CSS 与 Token 来源必须是：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

旧别名 class 和页面私有组件 class 统一按以下文件检查：

```text
06-vue-code/deprecated-class-blacklist.md
```

本文不提供手写基础组件 DOM 示例。生成时必须从组件样式库抽取真实 DOM，然后只替换业务文案、字段、mock 数据、状态文案和业务修饰 class。

## 6. HTML Demo 样式注入规则

最终 HTML 的 `<style>` 必须按以下顺序组织：

```text
1. 框架母版 CSS
2. 组件样式库 CSS
3. 当前页面业务 CSS
```

规则：

- 框架 CSS 来自 `06-vue-code/templates/*.html`。
- 组件 DOM、CSS、Token 来自 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html`。
- 页面业务 CSS 只能补充布局、列宽、间距和业务修饰。
- 不得只写 `.ant-*` class 而缺失组件库 DOM。
- 不得只注入组件 CSS 而自行拼装 DOM。
- 不得把组件 CSS 放在页面业务 CSS 之后。

## 7. 02-components 使用规则

`02-components/` 只作为组件语义、状态和交互规则来源，不作为 HTML Demo 的真实 DOM / class / CSS 来源。

读取 `02-components` 前，必须先读取：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
02-components/component-doc-boundary.md
```

如果 `02-components` 与组件样式库或实现规则冲突：

```text
DOM / class / CSS / Token：以组件样式库和 06-vue-code 抽取、映射、注入规则为准。
组件语义 / 使用场景 / 状态要求：以 02-components 为准。
```

## 8. 输出前自检

HTML Demo 输出前必须检查：

- 是否完整复制对应 HTML 母版。
- 是否读取组件样式库。
- 是否读取 `component-dom-extraction-rules.md`。
- 是否读取 `component-style-import-rules.md`。
- 是否读取 `component-style-code-map.md`。
- 是否读取 `business-component-reuse-rules.md`。
- 是否读取 `component-reading-order-rules.md`。
- 是否读取 `deprecated-class-blacklist.md`。
- 是否读取 `02-components/component-doc-boundary.md`。
- 业务组件 DOM 是否来自组件样式库。
- 业务组件 CSS 与 Token 是否来自组件样式库或复用母版同名 Token。
- 最终 HTML 是否没有命中旧 class 清单。
- 页面业务 CSS 是否只做局部修饰。
- 是否包含 loading、empty、error、success、confirm 等必要状态。

只要 DOM、CSS、Token 成对抽取检查或旧 class 清单检查不通过，禁止交付最终 HTML。

## 9. 冲突优先级

```text
1. 页面框架：以 06-vue-code/templates/*.html 为准。
2. 组件 DOM / class / CSS / Token：以 docs/component-style-library/backend_ai_ui_component_kit_with_index.html 为准。
3. 组件 DOM 抽取：以 06-vue-code/component-dom-extraction-rules.md 为准。
4. 组件 CSS / Token 注入：以 06-vue-code/component-style-import-rules.md 为准。
5. 组件映射：以 06-vue-code/component-style-code-map.md 为准。
6. 业务组件复用：以 06-vue-code/business-component-reuse-rules.md 为准。
7. 组件读取顺序：以 06-vue-code/component-reading-order-rules.md 为准。
8. 旧 class 清单：以 06-vue-code/deprecated-class-blacklist.md 为准。
9. 组件语义和状态：以 02-components/*.md 为准。
10. 页面结构：以 04-pages/*.md 为准。
11. 输出验收：以 07-checklists/*.md 为准。
```

## 10. 交互规范落地硬约束

HTML Demo 和 Vue 页面代码都必须落实已读取的交互规范。

生成页面前，必须把页面类型对应的 `03-interaction/*` 文档转换为当前页面内部验收清单。生成页面后，必须逐项自检该验收清单。

对于列表页，至少必须把以下文档转为验收清单：

```text
03-interaction/list-search.md
03-interaction/list-table.md
06-vue-code/list-page-interaction-enforcement.md
07-checklists/frontend-acceptance.md
```

列表页不得只实现“搜索 + 表格 + 分页”的粗结构。排序、筛选、固定列、勾选联动、禁用 Tooltip、loading、empty、confirm、Toast 等均属于必须落地的交互能力。

只要当前页面适用的交互验收项未落地，禁止交付最终 HTML 或 Vue 页面代码。