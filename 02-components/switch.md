# 开关规范
## Switch Rules

Keywords: switch, toggle, enabled, disabled, p6

本文迁移自上传包 `references/component-styles/switch.txt`，用于约束开关组件。

## 0. 使用边界

本文只定义 Switch 的语义、使用场景、状态要求和交互规则，不作为 HTML Demo 的真实 DOM / class / CSS / Token 来源。

HTML Demo 中 Switch 真实 DOM / class / CSS / Token 必须以以下文件为准：

```text
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/snippets/*.html
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
```

如果本文与组件样式库存在冲突，以组件样式库中的 `.ant-switch`、`.ant-switch-handle`、`.ant-switch-inner` 等真实 class 为准。禁止根据本文自行生成 `.switch`、`.toggle`、`.status-switch` 等旧别名或私有开关 class。

## 1. 使用场景

- 启用 / 停用某个配置。
- 打开 / 关闭某项功能。
- 立即生效且状态可逆的布尔设置。

不适合使用 Switch 的场景：需要提交后才生效的复杂表单项、高风险不可逆操作、需要多选项解释的场景。

## 2. 尺寸规范

| 尺寸 | 推荐尺寸 | 场景 |
|---|---|---|
| sm | 28 × 16px | 表格行内、密集区域 |
| default | 44 × 22px | 后台默认开关 |
| lg | 56 × 28px | 低密度设置页 |

## 3. 状态要求

必须覆盖：

```text
Off / On / Hover / Active / Disabled / Loading
```

- On 使用 `p6 #00AB7A`。
- Off 使用灰色背景。
- Loading 用于状态切换中，避免重复点击。
- Disabled 不响应 hover 与 click。

## 4. 交互规则

- Switch 表示立即生效，切换后应有反馈。
- 高风险启停需要二次确认，不应直接切换。
- 开关旁应有清晰标签说明含义。
- 表格中的 Switch 需要处理 loading 和失败回滚。

## 5. HTML Demo 生成要求

组件语义可参考 Ant Design / Ant Design Vue 的同名 Switch 组件，但本 Skill 不输出 Vue 代码。

HTML Demo 需要模拟 on、off、hover、disabled、loading、确认切换和失败回滚。Switch DOM 必须复制 manifest 指向的 snippet，并使用组件样式库真实 `.ant-switch` 体系，最终 HTML 必须按 `component-runtime-contract.md` 注入对应 `.ant-switch` CSS / Token。