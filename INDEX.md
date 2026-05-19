# 文档索引
## Document Index

Keywords: index, ai routing, backend design, html demo, vue codegen, ui generation, single navigation frame, double navigation frame, template routing, component mapping

> 本文件是 AI 读取仓库时的主导航，也方便人工快速跳转查阅。

## 0. 角色与执行入口

| 文件 | 内容 |
|---|---|
| [ROLE.md](./ROLE.md) | B 端产品 UI/UX 设计师角色限定：业务目标、用户任务、页面类型、信息层级、交互路径、组件映射、工程落地和输出前自检 |
| [SKILL.md](./SKILL.md) | Skill 总入口：HTML Demo 优先、首次生成硬约束、任务读取顺序、交付物判定 |

任何 B 端页面生成、优化、检查、HTML Demo、Vue 工程代码或 AI 生图 Prompt 任务，默认先读取 `ROLE.md` 与 `SKILL.md`，再按本文件分流。

---

## 1. 目录地图

| 目录 | 内容 |
|---|---|
| [01-foundation/](./01-foundation/) | 全局设计基础：原则、布局、颜色、字体、Token、投影 |
| [02-components/](./02-components/) | 组件规范：Ant Design Vue、组件尺寸、按钮、输入、选择、表格、分页、标签、反馈、动效、图标 |
| [03-interaction/](./03-interaction/) | 交互规范：页面容器、导航、搜索区、表格区、表单录入、权限状态 |
| [04-pages/](./04-pages/) | 页面规范：总览、工作台、列表页、表单页、详情页、分步流程页、异常页、用户管理、系统设置、系统配置 |
| [05-ai-image/](./05-ai-image/) | AI 生图：Prompt 规则、页面 Prompt、Negative Prompt、AI 原生平台 |
| [06-vue-code/](./06-vue-code/) | HTML 演示与 Vue 代码生成：HTML 预览、代码规则、组件样式代码映射、工程落地、Ant Design Vue 适配、固定框架模板 |
| [07-checklists/](./07-checklists/) | 验收清单：设计走查、AI 输出、前端实现 |

---

## 2. 框架模板调用优先级

固定 HTML 母版只保留两套：

| 场景 | 必须调用 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html) |
| 用户明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html) |
| 用户明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | [06-vue-code/templates/double-nav-frame.html](./06-vue-code/templates/double-nav-frame.html) |
| 用户明确要求自定义导航框架 | 按用户指定方案处理 |

判断规则：

```text
1. 用户明确要求自定义导航框架 → 按用户指定方案处理。
2. 用户明确要求双层导航框架 → 使用 double-nav-frame.html。
3. 用户明确要求单层导航框架 → 使用 common-single-nav.html。
4. 用户只说“基于本套 GitHub / 本仓库规范 / 本套设计规范” → 默认使用 common-single-nav.html。
5. 用户没有说明导航框架 → 默认使用 common-single-nav.html。
```

模板使用规则详见：

```text
06-vue-code/templates/README.md
```

---

## 3. 固定框架使用硬约束

生成页面时，HTML 母版是页面底座，不是参考稿。

```text
先完整复制对应 HTML 母版。
再替换业务内容和 mock 数据。
不重新推导、不重新拼装、不重写框架结构。
```

### 3.1 可变内容

```text
Logo 图片或 Logo 文案
顶部导航业务文案、导航数量、路由含义、选中项
顶部右侧信息区中的用户名、组织名、状态数据
左侧菜单文案、菜单数量、路由含义、默认展开项、默认选中项
页头标题、页头右侧业务按钮、面包屑或页签文案
页面主体业务内容
表格 / 表单 / 详情 / 工作台 / 异常页等业务模块
mock 数据、筛选项、分页数据、图表数据、状态数据
业务弹窗 / 抽屉中的字段、说明文案、确认文案
明确语义的业务 icon
```

### 3.2 不可变内容

```text
HTML 外层容器层级
顶部导航高度、背景、布局、hover / active / open 状态
左侧菜单宽度、收起宽度、缩进、icon 尺寸、hover / active / disabled 状态
左侧菜单展开收起逻辑、收起态级联浮层
页头高度、结构、层级、与内容区的上下关系
内容区外层 padding、背景、滚动规则、最小宽度和自适应逻辑
iconfont 字体族、Font Class 使用方式、状态 icon 规则
字体渲染规则
CSS Token：品牌色、间距、圆角、边框、阴影、控件高度
JS 交互：导航展开收起、菜单联级浮层、下拉显示隐藏、状态同步、响应式处理
```

---

## 4. 任务路由

| 用户任务 | 优先读取 | 辅助读取 |
|---|---|---|
| 任何 B 端页面生成 / 优化 / 检查任务 | [ROLE.md](./ROLE.md)、[SKILL.md](./SKILL.md)、[INDEX.md](./INDEX.md) | 对应页面规范、组件规范、代码生成规则、验收清单 |
| 生成任何后台页面 / HTML demo / Vue 页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md) | 对应页面规范、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[02-components/icon.md](./02-components/icon.md) |
| 基于单层导航框架 / 单层顶部导航生成页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html) | 对应页面规范、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[02-components/icon.md](./02-components/icon.md) |
| 基于双层导航框架 / 双层顶部导航生成页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/double-nav-frame.html](./06-vue-code/templates/double-nav-frame.html) | 对应页面规范、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[02-components/icon.md](./02-components/icon.md) |
| 查询全局基础规范 | [ROLE.md](./ROLE.md)、[01-foundation/overview.md](./01-foundation/overview.md) | [01-foundation/layout.md](./01-foundation/layout.md)、[01-foundation/color.md](./01-foundation/color.md)、[01-foundation/tokens.md](./01-foundation/tokens.md)、[01-foundation/shadow.md](./01-foundation/shadow.md) |
| 查询组件规格 / 尺寸 | [ROLE.md](./ROLE.md)、[02-components/overview.md](./02-components/overview.md)、[02-components/component-size.md](./02-components/component-size.md) | [02-components/button.md](./02-components/button.md)、[02-components/input.md](./02-components/input.md)、[02-components/select.md](./02-components/select.md)、[02-components/table.md](./02-components/table.md)、[02-components/tag.md](./02-components/tag.md)、[02-components/pagination.md](./02-components/pagination.md)、[02-components/feedback.md](./02-components/feedback.md)、[02-components/motion.md](./02-components/motion.md) |
| 生成工作台 UI | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/dashboard.md](./04-pages/dashboard.md) | [01-foundation/layout.md](./01-foundation/layout.md)、[01-foundation/shadow.md](./01-foundation/shadow.md)、[02-components/component-size.md](./02-components/component-size.md)、[02-components/button.md](./02-components/button.md)、[02-components/tag.md](./02-components/tag.md)、[02-components/motion.md](./02-components/motion.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[07-checklists/design-review.md](./07-checklists/design-review.md) |
| 生成列表页 UI | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/list-page.md](./04-pages/list-page.md) | [03-interaction/list-search.md](./03-interaction/list-search.md)、[03-interaction/list-table.md](./03-interaction/list-table.md)、[02-components/table.md](./02-components/table.md)、[02-components/tag.md](./02-components/tag.md)、[02-components/pagination.md](./02-components/pagination.md)、[02-components/checkbox.md](./02-components/checkbox.md)、[02-components/button.md](./02-components/button.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成表单页 UI | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/form-page.md](./04-pages/form-page.md) | [03-interaction/form-entry.md](./03-interaction/form-entry.md)、[02-components/form.md](./02-components/form.md)、[02-components/input.md](./02-components/input.md)、[02-components/textarea.md](./02-components/textarea.md)、[02-components/select.md](./02-components/select.md)、[02-components/radio.md](./02-components/radio.md)、[02-components/checkbox.md](./02-components/checkbox.md)、[02-components/switch.md](./02-components/switch.md)、[02-components/button.md](./02-components/button.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成详情页 UI / 详情抽屉 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/detail-page.md](./04-pages/detail-page.md) | [03-interaction/page-container.md](./03-interaction/page-container.md)、[02-components/table.md](./02-components/table.md)、[02-components/tag.md](./02-components/tag.md)、[02-components/tabs.md](./02-components/tabs.md)、[02-components/button.md](./02-components/button.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成分步流程页 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/step-flow-page.md](./04-pages/step-flow-page.md) | [03-interaction/form-entry.md](./03-interaction/form-entry.md)、[03-interaction/navigation.md](./03-interaction/navigation.md)、[02-components/input.md](./02-components/input.md)、[02-components/select.md](./02-components/select.md)、[02-components/button.md](./02-components/button.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成异常页 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/exception-page.md](./04-pages/exception-page.md) | [02-components/feedback.md](./02-components/feedback.md)、[02-components/alert.md](./02-components/alert.md)、[02-components/button.md](./02-components/button.md)、[07-checklists/design-review.md](./07-checklists/design-review.md) |
| 生成用户管理页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/user-management.md](./04-pages/user-management.md) | [04-pages/list-page.md](./04-pages/list-page.md)、[04-pages/form-page.md](./04-pages/form-page.md)、[04-pages/detail-page.md](./04-pages/detail-page.md)、[03-interaction/list-table.md](./03-interaction/list-table.md)、[02-components/table.md](./02-components/table.md)、[02-components/form.md](./02-components/form.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成系统设置页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/system-settings.md](./04-pages/system-settings.md) | [04-pages/form-page.md](./04-pages/form-page.md)、[03-interaction/form-entry.md](./03-interaction/form-entry.md)、[02-components/form.md](./02-components/form.md)、[02-components/input.md](./02-components/input.md)、[02-components/select.md](./02-components/select.md)、[02-components/switch.md](./02-components/switch.md)、[02-components/button.md](./02-components/button.md) |
| 生成系统配置页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[04-pages/system-config.md](./04-pages/system-config.md) | 按场景选择列表 / 表单 / 详情 / 分步流程规范，并读取对应组件文档与 [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) |
| 生成导航框架 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/README.md](./06-vue-code/templates/README.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[06-vue-code/templates/double-nav-frame.html](./06-vue-code/templates/double-nav-frame.html) | [03-interaction/page-container.md](./03-interaction/page-container.md)、[03-interaction/navigation.md](./03-interaction/navigation.md)、[01-foundation/layout.md](./01-foundation/layout.md) |
| 生成 AI 生图 Prompt | [ROLE.md](./ROLE.md)、[05-ai-image/prompt-rules.md](./05-ai-image/prompt-rules.md)、[04-pages/overview.md](./04-pages/overview.md) | 对应页面规范、[05-ai-image/negative-prompts.md](./05-ai-image/negative-prompts.md) |
| 生成 AI 原生平台页面 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[05-ai-image/ai-native-platform.md](./05-ai-image/ai-native-platform.md) | [06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) |
| 生成可演示页面 / demo / 可点击预览 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) | 对应页面规范、交互规范、[01-foundation/tokens.md](./01-foundation/tokens.md)、[01-foundation/shadow.md](./01-foundation/shadow.md)、[02-components/component-size.md](./02-components/component-size.md)、对应组件文档、[02-components/icon.md](./02-components/icon.md)、[07-checklists/ai-output.md](./07-checklists/ai-output.md) |
| 生成 Vue 页面代码 / 工程代码 | [ROLE.md](./ROLE.md)、[06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md) | 对应页面规范、交互规范、[02-components/component-size.md](./02-components/component-size.md)、对应组件文档、[02-components/icon.md](./02-components/icon.md)、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md)、[07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) |
| 检查设计输出 | [ROLE.md](./ROLE.md)、[04-pages/overview.md](./04-pages/overview.md)、[07-checklists/design-review.md](./07-checklists/design-review.md) | [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、对应页面、基础、组件和交互规范 |
| 检查前端实现 | [ROLE.md](./ROLE.md)、[07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md) | [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)、[06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)、[06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md)、[01-foundation/tokens.md](./01-foundation/tokens.md)、[02-components/component-size.md](./02-components/component-size.md) |

---

## 5. 完整文档清单

### 5.0 角色与总入口

- [ROLE.md](./ROLE.md)
- [SKILL.md](./SKILL.md)
- [INDEX.md](./INDEX.md)

### 5.1 基础规范

- [01-foundation/overview.md](./01-foundation/overview.md)
- [01-foundation/layout.md](./01-foundation/layout.md)
- [01-foundation/color.md](./01-foundation/color.md)
- [01-foundation/typography.md](./01-foundation/typography.md)
- [01-foundation/tokens.md](./01-foundation/tokens.md)
- [01-foundation/shadow.md](./01-foundation/shadow.md)

### 5.2 组件规范

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

### 5.3 交互规范

- [03-interaction/platform-frame.md](./03-interaction/platform-frame.md)
- [03-interaction/page-container.md](./03-interaction/page-container.md)
- [03-interaction/navigation.md](./03-interaction/navigation.md)
- [03-interaction/list-search.md](./03-interaction/list-search.md)
- [03-interaction/list-table.md](./03-interaction/list-table.md)
- [03-interaction/form-entry.md](./03-interaction/form-entry.md)
- [03-interaction/permission-state.md](./03-interaction/permission-state.md)

### 5.4 页面规范

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

### 5.5 AI 生图

- [05-ai-image/skill.md](./05-ai-image/skill.md)
- [05-ai-image/prompt-rules.md](./05-ai-image/prompt-rules.md)
- [05-ai-image/page-prompts.md](./05-ai-image/page-prompts.md)
- [05-ai-image/negative-prompts.md](./05-ai-image/negative-prompts.md)
- [05-ai-image/ai-native-platform.md](./05-ai-image/ai-native-platform.md)

### 5.6 HTML 演示与 Vue 代码生成

- [06-vue-code/skill.md](./06-vue-code/skill.md)
- [06-vue-code/reference.md](./06-vue-code/reference.md)
- [06-vue-code/codegen-rules.md](./06-vue-code/codegen-rules.md)
- [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)
- [06-vue-code/preview-html.md](./06-vue-code/preview-html.md)
- [06-vue-code/vue-engineering.md](./06-vue-code/vue-engineering.md)
- [06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md)
- [06-vue-code/templates/README.md](./06-vue-code/templates/README.md)
- [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)
- [06-vue-code/templates/double-nav-frame.html](./06-vue-code/templates/double-nav-frame.html)

### 5.7 验收清单

- [07-checklists/design-review.md](./07-checklists/design-review.md)
- [07-checklists/ai-output.md](./07-checklists/ai-output.md)
- [07-checklists/frontend-acceptance.md](./07-checklists/frontend-acceptance.md)

---

## 6. AI 读取原则

- 不要一次性读取所有文件。
- 任何 B 端页面生成、优化、检查、HTML Demo、Vue 工程代码或 AI 生图 Prompt 任务，默认先读取 [ROLE.md](./ROLE.md) 与 [SKILL.md](./SKILL.md)。
- 基于本套 GitHub / 本仓库规范生成任何后台页面、HTML demo、Vue 页面、页面截图或高保真界面时，默认必须优先读取并完整套用 [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)。
- 只有当用户明确指定“基于双层导航框架 / 双层顶部导航 / 双层导航页面”时，才读取并完整套用 [06-vue-code/templates/double-nav-frame.html](./06-vue-code/templates/double-nav-frame.html)。
- 只有当用户明确要求“自定义导航框架”时，才允许不使用默认单层导航框架母版。
- 生成具体页面前，应读取 [04-pages/overview.md](./04-pages/overview.md) 判断页面类型和最小读取路径。
- 固定底层框架不可改动，只允许替换 Logo 占位、业务文案、菜单数据、mock 数据和母版指定业务内容区内的内容。
- 先判断任务类型，再读取对应页面规范。
- 先读角色定义，再读框架 HTML 母版，再读页面总览，再读页面规范，再读组件规范，再读代码或生图规则。
- 生成可演示页面、demo、可点击预览时，默认读取 [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[04-pages/overview.md](./04-pages/overview.md)、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md) 和 [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)，并只输出 HTML 文件。
- 只有明确要求 Vue 代码、前端代码、工程代码或接入项目时，才读取完整 Vue 代码生成规则并输出 Vue 代码。
- 涉及视觉基础、Token、投影或响应式时，读取 [01-foundation/layout.md](./01-foundation/layout.md)、[01-foundation/tokens.md](./01-foundation/tokens.md)、[01-foundation/shadow.md](./01-foundation/shadow.md)。
- 涉及组件尺寸、控件高度、圆角、控件状态时，读取 [02-components/component-size.md](./02-components/component-size.md)。
- 涉及具体组件时，必须读取对应组件文档，例如 Button 读 [02-components/button.md](./02-components/button.md)，Input 读 [02-components/input.md](./02-components/input.md)，Select 读 [02-components/select.md](./02-components/select.md)，Table 读 [02-components/table.md](./02-components/table.md)，Tag 读 [02-components/tag.md](./02-components/tag.md)，Pagination 读 [02-components/pagination.md](./02-components/pagination.md)。
- 涉及图标、图标按钮、操作 icon 或状态 icon 时，读取 [02-components/icon.md](./02-components/icon.md)。
- 涉及 Vue 代码、HTML Demo 中组件实现、Ant Design Vue 适配或 CSS class 映射时，读取 [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md) 和 [06-vue-code/antdv-adapter.md](./06-vue-code/antdv-adapter.md)。
- 涉及 AI 原生平台、多智能体协作、AI 审核、AI 结果应用时，读取 [06-vue-code/templates/common-single-nav.html](./06-vue-code/templates/common-single-nav.html)、[05-ai-image/ai-native-platform.md](./05-ai-image/ai-native-platform.md)、[06-vue-code/preview-html.md](./06-vue-code/preview-html.md) 和 [06-vue-code/component-style-code-map.md](./06-vue-code/component-style-code-map.md)。
- 每个文档应尽量自包含，AI 读到当前文档即可完成主要判断。