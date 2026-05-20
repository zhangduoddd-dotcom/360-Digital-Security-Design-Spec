# 组件 DOM 抽取规则

## 1. 定位

本文定义 HTML Demo 中基础组件 DOM 的来源规则，用于降低业务区组件结构发散。

## 2. 核心规则

生成 HTML Demo 时，Button、Input、Select、Table、Tag、Pagination、Toast 等基础组件，应从组件样式库中抽取真实 DOM、对应 CSS 与依赖 Token。

组件样式库来源：

docs/component-style-library/backend_ai_ui_component_kit_with_index.html

基础组件实现应满足：真实 DOM + 对应 CSS + 依赖 Token 成对出现。

只引用 .ant-* class，但没有使用组件样式库中的真实 DOM 结构，不应视为完成组件复用。

## 3. 可替换内容

抽取真实 DOM 后，可以替换业务文案、字段名称、mock 数据、表格列名、数据值、状态文案、placeholder、title、aria 文案，并可以追加业务修饰 class。

## 4. 保留内容

组件基础 DOM 层级、真实 .ant-* 基础 class、组件状态节点、组件 CSS、依赖 Token 应保持与组件样式库一致。

## 5. 生成顺序

1. 复制 HTML 框架母版。
2. 判断页面需要的基础组件。
3. 从组件样式库抽取组件 DOM。
4. 从组件样式库抽取组件 CSS。
5. 同步抽取依赖 Token。
6. 替换业务文案、字段和 mock 数据。
7. 追加业务修饰 class。
8. 追加页面业务布局 CSS。
9. 执行旧 class 黑名单检查。
10. 执行 DOM、CSS、Token 成对检查。

## 6. 待补齐组件

如果组件样式库中尚未提供稳定 DOM，例如 Alert、Drawer、Modal，应标注为“组件样式库待补齐组件”，并只补充最小可用样式。

## 7. 输出前检查

- 是否读取组件样式库。
- 是否抽取业务所需组件 DOM。
- 是否抽取业务所需组件 CSS。
- 是否同步抽取依赖 Token。
- 是否只替换业务文案、字段、mock 数据和业务修饰 class。
- 是否执行 06-vue-code/deprecated-class-blacklist.md。
- 是否执行 06-vue-code/component-style-import-rules.md。

只要 DOM、CSS、Token 没有成对抽取，就需要先修正再交付 HTML Demo。