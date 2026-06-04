---
name: backend-design-standards
description: |
  B 端后台/管理系统 HTML Demo 设计规范。用于生成或审核高保真、可点击、单文件 HTML Demo；必须继承 single-nav-green-template.html，并遵循绿色主题、布局、交互和组件规范。不得用于 React/Vue/Tailwind 工程代码生成。
version: 2.3.0
---

# 后台设计规范 Skill

本 Skill 只服务一个目标：生成符合设计规范、组件规范和交互规范的高保真、可点击、单文件 HTML Demo。

不得把本规范用于 React / Vue / Tailwind / shadcn 工程代码生成。若组件文档保留工程附录，HTML Demo 任务只读取 HTML Demo、尺寸、状态、交互、禁用和验收部分。

本规范包只保留一套主规范路径；`assets/3Dicon/` 仅服务数据指标卡，不扩展为通用插图目录。

## 1. 真相来源顺序

文件冲突时，按下面顺序判断：

1. `SKILL.md`：执行目标、读取流程、交付物和禁止项。
2. `Basic UI component style/single-nav-green-template.html`：固定框架、运行结构、内置组件 class 和框架交互。
3. `Basic UI component style/Green Theme-Global Style.css`：颜色、Token、字体与动效变量。
4. `Interaction Construction Specifications/*.md`：页面类型交互逻辑。
5. `Basic UI component style/layout.md`：布局、栅格、响应式和滚动规则。
6. `Basic UI component style/component-styles/*.txt` 与 `*.md`：具体组件尺寸、状态和 HTML Demo 结构。
7. `assets/iconfont/` 与 `assets/3Dicon/`：正式静态资源。
8. `INDEX.md`：路径索引和最小读取映射。

母版 HTML 是页面底座，不是视觉参考。颜色 Token 以 `Green Theme-Global Style.css` 为准，优先使用 `AI_STABLE_TOKEN_START` / `AI_STABLE_TOKEN_END` 之间的稳定变量。

## 2. 默认交付物

默认且唯一交付物为单文件 HTML Demo。HTML 必须：

- 可直接打开预览。
- 包含完整 HTML、CSS、JavaScript。
- 使用 mock 数据，不请求真实接口。
- 支持当前页面主要点击交互。
- 覆盖适用的 loading、empty、error、success、disabled、confirm 等状态。
- 写入 `COMPONENT_USAGE_MAP`，证明页面组件来自本仓库组件规范。

只交付静态截图、不可点击页面、框架工程代码或没有规范自检的 HTML，都不算完成。

## 3. 生成前必读路径

任何生成或审核任务先读：

```text
SKILL.md
INDEX.md
Basic UI component style/single-nav-green-template.html
Basic UI component style/Green Theme-Global Style.css
Basic UI component style/layout.md
Interaction Construction Specifications/page-container.md
Interaction Construction Specifications/permission-state.md
```

然后按页面结构追加读取：

| 页面结构 | 必须追加 |
|---|---|
| 列表页、查询结果页、用户管理、系统配置列表、含表格/排行/待办列表 | `Interaction Construction Specifications/list-page.md` |
| 表单页、新增页、编辑页、配置页、抽屉表单、分步表单 | `Interaction Construction Specifications/form-entry.md` |
| 包含状态标签、风险等级、状态点、流程状态、图表或数据可视化 | `Basic UI component style/color.md` |
| 包含数据指标卡、关键统计卡或需要 3Dicon 的概览指标 | `Basic UI component style/component-styles/data-metric-card.md` 与 `assets/3Dicon/` |
| 包含任何交互组件 | `Basic UI component style/component-styles/motion.txt` |
| 包含菜单图标、按钮图标、状态图标、空状态图标或图标按钮 | `Basic UI component style/component-styles/icon.md` 与 `assets/iconfont/font_5177816_5ilr2y8ewpn.css`；数据指标卡 3D 图标不适用此行，必须走 `data-metric-card.md` |
| 使用具体组件 | 读取 `Basic UI component style/component-styles/` 中对应组件文档 |

未读取当前页面适用的交互规范和组件规范时，不得生成最终 HTML Demo。

## 4. 固定母版硬约束

生成 HTML Demo 时必须完整调用并继承：

```text
Basic UI component style/single-nav-green-template.html
```

允许修改：

- `DEFAULT_FRAME_CONFIG` 或 `window.SINGLE_NAV_GREEN_CONFIG`
- 顶部 logo / 产品名 / 用户名 / 菜单数据
- `BUSINESS_CONTENT_START` / `BUSINESS_CONTENT_END` 内的业务内容
- mock 数据、业务文案和业务局部交互

禁止修改或重写：

- 页面根框架、顶部导航、侧边栏、页头、右侧外层内容容器
- 收起展开、级联浮层、响应式、滚动、iconfont 与框架 JS
- 母版提供的基础字体渲染和全局变量
- 在业务内容区内重新生成一套 app-shell、page frame、顶部导航或侧边导航

业务内容只能写入 `BUSINESS_CONTENT_START` / `BUSINESS_CONTENT_END` 内，或通过 `window.SingleNavGreenBase.setBusinessContent()` 注入。

## 5. 组件与颜色使用规则

页面业务 CSS 只能补充业务区布局、宽度、间距、对齐和局部业务修饰，不得重造基础组件视觉系统。

必须优先复用母版和组件文档中的真实 class：

```text
.btn
.input / .input-shell
.select
.table / .table-shell
.tag
.alert
.pagination
.toast
.checkbox
.radio
.switch
.tabs
.iconfont
.metric-card / data metric card 结构（仅当读取 `data-metric-card.md` 后使用）
```

组件使用规则：

- Button、Input、Select、Textarea、Checkbox、Radio、Switch 读取对应组件文档。
- Table 使用时必须同时检查 Table、Pagination、Tag，以及表格内实际出现的 Checkbox / Switch / Button / Select；列表页表格默认使用 `.table--sm` 小号密度，不加外边缘框，表头使用 `gray-2 / gray-9`，普通单元格使用 `gray-8`，左右冻结列必须各自形成连续冻结组，左侧阴影只在左冻结组右边界，右侧阴影只在右冻结组左边界，并按横向滚动位置显示 / 隐藏。
- Alert、Toast、Tag、Tabs 使用时读取各自组件文档。
- 数据指标卡必须读取 `data-metric-card.md`，数值使用 24px / Medium，3D 图标只能来自 `assets/3Dicon/`。
- 所有交互组件必须读取 `motion.txt` 并实现 hover / focus / active / open / close 等必要反馈。
- 色彩、阴影、焦点环、状态色只允许来自 `Green Theme-Global Style.css`；禁止临时写浏览器默认蓝、旧品牌蓝或随手 hex。
- 组件库没有定义的能力不能伪装成规范组件；应先说明缺口，或用已定义组件组合实现。

### 图标资源

- 普通图标必须遵循 `Basic UI component style/component-styles/icon.md`，默认且唯一来源为 iconfont 项目 `5177816`。
- 统一 iconfont 版本为 `//at.alicdn.com/t/c/font_5177816_5ilr2y8ewpn.css`。
- 母版内置 iconfont 子集；若页面需要未内置的图标 class，读取 `assets/iconfont/font_5177816_5ilr2y8ewpn.css`，只把必要的 `@font-face` 与 class 片段并入单文件 HTML。
- 普通菜单、按钮、表格、状态、空状态、Toast、Alert、Tabs、Switch 等图标不得使用 iconfont 以外的图标来源，包括 emoji、自绘 SVG 或其他外部图标库。
- 数据指标卡中的 3D 图标是唯一允许使用 3Dicon 的场景，必须遵循 `Basic UI component style/component-styles/data-metric-card.md`，先查 `assets/3Dicon/INDEX.md`，且只能从 `assets/3Dicon/` 选取已有素材。
- 不生成、不调用 AI 插图、AI 生成配图、图片提示词资产或自行创造的三维图标。

## 6. 页面执行契约

生成 HTML / CSS / JS 前，必须先建立当前页面执行契约。契约可作为内部依据，至少包含：

- 页面类型。
- 已读取的交互规范文件。
- 使用的母版和业务内容注入区域。
- 用户主任务与 P0 / P1 / P2 / P3 信息层级。
- 组件映射表：组件用途、组件文件、复用 class、Token 来源。
- 图标映射：iconfont class 与来源文件；如使用数据指标卡，记录 3Dicon 文件名和 `assets/3Dicon/` 来源。
- 当前页面交互清单。
- 状态清单：loading、empty、error、success、disabled、confirm 等。
- 布局风险点：容器边界、表格溢出、固定列、分页位置、响应式断点。

没有建立执行契约，不得直接生成 HTML Demo。

## 7. 标准执行流程

按以下顺序执行：

1. 识别任务类型和页面类型。
2. 读取 `INDEX.md`，获得最小读取路径。
3. 读取 `single-nav-green-template.html`、`Green Theme-Global Style.css` 和 `layout.md`。
4. 读取页面类型对应的 `Interaction Construction Specifications/*.md`。
5. 读取实际使用组件对应的 `component-styles/*` 文档。
6. 如用户提供参考图，只抽取业务布局、信息结构、模块顺序和字段内容。
7. 建立页面执行契约。
8. 基于母版业务区和真实组件 class 生成业务内容。
9. 添加页面业务 JS，实现主要点击交互和状态切换。
10. 写入 `COMPONENT_USAGE_MAP`。
11. 按交互规范和组件规范逐项自检。
12. 不通过时先修正，再交付。

`COMPONENT_USAGE_MAP` 建议写成 HTML 注释：

```html
<!--
COMPONENT_USAGE_MAP
button.primary: Basic UI component style/component-styles/button.txt | classes: btn btn-primary btn-md | tokens: --primary, --primary-hover, --primary-active
table.list: Basic UI component style/component-styles/table.txt | classes: table-shell table table--sm table-row | tokens: --gray-2, --gray-8, --gray-9, --border
-->
```

## 8. 生成后审核硬约束

每次生成 HTML Demo 后，必须再次检查：

- 是否完整继承 `single-nav-green-template.html`，没有重写顶部导航、侧边栏、页头和外层容器。
- 业务内容是否只进入 `BUSINESS_CONTENT_START` / `BUSINESS_CONTENT_END`。
- 是否使用 `Green Theme-Global Style.css` 作为唯一色彩 Token 来源。
- 是否符合 `layout.md` 的页面宽度、栅格、间距、响应式与滚动规则。
- 是否符合当前页面对应的 `Interaction Construction Specifications` 交互逻辑。
- 所有调用到的组件是否符合 `component-styles` 对应文档的尺寸、状态、动效、禁用和验收规则。
- 普通图标是否符合 `icon.md`；数据指标卡是否符合 `data-metric-card.md`，且 3D 图标来自 `assets/3Dicon/`。
- 列表页是否覆盖搜索、清空、筛选、排序、分页、勾选、行操作、确认弹窗和 Toast 等适用交互。
- 表单页是否覆盖输入、必填、格式校验、条件显隐、提交 loading、成功或失败反馈。
- loading、empty、error、success、disabled、confirm 等状态是否可验证。
- `COMPONENT_USAGE_MAP` 是否与实际使用组件一致。

任一硬约束不通过时，不得交付为合规 HTML Demo。

## 9. 禁止交付条件

出现以下任一情况必须先修正：

- 未使用固定母版。
- 未读取当前页面类型对应的交互规范。
- 破坏母版框架结构或框架交互。
- 业务内容写到母版业务区之外。
- 临时仿写基础组件，或只写相似 class 但没有组件规范依据。
- 使用旧蓝色 Token、浏览器默认蓝色或随手 hex 替代绿色主题 Token。
- 只完成语法检查或页面可运行检查，未完成规范验收。
- 页面只有静态视觉，没有主要点击交互和状态反馈。
- 缺少组件来源证据。

## 10. 维护说明

- `SKILL.md` 维护执行规则。
- `INDEX.md` 维护读取路径。
- `Basic UI component style/` 保留母版、主题、布局、色彩和组件规范。
- `Interaction Construction Specifications/` 保留页面交互规范。
- `assets/iconfont/` 保留本地全量 iconfont CSS。
- `assets/3Dicon/` 保留数据指标卡专用 3Dicon 素材库。
- 不维护镜像目录；修改规范时只改主路径。
