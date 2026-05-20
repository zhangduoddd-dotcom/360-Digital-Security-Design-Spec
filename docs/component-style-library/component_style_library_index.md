# 组件基础样式库索引说明

> 本索引根据主分支中的完整 HTML Demo `backend_ai_ui_component_kit_with_index.html` 维护。HTML 文件本身应作为可运行 Demo 保留，不压缩、不重写、不裁剪；本索引用于规范文档阅读、AI 检索和研发落地引用。

## 1. 源文件信息

- 页面标题：`360组件样式`
- HTML 字节大小：以 GitHub 当前文件为准
- SHA-256：已因 iconfont 与 Token 最小修复发生变化；后续如需严格校验，应重新计算当前 HTML 的 SHA-256
- Git Blob SHA：`1a5004f327c2c32e3a436ef9687254943beadc4e`
- 图标字体来源：内联 `@font-face`，使用 iconfont 项目 `5177816` 的 `font_5177816_df7h6mjlznn`
- CSS Token 数量：44 个
- 组件章节数量：11 个
- 内联交互脚本长度：6582 字符
- 最近最小修复：移除旧 `font_5177816_bhdsh3zh4q.css` 外链，统一最新 iconfont；补充 `--text-tertiary: #AEB2B8;`

## 2. 合并原则

- 主分支中的 HTML 文件必须作为完整可运行 Demo 维护。
- 不允许为了整理索引而重写、压缩、删减 HTML。
- 索引说明单独维护为 Markdown 文件，避免破坏 HTML Demo。
- 后续如需补充规范，应优先更新 Markdown 索引或另建扩展文档，不直接修改该基准 HTML。
- 该 HTML 可作为组件视觉基准、AI 页面生成基准、研发样式对照 Demo。

## 3. 页面框架索引

- 顶部导航：`.platform-top-nav`，高度 `56px`，深色背景 `--top-bg`。
- 左侧导航：`.platform-sidebar`，展开宽度 `216px`，收起宽度 `56px`。
- 页面头部：`.platform-page-header`，高度 `48px`，白底分割线。
- 内容区：`.platform-page-content`，灰底、滚动容器，默认 padding `16px`。
- 内容卡片：`.section-card`，白底、1px 边框、8px 圆角、轻阴影。
- Demo 面板：`.demo-panel`，用于承载每个组件的状态、尺寸和业务示例。

## 4. 组件目录索引

1. [Button 按钮](#button)：`Ant: Button`；类型、尺寸、加载、禁用、AI 入口；普通主按钮统一使用 p6 科技绿。
2. [Tabs 标签页](#tabs)：`Ant: Tabs`；基础线型、卡片型、状态数量和禁用态；active 使用 p6 / p7。
3. [Input 输入框](#input)：`Ant: Input`；Default / Hover / Focus / Filled / Disabled / Error / Clearable / Search。
4. [Select 下拉选择](#select)：`Ant: Select`；Open / Selected / Disabled / Multiple / Loading / Empty / Error，选中态使用 p1 + p7。
5. [Checkbox 多选框](#checkbox)：`Ant: Checkbox`；Unchecked / Checked / Indeterminate / Disabled / 表格全选联动。
6. [Radio 单选框](#radio)：`Ant: Radio`；基础 Radio、Radio Group、胶囊单选，checked 使用 p6，selected 文本使用 p7。
7. [Table 表格](#table)：`Ant: Table`；按规范拆分 48px 常规表格与 40px 紧凑表格，保留浅灰表头、选择列、状态 Tag、Tooltip、loading / empty / error。
8. [Tag 标签](#tag)：`Ant: Tag`；属性标签、状态标签、风险等级、可删除标签；标签必须保留文字。
9. [Tooltip 文字提示](#tooltip)：`Ant: Tooltip`；用于解释图标、长文本、表头操作和截断字段，只承载短说明。
10. [DatePicker 日期选择器](#datepicker)：`Ant: DatePicker`；单日期、范围、聚焦、禁用、清空、面板选中和区间态。
11. [Pagination 分页](#pagination)：`Ant: Pagination`；总数、页码、禁用、当前页、每页条数、跳页输入。

## 5. 组件映射总表

| 组件 | 锚点 | Ant 映射 | 说明 | HTML 中对应类出现次数 |
|---|---|---|---|---|
| Button 按钮 | `#button` | `Ant: Button` | 类型、尺寸、加载、禁用、AI 入口；普通主按钮统一使用 p6 科技绿。 | 24 |
| Tabs 标签页 | `#tabs` | `Ant: Tabs` | 基础线型、卡片型、状态数量和禁用态；active 使用 p6 / p7。 | 19 |
| Input 输入框 | `#input` | `Ant: Input` | Default / Hover / Focus / Filled / Disabled / Error / Clearable / Search。 | 15 |
| Select 下拉选择 | `#select` | `Ant: Select` | Open / Selected / Disabled / Multiple / Loading / Empty / Error，选中态使用 p1 + p7。 | 45 |
| Checkbox 多选框 | `#checkbox` | `Ant: Checkbox` | Unchecked / Checked / Indeterminate / Disabled / 表格全选联动。 | 32 |
| Radio 单选框 | `#radio` | `Ant: Radio` | 基础 Radio、Radio Group、胶囊单选，checked 使用 p6，selected 文本使用 p7。 | 16 |
| Table 表格 | `#table` | `Ant: Table` | 按规范拆分 48px 常规表格与 40px 紧凑表格，保留浅灰表头、选择列、状态 Tag、Tooltip、loading / empty / error。 | 19 |
| Tag 标签 | `#tag` | `Ant: Tag` | 属性标签、状态标签、风险等级、可删除标签；标签必须保留文字。 | 23 |
| Tooltip 文字提示 | `#tooltip` | `Ant: Tooltip` | 用于解释图标、长文本、表头操作和截断字段，只承载短说明。 | 7 |
| DatePicker 日期选择器 | `#datepicker` | `Ant: DatePicker` | 单日期、范围、聚焦、禁用、清空、面板选中和区间态。 | 52 |
| Pagination 分页 | `#pagination` | `Ant: Pagination` | 总数、页码、禁用、当前页、每页条数、跳页输入。 | 16 |

## 6. Token 分类索引

### 框架尺寸
- `--frame-top-height`：`56px`
- `--sidebar-expanded-width`：`216px`
- `--sidebar-collapsed-width`：`56px`
- `--frame-sidebar-width`：`var(--sidebar-expanded-width)`
- `--frame-page-header-height`：`48px`
### 背景与边框
- `--top-bg`：`#242933`
- `--page-bg`：`#F2F3F5`
- `--card-bg`：`#FFFFFF`
- `--border`：`#E8EAED`
- `--border-strong`：`#DFE1E6`
- `--gray-2`：`#F8F9FA`
- `--gray-3`：`#F2F3F5`
- `--gray-4`：`#E8EAED`
### 文字颜色
- `--text-title`：`#242933`
- `--text-body`：`#525966`
- `--text-secondary`：`#8A9099`
- `--text-tertiary`：`#AEB2B8`
- `--text-disabled`：`#AEB2B8`
- `--text-inverse`：`#FFFFFF`
- `--text-inverse-secondary`：`#D3D4D6`
### 品牌与 AI
- `--primary`：`#00AB7A`
- `--primary-hover`：`#1DB887`
- `--primary-active`：`#039972`
- `--primary-bg`：`#D9F4EE`
- `--primary-bg-soft`：`#E6F8F3`
- `--color-ai-default`：`linear-gradient(307deg, #004DFF 0%, #1093FF 65%, #1AFFAF 100%)`
- `--color-ai-hover`：`linear-gradient(0deg, rgba(255,255,255,0.20), rgba(255,255,255,0.20)), linear-gradient(126deg, #1AFFAF 0%, #1093FF 37%, #004DFF 100%)`
- `--color-ai-active`：`linear-gradient(0deg, rgba(0,0,0,0.20), rgba(0,0,0,0.20)), linear-gradient(309deg, #004DFF 0%, #1093FF 54%, #1AFFAF 100%)`
### 状态色
- `--success`：`#52C41A`
- `--success-bg`：`#EFF8EE`
- `--success-border`：`#BCE0B4`
- `--info`：`#1890FF`
- `--info-bg`：`#E6F7FF`
- `--info-border`：`#91D5FF`
- `--warning`：`#F58A02`
- `--warning-bg`：`#FFF8E6`
- `--warning-border`：`#FFC054`
- `--error`：`#F0131E`
- `--error-bg`：`#FFE8E6`
- `--error-border`：`#FFBEB8`
### 阴影与动效
- `--shadow-card`：`0 4px 16px rgba(36, 41, 51, .05)`
- `--shadow-popover`：`0 8px 24px rgba(36, 41, 51, .14)`
- `--motion-fast`：`.15s ease`
- `--motion-base`：`.2s ease`

## 7. 组件样式覆盖统计

- `ant-btn`：24 处
- `ant-tabs`：19 处
- `ant-input`：15 处
- `ant-select`：45 处
- `ant-checkbox`：32 处
- `ant-radio`：16 处
- `ant-table`：19 处
- `ant-tag`：23 处
- `ant-tooltip`：7 处
- `ant-picker`：52 处
- `ant-pagination`：16 处
- `toast`：1 处

## 8. 交互能力索引

该 HTML 内置 `<script>`，不是纯静态样式文件。当前检测到的交互包括：

- Tabs 选项卡点击切换
- Table 选择列全选/半选与计数联动
- DatePicker 打开、选中、清空、区间态
- Pagination 当前页切换
- Toast/Message 反馈触发
- 侧边栏收起/展开

## 9. AI 生成页面约束

- 普通主按钮必须使用 `--primary: #00AB7A`，hover 使用 `--primary-hover`，active 使用 `--primary-active`。
- AI 入口按钮才允许使用 `--color-ai-default / hover / active` 渐变。
- 控件高度必须遵循 `24 / 32 / 40` 三档。
- 表格常规密度使用 `48px` 行高，紧凑密度使用 `40px` 行高。
- 表单组件必须具备 default / hover / focus / disabled / error 状态。
- 表格必须覆盖 selected / disabled / hover / loading / empty / error 状态。
- 标签必须保留文字，不允许只用颜色或图标表达状态。
- Tooltip 只用于短说明，不承载复杂内容。
- 图标统一使用 iconfont 项目 `5177816`，当前 HTML Demo 使用内联 `@font-face` 指向 `font_5177816_df7h6mjlznn`。
- 页面结构优先使用：顶部导航 + 左侧导航 + 页面头 + 内容卡片。

## 10. 后续补齐建议

当前 HTML 已覆盖高频基础组件。若要升级为完整组件规范库，建议继续补充：

- Alert 警告提示
- Message 全局提示
- Notification 通知提醒
- Modal 弹窗
- Drawer 抽屉
- Popover 气泡卡片
- Dropdown 下拉菜单
- Breadcrumb 面包屑
- Steps 步骤条
- Switch 开关
- Upload 上传
- Empty 空状态
- Spin 加载
- Skeleton 骨架屏
- Descriptions 描述列表

## 11. 验收清单

- [ ] HTML 是否未被压缩、改写、删减。
- [ ] 是否保留 11 个组件章节。
- [ ] 是否保留 44 个 CSS Token。
- [ ] 是否保留内联 `<script>` 交互。
- [ ] 是否统一使用 iconfont 项目 `5177816` 的 `font_5177816_df7h6mjlznn`。
- [ ] 是否补充 `--text-tertiary: #AEB2B8;`。
- [ ] 是否保留 Table 的常规 / 紧凑 / loading / empty / error 示例。
- [ ] 是否保留 DatePicker、Select、Tabs、Checkbox、Pagination 的交互结构。
- [ ] 是否保留 Toast 反馈触发入口。
- [ ] Markdown 索引是否与 HTML 内容同步更新。
