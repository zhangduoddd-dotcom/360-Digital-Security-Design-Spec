# 已合并：组件运行时契约
## Merged Into Component Runtime Contract

本文件不再作为 AI 生成 HTML Demo 的运行时必读文件。

组件 CSS 注入顺序、Token 成对抽取、页面业务 CSS 边界等有效规则已合并到：

```text
06-vue-code/component-runtime-contract.md
```

保留本文件仅用于历史链接兼容和排查旧文档引用。

AI 生成或检查 HTML Demo 时：

- 不得只读取本文判断组件 CSS。
- 不得只复制 CSS 后自行手写组件 DOM。
- 必须按 `component-runtime-contract.md` 执行 DOM / CSS / Token 成对抽取。

未来如果新增组件调用清单或单组件 CSS 文件，清单只作为定位入口，运行时规则仍以 `component-runtime-contract.md` 为准。
