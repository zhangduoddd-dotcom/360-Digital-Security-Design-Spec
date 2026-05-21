# 已合并：业务组件复用边界
## Merged Business Component Reuse Boundary

本文件不再作为 AI 生成 HTML Demo 的运行时必读文件。

业务组件复用边界已合并到：

```text
06-vue-code/component-runtime-contract.md
```

语义判断边界已合并到：

```text
02-components/component-semantic-boundary.md
```

保留本文件仅用于历史链接兼容和排查旧文档引用。

AI 生成或检查 HTML Demo 时：

- 基础组件 DOM / class / CSS / Token 必须来自组件样式库或未来组件调用清单指向的真实来源。
- 业务 class 只能追加在真实组件 DOM 上作为局部修饰。
- 组件语义和状态按需读取 `02-components/*.md`，但不得从语义文档反推 DOM / CSS / class。

未来如果新增组件调用清单，业务组件复用关系应写在清单或对应组件事实文件中；运行时规则仍以 `component-runtime-contract.md` 为准。
