# 组件运行时契约
## Component Runtime Contract

Keywords: component runtime, html demo, component dom, component css, token, style library, component manifest

本文是 AI 生成 HTML Demo 时组件实现规则的唯一运行时契约。它只回答一个问题：页面里真实可运行的组件 DOM、class、CSS 和 Token 应该从哪里来、如何成对进入最终 HTML。

当前真实组件来源：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

未来如果组件代码被逐个拆分，并新增组件调用清单，清单只作为定位入口；本文仍负责约束 DOM / CSS / Token 的成对抽取和输出验收。

## 1. 职责边界

本文负责：

- 规定基础组件 DOM / class / CSS / Token 的运行时来源。
- 规定组件抽取、注入、替换、追加业务 class 的顺序。
- 规定旧 class、私有组件 class、自造组件结构的禁止规则。
- 兼容未来组件调用清单和单组件代码文件。

本文不负责：

- 定义组件语义、适用场景和状态含义；这些归 `02-components/component-semantic-boundary.md` 与 `02-components/*.md`。
- 维护组件源码；当前源码级来源为组件样式库，未来来源为组件调用清单指向的单组件文件。
- 定义页面布局、信息层级和交互流程；这些归 `04-pages/` 和 `03-interaction/`。

## 2. 执行顺序

生成 HTML Demo 时必须按以下顺序处理组件：

```text
1. 继承 HTML 框架母版。
2. 判断当前页面需要哪些基础组件。
3. 从组件样式库或未来组件调用清单定位组件来源。
4. 抽取真实组件 DOM 与基础 class。
5. 抽取同一组件对应 CSS 与依赖 Token。
6. 替换业务文案、字段、mock 数据、placeholder、title、aria 文案。
7. 在真实组件 DOM 上追加业务修饰 class。
8. 追加页面业务 CSS，只处理布局、间距、宽度和局部业务修饰。
9. 输出前检查 DOM / CSS / Token 是否成对存在。
```

## 3. 成对抽取规则

只要最终 HTML 使用某个基础组件，就必须同时满足：

```text
真实组件 DOM
+ 真实基础 class
+ 对应组件 CSS
+ 依赖 Token
```

禁止只复制 CSS 后手写 DOM。禁止只写 `.ant-*` class 后自行拼结构。禁止根据 `02-components/` 的语义说明反推 HTML 结构。

常见组件包括 Button、Input、Textarea、Select、Checkbox、Radio、Switch、Tabs、Table、Pagination、Tag、Toast / Message、Alert、Modal、Drawer。组件样式库尚未稳定提供的组件，应标记为“组件样式库待补齐组件”，只补充最小可用结构，不把临时写法升级为规范。

## 4. 可替换与必须保留

可替换：

- 业务文案、字段名、mock 数据、表格列名、数据值。
- placeholder、title、aria 文案。
- 状态文案和业务标签文案。
- 追加业务修饰 class。

必须保留：

- 组件基础 DOM 层级。
- 真实基础 class。
- 组件状态节点。
- 组件 CSS。
- 依赖 Token。
- 组件原有交互所需的必要节点和属性。

## 5. CSS 注入顺序

最终 HTML 的样式顺序必须是：

```text
1. 框架母版 CSS
2. 组件样式库 CSS / 未来单组件 CSS
3. 当前页面业务 CSS
```

页面业务 CSS 只能补充业务区域布局、间距、宽度、对齐和局部业务修饰，不得重写一套基础组件视觉系统。

## 6. 禁止项

禁止出现以下做法：

- 用 div 自造 Button、Input、Select、Table、Pagination、Tag 等基础组件。
- 只参考组件样式库视觉，不复用组件样式库结构。
- 用页面私有 class 替代基础组件 class。
- 复制组件 CSS 但自行拼 DOM。
- 使用旧别名 class 或项目私有组件 class 作为基础组件来源。
- 把 `02-components/` 中的组件名称直接转换成 `.xxx-button`、`.xxx-table`、`.xxx-tag`。

## 7. 旧 class 快速拦截

以下 class 命中时必须修正：

```text
.btn
.btn-primary
.form-input
.search-input
.select
.select-panel
.select-option
data-table
.tag
.tag-status
.status-tag
.pagination
alert-button
alert-table
alert-input
```

完整排查清单只作为诊断工具读取：

```text
06-vue-code/deprecated-class-blacklist.md
```

## 8. 未来组件调用清单

当后续新增组件调用清单或单组件代码文件时，推荐职责如下：

```text
组件调用清单：说明有哪些组件、每个组件的入口、变体、状态、依赖 CSS / Token。
单组件文件：承载该组件真实 DOM、CSS、Token、状态片段。
本文：继续约束 AI 如何读取、抽取、替换、注入和验收。
```

新增清单后，不应把运行时规则再次复制到每个组件文件；每个组件文件只描述本组件事实，运行时流程仍以本文为准。

## 9. 输出前检查

交付 HTML Demo 前必须确认：

- 已继承指定 HTML 母版。
- 已读取组件样式库，或未来组件调用清单指向的真实组件来源。
- 所有已使用组件都有对应 DOM / CSS / Token。
- 业务 class 只是追加，不替代基础组件 class。
- 页面业务 CSS 没有重造基础组件样式。
- 未命中旧 class 快速拦截项；需要深度排查时再读取 `deprecated-class-blacklist.md`。
- 已通过 `07-checklists/html-demo-acceptance.md`。
