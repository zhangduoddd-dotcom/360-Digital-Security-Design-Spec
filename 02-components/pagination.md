# 分页规范
## Pagination Rules

Keywords: pagination, page size, total count, jump page, table

本文迁移自上传包 `references/component-styles/pagination.txt`，用于约束列表、表格和结果页中的分页组件。

## 1. 使用场景

- 表格列表结果分页。
- 查询结果分页。
- 卡片列表分页。
- 数据量较大且不适合一次加载的场景。

## 2. 基础结构

```text
共 N 条 / 每页 N 条 / 上一页 / 页码 / 下一页 / 跳至 N 页
```

## 3. 位置规则

- 表格分页位于表格底部，通常右对齐。
- 分页与表格之间保持清晰间距。
- 左侧可展示总数或已选数量。
- 数据极少时可隐藏分页，但规则需要统一。

## 4. 状态要求

必须覆盖：

```text
Default / Hover / Active Page / Disabled / Page Size Change / Jump Page
```

- 当前页使用 `p6` 或 `p7` 高亮。
- 上一页 / 下一页不可用时禁用。
- hover 不改变组件尺寸。
- 页码过多时使用省略号。

## 5. 每页条数

推荐选项：

```text
10 / 20 / 50 / 100
```

默认值根据页面密度确定，普通列表建议 10 或 20，高密数据表可使用 20 或 50。

## 6. Vue / HTML 生成要求

Vue 使用 `a-pagination`。HTML 预览需要模拟页码切换、每页条数切换、上一页下一页、跳页和禁用态。