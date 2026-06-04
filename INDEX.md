# 文档索引

本文只维护最小读取路径和目录索引；生成约束以 `SKILL.md` 为准。

## 固定资产

| 类型 | 路径 |
|---|---|
| 固定单层导航绿色母版 | `Basic UI component style/single-nav-green-template.html` |
| 全局 Token / 绿色主题样式 | `Basic UI component style/Green Theme-Global Style.css` |
| 布局与尺寸规范 | `Basic UI component style/layout.md` |
| 语义色 / 状态标签 / 图表用色 | `Basic UI component style/color.md` |
| 阴影规范 | `Basic UI component style/shadow.md` |
| 设计 Token 补充 | `Basic UI component style/tokens.md` |
| 字体排版补充 | `Basic UI component style/typography.md` |
| 可选暗色主题 Token | `Basic UI component style/Green Dark Theme-Global Style.css` |
| 页面容器交互规范 | `Interaction Construction Specifications/page-container.md` |
| 权限与状态交互规范 | `Interaction Construction Specifications/permission-state.md` |
| 列表页搜索与表格交互规范 | `Interaction Construction Specifications/list-page.md` |
| 表单录入交互规范 | `Interaction Construction Specifications/form-entry.md` |
| 组件规范目录 | `Basic UI component style/component-styles/` |
| 图标规范 | `Basic UI component style/component-styles/icon.md` |
| 数据指标卡规范 | `Basic UI component style/component-styles/data-metric-card.md` |
| 本地全量 iconfont CSS | `assets/iconfont/font_5177816_5ilr2y8ewpn.css` |
| 数据指标卡 3Dicon 素材库 | `assets/3Dicon/` |
| 3Dicon 名称检索索引 | `assets/3Dicon/INDEX.md` |
| 3Dicon 素材库说明 | `assets/3Dicon/README.md` |

## 页面类型读取映射

| 页面类型 | 必读 | 条件追加 |
|---|---|---|
| 列表页 / 查询结果页 / 用户管理 / 系统配置列表 | 母版、绿色主题、布局规范、`page-container.md`、`permission-state.md`、`list-page.md`、`motion.txt`、Button/Input/Select/Table/Pagination/Tag 等实际组件文档 | 包含新增或编辑时读 `form-entry.md`；包含状态/图表时读 `color.md`；包含数据指标卡时读 `data-metric-card.md` 与 `assets/3Dicon/INDEX.md` |
| 表单页 / 新增页 / 编辑页 / 配置页 | 母版、绿色主题、布局规范、`page-container.md`、`permission-state.md`、`form-entry.md`、`motion.txt`、Button/Input/Select/Textarea/Radio/Checkbox/Switch 等实际组件文档 | 包含列表或关联表格时读 `list-page.md`；包含状态标签时读 `color.md` |
| 详情页 | 母版、绿色主题、布局规范、`page-container.md`、`permission-state.md`、实际组件文档 | 包含表格读 `list-page.md`；包含编辑表单读 `form-entry.md`；包含状态/图表读 `color.md` |
| 工作台 / Dashboard | 母版、绿色主题、布局规范、`page-container.md`、`permission-state.md`、`color.md`、实际组件文档 | 包含待办、排行、表格读 `list-page.md`；包含快捷配置读 `form-entry.md`；包含数据指标卡时读 `data-metric-card.md` 与 `assets/3Dicon/INDEX.md` |
| 分步流程页 | 母版、绿色主题、布局规范、`page-container.md`、`permission-state.md`、`form-entry.md`、`color.md`、Tabs/Button/Input 等实际组件文档 | 包含表格读 `list-page.md` |
| 异常页 / 空状态页 | 母版、绿色主题、布局规范、`page-container.md`、`permission-state.md`、Button/Alert/Toast 等实际组件文档 | 包含状态标签或等级读 `color.md` |
| 图标密集页 / 菜单配置 / 图标按钮页 | 母版、绿色主题、布局规范、`page-container.md`、`icon.md`、`motion.txt`、实际组件文档 | 缺少母版内置 icon class 时读 `assets/iconfont/font_5177816_5ilr2y8ewpn.css` |
| HTML Demo 检查 | 读取待检查页面实际使用的母版、绿色主题、布局规范、交互规范和组件文档 | 按页面实际结构追加 `list-page.md`、`form-entry.md`、`color.md` |

## 主路径

```text
Basic UI component style/
Interaction Construction Specifications/
assets/iconfont/
assets/3Dicon/
```

不维护 `references/`、`templates/`、`05-ai-image/`、`07-checklists/` 等镜像目录。
