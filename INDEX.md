# 文档索引
## Document Index

Keywords: index, ai routing, backend design, html demo, vue codegen, ui generation, single navigation frame, double top navigation frame, local security brain frame, role, component mapping

> 本文件是 AI 读取仓库时的主导航，也方便人工快速跳转查阅。

## 0. 角色与执行入口

| 文件 | 内容 |
|---|---|
| [ROLE.md](./ROLE.md) | B 端产品 UI/UX 设计师角色限定：业务目标、用户任务、页面类型、信息层级、交互路径、组件映射、工程落地和输出前自检 |
| [SKILL.md](./SKILL.md) | Skill 总入口：HTML Demo 优先、首次生成硬约束、任务读取顺序、交付物判定 |

任何 B 端页面生成、优化、检查、HTML Demo、Vue 工程代码或 AI 生图 Prompt 任务，默认先读取 `ROLE.md` 与 `SKILL.md`，再按本文件分流。

## 1. 目录地图

| 目录 | 内容 |
|---|---|
| [01-foundation/](./01-foundation/) | 全局设计基础：原则、布局、颜色、字体、Token、投影 |
| [02-components/](./02-components/) | 组件规范：Ant Design Vue、组件尺寸、按钮、输入、选择、表格、分页、标签、反馈、动效 |
| [03-interaction/](./03-interaction/) | 交互规范：页面容器、导航、搜索区、表格区、表单录入、权限状态 |
| [04-pages/](./04-pages/) | 页面规范：总览、工作台、列表页、表单页、详情页、分步流程页、异常页、用户管理、系统设置、系统配置 |
| [05-ai-image/](./05-ai-image/) | AI 生图：Prompt 规则、页面 Prompt、Negative Prompt、AI 原生平台 |
| [06-vue-code/](./06-vue-code/) | HTML 演示与 Vue 代码生成：HTML 预览文件、代码规则、组件样式代码映射、工程落地、Ant Design Vue 适配、固定框架模板 |
| [07-checklists/](./07-checklists/) | 验收清单：设计走查、AI 输出、前端实现 |

## 2. 框架调用优先级

| 场景 | 必须调用 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | [06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html) |
| 用户明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | [06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html) |
| 用户明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | [06-vue-code/templates/double-top-navigation-frame/source.html](./06-vue-code/templates/double-top-navigation-frame/source.html) |
| 用户明确说“本地安全大脑 / 本脑 / 基于本脑框架” | [06-vue-code/templates/local-security-brain-frame/](./06-vue-code/templates/local-security-brain-frame/) |
| 用户明确要求自定义导航框架 | 按用户指定方案处理 |

规则：

```text
单层导航框架是本套 GitHub 的默认 HTML 母版。
当前目录名仍为 terminal-security-frame，但调用语义已更新为“单层导航框架”，不再作为终端业务专属框架理解。
只有用户明确指定“基于双层导航框架 / 双层顶部导航 / 双层导航页面”时，才调用 double-top-navigation-frame/source.html。
只有用户明确要求自定义导航框架时，才不使用单层导航框架母版。
本脑框架是主线中的特定框架变体，仅在用户明确指定“本地安全大脑 / 本脑”时调用。
```

## 3. 任务路由

| 用户任务 | 优先读取 | 辅助读取 |
|---|---|---|
| 任何 B 端页面生成 / 优化 / 检查任务 | [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[INDEX.md](./INDEX.md) | 对应页面规范、组件规范、代码生成规则、验收清单 |
| 生成任何后台页面 / HTML demo / Vue 页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md) | 对应页面规范、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[02-components/icon.md](./02-components/icon.md) |
| 基于单层导航框架 / 单层顶部导航生成页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html) | 对应页面规范、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[02-components/icon.md](./02-components/icon.md) |
| 基于双层导航框架 / 双层顶部导航生成页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/double-top-navigation-frame/source.html](./06-vue-code/templates/double-top-navigation-frame/source.html) | 对应页面规范、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[02-components/icon.md](./02-components/icon.md) |
| 基于本地安全大脑 / 本脑框架生成页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/local-security-brain-frame/README.md](./06-vue-code/templates/local-security-brain-frame/README.md)、[06-vue-code/templates/local-security-brain-frame/](./06-vue-code/templates/local-security-brain-frame/) | 对应页面规范、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[02-components/icon.md](./02-components/icon.md) |
| 查询全局基础规范 | [ROLE.md](./ROLE.md)、[01-foundation/overview.md](./01-foundation/overview.md) | [01-foundation/layout.md](./01-foundation/layout.md)、[01-foundation/color.md](./01-foundation/color.md)、[01-foundation/tokens.md](./01-foundation/tokens.md)、[01-foundation/shadow.md](./01-foundation/shadow.md) |
| 查询组件规格 / 尺寸 | [ROLE.md](./ROLE.md)、[02-components/overview.md](./02-components/overview.md)、[02-components/component-size.md](./02-components/component-size.md) | [02-components/button.md](./02-components/button.md)、[02-components/input.md](./02-components/input.md)、[02-components/select.md](./02-components/select.md)、[02-components/table.md](./02-components/table.md)、[02-components/tag.md](./02-components/tag.md)、[02-components/pagination.md](./02-components/pagination.md)、[02-components/feedback.md](./02-components/feedback.md)、[02-components/motion.md](./02-components/motion.md) |
| 生成工作台 UI | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/dashboard.md](./04-pages/dashboard.md) | [01-foundation/layout.md](./01-foundation/layout.md)、[01-foundation/shadow.md](./01-foundation/shadow.md)、[02-components/component-size.md](./02-components/component-size.md)、[02-components/table.md](./02-components/table.md)、[02-components/tag.md](./02-components/tag.md)、[02-components/button.md](./02-components/button.md)、[02-components/alert.md](./02-components/alert.md)、[02-components/motion.md](./02-components/motion.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[07-checklists/design-review.md](./07-checklists/design-review.md) |
| 生成列表页 UI | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/list-page.md](./04-pages/list-page.md) | [03-interaction/list-search.md](./03-interaction/list-search.md)、[03-interaction/list-table.md](./03-interaction/list-table.md)、[02-components/component-size.md](./02-components/component-size.md)、[02-components/table.md](./02-components/table.md)、[02-components/tag.md](./02-components/tag.md)、[02-components/pagination.md](./02-components/pagination.md)、[02-components/checkbox.md](./02-components/checkbox.md)、[02-components/button.md](./02-components/button.md)、[02-components/motion.md](./02-components/motion.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[03-interaction/page-container.md](./03-interaction/page-container.md) |
| 生成表单页 UI | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/form-page.md](./04-pages/form-page.md) | [03-interaction/form-entry.md](./03-interaction/form-entry.md)、[02-components/form.md](./02-components/form.md)、[02-components/input.md](./02-components/input.md)、[02-components/textarea.md](./02-components/textarea.md)、[02-components/select.md](./02-components/select.md)、[02-components/radio.md](./02-components/radio.md)、[02-components/checkbox.md](./02-components/checkbox.md)、[02-components/switch.md](./02-components/switch.md)、[02-components/button.md](./02-components/button.md)、[02-components/alert.md](./02-components/alert.md)、[02-components/motion.md](./02-components/motion.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成详情页 UI / 详情抽屉 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/detail-page.md](./04-pages/detail-page.md) | [03-interaction/page-container.md](./03-interaction/page-container.md)、[02-components/table.md](./02-components/table.md)、[02-components/tag.md](./02-components/tag.md)、[02-components/tabs.md](./02-components/tabs.md)、[02-components/button.md](./02-components/button.md)、[02-components/alert.md](./02-components/alert.md)、[02-components/motion.md](./02-components/motion.md)、[02-components/component-size.md](./02-components/component-size.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成分步流程页 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/step-flow-page.md](./04-pages/step-flow-page.md) | [03-interaction/form-entry.md](./03-interaction/form-entry.md)、[03-interaction/navigation.md](./03-interaction/navigation.md)、[02-components/input.md](./02-components/input.md)、[02-components/select.md](./02-components/select.md)、[02-components/button.md](./02-components/button.md)、[02-components/alert.md](./02-components/alert.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成异常页 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/exception-page.md](./04-pages/exception-page.md) | [02-components/feedback.md](./02-components/feedback.md)、[02-components/alert.md](./02-components/alert.md)、[02-components/button.md](./02-components/button.md)、[07-checklists/design-review.md](./07-checklists/design-review.md) |
| 生成用户管理页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/user-management.md](./04-pages/user-management.md) | [04-pages/list-page.md](./04-pages/list-page.md)、[04-pages/form-page.md](./04-pages/form-page.md)、[04-pages/detail-page.md](./04-pages/detail-page.md)、[03-interaction/list-table.md](./03-interaction/list-table.md)、[02-components/table.md](./02-components/table.md)、[02-components/form.md](./02-components/form.md)、[02-components/input.md](./02-components/input.md)、[02-components/select.md](./02-components/select.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成系统设置页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/system-settings.md](./04-pages/system-settings.md) | [04-pages/form-page.md](./04-pages/form-page.md)、[03-interaction/form-entry.md](./03-interaction/form-entry.md)、[02-components/form.md](./02-components/form.md)、[02-components/input.md](./02-components/input.md)、[02-components/select.md](./02-components/select.md)、[02-components/switch.md](./02-components/switch.md)、[02-components/button.md](./02-components/button.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成系统配置页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/system-config.md](./04-pages/system-config.md) | 按场景选择列表 / 表单 / 详情 / 分步流程规范，并读取对应组件文档与 [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成导航框架 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[06-vue-code/templates/double-top-navigation-frame/source.html](./06-vue-code/templates/double-top-navigation-frame/source.html) | [03-interaction/page-container.md](./03-interaction/page-container.md)、[03-interaction/navigation.md](./03-interaction/navigation.md)、[01-foundation/layout.md](./01-foundation/layout.md) |
| 生成 AI 生图 Prompt | [ROLE.md](./ROLE.md)、[05-ai-image/prompt-rules.md](./05-ai-image/prompt-rules.md)、[04-pages/overview.md](./04-pages/overview.md) | 对应页面规范、[05-ai-image/negative-prompts.md](./05-ai-image/negative-prompts.md) |
| 生成 AI 原生平台页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[05-ai-image/ai-native-platform.md](./05-ai-image/ai-native-platform.md) | [06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) |
| 生成可演示页面 / demo / 可点击预览 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) | 对应页面规范、交互规范、[01-foundation/tokens.md](./01-foundation/tokens.md)、[01-foundation/shadow.md](./01-foundation/shadow.md)、[02-components/component-size.md](./02-components/component-size.md)、对应组件文档、[02-components/icon.md](./02-components/icon.md)、[07-checklists/ai-output.md](./07-checklists/ai-output.md) |
| 生成 Vue 页面代码 / 工程代码 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md) | 对应页面规范、交互规范、[02-components/component-size.md](./02-components/component-size.md)、对应组件文档、[02-components/icon.md](./02-components/icon.md)、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) |
| 检查设计输出 | [ROLE.md](./ROLE.md)、[04-pages/overview.md](./04-pages/overview.md)、[07-checklists/design-review.md](./07-checklists/design-review.md) | [06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、对应页面、基础、组件和交互规范 |
| 检查前端实现 | [ROLE.md](./ROLE.md)、[07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) | [06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md)、[01-foundation/tokens.md](./01-foundation/tokens.md)、[02-components/component-size.md](./02-components/component-size.md) |

## 4. 完整文档清单

### 4.0 角色与总入口

- [ROLE.md](./ROLE.md)
- [SKILL.md](./SKILL.md)
- [INDEX.md](./INDEX.md)

### 4.1 基础规范

- [01-foundation/overview.md](./01-foundation/overview.md)
- [01-foundation/layout.md](./01-foundation/layout.md)
- [01-foundation/color.md](./01-foundation/color.md)
- [01-foundation/typography.md](./01-foundation/typography.md)
- [01-foundation/tokens.md](./01-foundation/tokens.md)
- [01-foundation/shadow.md](./01-foundation/shadow.md)

### 4.2 组件规范

- [02-components/overview.md](./02-components/overview.md)
- [02-components/ant-design-vue.md](./02-components/ant-design-vue.md)
- [02-components/component-size.md](./02-components/component-size.md)
- [02-components/motion.md](./02-components/motion.md)
- [02-components/button.md](./02-components/button.md)
- [02-components/icon.md](./02-components/icon.md)
- [02-components/form.md](./02-components/form.md)
- [02-components/input.md](./02-components/input.md)
- [02-components/textarea.md](./02-components/textarea.md)
- [02-components/select.md](./02-components/select.md)
- [02-components/checkbox.md](./02-components/checkbox.md)
- [02-components/radio.md](./02-components/radio.md)
- [02-components/switch.md](./02-components/switch.md)
- [02-components/tabs.md](./02-components/tabs.md)
- [02-components/table.md](./02-components/table.md)
- [02-components/pagination.md](./02-components/pagination.md)
- [02-components/tag.md](./02-components/tag.md)
- [02-components/alert.md](./02-components/alert.md)
- [02-components/toast-message.md](./02-components/toast-message.md)
- [02-components/feedback.md](./02-components/feedback.md)

### 4.3 交互规范

- [03-interaction/platform-frame.md](./03-interaction/platform-frame.md)
- [03-interaction/page-container.md](./03-interaction/page-container.md)
- [03-interaction/navigation.md](./03-interaction/navigation.md)
- [03-interaction/list-search.md](./03-interaction/list-search.md)
- [03-interaction/list-table.md](./03-interaction/list-table.md)
- [03-interaction/form-entry.md](./03-interaction/form-entry.md)
- [03-interaction/permission-state.md](./03-interaction/permission-state.md)

### 4.4 页面规范

- [04-pages/overview.md](./04-pages/overview.md)
- [04-pages/dashboard.md](./04-pages/dashboard.md)
- [04-pages/list-page.md](./04-pages/list-page.md)
- [04-pages/form-page.md](./04-pages/form-page.md)
- [04-pages/detail-page.md](./04-pages/detail-page.md)
- [04-pages/step-flow-page.md](./04-pages/step-flow-page.md)
- [04-pages/exception-page.md](./04-pages/exception-page.md)
- [04-pages/user-management.md](./04-pages/user-management.md)
- [04-pages/system-settings.md](./04-pages/system-settings.md)
- [04-pages/system-config.md](./04-pages/system-config.md)

### 4.5 AI 生图

- [05-ai-image/skill.md](./05-ai-image/skill.md)
- [05-ai-image/prompt-rules.md](./05-ai-image/prompt-rules.md)
- [05-ai-image/page-prompts.md](./05-ai-image/page-prompts.md)
- [05-ai-image/negative-prompts.md](./05-ai-image/negative-prompts.md)
- [05-ai-image/ai-native-platform.md](./05-ai-image/ai-native-platform.md)

### 4.6 HTML 演示与 Vue 代码生成

- [06-vue-code/skill.md](./06-vue-code/skill.md)
- [06-vue-code/reference.md](./06-vue-code/reference.md)
- [06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)
- [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)
- [06-vue-code/preview-html.md](./06-vue-code/preview-html.md)
- [06-vue-code/vue-engineering.md](./06-vue-code/vue-engineering.md)
- [06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md)
- [06-vue-code/templates/platform-frame/](./06-vue-code/templates/platform-frame/)
- [06-vue-code/templates/local-security-brain-frame/](./06-vue-code/templates/local-security-brain-frame/)
- [06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)
- [06-vue-code/templates/double-top-navigation-frame/source.html](./06-vue-code/templates/double-top-navigation-frame/source.html)

### 4.7 验收清单

- [07-checklists/design-review.md](./07-checklists/design-review.md)
- [07-checklists/ai-output.md](./07-checklists/ai-output.md)
- [07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md)

## 5. AI 读取原则

- 不要一次性读取所有文件。
- 任何 B 端页面生成、优化、检查、HTML Demo、Vue 工程代码或 AI 生图 Prompt 任务，默认先读取 [ROLE.md](./ROLE.md) 与 [SKILL.md](./SKILL.md)。
- 基于本套 GitHub / 本仓库规范生成任何后台页面、HTML demo、Vue 页面、页面截图或高保真界面时，默认必须优先读取并完整套用 [06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)。
- 当前 `terminal-security-frame/` 目录名保留不变，但调用语义是“单层导航框架”，不再作为终端业务专属框架理解。
- 只有当用户明确指定“基于双层导航框架 / 双层顶部导航 / 双层导航页面”时，才读取并完整套用 [06-vue-code/templates/double-top-navigation-frame/source.html](./06-vue-code/templates/double-top-navigation-frame/source.html)。
- 只有当用户明确指定“本地安全大脑 / 本脑 / 基于本脑框架”时，才读取 [06-vue-code/templates/local-security-brain-frame/](./06-vue-code/templates/local-security-brain-frame/)。
- 只有当用户明确要求“自定义导航框架”时，才允许不使用单层导航框架母版。
- 生成具体页面前，应读取 [04-pages/overview.md](./04-pages/overview.md) 判断页面类型和最小读取路径。
- 固定底层框架不可改动，只允许替换 Logo 占位、业务文案、菜单数据和 `.platform-page-content` 内的业务内容。
- 先判断任务类型，再读取对应页面规范。
- 先读角色定义，再读框架 HTML 母版，再读页面总览，再读页面规范，再读组件规范，再读代码或生图规则。
- 生成可演示页面、demo、可点击预览时，默认读取 [06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[04-pages/overview.md](./04-pages/overview.md)、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md) 和 [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)，并只输出 HTML 文件。
- 只有明确要求 Vue 代码、前端代码、工程代码或接入项目时，才读取完整 Vue 代码生成规则并输出 Vue 代码。
- 涉及视觉基础、Token、投影或响应式时，读取 [01-foundation/layout.md](./01-foundation/layout.md)、[01-foundation/tokens.md](./01-foundation/tokens.md)、[01-foundation/shadow.md](./01-foundation/shadow.md)。
- 涉及组件尺寸、控件高度、圆角、控件状态时，读取 [02-components/component-size.md](./02-components/component-size.md)。
- 涉及具体组件时，必须读取对应组件文档，例如 Button 读 [02-components/button.md](./02-components/button.md)，Input 读 [02-components/input.md](./02-components/input.md)，Select 读 [02-components/select.md](./02-components/select.md)，Table 读 [02-components/table.md](./02-components/table.md)，Tag 读 [02-components/tag.md](./02-components/tag.md)，Pagination 读 [02-components/pagination.md](./02-components/pagination.md)。
- 涉及图标、图标按钮、操作 icon 或状态 icon 时，读取 [02-components/icon.md](./02-components/icon.md)。
- 涉及 Vue 代码、HTML Demo 中组件实现、Ant Design Vue 适配或 CSS class 映射时，读取 [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) 和 [06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md)。
- 涉及 AI 原生平台、多智能体协作、AI 审核、AI 结果应用时，读取 [06-vue-code/templates/terminal-security-frame/index.html](./06-vue-code/templates/terminal-security-frame/index.html)、[05-ai-image/ai-native-platform.md](./05-ai-image/ai-native-platform.md)、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md) 和 [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)。
- 每个文档应尽量自包含，AI 读到当前文档即可完成主要判断。