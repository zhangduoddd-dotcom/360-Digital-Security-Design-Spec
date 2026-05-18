# 选择器规范
## Select Rules

Keywords: select, dropdown, multiple select, option, loading, p6

本文迁移自上传包 `references/component-styles/select.txt`，用于约束 Select、TreeSelect、Cascader 等选择型组件。

## 1. 使用场景

- 从有限选项中选择一个或多个值。
- 筛选区下拉选择。
- 表单中的枚举、分类、状态、归属对象选择。
- 层级数据选择可使用 Cascader 或 TreeSelect。

## 2. 尺寸规范

| 尺寸 | 高度 | 字号 / 行高 | 圆角 | 场景 |
|---|---:|---|---:|---|
| sm | 24px | 12px / 20px | 4px | 紧凑筛选、表格行内 |
| default | 32px | 14px / 22px | 6px | 后台默认选择器 |
| lg | 40px | 16px / 28px | 8px | 低密度表单、重点选择 |

默认宽度建议 200px；多选场景需预留标签换行或横向滚动策略。

## 3. 状态要求

必须覆盖：

```text
Default / Hover / Focus / Open / Selected / Disabled / Loading / Empty / Error / Multiple
```

- focus 使用 `p6` 边框与 focus ring。
- 选中项使用科技绿语义，不使用蓝色主色。
- loading 需要明确加载中状态。
- empty 需要显示“暂无数据”或可操作提示。
- error 必须有错误文案。

## 4. 下拉面板规则

- 下拉面板宽度不小于触发器宽度。
- 选项高度默认 32px，可按密度调整。
- hover 使用浅灰底，文字可使用 `p7`。
- selected 使用 `p1` 浅绿底 + `p7` 文字。
- 选项过长使用省略号，必要时 Tooltip。
- 选项数量多时必须支持搜索或分组。

## 5. 多选规则

- 多选标签不应无限撑高页面。
- 超出可折叠为 `+N` 或使用 maxTagCount。
- 标签删除按钮需要 hover 状态。
- 禁用选项不可点击。

## 6. Vue / HTML 生成要求

Vue 使用 `a-select`、`a-tree-select`、`a-cascader`。HTML 预览需要模拟打开、关闭、hover、selected、多选、删除标签、loading、empty 和 error 状态。