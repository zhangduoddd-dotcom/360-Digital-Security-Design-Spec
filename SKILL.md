---
name: backend-design-standards
description: Use this skill when the user asks for B-end/backend/admin/management-system UI design, 中后台/后台管理/管理系统页面, dashboard/workbench, list/form/detail/config/user-management pages, clickable HTML demos, high-fidelity previews, or Vue 3 + TypeScript + Ant Design Vue frontend pages. By default, UI generation should output a single-file HTML demo first; only generate Vue/React/Tailwind/frontend engineering code when the user explicitly requests it. Also use it when reviewing or standardizing generated backend UI against this design standard.
version: 1.0.0
---

# 后台设计规范 Skill
## Backend Design Standards Skill

Keywords: backend design, html demo first, vue codegen, ant design vue, component dom extraction, component css injection

## 0. 总执行原则

所有后台页面、HTML Demo、Vue 页面代码或高保真界面生成任务，都必须遵循：

```text
模板驱动继承框架，组件样式库驱动业务组件 DOM / CSS / Token，规范驱动业务内容和验收校验。
```

执行顺序：

```text
1. 读取 DOCS-STRUCTURE.md，确认文档职责边界和冲突优先级。
2. 选择并完整复制 06-vue-code/templates/ 中最匹配的 HTML 母版。
3. 读取 docs/component-style-library/backend_ai_ui_component_kit_with_index.html。
4. 按 06-vue-code/component-dom-extraction-rules.md 抽取组件 DOM。
5. 按 06-vue-code/component-style-import-rules.md 抽取组件 CSS 与 Token。
6. 读取 component-style-code-map、business-component-reuse-rules、component-reading-order-rules、deprecated-class-blacklist。
7. 识别页面类型和业务目标。
8. 读取 02-components/component-doc-boundary.md 与对应组件文档，补充组件语义和状态要求。
9. 最后用页面规范、DOM 抽取规则、CSS 注入规则、旧 class 黑名单和验收清单做校验。
```

必须同时满足：

```text
框架母版必须继承，业务组件 DOM / CSS / Token 必须从组件样式库成对抽取，页面业务 class 只能追加修饰。
```

禁止只继承顶部导航、左侧菜单、页头和页面容器，但在右侧业务区重新编写一套私有按钮、表格、标签、输入框、分页器、告警提示等组件结构或组件样式。

禁止只写 `.ant-*` class 但不抽取对应组件 DOM / CSS / Token。

禁止先读 `02-components` 后自行推导 HTML class 或组件 DOM。旧别名 class 与私有组件 class 统一检查：

```text
06-vue-code/deprecated-class-blacklist.md
```

## 1. 固定模板调用规则

生成后台页面、HTML Demo、Vue 页面代码、高保真界面或页面截图时，必须先从以下模板中选择页面基座：

| 场景 | 必须调用 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | `06-vue-code/templates/double-nav-frame.html` |
| 明确要求自定义导航框架 | 按用户指定方案处理 |

必须读取模板说明：

```text
06-vue-code/templates/README.md
```

## 2. 框架继承硬约束

1. 生成页面时，必须先完整复制对应 HTML 母版作为页面底座。
2. 不得自行重写顶部导航、左侧菜单、页头、页面内容容器、下拉浮层、级联菜单或响应式逻辑。
3. 只允许替换模板允许变化的业务内容、菜单数据、导航文案、页面标题、mock 数据和页面主体内容。
4. 母版中的 DOM、CSS、JS、iconfont、hover、active、open、disabled、collapsed、级联浮层和响应式规则必须保留。
5. 如果文字规范与 HTML 母版存在差异，以 HTML 母版为准。

### 2.1 业务组件硬约束

1. 右侧业务内容区内的基础组件，必须复用组件样式库中真实存在的 DOM、class、CSS 与 Token。
2. 必须读取并执行 `06-vue-code/component-dom-extraction-rules.md`。
3. 必须读取并执行 `06-vue-code/component-style-import-rules.md`。
4. 必须读取并执行 `06-vue-code/deprecated-class-blacklist.md`。
5. 涉及 `02-components/` 时，必须先读取 `02-components/component-doc-boundary.md`，明确其只作为组件语义、状态和交互规则来源，不作为 HTML class / CSS / DOM 来源。
6. 页面业务命名空间只能作为外层容器或局部布局修饰，不得替代基础组件 DOM 或基础 class。
7. Alert、Drawer、Modal 当前如果组件样式库未提供稳定 DOM，应标注为“组件样式库待补齐组件”，只补最小可用样式。
8. 输出 HTML 前必须完成组件映射，逐项确认 Button、Input、Select、Table、Tag、Pagination、Toast 等组件的 DOM 来源、CSS 来源和 Token 来源。
9. 输出前必须扫描：只要 DOM、CSS、Token 未成对抽取，或命中旧 class 黑名单，必须先修正再交付。

## 3. 默认定位

这是 B 端后台界面设计 Skill 的总入口。默认演示交付形态：

```text
可直接打开预览的单文件 HTML Demo
```

工程代码技术栈仅在用户明确要求“Vue / React / Tailwind / 前端代码 / 工程代码 / 接入项目”时启用。

默认 Vue 工程技术栈：

```text
Vue 3 + TypeScript + Ant Design Vue + Composition API + <script setup lang="ts">
```

## 4. 生成前判断顺序

```text
业务目标判断
→ 文档职责边界确认
→ 导航框架选择
→ HTML 母版锁定
→ 组件样式库读取
→ 组件 DOM 抽取范围确认
→ 组件 CSS / Token 注入范围确认
→ 页面类型识别
→ 信息层级梳理
→ 交互路径设计
→ 组件映射
→ 旧 class 黑名单校验
→ 02-components 语义与状态补充
→ 输出前自检
```

## 5. 首次生成硬约束

1. 默认生成结果必须优先输出为单文件 HTML Demo；除非用户明确要求前端工程代码，否则不得上来就生成 Vue / React / Tailwind / Ant Design Vue 工程代码。
2. 必须先读取 `DOCS-STRUCTURE.md`，确认目录职责、读取顺序和冲突优先级。
3. 必须使用 `06-vue-code/templates/` 中的固定 HTML 母版；默认使用 `common-single-nav.html`。
4. 业务内容只能进入母版指定的业务内容区。
5. 业务组件 DOM 必须按 `06-vue-code/component-dom-extraction-rules.md` 从组件样式库抽取。
6. 业务组件 CSS 与 Token 必须按 `06-vue-code/component-style-import-rules.md` 注入。
7. 组件文档读取必须按 `06-vue-code/component-reading-order-rules.md` 执行；不得先读 `02-components` 后自行推导 DOM 或 class。
8. 旧 class 校验必须按 `06-vue-code/deprecated-class-blacklist.md` 执行。
9. 普通主色使用 `p6 #00AB7A`，hover 使用 `p5 #1DB887`，active 使用 `p7 #039972`。
10. HTML Demo 必须包含 mock 数据、基础点击交互、loading、empty、error、成功 / 失败反馈，不请求真实接口。
11. 危险操作必须二次确认，并说明动作对象、影响范围和是否可恢复。
12. 输出完成后必须按 `07-checklists/ai-output.md` 或 `07-checklists/frontend-acceptance.md` 自检，发现不满足项必须先修正。

## 6. 默认读取顺序

所有任务先读取：

```text
ROLE.md
SKILL.md
DOCS-STRUCTURE.md
INDEX.md
```

生成可演示页面 / demo / 可点击预览 / 未明确要求工程代码的 UI 页面时默认读取：

```text
ROLE.md
SKILL.md
DOCS-STRUCTURE.md
06-vue-code/templates/README.md
对应 HTML 母版
04-pages/overview.md
06-vue-code/preview-html.md
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
07-checklists/ai-output.md
```

生成 Vue 页面代码 / 工程代码时默认读取：

```text
ROLE.md
SKILL.md
DOCS-STRUCTURE.md
06-vue-code/codegen-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/antdv-adapter.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
07-checklists/frontend-acceptance.md
```

## 7. HTML Demo 标准读取顺序

```text
1. ROLE.md
2. SKILL.md
3. DOCS-STRUCTURE.md
4. INDEX.md
5. 06-vue-code/templates/README.md
6. 06-vue-code/templates/common-single-nav.html 或 double-nav-frame.html
7. 04-pages/overview.md
8. 对应页面规范
9. docs/component-style-library/backend_ai_ui_component_kit_with_index.html
10. docs/component-style-library/component_style_library_index.md
11. 06-vue-code/component-dom-extraction-rules.md
12. 06-vue-code/component-style-code-map.md
13. 06-vue-code/business-component-reuse-rules.md
14. 06-vue-code/component-style-import-rules.md
15. 06-vue-code/component-reading-order-rules.md
16. 06-vue-code/deprecated-class-blacklist.md
17. 02-components/component-doc-boundary.md
18. 02-components/overview.md
19. 对应 02-components 组件语义文档
20. 07-checklists/ai-output.md
```

核心原则：

```text
先确认框架母版。
再抽取真实组件 DOM / CSS / Token。
再读取 02-components 补充语义和状态。
最后验收。
```

## 8. 组件映射入口

生成 HTML Demo 或 Vue 工程代码时，除读取页面规范和组件语义规范外，必须读取：

```text
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
```

并先完成组件 DOM 来源、CSS 来源、Token 来源、旧 class 黑名单校验，再生成代码或 HTML。

## 9. 生成交付规则

当用户要求“生成页面”“生成界面”“做一个后台页面”“生成可演示页面”“做 demo”“可点击预览”“HTML 预览”时，只要没有明确要求前端工程代码，默认只输出一个可直接打开预览的单文件 HTML Demo。

只有当用户明确要求 Vue / React / Tailwind / 前端代码 / 工程代码 / 接入项目时，才继续生成前端工程代码。

## 10. HTML Demo 样式强约束

- HTML Demo 的框架外壳必须来自 `06-vue-code/templates/` 中的对应 HTML 母版。
- 业务区组件 DOM、CSS、Token 必须来自组件样式库。
- 页面级私有 class 只能追加修饰，不能替代基础组件 DOM 或基础 class。
- 最终 HTML 的样式顺序必须是：框架母版 CSS → 组件样式库 CSS → 页面业务 CSS。
- 组件语义、使用场景和状态要求可以参考 `02-components/`，但不能从 `02-components` 推导 HTML class 或 DOM。
- 图标应优先使用规范指定的 iconfont。
- 首轮输出不得省略固定框架、关键交互状态或验收自检。

## 11. 冲突优先级

```text
1. 页面框架：以 06-vue-code/templates/*.html 为准。
2. 组件 DOM / class / CSS：以 docs/component-style-library/backend_ai_ui_component_kit_with_index.html 为准。
3. 组件 DOM 抽取：以 06-vue-code/component-dom-extraction-rules.md 为准。
4. 组件 CSS 注入：以 06-vue-code/component-style-import-rules.md 为准。
5. 组件 class 映射：以 06-vue-code/component-style-code-map.md 为准。
6. 业务组件复用：以 06-vue-code/business-component-reuse-rules.md 为准。
7. 组件读取顺序：以 06-vue-code/component-reading-order-rules.md 为准。
8. 旧 class 黑名单：以 06-vue-code/deprecated-class-blacklist.md 为准。
9. 组件语义和状态：以 02-components/*.md 为准。
10. 页面结构：以 04-pages/*.md 为准。
11. 输出验收：以 07-checklists/*.md 为准。
```