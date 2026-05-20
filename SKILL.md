---
name: backend-design-standards
description: Use this skill when the user asks for B-end/backend/admin/management-system UI design, 中后台/后台管理/管理系统页面, dashboard/workbench, list/form/detail/config/user-management pages, clickable HTML demos, high-fidelity previews, or Vue 3 + TypeScript + Ant Design Vue frontend pages. By default, UI generation should output a single-file HTML demo first; only generate Vue/React/Tailwind/frontend engineering code when the user explicitly requests it. Also use it when reviewing or standardizing generated backend UI against this design standard.
version: 1.0.0
---

# 后台设计规范 Skill
## Backend Design Standards Skill

Keywords: backend design, ai routing, template first, html preview, html demo first, vue codegen, ant design vue, ant class, docs structure

## 0. 总执行原则

本 Skill 默认以资深 B 端产品 UI/UX 设计师身份执行。详细角色定义见：

```text
ROLE.md
```

所有后台页面、HTML Demo、Vue 页面代码或高保真界面生成任务，都必须遵循：

```text
模板驱动继承框架，组件样式库驱动业务组件 class，规范驱动业务内容和验收校验。
```

执行顺序：

```text
1. 先读取 DOCS-STRUCTURE.md，确认文档职责边界和冲突优先级。
2. 再选择并完整复制 06-vue-code/templates/ 中最匹配的 HTML 母版。
3. 再读取 docs/component-style-library/backend_ai_ui_component_kit_with_index.html，确认真实可生效组件 class 和组件 CSS。
4. 再读取 06-vue-code/component-style-code-map.md、business-component-reuse-rules.md、component-style-import-rules.md、component-reading-order-rules.md、deprecated-class-blacklist.md。
5. 再识别页面类型和业务目标。
6. 再读取 02-components/component-doc-boundary.md 与对应组件文档，补充组件语义和状态要求。
7. 最后用页面规范、组件规范、业务组件复用规则、CSS 注入规则、旧 class 黑名单和验收清单做校验。
```

必须同时满足：

```text
框架母版必须继承，业务组件必须继承真实可生效的 .ant-* 基础 class，并注入对应组件 CSS。
```

禁止只继承顶部导航、左侧菜单、页头和页面容器，但在右侧业务区重新编写一套私有按钮、表格、标签、输入框、分页器、告警提示等组件样式。

禁止只写 `.ant-*` class 但不把组件样式库中的对应 CSS 注入到最终 HTML 中。

禁止先读 `02-components` 后自行推导 HTML class。旧别名 class 与私有组件 class 统一检查：

```text
06-vue-code/deprecated-class-blacklist.md
```

HTML 母版是框架实现基座，不是视觉参考稿。组件样式库、组件映射、业务组件复用规则、组件 CSS 注入规则、读取顺序规则和旧 class 黑名单也是实现基座，不是视觉参考稿。

## 1. 固定模板调用规则

生成后台页面、HTML Demo、Vue 页面代码、高保真界面或页面截图时，必须先从以下模板中选择页面基座：

| 场景 | 必须调用 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | `06-vue-code/templates/double-nav-frame.html` |
| 明确要求自定义导航框架 | 按用户指定方案处理 |

判断优先级：

```text
1. 用户明确要求自定义导航框架 → 按用户指定方案处理。
2. 用户明确要求双层导航框架 → 使用 double-nav-frame.html。
3. 用户明确要求单层导航框架 → 使用 common-single-nav.html。
4. 用户只说“基于本套 GitHub / 本仓库规范 / 本套设计规范” → 默认使用 common-single-nav.html。
5. 用户没有说明导航框架 → 默认使用 common-single-nav.html。
```

必须读取模板说明：

```text
06-vue-code/templates/README.md
```

## 2. 框架继承硬约束

以下规则在任何页面细节、页面类型规范、组件规范、视觉优化之前优先生效：

1. 生成页面时，必须先完整复制对应 HTML 母版作为页面底座。
2. 不得自行重写顶部导航、左侧菜单、页头、页面内容容器、下拉浮层、级联菜单或响应式逻辑。
3. 不得把 `03-interaction/platform-frame.md` 当作可重新实现框架的蓝图；它只解释框架原则和边界。
4. 不得把文字规范中的尺寸、颜色、结构描述转译成一套新的框架实现。
5. 只允许替换模板允许变化的业务内容、菜单数据、导航文案、页面标题、mock 数据和页面主体内容。
6. 母版中的 DOM、CSS、JS、iconfont、hover、active、open、disabled、collapsed、级联浮层和响应式规则必须保留。
7. 如果文字规范与 HTML 母版存在差异，以 HTML 母版为准。

### 2.1 业务组件样式继承硬约束

以下规则与框架继承同级，且优先于页面业务样式：

1. 右侧业务内容区内的按钮、输入框、选择器、表格、标签、分页器、告警提示、抽屉、弹窗、Toast、状态灯等基础组件，必须优先复用 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 中真实存在的 `.ant-*` 组件结构与 class。
2. 必须读取并执行 `docs/component-style-library/component_style_library_index.md`、`06-vue-code/component-style-code-map.md`、`06-vue-code/business-component-reuse-rules.md`、`06-vue-code/component-style-import-rules.md`、`06-vue-code/component-reading-order-rules.md`、`06-vue-code/deprecated-class-blacklist.md`。
3. 涉及 `02-components/` 时，必须先读取 `02-components/component-doc-boundary.md`，明确其只作为组件语义、状态和交互规则来源，不作为 HTML class / CSS 来源。
4. 不允许为已有基础组件重新发明一套私有组件 class；具体黑名单以 `06-vue-code/deprecated-class-blacklist.md` 为准。
5. 页面业务命名空间只能作为外层容器或局部布局修饰，例如 `.threat-alert-page .ant-table-wrapper`，不得替代基础组件 class。
6. 业务组件必须采用“真实基础 class + 业务修饰 class”的组合方式，例如 `class="ant-btn ant-btn-primary threat-action-btn"`、`class="ant-table-wrapper threat-alert-table"`、`class="ant-tag ant-tag-error risk-high"`。
7. Alert、Drawer、Modal 当前在组件样式库中属于待补齐组件；如需使用，应采用 `.ant-alert`、`.ant-drawer`、`.ant-modal` 命名并补充最小样式，不能伪装成已存在的完整基础样式。
8. 输出 HTML 前必须先完成“业务组件映射表”，逐项确认 Button、Input、Select、Table、Tag、Pagination、Toast、Alert、Drawer、Modal 等使用了真实基础 class。
9. 输出前必须扫描 HTML / CSS：如果出现黑名单中的 class，必须改回真实 `.ant-*` 基础 class 后再交付。
10. 输出前必须扫描最终 HTML：只要使用了 `.ant-*` class，就必须存在对应 CSS 定义；组件 CSS 应来自 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html`，并放在框架母版 CSS 之后、页面业务 CSS 之前。

## 3. 默认定位

这是 B 端后台界面设计 Skill 的总入口。AI 应先判断用户任务类型，再读取最少但足够的文档。

首轮生成目标是稳定继承固定模板、复用真实组件样式、注入组件 CSS 并符合规范，而不是只生成一个通用后台页面。

默认演示交付形态：

```text
可直接打开预览的单文件 HTML Demo
```

工程代码技术栈仅在用户明确要求“Vue / React / Tailwind / 前端代码 / 工程代码 / 接入项目”时启用。

默认 Vue 工程技术栈：

```text
Vue 3 + TypeScript + Ant Design Vue + Composition API + <script setup lang="ts">
```

## 4. 生成前判断顺序

任何后台页面、SaaS 页面、HTML Demo、Vue 页面代码任务中，必须按以下顺序判断：

```text
业务目标判断
→ 文档职责边界确认
→ 导航框架选择
→ HTML 母版锁定
→ 组件样式库真实 class 确认
→ 组件 CSS 注入范围确认
→ 页面类型识别
→ 信息层级梳理
→ 交互路径设计
→ 组件映射
→ 业务组件真实 class 继承校验
→ 旧 class 黑名单校验
→ 02-components 语义与状态补充
→ 视觉层级组织
→ 工程落地约束
→ 输出前自检
```

不得直接从配色、阴影、卡片样式或页面局部组件开始设计。

## 5. 首次生成硬约束

以下规则在任何后台页面、HTML Demo、Vue 页面代码、高保真界面或页面截图任务中都优先于页面细节：

1. 默认生成结果必须优先输出为单文件 HTML Demo；除非用户明确要求前端工程代码，否则不得上来就生成 Vue / React / Tailwind / Ant Design Vue 工程代码。
2. 必须先读取 `DOCS-STRUCTURE.md`，确认目录职责、读取顺序和冲突优先级。
3. 必须使用 `06-vue-code/templates/` 中的固定 HTML 母版；默认使用 `common-single-nav.html`。
4. 明确双层导航场景才使用 `double-nav-frame.html`。
5. 业务内容只能进入母版指定的业务内容区，不得侵入顶部导航、左侧菜单、页头或框架固定结构。
6. 不得改动顶部导航、左侧菜单、收起态级联浮层、页头、页面内容区 padding、背景、响应式规则和 JS 交互。
7. 业务组件必须复用组件样式库、组件映射与业务组件复用规则中定义的真实基础组件 class；不得只继承框架外壳后在业务区新增一套私有组件样式。
8. 业务组件 CSS 必须按 `06-vue-code/component-style-import-rules.md` 注入；不得只写 `.ant-*` class 而不提供对应 CSS。
9. 组件文档读取必须按 `06-vue-code/component-reading-order-rules.md` 执行；不得先读 `02-components` 后自行推导 class。
10. 旧 class 校验必须按 `06-vue-code/deprecated-class-blacklist.md` 执行。
11. 普通主色使用 `p6 #00AB7A`，hover 使用 `p5 #1DB887`，active 使用 `p7 #039972`；普通按钮不得误用 AI 渐变。
12. 常规控件默认 32px 高度，紧凑控件 24px，宽松控件 40px；圆角只使用 4 / 6 / 8px 档位。
13. HTML Demo 必须包含 mock 数据、基础点击交互、loading、empty、error、成功 / 失败反馈，不请求真实接口。
14. 列表页必须包含搜索 / 筛选、工具栏、表格、状态、行操作、分页和总数；表单页必须包含校验、提交 loading 和反馈；详情页必须包含对象识别、状态和关联信息。
15. 危险操作必须二次确认，并说明动作对象、影响范围和是否可恢复。
16. 输出完成后必须按 `07-checklists/ai-output.md` 或 `07-checklists/frontend-acceptance.md` 自检，发现不满足项必须先修正。

## 6. 默认读取顺序

所有任务先读取：

```text
ROLE.md
SKILL.md
DOCS-STRUCTURE.md
INDEX.md
```

然后按任务分流：

| 任务 | 默认读取 |
|---|---|
| 查询设计规则 | `ROLE.md` + `SKILL.md` + `DOCS-STRUCTURE.md` + `INDEX.md` + 对应 `01-foundation/`、`02-components/`、`03-interaction/` |
| 生成页面结构 | `ROLE.md` + `SKILL.md` + `DOCS-STRUCTURE.md` + `06-vue-code/templates/README.md` + 对应 HTML 母版 + `04-pages/overview.md` + 对应页面规范 |
| 生成可演示页面 / demo / 可点击预览 / 未明确要求工程代码的 UI 页面 | `ROLE.md` + `SKILL.md` + `DOCS-STRUCTURE.md` + `06-vue-code/templates/README.md` + 对应 HTML 母版 + `04-pages/overview.md` + `06-vue-code/preview-html.md` + `docs/component-style-library/component_style_library_index.md` + `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` + `06-vue-code/component-style-code-map.md` + `06-vue-code/business-component-reuse-rules.md` + `06-vue-code/component-style-import-rules.md` + `06-vue-code/component-reading-order-rules.md` + `06-vue-code/deprecated-class-blacklist.md` + `02-components/component-doc-boundary.md` + `07-checklists/ai-output.md` |
| 生成 Vue 页面代码 / 工程代码 | `ROLE.md` + `SKILL.md` + `DOCS-STRUCTURE.md` + `06-vue-code/templates/README.md` + 对应 HTML 母版 + `04-pages/overview.md` + `06-vue-code/codegen-rules.md` + `docs/component-style-library/component_style_library_index.md` + `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` + `06-vue-code/component-style-code-map.md` + `06-vue-code/business-component-reuse-rules.md` + `06-vue-code/component-style-import-rules.md` + `06-vue-code/component-reading-order-rules.md` + `06-vue-code/deprecated-class-blacklist.md` + `06-vue-code/antdv-adapter.md` + `02-components/component-doc-boundary.md` + `07-checklists/frontend-acceptance.md` |
| 检查输出质量 | `ROLE.md` + `SKILL.md` + `DOCS-STRUCTURE.md` + 对应 HTML 母版 + `docs/component-style-library/component_style_library_index.md` + `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` + `06-vue-code/component-style-code-map.md` + `06-vue-code/business-component-reuse-rules.md` + `06-vue-code/component-style-import-rules.md` + `06-vue-code/component-reading-order-rules.md` + `06-vue-code/deprecated-class-blacklist.md` + `02-components/component-doc-boundary.md` + `07-checklists/` |

## 7. HTML Demo 标准读取顺序

生成可演示页面 / demo / 可点击预览时，必须按以下顺序读取：

```text
1. ROLE.md
2. SKILL.md
3. DOCS-STRUCTURE.md
4. INDEX.md
5. 06-vue-code/templates/README.md
6. 06-vue-code/templates/common-single-nav.html 或 double-nav-frame.html
7. 04-pages/overview.md
8. 对应页面规范，例如 04-pages/list-page.md
9. docs/component-style-library/backend_ai_ui_component_kit_with_index.html
10. docs/component-style-library/component_style_library_index.md
11. 06-vue-code/component-style-code-map.md
12. 06-vue-code/business-component-reuse-rules.md
13. 06-vue-code/component-style-import-rules.md
14. 06-vue-code/component-reading-order-rules.md
15. 06-vue-code/deprecated-class-blacklist.md
16. 02-components/component-doc-boundary.md
17. 02-components/overview.md
18. 对应 02-components 组件语义文档
19. 07-checklists/ai-output.md
```

核心原则：

```text
先确认框架母版。
再确认真实组件 class / CSS。
再读取 02-components 补充语义和状态。
最后验收。
```

## 8. 组件映射入口

生成 HTML Demo 或 Vue 工程代码时，除读取页面规范和组件语义规范外，必须读取：

```text
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
```

并先完成组件映射、业务组件真实 class 继承校验、组件 CSS 注入校验、旧 class 黑名单校验，再生成代码或 HTML。

## 9. 生成交付规则

### 9.1 默认 HTML Demo 优先

当用户要求“生成页面”“生成界面”“做一个后台页面”“做一个管理系统页面”“生成可演示页面”“做 demo”“可点击预览”“高保真演示环境”“HTML 预览”时，只要没有明确要求前端工程代码，默认只输出：

```text
一个可直接打开预览的单文件 HTML Demo
```

HTML Demo 必须把 HTML、CSS、必要 JavaScript、mock 数据和基础点击交互写在同一个文件中，不依赖构建工具，不请求真实接口。

### 9.2 Vue / React / Tailwind / 工程代码后置

只有当用户明确要求以下内容时，才继续生成前端工程代码：

```text
生成 Vue 代码
生成 React 代码
转成 Tailwind
生成前端代码
生成工程代码
接入项目
组件化版本
Vue3 + TypeScript + Ant Design Vue
Element Plus / @q/design / 其他指定组件库
```

此时可输出用户指定技术栈代码；如用户未排除，可补充 HTML Demo。

## 10. HTML Demo 样式强约束

- HTML Demo 的框架外壳必须来自 `06-vue-code/templates/` 中的对应 HTML 母版。
- HTML Demo 的业务内容必须严格按照当前规范文档执行，不允许自由发挥成其他风格。
- 业务区组件必须复用组件样式库中的真实基础组件 class，遵循 `06-vue-code/component-style-code-map.md` 的 HTML Demo 结构和 `06-vue-code/business-component-reuse-rules.md` 的复用规则；页面级私有 class 只能追加，不能替代。
- 组件 CSS 必须按 `06-vue-code/component-style-import-rules.md` 注入；最终 HTML 中使用 `.ant-*` class 时，必须存在对应 CSS 定义。
- 旧别名 class 和私有组件 class 统一按 `06-vue-code/deprecated-class-blacklist.md` 检查。
- 如果需要体现业务语义，必须写成“真实基础 class + 业务修饰 class”，例如 `ant-btn ant-btn-primary threat-action-btn`、`ant-table-wrapper threat-alert-table`、`ant-tag ant-tag-error risk-high`、`ant-pagination table-pagination`。
- 最终 HTML 的样式顺序必须是：框架母版 CSS → 组件样式库 CSS → 页面业务 CSS。
- 组件语义、使用场景和状态要求可以参考 `02-components/`，但不能从 `02-components` 推导 HTML class。
- hover、active、selected、disabled、warning、error、success、loading、empty 等状态必须完整体现。
- 图标应优先使用规范指定的 iconfont，不得大量使用 emoji 代替正式图标。
- 界面必须专业、清晰、适合企业级 B 端后台，避免大屏风、海报风、营销风、游戏化和过度装饰。
- 生成可演示页面时，HTML 文件必须能直接打开并支持基础交互。
- 页面应包含 loading、empty、error、反馈等基础状态。
- 首轮输出不得省略固定框架、关键交互状态或验收自检。

## 11. Vue / 工程代码输出约束

- 只有用户明确要求工程代码时才进入本阶段。
- Vue 代码生成时必须优先使用 Ant Design Vue 组件。
- 工程代码应复用 HTML Demo 已确认的页面结构、字段、状态、交互和视觉规范。
- 工程代码不得反向改变已确认 HTML Demo 的核心布局和组件样式。
- 工程代码必须遵循 `06-vue-code/component-style-code-map.md`，明确组件规范、Ant Design Vue 组件、HTML Demo 结构、Token 和验收项之间的关系。
- 工程代码中的 layout / shell / navigation 组件必须与所调用 HTML 母版结构一致，不得重新设计。

## 12. 冲突优先级

当多个文档之间存在冲突时，按以下优先级判断：

```text
1. 页面框架：以 06-vue-code/templates/*.html 为准。
2. 组件 class / CSS：以 docs/component-style-library/backend_ai_ui_component_kit_with_index.html 为准。
3. 组件 class 映射：以 06-vue-code/component-style-code-map.md 为准。
4. 业务组件复用：以 06-vue-code/business-component-reuse-rules.md 为准。
5. 组件 CSS 注入：以 06-vue-code/component-style-import-rules.md 为准。
6. 组件读取顺序：以 06-vue-code/component-reading-order-rules.md 为准。
7. 旧 class 黑名单：以 06-vue-code/deprecated-class-blacklist.md 为准。
8. 组件语义和状态：以 02-components/*.md 为准。
9. 页面结构：以 04-pages/*.md 为准。
10. 输出验收：以 07-checklists/*.md 为准。
```

特别说明：如果 `02-components` 中的文字与 `.ant-*` class / CSS 冲突，以组件样式库和 06-vue-code 映射规则为准。