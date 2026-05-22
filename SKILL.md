---
name: backend-design-standards
description: Use this skill when the user asks for B-end/backend/admin/management-system UI design, 中后台/后台管理/管理系统页面, dashboard/workbench, list/form/detail/config/user-management pages, clickable HTML demos, high-fidelity previews, or design-standard-compliant HTML pages. This skill only targets high-fidelity single-file HTML Demo generation and review. Do not generate Vue, React, Tailwind, frontend engineering code, or framework project code from this standard.
version: 1.0.0
---

# 后台设计规范 Skill
## Backend Design Standards Skill

本文是 AI 使用本仓库生成或检查高保真后台 HTML Demo 时的唯一执行约束。`INDEX.md` 只负责路径索引；所有生成约束、母版边界、组件来源、执行流程和验收规则均以本文为准。

本仓库只服务一个目标：

```text
生成符合设计规范、组件规范和交互规范的高保真、可点击、单文件 HTML Demo。
```

不得把本规范用于 Vue / React / Tailwind / 前端工程代码生成。

## 1. 默认交付物

默认且唯一交付物为：

```text
单文件 HTML Demo
```

HTML Demo 必须满足：

- 可直接打开预览。
- 包含完整 HTML、CSS、JavaScript。
- 使用 mock 数据，不请求真实接口。
- 支持当前页面主要点击交互。
- 覆盖适用的 loading、empty、error、success、disabled、confirm 等状态。
- 保留组件来源证据，证明页面组件来自本仓库组件库。

只给静态页面、截图、框架工程代码或无法点击验证的视觉稿，均不算完成。

## 2. 固定母版硬约束

生成 HTML Demo 前，必须先选择并完整继承固定 HTML 母版：

| 场景 | 必须继承 |
|---|---|
| 用户未明确指定导航类型、按本仓库规范生成页面、普通后台页面 | `Interaction Construction Specifications/common-single-nav.html` |
| 用户明确要求单层导航 | `Interaction Construction Specifications/common-single-nav.html` |
| 用户明确要求双层导航 | `Interaction Construction Specifications/double-nav-frame.html` |

母版是页面底座，不是视觉参考。必须完整保留母版中的顶部导航、侧边栏、页头、外层内容容器、收起展开逻辑、级联浮层、响应式规则、iconfont、基础字体渲染和框架 JS。

禁止：

- 重新设计或重写顶部导航。
- 重新设计或重写侧边栏。
- 删除或重建母版页头。
- 替换母版外层内容容器。
- 在业务内容区内再生成一套页面框架。
- 把单层导航母版和双层导航母版混用。
- 只参考母版视觉但不复制母版 DOM / CSS / JS。

## 3. 业务内容边界

业务内容只能进入母版指定的业务内容区。可替换内容仅包括：

- 页面标题、页面说明、少量页头右侧业务动作。
- 业务主体内容。
- mock 数据。
- 业务字段、业务状态、表格列、业务文案。
- 与业务内容绑定的局部交互。

不可替换内容包括：

- 框架根容器。
- 顶部导航 DOM / CSS / JS。
- 侧边导航 DOM / CSS / JS。
- 页头基础结构。
- 内容区外层容器、背景、滚动规则、最小宽度规则。
- 菜单展开、收起、级联浮层和响应式逻辑。
- 母版 iconfont 与基础字体渲染规则。

如果母版中已有 `BUSINESS_CONTENT_START` / `BUSINESS_CONTENT_END` 注释，只能替换该边界内部内容。没有显式边界时，按母版注释和业务内容容器判断，不得整体替换右侧框架区域。

## 4. 组件来源硬约束

组件 DOM / class / CSS / Token 只能来自以下组件库资产：

```text
Basic UI component style/Green Theme-Global Style.css
Basic UI component style/Basic & Data Entry.html
Basic UI component style/Data Display.html
Basic UI component style/Feedback.html
Basic UI component style/Navigation.html
```

稳定基础组件必须直接复用组件库中的真实 DOM、class、CSS 和 Token。不得为了视觉接近临时仿写 Button、Input、Select、Table、Tag、Pagination、Dropdown、Tooltip、Toast、Modal、Drawer、Tabs、Steps 等基础组件。

组件库 HTML 是可预览的展示页，其中可能包含展示壳、导航、页头和文档说明结构。AI 只能把 `COMPONENT_START` / `COMPONENT_END` 标记内的组件 CSS、组件 DOM 示例和组件状态作为组件来源；标记外内容只用于理解展示页，不得复制进业务页面。尤其禁止从组件库 HTML 中复制 `.platform-frame`、`.platform-top-nav`、`.platform-sidebar`、`.platform-page-header`、`.platform-page-content` 等框架结构。

组件使用规则：

- 全局 Token、颜色、阴影、字体基线优先来自 `Green Theme-Global Style.css`。
- 表单、按钮、输入、选择、数据录入类组件优先来自 `Basic & Data Entry.html`。
- 表格、标签、状态、数据展示类组件优先来自 `Data Display.html`。
- 反馈类组件只有在 `Feedback.html` 已补齐真实 DOM / CSS / 状态后，才能作为完整组件真源。
- 导航类组件只有在 `Navigation.html` 已补齐真实 DOM / CSS / 状态后，才能作为完整组件真源。
- 如果组件库未提供某个必需组件，不能伪装成规范组件；必须先补齐组件库，或在交付说明中标注该组件库缺口导致无法合规完成。

页面业务 CSS 只能补充业务区布局、宽度、间距、对齐和局部业务修饰，不得重造基础组件视觉系统。

## 5. 当前页面执行契约

生成 HTML / CSS / JS 前，必须先建立当前页面执行契约。执行契约是内部生成依据，不是交付后的说明文案。

执行契约至少包含：

- 页面类型与使用母版。
- 用户主任务与 P0 / P1 / P2 / P3 信息层级。
- 业务内容进入母版的具体区域。
- 组件映射表：组件用途、组件库文件、复用的 DOM / class / CSS / Token。
- 当前页面交互清单。
- 状态清单：loading、empty、error、success、disabled、confirm 等适用状态。
- 布局风险点：容器边界、表格溢出、固定列、分页位置、响应式断点。

没有建立执行契约，不得直接生成 HTML Demo。

## 6. 标准执行流程

AI 必须按以下顺序执行：

```text
1. 识别任务类型和页面类型。
2. 读取 INDEX.md，获得最小读取路径。
3. 选择并完整继承固定 HTML 母版。
4. 判断业务内容只能进入的母版业务区域。
5. 读取需要的组件库资产，并只提取 `COMPONENT_START` / `COMPONENT_END` 标记内的组件来源。
6. 建立当前页面执行契约。
7. 基于真实组件 DOM / CSS / Token 生成业务内容。
8. 添加页面业务 JS，实现主要点击交互和状态切换。
9. 写入 COMPONENT_USAGE_MAP 组件来源证据。
10. 按本文验收规则逐项自检。
11. 不通过时先修正，再交付。
```

`COMPONENT_USAGE_MAP` 必须与页面实际使用组件一致，不得写入未使用组件，也不得遗漏已使用组件。建议写成 HTML 注释，例如：

```html
<!--
COMPONENT_USAGE_MAP
button.primary: Basic UI component style/Basic & Data Entry.html | classes: ... | tokens: ...
table.compact: Basic UI component style/Data Display.html | classes: ... | tokens: ...
-->
```

## 7. 交互与状态验收

HTML Demo 必须能验证当前页面主要业务路径。页面类型对应的常见交互包括：

| 页面类型 | 必须覆盖的典型交互 |
|---|---|
| 列表页 | 搜索、清空、筛选、排序、分页、每页条数、勾选、已选 N 项、行操作、更多菜单、Tooltip、确认弹窗、Toast |
| 表单页 | 字段输入、必填校验、格式提示、条件显隐、提交 loading、成功或失败反馈 |
| 详情页 | 标签页切换、展开收起、抽屉或弹窗查看、操作反馈 |
| 工作台 | 卡片 hover、快捷入口点击、简单筛选或标签切换 |
| 分步流程页 | 上一步、下一步、步骤校验、提交 loading、结果反馈 |
| 异常页 | 刷新重试、返回首页、申请权限等可恢复操作 |

只实现静态展示、不落地适用交互和状态，视为不通过。

## 8. 输出验收规则

交付前必须逐项确认：

- 已完整继承指定 HTML 母版。
- 未重写顶部导航、侧边栏、页头和外层内容容器。
- 业务内容只进入母版业务内容区。
- 未保留母版示例业务内容。
- 已建立当前页面执行契约。
- 所有稳定基础组件均来自 `Basic UI component style/` 组件库资产。
- 组件库 HTML 只使用 `COMPONENT_START` / `COMPONENT_END` 标记内的组件来源，未复制展示壳或 `.platform-*` 框架代码。
- 未使用浏览器原生控件或临时 DOM 代替已有稳定组件。
- 页面业务 CSS 没有重造基础组件样式。
- 已覆盖当前页面适用的交互和状态。
- 关键操作有确认，异步操作有 loading，高风险操作不能只用 Toast 提示。
- 空值、时间、数字、分页、状态文案格式统一。
- 全局字体渲染、iconfont、Token、主色、功能色、风险色使用一致。
- 表格、工具栏、分页、固定列、横向滚动和内容边界没有溢出。
- 最终 HTML 已写入 `COMPONENT_USAGE_MAP`，且与实际组件一致。

任一硬约束不通过时，不得交付为合规 HTML Demo。

## 9. 禁止交付条件

出现以下任一情况，必须先修正：

- 未使用固定 HTML 母版。
- 破坏母版固定结构或框架交互。
- 业务内容写到母版业务区之外。
- 临时仿写基础组件。
- 从组件库 HTML 复制展示壳、导航、页头、文档说明结构或 `.platform-*` 框架代码。
- 把未补齐组件库文件当作完整组件真源。
- 只复制 CSS 但手写组件 DOM。
- 只写相似 class 但没有组件库真实结构。
- 页面只有静态视觉，没有主要交互。
- 缺少适用的 loading、empty、error、success、confirm 状态。
- 没有组件来源证据。
- 只完成语法检查或页面可运行检查，未完成规范验收。

## 10. 维护原则

- 本文是唯一约束真源；新增或修改 AI 执行规则只改本文。
- `INDEX.md` 只做读取索引，不重复维护规则。
- 母版 HTML 和组件库 HTML / CSS 是资产，不是第二套约束文档。
- 同一规则不得在多个文件中重复维护。
