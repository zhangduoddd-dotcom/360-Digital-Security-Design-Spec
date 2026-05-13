# 文档索引
## Document Index

Keywords: index, ai routing, backend design, vue codegen, ui generation

> 本文件是 AI 读取仓库时的主导航，也方便人工快速跳转查阅。

## 1. 目录地图

| 目录 | 内容 |
|---|---|
| [01-foundation/](./01-foundation/) | 全局设计基础：原则、布局、颜色、字体、Token、投影 |
| [02-components/](./02-components/) | 组件规范：Ant Design Vue、组件尺寸、按钮、表单、表格、反馈 |
| [03-interaction/](./03-interaction/) | 交互规范：页面容器、导航、搜索区、表格区、表单录入、权限状态 |
| [04-pages/](./04-pages/) | 页面规范：工作台、列表页、表单页、详情页、分步流程页、异常页、用户管理、系统设置 |
| [05-ai-image/](./05-ai-image/) | AI 生图：Prompt 规则、页面 Prompt、Negative Prompt、AI 原生平台 |
| [06-vue-code/](./06-vue-code/) | Vue 代码生成：代码规则、工程落地、Ant Design Vue 适配、HTML 预览文件 |
| [07-checklists/](./07-checklists/) | 验收清单：设计走查、AI 输出、前端实现 |

## 2. 任务路由

| 用户任务 | 优先读取 | 辅助读取 |
|---|---|---|
| 查询全局基础规范 | [01-foundation/overview.md](./01-foundation/overview.md) | [01-foundation/layout.md](./01-foundation/layout.md)、[01-foundation/color.md](./01-foundation/color.md)、[01-foundation/tokens.md](./01-foundation/tokens.md)、[01-foundation/shadow.md](./01-foundation/shadow.md) |
| 查询组件规格 / 尺寸 | [02-components/component-size.md](./02-components/component-size.md) | [02-components/button.md](./02-components/button.md)、[02-components/form.md](./02-components/form.md)、[02-components/table.md](./02-components/table.md)、[02-components/feedback.md](./02-components/feedback.md) |
| 生成工作台 UI | [04-pages/dashboard.md](./04-pages/dashboard.md) | [01-foundation/layout.md](./01-foundation/layout.md)、[01-foundation/shadow.md](./01-foundation/shadow.md)、[02-components/component-size.md](./02-components/component-size.md)、[07-checklists/design-review.md](./07-checklists/design-review.md) |
| 生成列表页 UI | [04-pages/list-page.md](./04-pages/list-page.md) | [03-interaction/list-search.md](./03-interaction/list-search.md)、[03-interaction/list-table.md](./03-interaction/list-table.md)、[02-components/component-size.md](./02-components/component-size.md)、[03-interaction/page-container.md](./03-interaction/page-container.md) |
| 生成表单页 UI | [04-pages/form-page.md](./04-pages/form-page.md) | [03-interaction/form-entry.md](./03-interaction/form-entry.md)、[02-components/form.md](./02-components/form.md)、[02-components/component-size.md](./02-components/component-size.md) |
| 生成详情页 UI | [04-pages/detail-page.md](./04-pages/detail-page.md) | [03-interaction/page-container.md](./03-interaction/page-container.md)、[02-components/table.md](./02-components/table.md)、[02-components/component-size.md](./02-components/component-size.md) |
| 生成分步流程页 | [04-pages/step-flow-page.md](./04-pages/step-flow-page.md) | [03-interaction/form-entry.md](./03-interaction/form-entry.md)、[03-interaction/navigation.md](./03-interaction/navigation.md) |
| 生成异常页 | [04-pages/exception-page.md](./04-pages/exception-page.md) | [02-components/feedback.md](./02-components/feedback.md)、[07-checklists/design-review.md](./07-checklists/design-review.md) |
| 生成用户管理页面 | [04-pages/user-management.md](./04-pages/user-management.md) | [04-pages/list-page.md](./04-pages/list-page.md)、[03-interaction/list-table.md](./03-interaction/list-table.md)、[03-interaction/form-entry.md](./03-interaction/form-entry.md)、[02-components/component-size.md](./02-components/component-size.md) |
| 生成系统设置页面 | [04-pages/system-settings.md](./04-pages/system-settings.md) | [04-pages/form-page.md](./04-pages/form-page.md)、[03-interaction/form-entry.md](./03-interaction/form-entry.md)、[02-components/form.md](./02-components/form.md) |
| 生成系统配置页面 | [04-pages/system-config.md](./04-pages/system-config.md) | 按场景选择列表 / 表单 / 详情 / 分步流程规范 |
| 生成导航框架 | [03-interaction/page-container.md](./03-interaction/page-container.md) | [03-interaction/navigation.md](./03-interaction/navigation.md)、[01-foundation/layout.md](./01-foundation/layout.md) |
| 生成 AI 生图 Prompt | [05-ai-image/prompt-rules.md](./05-ai-image/prompt-rules.md) | 对应页面规范、[05-ai-image/negative-prompts.md](./05-ai-image/negative-prompts.md) |
| 生成 AI 原生平台页面 | [05-ai-image/ai-native-platform.md](./05-ai-image/ai-native-platform.md) | [06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)、[07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) |
| 生成 Vue 页面代码 | [06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md) | 对应页面规范、交互规范、[02-components/component-size.md](./02-components/component-size.md)、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md) |
| 生成可直接预览 HTML | [06-vue-code/preview-html.md](./06-vue-code/preview-html.md) | 对应页面规范、[01-foundation/tokens.md](./01-foundation/tokens.md)、[01-foundation/shadow.md](./01-foundation/shadow.md)、[02-components/component-size.md](./02-components/component-size.md) |
| 检查设计输出 | [07-checklists/design-review.md](./07-checklists/design-review.md) | 对应页面、基础、组件和交互规范 |
| 检查前端实现 | [07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) | [06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)、[01-foundation/tokens.md](./01-foundation/tokens.md)、[02-components/component-size.md](./02-components/component-size.md) |

## 3. 完整文档清单

### 3.1 基础规范

- [01-foundation/overview.md](./01-foundation/overview.md)
- [01-foundation/layout.md](./01-foundation/layout.md)
- [01-foundation/color.md](./01-foundation/color.md)
- [01-foundation/typography.md](./01-foundation/typography.md)
- [01-foundation/tokens.md](./01-foundation/tokens.md)
- [01-foundation/shadow.md](./01-foundation/shadow.md)

### 3.2 组件规范

- [02-components/overview.md](./02-components/overview.md)
- [02-components/ant-design-vue.md](./02-components/ant-design-vue.md)
- [02-components/component-size.md](./02-components/component-size.md)
- [02-components/button.md](./02-components/button.md)
- [02-components/form.md](./02-components/form.md)
- [02-components/table.md](./02-components/table.md)
- [02-components/feedback.md](./02-components/feedback.md)

### 3.3 交互规范

- [03-interaction/page-container.md](./03-interaction/page-container.md)
- [03-interaction/navigation.md](./03-interaction/navigation.md)
- [03-interaction/list-search.md](./03-interaction/list-search.md)
- [03-interaction/list-table.md](./03-interaction/list-table.md)
- [03-interaction/form-entry.md](./03-interaction/form-entry.md)
- [03-interaction/permission-state.md](./03-interaction/permission-state.md)

### 3.4 页面规范

- [04-pages/dashboard.md](./04-pages/dashboard.md)
- [04-pages/list-page.md](./04-pages/list-page.md)
- [04-pages/form-page.md](./04-pages/form-page.md)
- [04-pages/detail-page.md](./04-pages/detail-page.md)
- [04-pages/step-flow-page.md](./04-pages/step-flow-page.md)
- [04-pages/exception-page.md](./04-pages/exception-page.md)
- [04-pages/user-management.md](./04-pages/user-management.md)
- [04-pages/system-settings.md](./04-pages/system-settings.md)
- [04-pages/system-config.md](./04-pages/system-config.md)

### 3.5 AI 生图

- [05-ai-image/skill.md](./05-ai-image/skill.md)
- [05-ai-image/prompt-rules.md](./05-ai-image/prompt-rules.md)
- [05-ai-image/page-prompts.md](./05-ai-image/page-prompts.md)
- [05-ai-image/negative-prompts.md](./05-ai-image/negative-prompts.md)
- [05-ai-image/ai-native-platform.md](./05-ai-image/ai-native-platform.md)

### 3.6 Vue 代码生成

- [06-vue-code/skill.md](./06-vue-code/skill.md)
- [06-vue-code/reference.md](./06-vue-code/reference.md)
- [06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)
- [06-vue-code/preview-html.md](./06-vue-code/preview-html.md)
- [06-vue-code/vue-engineering.md](./06-vue-code/vue-engineering.md)
- [06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md)

### 3.7 验收清单

- [07-checklists/design-review.md](./07-checklists/design-review.md)
- [07-checklists/ai-output.md](./07-checklists/ai-output.md)
- [07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md)

## 4. AI 读取原则

- 不要一次性读取所有文件。
- 先判断任务类型，再读取对应目录。
- 先读页面规范，再读交互规范，再读代码或生图规则。
- 生成复杂后台页面时，必须读取 [03-interaction/page-container.md](./03-interaction/page-container.md) 和 [03-interaction/navigation.md](./03-interaction/navigation.md)。
- 涉及视觉基础、Token、投影或响应式时，读取 [01-foundation/layout.md](./01-foundation/layout.md)、[01-foundation/tokens.md](./01-foundation/tokens.md)、[01-foundation/shadow.md](./01-foundation/shadow.md)。
- 涉及组件尺寸、控件高度、圆角、控件状态时，读取 [02-components/component-size.md](./02-components/component-size.md)。
- 涉及 AI 原生平台、多智能体协作、AI 审核、AI 结果应用时，读取 [05-ai-image/ai-native-platform.md](./05-ai-image/ai-native-platform.md) 和 [06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)。
- 每个文档应尽量自包含，AI 读到当前文档即可完成主要判断。
