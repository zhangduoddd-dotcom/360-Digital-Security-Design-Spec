# 消息提示规范
## Toast / Message Rules

Keywords: toast, message, feedback, notification, p6

本文迁移自上传包 `references/component-styles/toast-message.txt`，用于约束页面级和操作级轻量提示。

## 0. 使用边界

本文只定义 Toast / Message 的语义、使用场景、状态要求和交互规则，不作为 HTML Demo 的真实 DOM / class / CSS / Token 来源。

HTML Demo 中 Toast / Message 真实 DOM / class / CSS / Token 必须以以下文件为准：

```text
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/snippets/*.html
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
```

如果本文与组件样式库存在冲突，以组件样式库中的 `.toast-holder`、`.toast` 等真实 class 为准。禁止根据本文自行生成 `.message`、`.notification`、`.toast-message` 等旧别名或私有消息提示 class。

## 1. 使用场景

- 成功、失败、信息、警告反馈。
- 提交操作、保存、删除、更新等即时状态。
- 不适合作为主要内容提示。

## 2. 类型

| 类型 | 语义 |
|---|---|
| info | 蓝色信息提示 |
| success | 绿色成功提示 |
| warning | 橙色或黄色提醒 |
| error | 红色错误提示 |

## 3. 时长与动画

- 默认显示 3 秒。
- hover / focus 可保持可见。
- 出入场 150–300ms 过渡。
- 不使用大幅位移或闪烁。

## 4. 使用规则

- 不堆叠太多消息，使用队列或覆盖。
- 信息提示尽量简短。
- 高风险操作或错误提示需配合 Alert 组件。
- Toast / Message 仅作为补充反馈。

## 5. HTML Demo 生成要求

组件语义可参考 Ant Design / Ant Design Vue 的同名 Message 或 Notification 组件，但本 Skill 不输出 Vue 代码。

HTML Demo 需要模拟 info、success、warning、error 和消失动画。Toast / Message DOM 必须复制 manifest 指向的 snippet，并使用组件样式库真实 `.toast-holder` / `.toast` 体系，最终 HTML 必须按 `component-runtime-contract.md` 注入对应 toast CSS / Token。