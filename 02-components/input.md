# 输入框规范
## Input Rules

Keywords: input, form control, validation, focus, p6

本文迁移自上传包 `references/component-styles/input.txt`，用于约束后台页面中的单行输入框、搜索框和带操作输入框。

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

## 6. Vue / HTML 生成要求

Vue 使用 `a-input`、`a-input-search` 或 `a-input-password`。HTML 预览需要模拟 placeholder、hover、focus、filled、disabled、error、clearable 和搜索触发。