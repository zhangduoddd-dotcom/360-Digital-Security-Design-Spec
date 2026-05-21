# 已降级：组件实现映射历史入口
## Historical Component Mapping Entry

本文件不再作为 AI 生成 HTML Demo 的运行时必读文件。

组件语义到实现的运行时规则已收敛为两处：

```text
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
```

当前组件真实 DOM / class / CSS / Token 来源仍为：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

保留本文件仅用于历史链接兼容和排查旧文档引用。

AI 生成或检查 HTML Demo 时：

- 需要组件实现，读取 `component-runtime-contract.md` 与组件样式库。
- 需要组件语义，读取 `component-semantic-boundary.md` 与对应 `02-components/*.md`。
- 不得继续从本文维护组件映射、class 映射或 CSS 映射。

未来如果组件代码被逐个拆分，并新增组件调用清单，组件清单应成为“组件定位入口”；运行时规则仍归 `component-runtime-contract.md`，语义边界仍归 `component-semantic-boundary.md`。
