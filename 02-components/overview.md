# 组件规范总览
## Components Overview

Keywords: components, ant design vue, backend components, ui states, p6, migrated components, semantic rules

本文定义后台产品组件使用原则，并作为上传包组件细节迁移后的主入口。Vue 代码生成时优先使用 Ant Design Vue，HTML 预览文件应模拟同样的结构、层级和交互状态。

## 0. 使用边界

本目录 `02-components/` 只定义组件语义、使用场景、状态要求、交互规则和业务注意事项，不作为 HTML Demo 的真实 class / CSS 来源。

生成 HTML Demo 时，组件真实 class 与 CSS 必须以以下文件为准：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
docs/component-style-library/component_style_library_index.md
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
```

如果本目录中的文字规范与组件样式库中的 `.ant-*` class 或 CSS 存在冲突，以组件样式库为准。

本目录中的组件文档不能直接指导 AI 输出 `.btn`、`.form-input`、`.data-table`、`.tag-status`、`.pagination` 等旧别名 class。HTML Demo 业务组件必须使用组件样式库真实存在的 `.ant-*` class，并确保最终 HTML 已注入对应 CSS。

推荐职责划分：

```text
02-components = 设计语义层 / 状态规则层
component-style-library = 真实样式层 / 可运行 CSS 层
component-style-code-map.md = 语义到真实 class 的映射层
business-component-reuse-rules.md = 防私有样式和旧别名约束层
component-style-import-rules.md = 组件 CSS 注入保障层
```

## 1. 主色统一策略

所有普通品牌主色、主按钮、链接型操作、focus ring、hover 强调、选中态统一使用：

```text
p6 #00AB7A 科技绿
```

规则：

- 普通主按钮：default `p6`、hover `p5`、active `p7`。
- 链接、文字按钮、表格行操作默认使用 `p6` 或 `p7`。
- 选中态优先使用 `p1` 浅绿底 + `p7` 文字。
- 蓝色只保留为 `info` 信息语义色，不再作为普通品牌主色。
- 原有 AI 渐变 Token 保持不变；本次主色统一不改 AI 渐变。

## 2. 组件原则

- 组件样式、尺寸、状态和交互在同一产品内保持一致。
- 优先使用成熟组件，不手写低保真替代物。
- 组件状态必须完整，包括 default、hover、active、disabled、loading、empty、error、focus。
- 状态表达不能只依赖颜色，必须保留文字或图标说明。
- 组件视觉应服务于任务效率，不应过度装饰。
- 动效统一遵循 [motion.md](./motion.md)。
- HTML Demo 的真实组件 class 必须从组件样式库和 `component-style-code-map.md` 获取，不从本文或单个组件 Markdown 中自行推导。

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
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
→ docs/component-style-library/component_style_library_index.md
→ 06-vue-code/component-style-code-map.md
→ 06-vue-code/business-component-reuse-rules.md
→ 06-vue-code/component-style-import-rules.md
→ 02-components/overview.md
→ 02-components/component-size.md
→ 02-components/motion.md
→ 对应组件文档
→ 07-checklists/frontend-acceptance.md
```

列表页优先读取语义规则：

```text
02-components/table.md
02-components/tag.md
02-components/pagination.md
02-components/checkbox.md
02-components/button.md
```

表单页优先读取语义规则：

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

注意：以上 `02-components` 文件只用于理解组件语义、状态和交互，不用于决定 HTML class 名称。

## 5. AI / Vue / HTML 生成要求

- Vue 页面优先使用 Ant Design Vue 对应组件。
- HTML 预览必须模拟组件状态，不允许只展示静态默认态。
- HTML 预览必须使用组件样式库真实 `.ant-*` class，并按 `06-vue-code/component-style-import-rules.md` 注入对应 CSS。
- 颜色、圆角、字号、投影优先调用 Token，不散写硬编码。
- 普通主色全部使用科技绿 `p6 #00AB7A`。
- AI 入口继续使用原有 AI 渐变 Token。
- 危险操作必须确认，异步操作必须 loading，异常状态必须给出下一步。

## 6. 禁止项

- 禁止把本目录当作 HTML Demo 的 class 命名来源。
- 禁止根据本目录文字说明自行创造 `.btn`、`.form-input`、`.data-table`、`.tag-status`、`.pagination` 等旧别名组件 class。
- 禁止在业务页面中新增 `.alert-button`、`.alert-table`、`.alert-input` 等私有组件样式来替代基础组件。
- 禁止只写 `.ant-*` class 但不注入对应组件 CSS。