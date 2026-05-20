# 业务组件复用基础 HTML 样式硬约束
## Business Component Reuse Rules

Keywords: html demo, component reuse, ant class, business component, style inheritance, css injection, dom extraction

## 0. 最高优先级

业务组件复用不是只写 `.ant-*` class，而是必须同时满足：

```text
组件库真实 DOM + 真实 .ant-* class + 对应组件 CSS + 依赖 Token + 不命中旧 class 黑名单。
```

如果 DOM 不是从组件样式库抽取的，即使 class 和 CSS 看起来正确，也视为未通过规范。

## 1. 问题背景

生成 HTML Demo 时，不能只继承顶部导航、左侧菜单、页头和页面容器。右侧业务内容区里的按钮、输入框、选择器、表格、标签、分页器、提示信息等基础组件，也必须复用组件样式库中真实存在、可生效的 DOM、class 与 CSS。

组件样式库来源：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

## 2. 总原则

生成页面时必须同时做到：

1. 页面外壳继承 `06-vue-code/templates/` 中的 HTML 母版。
2. 业务组件 DOM 从组件样式库抽取。
3. 业务组件 CSS 从组件样式库抽取。
4. 依赖 Token 同步抽取。
5. 页面私有 class 只能作为命名空间、布局钩子或业务修饰类追加，不能替代基础组件 class。
6. 禁止使用 `06-vue-code/deprecated-class-blacklist.md` 中列出的旧别名 class 或页面私有组件 class。
7. 缺少业务场景样式时，只能在基础组件 class 上做少量扩展，不能复制一套新的组件样式。

必须执行：

```text
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/deprecated-class-blacklist.md
```

## 3. 必须复用的基础组件来源

| 组件类型 | 真实基础 class | 复用要求 |
|---|---|---|
| 按钮 | `.ant-btn` 系列 | DOM、CSS、Token 从组件样式库抽取 |
| 输入框 | `.ant-input` / `.ant-input-affix-wrapper` | DOM、CSS、Token 从组件样式库抽取 |
| 下拉选择 | `.ant-select` 系列 | DOM、CSS、Token 从组件样式库抽取 |
| 表格 | `.ant-table-wrapper` / `.ant-table` | DOM、CSS、Token 从组件样式库抽取 |
| 标签 | `.ant-tag` 系列 | DOM、CSS、Token 从组件样式库抽取 |
| 分页器 | `.ant-pagination` 系列 | DOM、CSS、Token 从组件样式库抽取 |
| Toast / Message | `.toast-holder` / `.toast` | DOM、CSS、Token 从组件样式库抽取 |

Alert、Modal、Drawer 若组件样式库尚未提供稳定 DOM，应标注为“组件样式库待补齐组件”，只补充最小可用样式，不得伪装成已完整沉淀的基础组件。

## 4. 业务修饰规则

业务语义 class 只能追加在组件库真实基础 class 之后，用于布局、宽度、业务状态或局部修饰。

本文不提供手写基础组件 DOM 示例。基础组件 DOM 必须从组件样式库抽取。

允许修改：

```text
业务文案
字段名称
mock 数据
表格列名和数据值
状态文案
placeholder / title / aria 文案
业务修饰 class
```

不应修改：

```text
组件基础 DOM 层级
真实 .ant-* 基础 class
组件状态节点
组件 CSS
依赖 Token
```

## 5. CSS 扩展边界

允许新增：

- 页面整体布局 class。
- 业务区模块 class。
- 特定字段宽度。
- 表格列宽或内容密度微调。
- 业务状态修饰类。
- 局部布局间距。
- 样式库尚未覆盖组件的最小补充样式。

不允许新增：

- 与基础组件同义的新按钮、输入框、选择器、表格、标签、分页器样式。
- 用黑名单文件中的旧别名 class 或页面私有组件 class 替代真实 `.ant-*` class。
- 用页面业务 CSS 临时重写一套组件样式来代替组件样式库 CSS。

## 6. 生成前必须完成组件映射

生成 HTML Demo 前，AI 必须先完成组件映射：

| 业务模块 | 组件类型 | DOM 来源 | CSS 来源 | Token 来源 | 业务修饰 |
|---|---|---|---|---|---|
| 搜索区 | Input / Select / Button | 组件样式库 | 组件样式库 | 组件样式库 | 仅补布局 |
| 工具栏 | Button | 组件样式库 | 组件样式库 | 组件样式库 | 仅补间距 |
| 数据表格 | Table / Tag / Action Button | 组件样式库 | 组件样式库 | 组件样式库 | 仅补列宽 |
| 分页区 | Pagination | 组件样式库 | 组件样式库 | 组件样式库 | 仅补对齐 |
| 反馈区 | Toast / Message | 组件样式库 | 组件样式库 | 组件样式库 | 仅补触发逻辑 |

未完成 DOM、CSS、Token 来源确认，不得直接生成 HTML。

## 7. 输出前检查规则

输出 HTML Demo 前必须检查：

- [ ] 是否完整继承 HTML 母版。
- [ ] 业务内容是否只进入母版业务内容区。
- [ ] 是否执行 `component-dom-extraction-rules.md`。
- [ ] 是否执行 `component-style-import-rules.md`。
- [ ] 是否执行 `deprecated-class-blacklist.md`。
- [ ] Button / Input / Select / Table / Tag / Pagination / Toast 是否均来自组件样式库 DOM。
- [ ] 已使用组件是否均有对应 CSS 和 Token。
- [ ] 页面业务 class 是否只是追加修饰，而不是替代基础组件 class。

只要业务组件 DOM 没有从组件样式库抽取，或 CSS / Token 没有成对出现，必须先修正后再交付。

## 8. 与其他文档的关系

执行优先级：

```text
HTML 母版
→ docs/component-style-library/backend_ai_ui_component_kit_with_index.html
→ component-dom-extraction-rules.md
→ component-style-import-rules.md
→ component-style-code-map.md
→ business-component-reuse-rules.md
→ deprecated-class-blacklist.md
→ 02-components 组件规范
→ 页面规范
→ 页面私有业务样式
```

如果 Markdown 文字规范与可运行组件样式库 Demo 存在差异，涉及页面框架时以 `06-vue-code/templates/` 母版为准，涉及组件 DOM、class 与状态细节时以组件样式库为准。