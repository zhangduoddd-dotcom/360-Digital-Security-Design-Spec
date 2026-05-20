# 分页规范
## Pagination Rules

Keywords: pagination, page size, total count, jump page, table, semantic component rules

本文迁移自上传包 `references/component-styles/pagination.txt`，用于约束列表、表格和结果页中的分页组件。

## 0. 使用边界

本文只定义分页的语义、使用场景、状态要求和交互规则，不作为 HTML Demo 的真实 class / CSS 来源。

HTML Demo 中分页真实 class 与 CSS 必须以以下文件为准：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
```

如果本文与组件样式库存在冲突，以组件样式库中的 `.ant-pagination`、`.ant-pagination-item`、`.ant-pagination-item-active`、`.ant-pagination-prev`、`.ant-pagination-next`、`.ant-pagination-options` 等真实 class 为准。禁止根据本文自行生成 `.pagination`、`.alert-pagination` 等旧别名或私有分页 class。

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

Vue 使用 `a-pagination`。

HTML 预览需要模拟页码切换、每页条数切换、上一页下一页、跳页和禁用态。HTML 预览的分页 DOM 必须使用组件样式库真实 `.ant-pagination` 体系，并确保最终 HTML 已注入对应 `.ant-pagination` CSS。