# 组件规范总览
## Components Overview

Keywords: components, ant design vue, backend components, ui states, p6, migrated components

本文定义后台产品组件使用原则，并作为上传包组件细节迁移后的主入口。Vue 代码生成时优先使用 Ant Design Vue，HTML 预览文件应模拟同样的结构、层级和交互状态。

## 1. 主色统一策略

所有品牌主色、主按钮、链接型操作、focus ring、hover 强调、选中态统一使用：

```text
p6 #00AB7A 科技绿
```

规则：

- 普通主按钮：default `p6`、hover `p5`、active `p7`。
- 链接、文字按钮、表格行操作默认使用 `p6` 或 `p7`。
- 选中态优先使用 `p1` 浅绿底 + `p7` 文字。
- 蓝色只保留为 `info` 信息语义色，不再作为品牌主色。
- AI 渐变如需使用，也必须以科技绿系为主，不得恢复蓝色主色。

## 2. 组件原则

- 组件样式、尺寸、状态和交互在同一产品内保持一致。
- 优先使用成熟组件，不手写低保真替代物。
- 组件状态必须完整，包括 default、hover、active、disabled、loading、empty、error、focus。
- 状态表达不能只依赖颜色，必须保留文字或图标说明。
- 组件视觉应服务于任务效率，不应过度装饰。
- 动效统一遵循 [motion.md](./motion.md)。

## 3. 组件分类

| 类别 | 组件文档 | 主要用途 |
|---|---|---|
| 全局状态 | [motion.md](./motion.md) | hover、focus、open、close、loading 等动效基线 |
| 操作组件 | [button.md](./button.md) | 主按钮、次按钮、图标按钮、AI 按钮、危险按钮 |
| 数据录入 | [input.md](./input.md)、[textarea.md](./textarea.md)、[select.md](./select.md)、[checkbox.md](./checkbox.md)、[radio.md](./radio.md)、[switch.md](./switch.md)、[form.md](./form.md) | 收集、选择、校验数据 |
| 导航切换 | [tabs.md](./tabs.md)、[pagination.md](./pagination.md) | 页签切换、分页浏览 |
| 数据展示 | [table.md](./table.md)、[tag.md](./tag.md)、[icon.md](./icon.md) | 表格、标签、状态、图标 |
| 反馈组件 | [alert.md](./alert.md)、[toast-message.md](./toast-message.md)、[feedback.md](./feedback.md) | 页面提示、轻量消息、异常反馈 |
| 基础适配 | [ant-design-vue.md](./ant-design-vue.md)、[component-size.md](./component-size.md) | Ant Design Vue 适配与尺寸矩阵 |

## 4. 迁移后的使用顺序

生成或检查组件时，建议按以下顺序读取：

```text
02-components/overview.md
→ 02-components/component-size.md
→ 02-components/motion.md
→ 对应组件文档
→ 07-checklists/frontend-acceptance.md
```

列表页优先读取：

```text
02-components/table.md
02-components/tag.md
02-components/pagination.md
02-components/checkbox.md
02-components/button.md
```

表单页优先读取：

```text
02-components/form.md
02-components/input.md
02-components/textarea.md
02-components/select.md
02-components/radio.md
02-components/checkbox.md
02-components/switch.md
02-components/button.md
```

## 5. AI / Vue / HTML 生成要求

- Vue 页面优先使用 Ant Design Vue 对应组件。
- HTML 预览必须模拟组件状态，不允许只展示静态默认态。
- 颜色、圆角、字号、投影优先调用 Token，不散写硬编码。
- 主色全部使用科技绿 `p6 #00AB7A`。
- 危险操作必须确认，异步操作必须 loading，异常状态必须给出下一步。
