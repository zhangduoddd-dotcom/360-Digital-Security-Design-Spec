# 动效规范
## Motion Rules

Keywords: motion, animation, hover, focus, transition, backend components

本文迁移自上传包 `references/component-styles/motion.txt`，用于统一后台组件的基础动效。动效只用于增强状态反馈，不用于制造装饰性视觉噪音。

## 1. 基础原则

- 动效服务于可理解性，不抢占业务信息。
- 组件必须覆盖 hover、active、focus、open、close、loading 等状态。
- 高密度后台页面避免夸张动效。
- 不使用弹跳、果冻、强缩放、强位移、闪烁等效果。

## 2. 推荐时长

| 场景 | 时长 |
|---|---:|
| hover / active / focus | 150ms |
| Select / Dropdown / Popover 打开关闭 | 200ms |
| Modal / Drawer / Toast 出入场 | 300ms |
| 表格展开行 | 200ms |
| loading 状态切换 | 150–300ms |

## 3. 推荐属性

优先使用：

```text
color / background-color / border-color / box-shadow / opacity / transform: translateY(0-2px)
```

谨慎使用：

```text
height / width / left / top
```

禁止滥用：

```text
large scale / rotate / bounce / shake / flashing
```

## 4. Focus 规则

- focus ring 使用 2px 外描边。
- focus 不改变组件尺寸。
- 键盘可访问组件必须保留 focus 可见状态。
- 错误态 focus 使用错误色描边。

## 5. Vue / HTML 生成要求

- HTML 预览必须体现主要 hover、focus、open、close 状态。
- Vue 代码应使用 CSS transition，不依赖复杂动画库。
- 动效 Token 与组件 Token 保持一致。