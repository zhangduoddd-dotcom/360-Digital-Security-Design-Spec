# 输入框规范
## Input Rules

Keywords: input, form control, validation, focus, p6, semantic component rules

本文迁移自上传包 `references/component-styles/input.txt`，用于约束后台页面中的单行输入框、搜索框和带操作输入框。

## 0. 使用边界

本文只定义输入框的语义、使用场景、状态要求和交互规则，不作为 HTML Demo 的真实 DOM / class / CSS / Token 来源。

HTML Demo 中输入框真实 DOM / class / CSS / Token 必须以以下文件为准：

```text
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/snippets/*.html
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
```

如果本文与组件样式库存在冲突，以组件样式库中的 `.ant-input`、`.ant-input-affix-wrapper`、`.ant-input-status-error` 等真实 class 为准。禁止根据本文自行生成 `.form-input`、`.search-input`、`.alert-input` 等旧别名或私有输入框 class。

## 1. 使用场景

- 搜索关键词、名称、IP、域名、账号、编号等短文本输入。
- 表单字段录入。
- 表格筛选区轻量查询。
- 带前后缀、清除、复制、校验的输入场景。

## 2. 尺寸规范

| 尺寸 | 高度 | 字号 / 行高 | 圆角 | 场景 |
|---|---:|---|---:|---|
| sm | 24px | 12px / 20px | 4px | 表格行内、紧凑筛选 |
| default | 32px | 14px / 22px | 6px | 后台默认输入 |
| lg | 40px | 16px / 28px | 8px | 重点输入、低密度表单 |

默认宽度建议 200px；长字段按栅格或容器宽度自适应。

## 3. 状态要求

输入框必须覆盖：

```text
Default / Hover / Focus / Filled / Disabled / Error / Success / Loading / Clearable
```

| 状态 | 规则 |
|---|---|
| default | 白底，`gray-5` 边框 |
| hover | 边框增强，可使用 `p5` |
| focus | `p6` 边框 + 2px focus ring |
| filled | 保持正常文字色 |
| disabled | 浅灰底，禁用文字 |
| error | 错误色边框 + 错误说明 |
| clearable | 有内容时 hover 显示清除按钮 |

## 4. 搜索输入

- 搜索框可带搜索 icon。
- 搜索按钮应使用普通主色 `p6`。
- 回车可触发查询。
- 重置按钮使用次级按钮。
- 不要把搜索框做成大面积视觉中心，除非是搜索型页面。

## 5. 校验规则

- 错误态必须提供明确文案，不只显示红色边框。
- 字段限制需要说明格式、长度或范围。
- 实时校验不应频繁打断输入，可在 blur 或提交时校验。

## 6. HTML Demo 生成要求

组件语义可参考 Ant Design / Ant Design Vue 的同名单行输入、搜索输入和密码输入组件，但本 Skill 不输出 Vue 代码。

HTML Demo 需要模拟 placeholder、hover、focus、filled、disabled、error、clearable 和搜索触发。输入框 DOM 必须复制 manifest 指向的 snippet，并使用组件样式库真实 `.ant-input` / `.ant-input-affix-wrapper` 体系，最终 HTML 必须按 `component-runtime-contract.md` 注入对应 `.ant-input` CSS / Token。