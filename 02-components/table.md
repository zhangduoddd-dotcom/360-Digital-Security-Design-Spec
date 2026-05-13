# 表格组件规范
## Table Component Rules

Keywords: table, data table, columns, row action, pagination, backend

本文定义后台页面中的表格、卡片、标签、徽标、描述列表、时间轴等数据展示组件规则。

## 1. 表格基础规则

| 项目 | 规则 |
|---|---|
| 布局 | 默认采用百分比或弹性布局 |
| 表头 | 单位统一放在表头内，表头文本不建议换行 |
| 字段顺序 | 按业务重要程度和强相关性从左到右排列 |
| 首列 | 通常为主信息列 |
| 对齐 | 名称、链接、信息、日期、姓名、操作左对齐；数据类右对齐 |
| 文本溢出 | 单行文本超出后省略，hover 出现 Tooltip |
| 空数据 | 显示空状态，保留表头 |
| 操作列 | 操作过多时使用“更多”或下拉 |

## 2. 表格状态

表格必须支持 loading、empty、error、hover、selected、disabled、pagination。空值统一展示为 `-`。状态标签必须文字和颜色同时表达。

## 3. 卡片、标签与描述列表

卡片用于 Dashboard、项目、模板、任务等信息聚合。标签用于属性、状态、等级展示。描述列表用于详情页只读字段展示，字段过多时应分组。

## 4. 代码生成要求

Vue 代码使用 `a-table`，必须包含 columns、dataSource、rowKey、loading、empty、pagination 和操作列。HTML 预览文件应支持搜索、分页、状态标签、行操作和删除确认。