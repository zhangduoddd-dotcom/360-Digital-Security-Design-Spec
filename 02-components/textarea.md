# 文本域规范
## Textarea Rules

Keywords: textarea, multiline input, character count, validation

本文迁移自上传包 `references/component-styles/textarea.txt`，用于约束多行文本输入、备注、描述、规则说明等场景。

## 0. 使用边界

本文只定义 Textarea 的语义、使用场景、状态要求和交互规则，不作为 HTML Demo 的真实 DOM / class / CSS / Token 来源。

Textarea 当前在 `component_snippet_manifest.json` 中仍属于 `pendingComponents`。生成 HTML Demo 时不得把 Textarea 当作稳定基础组件；确需使用时，必须按 `component-runtime-contract.md` 的待补齐组件规则标注“组件样式库待补齐组件”，并只补充最小可用结构和最小可用样式。

## 1. 使用场景

- 备注、描述、说明、规则内容。
- 需要多行输入的表单字段。
- AI Prompt、处置建议、审核意见等长文本。

## 2. 尺寸规范

| 类型 | 推荐尺寸 | 字号 / 行高 | 圆角 |
|---|---|---|---:|
| 常规文本域 | 200 × 100px 起 | 14px / 22px | 6px 或 8px |
| 带字数统计 | 高度增加 22px 左右 | 14px / 22px | 6px 或 8px |
| 大段编辑 | 宽度随容器，高度 160px+ | 14px / 22px | 8px |

## 3. 状态要求

必须覆盖：

```text
Default / Hover / Focus / Filled / Disabled / Error / Character Count / Resize
```

- focus 使用 `p6` 边框与 focus ring。
- error 必须有错误文案。
- 字数统计放在右下角或底部辅助区。
- 禁用态不可编辑，文字与边框弱化。

## 4. 交互规则

- 支持最大字数限制时必须展示计数。
- 字数超限应阻止继续输入或给出错误提示。
- resize 默认按业务场景控制，后台表单中不建议用户任意横向拉伸。
- 长文本提交时必须有 loading 与失败反馈。

## 5. HTML Demo 生成要求

组件语义可参考 Ant Design / Ant Design Vue 的同名 Textarea 组件，但本 Skill 不输出 Vue 代码。

HTML Demo 需要模拟 focus、error、disabled、字数统计和超限提示。由于 Textarea 当前为待补齐组件，生成时只能使用最小可用 fallback，不得把临时 DOM / CSS 沉淀为标准基础组件。