# 组件 Snippet 片段库
## Component Snippet Library

本目录用于承载 AI 生成 HTML Demo 时可直接复制的基础组件 DOM 片段。

## 使用原则

1. 生成业务区时，优先从本目录复制对应 snippet 文件。
2. 不得根据 class 名称自行拼装基础组件 DOM。
3. 复制 snippet 后，只允许替换业务文案、字段、mock 数据、状态文案和追加业务修饰 class。
4. 对应 CSS 与 Token 仍来自 `backend_ai_ui_component_kit_with_index.html` 或后续拆分出的组件 CSS。
5. 每个 snippet 的可用性由 `component_snippet_manifest.json` 统一声明。

## 当前状态

当前片段库先提供常用基础组件的稳定 DOM 入口，后续应逐步从组件样式库中抽取并校准。