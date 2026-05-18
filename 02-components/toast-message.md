# 消息提示规范
## Toast / Message Rules

Keywords: toast, message, feedback, notification, p6

本文迁移自上传包 `references/component-styles/toast-message.txt`，用于约束页面级和操作级轻量提示。

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

## 5. Vue / HTML 生成要求

Vue 使用 `a-message` 或 `a-notification`。HTML 预览需要模拟 info、success、warning、error 和消失动画。