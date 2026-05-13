# 文档索引
## Document Index

Keywords: index, ai routing, backend design, vue codegen, ui generation

> 本文件是 AI 读取仓库时的主导航。

## 1. 目录地图

```text
01-foundation/     全局设计基础：原则、布局、颜色、字体、Token
02-components/     组件规范：Ant Design Vue、按钮、表单、表格、反馈
03-interaction/    交互规范：页面容器、搜索区、表格区、表单录入、权限状态
04-pages/          页面规范：工作台、列表页、表单页、详情页、用户管理、系统设置
05-ai-image/       AI 生图：Prompt 规则、页面 Prompt、Negative Prompt
06-vue-code/       Vue 代码生成：代码规则、工程落地、Ant Design Vue 适配、HTML 预览文件
07-checklists/     验收清单：设计走查、AI 输出、前端实现
```

## 2. 任务路由

| 用户任务 | 优先读取 | 辅助读取 |
|---|---|---|
| 生成工作台 UI | `04-pages/dashboard.md` | `01-foundation/overview.md`、`07-checklists/design-review.md` |
| 生成列表页 UI | `04-pages/list-page.md` | `03-interaction/list-search.md`、`03-interaction/list-table.md` |
| 生成表单页 UI | `04-pages/form-page.md` | `03-interaction/form-entry.md`、`02-components/form.md` |
| 生成详情页 UI | `04-pages/detail-page.md` | `03-interaction/page-container.md`、`02-components/table.md` |
| 生成用户管理页面 | `04-pages/user-management.md` | `04-pages/list-page.md`、`03-interaction/list-table.md`、`03-interaction/form-entry.md` |
| 生成系统设置页面 | `04-pages/system-settings.md` | `04-pages/form-page.md`、`03-interaction/form-entry.md` |
| 生成系统配置页面 | `04-pages/system-config.md` | 按场景选择列表 / 表单 / 详情规范 |
| 生成 AI 生图 Prompt | `05-ai-image/prompt-rules.md` | 对应页面规范、`05-ai-image/negative-prompts.md` |
| 生成 Vue 页面代码 | `06-vue-code/codegen-rules.md` | 对应页面规范、交互规范、`06-vue-code/preview-html.md` |
| 检查前端实现 | `07-checklists/frontend-acceptance.md` | `06-vue-code/codegen-rules.md` |

## 3. AI 读取原则

- 不要一次性读取所有文件。
- 先判断任务类型，再读取对应目录。
- 先读页面规范，再读交互规范，再读代码或生图规则。
- 每个文档应尽量自包含，AI 读到当前文档即可完成主要判断。