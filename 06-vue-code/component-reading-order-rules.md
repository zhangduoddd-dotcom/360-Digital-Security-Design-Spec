# 已合并：组件读取顺序
## Merged Component Reading Order

本文件不再作为 AI 生成 HTML Demo 的运行时必读文件。

组件读取顺序已收敛到：

```text
INDEX.md
06-vue-code/component-runtime-contract.md
02-components/component-semantic-boundary.md
```

当前规则：

- `INDEX.md` 决定最小读取 profile。
- `component-runtime-contract.md` 决定组件 DOM / CSS / Token 的运行时抽取顺序。
- `component-semantic-boundary.md` 决定 `02-components/` 的语义读取边界。

保留本文件仅用于历史链接兼容和排查旧文档引用。

AI 生成或检查 HTML Demo 时，不得继续把本文作为读取顺序真源。
