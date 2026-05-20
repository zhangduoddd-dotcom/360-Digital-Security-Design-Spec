# 按钮规范
## Button Rules

Keywords: button, icon button, primary action, ai button, p6, semantic component rules

本文合并上传包按钮细节，并统一到主线的 Vue / HTML 生成规范。普通品牌主色统一为科技绿 `p6 #00AB7A`，原有 AI 渐变 Token 保持不变。

## 0. 使用边界

本文只定义按钮的语义、使用场景、优先级、状态要求和交互规则，不作为 HTML Demo 的真实 class / CSS 来源。

HTML Demo 中按钮真实 class 与 CSS 必须以以下文件为准：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
```

如果本文与组件样式库存在冲突，以组件样式库中的 `.ant-btn`、`.ant-btn-primary`、`.ant-btn-text`、`.ant-btn-link`、`.ant-btn-ai` 等真实 class 为准。禁止根据本文自行生成 `.btn`、`.btn-primary`、`.alert-button` 等旧别名或私有按钮 class。

## 1. 使用原则

- 一个操作区域只保留一个主按钮。
- 页面级主按钮用于当前页面最重要任务，例如新建、保存、提交、查询。
- 次按钮、辅助按钮、文字按钮用于降低操作权重。
- 低频操作进入“更多”。
- 高风险操作必须二次确认。
- AI 按钮只用于真实 AI 能力入口，不替代普通主按钮。

## 2. 按钮类型

| 类型 | 用途 | 推荐样式 |
|---|---|---|
| Primary | 当前区域最重要操作 | `p6 #00AB7A` 实心背景，白色文字 |
| Outline | 次级但仍较重要操作 | 科技绿描边，透明背景 |
| Secondary | 低优先级操作 | 灰色描边，hover 浅灰底 |
| Text / Ghost | 表格行内或轻量操作 | 科技绿文字，无边框 |
| Icon | 工具栏、行操作、密集区域 | 正方形热区，配 Tooltip |
| Danger | 高风险操作 | 使用错误语义色，并二次确认 |
| AI | 智能生成、AI 分析、重新生成 | 使用原有 AI 三态渐变 Token |

## 3. 尺寸规范

| 尺寸 | 高度 | 内边距 | 字号 / 行高 | 圆角 | 场景 |
|---|---:|---|---|---:|---|
| sm | 24px | 8px | 12px / 20px | 4px 或 6px | 表格行内、密集筛选 |
| default | 32px | 8px 16px | 14px / 22px | 6px 或 8px | 后台默认按钮 |
| lg | 40px | 8px 24px | 16px / 28px | 8px | 表单底部、强引导 |

规则：常规后台页面默认 32px；表格行内优先使用文字按钮或 24px 图标按钮；图标与文字间距统一 4px。

## 4. 普通主色状态

| 状态 | Token | 颜色 / 规则 |
|---|---|---|
| Default | `p6` | `#00AB7A` |
| Hover | `p5` | `#1DB887` |
| Active | `p7` | `#039972` |
| Disabled | `gray-5 / gray-6` | 弱化背景与禁用文字 |
| Focus | `Default focus ring` | 2px 外描边，不改变组件尺寸 |

普通主按钮禁止使用蓝色或 AI 渐变。

## 5. 状态要求

按钮必须覆盖：

```text
Default / Hover / Active / Disabled / Loading / Focus / Danger
```

loading 时阻止重复点击；disabled 不响应 hover 与 active；focus ring 不挤压布局。

## 6. 图标按钮

| 尺寸 | 按钮热区 | 图标视觉尺寸 |
|---|---:|---:|
| sm | 24 × 24px | 14px |
| default | 32 × 32px | 16px |
| lg | 40 × 40px | 16px |

图标语义不清时必须加 Tooltip；行内图标操作不宜超过 3 个；icon 颜色与文字状态同步。

## 7. AI 按钮

AI 按钮只用于智能生成、AI 分析、智能推荐、自动填充、重新生成、应用结果等场景。

- 默认、hover、active 使用 `--color-ai-default / --color-ai-hover / --color-ai-active`。
- AI 渐变沿用原有 Token，不参与本次普通主色替换。
- AI 生成中必须有 loading 状态。
- AI 结果必须支持查看依据、编辑、应用和撤销。

## 8. 动效约束

- hover / active / focus 默认 150ms。
- 只做颜色、边框、阴影过渡。
- 不做整体位移、弹跳、缩放、抖动。

## 9. Vue / HTML 生成要求

Vue 使用 `a-button`，普通主按钮使用 `type="primary"` 并映射到 `p6 #00AB7A`。

HTML 预览必须模拟 default、hover、active、disabled、loading、danger、AI 状态。HTML 预览的按钮 DOM 必须使用组件样式库真实 `.ant-btn` 体系，并确保最终 HTML 已注入对应 `.ant-btn` CSS。