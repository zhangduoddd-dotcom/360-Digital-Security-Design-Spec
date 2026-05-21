# 已合并：组件语义边界
## Merged Into Component Semantic Boundary

本文件不再作为 AI 生成 HTML Demo 的运行时或语义必读文件。

有效规则已合并到：

```text
02-components/component-semantic-boundary.md
```

保留本文件仅用于历史链接兼容和排查旧文档引用。

AI 生成或检查 HTML Demo 时：

- 需要组件语义、状态、行为边界，读取 `02-components/component-semantic-boundary.md`。
- 需要组件 DOM / class / CSS / Token 运行时规则，读取 `06-vue-code/component-runtime-contract.md`。
- 不得从本文推导组件真实 DOM、class 或 CSS。

未来如果新增组件调用清单或单组件代码文件，也不要恢复本文为运行时规则入口。
