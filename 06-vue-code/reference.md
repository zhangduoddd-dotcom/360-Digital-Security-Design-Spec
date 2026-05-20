# Vue 代码引用索引
## Vue Code Reference

Keywords: vue reference, document routing, page pattern, interaction, backend

本文用于帮助 AI 在生成 Vue 页面代码时快速判断应读取哪些页面规范和交互规范。

## 1. 通用必读

```text
SKILL.md
INDEX.md
06-vue-code/skill.md
06-vue-code/codegen-rules.md
06-vue-code/preview-html.md
07-checklists/frontend-acceptance.md
```

## 2. 页面类型引用表

工作台读 `04-pages/dashboard.md`；列表页读 `04-pages/list-page.md`、`03-interaction/list-search.md`、`03-interaction/list-table.md`、`06-vue-code/list-page-interaction-enforcement.md`、`07-checklists/frontend-acceptance.md`；表单页读 `04-pages/form-page.md`、`03-interaction/form-entry.md`；详情页读 `04-pages/detail-page.md` 和页面容器规则；用户管理读列表、表格和表单规则。

## 3. 列表页强制落地规则

生成列表页时，读取 `03-interaction/list-search.md` 和 `03-interaction/list-table.md` 不等于完成。

必须同时读取并执行：

```text
06-vue-code/list-page-interaction-enforcement.md
07-checklists/frontend-acceptance.md
```

列表页必须通过搜索区、表格区和最终验收清单的逐项检查；任一当前页面适用的硬性项未落地时，不得交付。
