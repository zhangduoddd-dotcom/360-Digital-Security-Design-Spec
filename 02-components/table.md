# 表格规范
## Table Rules

Keywords: table, data table, column type, row action, batch action, pagination, p6, semantic component rules

本文合并上传包 `table` 组件细节，并保留主线仓库的数据展示规范方向。表格是 B 端列表页的核心组件，必须优先保证查找效率、判断效率和处理效率。

## 0. 使用边界

本文只定义表格的语义、信息组织、列类型、状态要求和交互规则，不作为 HTML Demo 的真实 class / CSS 来源。

HTML Demo 中表格真实 class 与 CSS 必须以以下文件为准：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
```

如果本文与组件样式库存在冲突，以组件样式库中的 `.ant-table-wrapper`、`.ant-table`、`.ant-table-compact`、`.ant-table-toolbar`、`.ant-table-cell-actions`、`.ant-table-empty`、`.ant-table-loading`、`.ant-table-error` 等真实 class 为准。禁止根据本文自行生成 `.data-table`、`.alert-table`、`.risk-table` 等旧别名或私有表格 class。

## 1. 使用场景

- 结构化数据列表。
- 支持搜索、筛选、排序、分页。
- 支持批量选择和行级操作。
- 需要快速识别状态、风险、对象属性。

不适合表格的场景：营销展示、纯指标看板、少量卡片式对象浏览。

## 2. 基础结构

```text
TableContainer
├── Toolbar / 批量操作区
├── Table
│   ├── Header
│   ├── Body Rows
│   └── Empty / Loading / Error
└── Pagination
```

## 3. 尺寸与密度

| 项目 | 规范 |
|---|---|
| 表头高度 | 40px 或 48px，按组件样式库密度规范执行 |
| 表格行高 | 40px 紧凑 / 48px 常规 |
| 表格字号 | 12px 或 14px |
| 表头背景 | `gray-2 / gray-3` 浅灰 |
| 单元格 padding | 横向 12px 左右 |
| 分割线 | `gray-4` 细线 |
| 空值 | 统一显示 `-` |

规则：表格可密但不能乱；首屏应展示核心字段、状态、操作列和分页；列较多时使用横向滚动，不强行压缩到不可读。

## 4. 列类型

| 列类型 | 用途 | 规则 |
|---|---|---|
| 选择列 | 批量操作 | 首列 Checkbox，支持全选当前页 |
| 序号列 | 编号展示 | 固定宽度，居中 |
| 主信息列 | 名称、对象、标题 | 左对齐，可带链接或图标 |
| 文本列 | 普通属性 | 单行省略，hover Tooltip |
| 数字列 | 数量、金额、比例 | 右对齐，格式统一 |
| 时间列 | 创建时间、更新时间 | 统一 `YYYY-MM-DD HH:mm:ss` |
| 状态列 | 状态、结果 | 文字 + 颜色共同表达 |
| 标签列 | 属性、分类 | 使用 Tag 规范，不堆叠过多彩色标签 |
| 操作列 | 查看、编辑、删除等 | 置于最右，低频收进更多 |
| 展开列 | 补充信息 | 仅承载轻量详情，不承载复杂编辑 |

## 5. 表头规则

- 表头文字简短，不建议换行。
- 单位统一放在表头中，例如“流量（MB）”。
- 可排序列显示排序状态。
- 可筛选列显示筛选入口。
- 表头操作图标必须有 hover 与 Tooltip。

## 6. 行状态

| 状态 | 规则 |
|---|---|
| default | 白底，正常文字 |
| hover | 浅灰底，不改变行高 |
| selected | 浅绿底或选中标识，Checkbox checked |
| disabled | 弱化文字，不允许操作 |
| loading | 骨架或 loading，不闪烁 |
| error | 展示错误说明或重试入口 |
| empty | 保留表头，显示空状态 |

## 7. 行操作

- 高频操作 1–3 个直接展示。
- 低频操作放入“更多”。
- 操作链接统一使用科技绿 `p6 #00AB7A`，hover 使用 `p5` 或 `p7`。
- 删除、禁用、重置、覆盖必须二次确认。
- 操作列固定在最右侧，横向滚动时建议固定。

## 8. 批量操作

- 选中后展示“已选 N 项”。
- 未选中时批量按钮禁用。
- 批量删除、导出、禁用必须说明影响范围。
- 跨页选择必须明确“当前页”还是“全部结果”。

## 9. 文本溢出

- 单行文本超出显示省略号。
- hover 展示 Tooltip 查看完整内容。
- 长 URL、IP、Hash、路径类字段可提供复制操作。
- 复制成功使用 Toast / Message 反馈。

## 10. 分页衔接

表格底部必须衔接 Pagination：

```text
共 N 条 / 每页条数 / 页码 / 上一页下一页 / 跳页
```

数据极少时可隐藏分页，但需要明确规则。

## 11. 卡片、统计、描述与时间轴

表格之外的数据展示仍遵循：

- 卡片承载一组相关信息，可点击卡片必须有 hover 状态。
- 统计数值需明确单位、口径和变化方向。
- 描述列表按用户理解路径分组，不按接口字段机械平铺。
- 时间轴必须展示时间、操作者、动作和结果。
- Tooltip 只承载短说明；Popover 可承载简短详情和轻量操作。

## 12. 动效约束

- 行 hover 150ms。
- 展开行 200ms，使用高度或 opacity 轻量过渡。
- 表格不要使用大面积动效，避免影响阅读效率。

## 13. Vue / HTML 生成要求

Vue 使用 `a-table`，必须包含 `rowKey`、loading、empty、pagination、columns、dataSource。选择列使用 `rowSelection`。操作列危险操作必须确认。

HTML 预览需要模拟 loading、empty、error、hover、selected、pagination、勾选联动和复制反馈。HTML 预览的表格 DOM 必须使用组件样式库真实 `.ant-table-wrapper` + `.ant-table` 体系，并确保最终 HTML 已注入对应 `.ant-table` CSS。