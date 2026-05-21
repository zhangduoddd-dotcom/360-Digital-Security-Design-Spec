# 组件运行时契约
## Component Runtime Contract

Keywords: component runtime, html demo, component manifest, snippet file, component dom, component css, token

本文是 AI 生成 HTML Demo 时组件实现规则的唯一运行时契约。它只回答一个问题：页面里真实可运行的组件 DOM、class、CSS 和 Token 应该从哪里来、如何成对进入最终 HTML。

## 0. 当前组件定位入口

当前组件定位入口为：

```text
docs/component-style-library/component_snippet_manifest.json
```

当前稳定 DOM 复制入口为：

```text
docs/component-style-library/snippets/*.html
```

当前组件 CSS / Token 来源为：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

生成 HTML Demo 时，必须先读取 manifest，使用 manifest 中的 `snippetFile` 复制稳定 DOM，再根据 `cssScopes` 和 `tokens` 从组件样式库中抽取或校验对应 CSS 与 Token。

如果 manifest 中没有某个组件入口，或该组件没有 `snippetFile`，该组件不得作为稳定基础组件使用；只能标注为“组件样式库待补齐组件”，并补充最小可用样式。

## 1. 职责边界

本文负责：

- 规定基础组件 DOM / class / CSS / Token 的运行时来源。
- 规定 manifest、snippet 文件、组件库 HTML 的读取顺序。
- 规定组件抽取、注入、替换、追加业务 class 的顺序。
- 规定旧 class、私有组件 class、自造组件结构的拦截规则。

本文不负责：

- 定义组件语义、适用场景和状态含义；这些归 `02-components/component-semantic-boundary.md` 与 `02-components/*.md`。
- 定义页面布局、信息层级和交互流程；这些归 `04-pages/` 和 `03-interaction/`。

## 2. 执行顺序

生成 HTML Demo 时必须按以下顺序处理组件：

```text
1. 继承 HTML 框架母版。
2. 判断当前页面需要哪些基础组件。
3. 读取 component_snippet_manifest.json。
4. 根据组件 key 找到 snippetFile、snippetId、requiredClasses、cssScopes、tokens、states。
5. 复制 snippetFile 中 SNIPPET_START / SNIPPET_END 边界内的 DOM。
6. 从组件样式库抽取或校验同一组件对应 CSS 与依赖 Token。
7. 替换业务文案、字段、mock 数据、placeholder、title、aria 文案。
8. 在真实组件 DOM 上追加业务修饰 class。
9. 追加页面业务 CSS，只处理布局、间距、宽度和局部业务修饰。
10. 输出前检查 DOM / CSS / Token / snippetFile 是否成对存在。
```

## 3. 成对抽取规则

只要最终 HTML 使用某个基础组件，就必须同时满足：

```text
manifest 组件 key
+ snippetFile
+ snippetId
+ snippet 文件边界内的真实组件 DOM
+ requiredClasses
+ 对应组件 CSS scope
+ 依赖 Token
```

只复制 CSS 后手写 DOM、只写 `.ant-*` class 后自行拼结构、根据 `02-components/` 的语义说明反推 HTML 结构，都不算通过。

## 4. 可替换与必须保留

可替换：

- 业务文案、字段名、mock 数据、表格列名、数据值。
- placeholder、title、aria 文案。
- 状态文案和业务标签文案。
- 追加业务修饰 class。

必须保留：

- snippet 中的组件基础 DOM 层级。
- snippet 中的真实基础 class。
- 组件状态节点。
- 组件 CSS scope。
- 依赖 Token。
- 组件原有交互所需的必要节点和属性。

## 5. CSS 注入顺序

最终 HTML 的样式顺序必须是：

```text
1. 框架母版 CSS
2. 组件样式库 CSS / 未来单组件 CSS
3. 当前页面业务 CSS
```

页面业务 CSS 只能补充业务区域布局、间距、宽度、对齐和局部业务修饰，不得重写基础组件视觉系统。

## 6. 待补齐组件处理

manifest 中 `pendingComponents` 标注的组件为待补齐组件。使用这些组件时必须：

- 在生成说明中标注“组件样式库待补齐组件”。
- 只补充最小可用结构和最小可用样式。
- 不把临时写法沉淀为标准基础组件。
- 后续应优先补入组件样式库、snippet 文件和 manifest。

## 7. 旧 class 快速拦截

旧 class 完整排查清单只作为诊断工具读取：

```text
06-vue-code/deprecated-class-blacklist.md
```

输出前必须确认没有命中该清单中的旧别名 class 或页面私有组件 class。

## 8. 输出前检查

交付 HTML Demo 前必须确认：

- 已继承指定 HTML 母版。
- 已读取 `component_snippet_manifest.json`。
- 已读取所需 `snippets/*.html` 文件。
- 已读取组件样式库 HTML 作为 CSS / Token 来源。
- 所有已使用基础组件都有 manifest key、snippetFile 和 snippetId。
- 所有已使用基础组件 DOM 均来自对应 snippetFile。
- 所有已使用基础组件都有对应 CSS scope 和 Token。
- 业务 class 只是追加，不替代基础组件 class。
- 页面业务 CSS 没有重造基础组件样式。
- 未命中旧 class 清单。
- 已通过 `07-checklists/html-demo-acceptance.md`。