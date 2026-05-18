# 多选框规范
## Checkbox Rules

Keywords: checkbox, checkbox group, checked, indeterminate, batch selection

本文迁移自上传包 `references/component-styles/checkbox.txt`，用于约束多选框、半选状态和表格批量选择。

## 1. 使用场景

- 表格批量选择。
- 多项条件筛选。
- 表单多选项。
- 权限、功能、字段配置等树形半选场景。

## 2. 基础尺寸

| 项目 | 规范 |
|---|---|
| 控件尺寸 | 16 × 16px |
| 选项行高 | 22px 或 32px |
| 文本字号 | 14px / 22px |
| 圆角 | 4px |

## 3. 状态要求

必须覆盖：

```text
Unchecked / Hover / Checked / Indeterminate / Disabled / Checked Disabled / Indeterminate Disabled
```

- checked 使用 `p6 #00AB7A`。
- hover 边框可使用 `p5`。
- indeterminate 用于部分选中，必须和 checked 可区分。
- disabled 不响应 hover。

## 4. 分组规则

- 同组多选项间距保持一致。
- 选项过多时可分列或使用搜索。
- 全选必须和子项状态联动。
- 半选状态必须准确表达部分选择。

## 5. 表格选择规则

- 表头 Checkbox 支持全选当前页。
- 选中后展示“已选 N 项”。
- 未选中时批量操作禁用。
- 跨页选择必须明确作用范围。

## 6. Vue / HTML 生成要求

Vue 使用 `a-checkbox`、`a-checkbox-group` 或表格 `rowSelection`。HTML 预览需要模拟 checked、unchecked、indeterminate、disabled、全选联动和批量操作启禁用。