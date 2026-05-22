# 文档索引
## Document Index

本文只负责 AI 最小读取路径和目录索引。所有生成约束、母版边界、组件来源、执行流程和验收规则均以 `SKILL.md` 为唯一真源。

本仓库当前只服务：

```text
高保真、可点击、单文件 HTML Demo 生成与检查
```

## 1. AI 最小读取路径

任何生成或检查任务都先读取：

```text
SKILL.md
INDEX.md
```

然后按页面类型读取对应母版、交互规范和组件库资产。不要一次性读取全仓库。

## 2. 固定资产路径

| 类型 | 路径 |
|---|---|
| 默认单层导航母版 | `Interaction Construction Specifications/common-single-nav.html` |
| 双层导航母版 | `Interaction Construction Specifications/double-nav-frame.html` |
| 页面容器交互规范 | `Interaction Construction Specifications/page-container.md` |
| 权限与状态交互规范 | `Interaction Construction Specifications/permission-state.md` |
| 列表页搜索与表格交互规范 | `Interaction Construction Specifications/list-page.md` |
| 表单录入交互规范 | `Interaction Construction Specifications/form-entry.md` |
| 全局 Token / 主题样式 | `Basic UI component style/Green Theme-Global Style.css` |
| 语义色 / 状态标签 / 图表用色规范 | `Basic UI component style/color.md` |
| 基础与数据录入组件 | `Basic UI component style/Basic & Data Entry.html` |
| 数据展示组件 | `Basic UI component style/Data Display.html` |
| 反馈组件 | `Basic UI component style/Feedback.html` |
| 导航组件 | `Basic UI component style/Navigation.html` |

当前组件库状态：`Feedback.html` 和 `Navigation.html` 尚未补齐完整真实组件 DOM / CSS / 状态时，只能视为待补齐资产，不应作为完整组件真源。

## 3. 全局与模块读取规则

所有页面都必须读取：

```text
Interaction Construction Specifications/page-container.md
Interaction Construction Specifications/permission-state.md
```

只读取 HTML 母版和组件库资产，不视为完成页面规范读取。

按页面结构追加读取：

| 页面结构 / 模块 | 必须追加读取 |
|---|---|
| 列表页、查询结果页、用户管理列表、系统配置列表 | `Interaction Construction Specifications/list-page.md` |
| 表单页、新增页、编辑页、配置页、抽屉表单、分步表单 | `Interaction Construction Specifications/form-entry.md` |
| 页面包含等级标签、状态标签、状态点、风险等级、流程状态、开关状态或连接状态 | `Basic UI component style/color.md` |
| 页面包含图表、统计图、趋势图、占比图、环图、饼图、柱状图、折线图或数据可视化模块 | `Basic UI component style/color.md` |
| 详情页中包含关联表格 | `Interaction Construction Specifications/list-page.md` |
| 详情页中包含编辑抽屉或配置表单 | `Interaction Construction Specifications/form-entry.md` |
| 工作台中包含待办列表、排行列表或表格模块 | `Interaction Construction Specifications/list-page.md` |
| 页面包含禁用、loading、empty、error、权限隐藏或权限禁用 | `Interaction Construction Specifications/permission-state.md` |

## 4. 页面类型读取映射

下表中的短文件名均对应第 2 节固定资产路径。默认使用 `common-single-nav.html`；用户或需求明确双层导航时，使用 `double-nav-frame.html`。

| 页面类型 | 基础必读 | 条件追加读取 | 组件与样式资产 |
|---|---|---|---|
| 列表页 / 查询结果页 | `common-single-nav.html` 或 `double-nav-frame.html`；`page-container.md`、`permission-state.md`、`list-page.md` | 包含新增 / 编辑 / 配置表单时读 `form-entry.md`；包含等级、状态或图表时读 `color.md` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、`Data Display.html`、按需读 `Feedback.html`、`Navigation.html` |
| 表单页 / 新增页 / 编辑页 / 配置页 | `common-single-nav.html` 或 `double-nav-frame.html`；`page-container.md`、`permission-state.md`、`form-entry.md` | 包含状态标签、风险等级、流程状态或结果状态时读 `color.md` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、按需读 `Feedback.html` |
| 详情页 | `common-single-nav.html` 或 `double-nav-frame.html`；`page-container.md`、`permission-state.md` | 包含关联表格时读 `list-page.md`；包含编辑抽屉或配置表单时读 `form-entry.md`；包含等级、状态或图表时读 `color.md` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、`Data Display.html`、按需读 `Feedback.html` |
| 工作台 / Dashboard | `common-single-nav.html` 或 `double-nav-frame.html`；`page-container.md`、`permission-state.md`、`color.md` | 包含待办列表、排行列表或表格模块时读 `list-page.md`；包含配置表单、快捷编辑或抽屉表单时读 `form-entry.md` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、`Data Display.html`、按需读 `Feedback.html`、`Navigation.html` |
| 分步流程页 | `common-single-nav.html` 或 `double-nav-frame.html`；`page-container.md`、`permission-state.md`、`form-entry.md`、`color.md` | 包含步骤导航时读 `Navigation.html`；包含结果反馈、确认或异常反馈时读 `Feedback.html` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、按需读 `Navigation.html`、`Feedback.html` |
| 异常页 / 空状态页 | `common-single-nav.html` 或 `double-nav-frame.html`；`page-container.md`、`permission-state.md` | 包含状态标签、错误等级或恢复流程状态时读 `color.md` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、按需读 `Feedback.html` |
| 用户管理 / 系统配置 / 系统设置 | `common-single-nav.html` 或 `double-nav-frame.html`；`page-container.md`、`permission-state.md` | 包含列表时读 `list-page.md`；包含新增 / 编辑 / 配置时读 `form-entry.md`；包含等级、状态或图表时读 `color.md` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、`Data Display.html`、按需读 `Feedback.html`、`Navigation.html` |
| HTML Demo 检查 | 读取待检查页面实际使用的母版；`page-container.md`、`permission-state.md` | 按页面实际结构读取 `list-page.md`、`form-entry.md`、`color.md` | 读取待检查页面实际使用的组件库资产；含图表、标签、状态点或语义色时必须核对 `color.md` |

## 5. 目录职责

| 路径 | 职责 |
|---|---|
| `README.md` | 给人看的仓库简介和使用说明 |
| `SKILL.md` | AI 唯一执行约束 |
| `INDEX.md` | AI 最小读取路径和资产索引 |
| `Basic UI component style/` | 全局样式、Token、语义色、图表色、基础组件、数据展示组件、反馈组件、导航组件资产 |
| `Interaction Construction Specifications/` | 固定 HTML 母版、页面容器规范、列表交互、表单交互、权限与状态交互规范 |

## 6. 维护说明

- 新增或修改 AI 执行规则，只更新 `SKILL.md`。
- 新增或修改读取路径，只更新 `INDEX.md`。
- 母版 HTML、组件 HTML、组件 CSS 均为资产文件，不新增同类约束文档。
- `Interaction Construction Specifications/*.md` 是页面交互规范，必须被页面类型读取映射显式引用。
- 不新增新的约束文件夹，避免形成第二套规则入口。
