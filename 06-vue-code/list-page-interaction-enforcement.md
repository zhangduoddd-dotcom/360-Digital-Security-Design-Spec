# 列表页交互规范强制落地补充
## List Page Interaction Enforcement

Keywords: list page, interaction enforcement, html demo, vue codegen, acceptance checklist

本文用于补充约束列表页生成时“读取交互文档后必须落地”的执行规则。

## 1. 定位

AI 生成列表页、HTML Demo 或 Vue 页面代码时，不得只读取页面类型文档和交互文档后直接生成。

读取 `03-interaction/list-search.md`、`03-interaction/list-table.md` 和 `07-checklists/frontend-acceptance.md` 后，必须将其中的规则转换为当前页面内部验收清单。

## 2. 读取不等于完成

以下行为均不视为完成：

- 只声明已读取列表页文档。
- 只生成“搜索区 + 表格 + 分页”的粗结构。
- 只静态展示表格，不实现可点击交互。
- 只实现搜索和分页，省略排序、列筛选、固定列、勾选联动等交互。
- 以“正式 Vue 工程再实现”为理由降低 HTML Demo 交互能力。

## 3. 列表页必须通过的验收来源

列表页必须同时通过以下文档验收：

```text
03-interaction/list-search.md
03-interaction/list-table.md
07-checklists/frontend-acceptance.md
```

任一当前页面适用的硬性项缺失，视为生成失败，必须补齐后再交付。

## 4. HTML Demo 不得降级

HTML Demo 是交互验证文件，不是静态截图。

列表页 HTML Demo 至少必须可验证：

- 搜索与清空。
- 搜索 loading。
- 空状态。
- 分页切换。
- 每页条数切换。
- 表头排序切换。
- 列筛选弹层。
- 行勾选。
- 勾选后展示 `已选 N 项`。
- 未勾选时批量按钮禁用。
- 禁用按钮 hover 展示 Tooltip。
- 首列和操作列固定的视觉表达。
- 行 hover 高亮。
- 行操作“更多”菜单。
- 删除、停用等风险操作二次确认。
- Toast 成功 / 失败反馈。

## 5. 输出前自检

输出前必须逐项检查：

- 是否把列表页交互文档转换为当前页面验收清单。
- 是否落实搜索区强制验收清单。
- 是否落实表格区强制验收清单。
- 是否落实 `frontend-acceptance.md` 的列表页专项验收清单。
- 是否存在静态展示替代交互落地的情况。
- 是否存在“读取了但没有实现”的情况。

只要当前页面适用的交互验收项未落地，禁止交付最终 HTML 或 Vue 页面代码。
