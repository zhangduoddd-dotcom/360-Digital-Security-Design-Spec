# 组件基础样式库索引补齐版
> 来源文件：`backend_ai_ui_component_kit_integrated.html`。本索引用于把完整 HTML 作为规范文档附录或可运行 Demo 合并时，补齐目录、组件映射、Token 分类和验收清单。
## 1. 推荐合并方式
将 HTML 文件作为《组件基础样式规范库》章节的完整 Demo 附录保留；正文部分只放索引、规则和验收清单。这样既能保留全部样式细节，又能避免规范文档过长导致 AI 读取时丢失重点。
## 2. 页面框架索引
- 顶部导航：`.platform-top-nav`，高度 56px，深色背景。
- 左侧导航：`.platform-sidebar`，展开 216px，收起 56px。
- 页面头部：`.platform-page-header`，高度 48px，白底分割线。
- 内容区：`.platform-page-content`，页面灰底，默认 padding 16px。
- 内容卡片：`.section-card`，白底、1px 边框、8px 圆角、轻阴影。
## 3. 组件目录索引
1. [Button 按钮](#button)：Ant: Button；类型、尺寸、加载、禁用、AI 入口；普通主按钮统一使用 p6 科技绿。
2. [Tabs 标签页](#tabs)：Ant: Tabs；基础线型、卡片型、状态数量和禁用态；active 使用 p6 / p7。
3. [Input 输入框](#input)：Ant: Input；Default / Hover / Focus / Filled / Disabled / Error / Clearable / Search。
4. [Select 下拉选择](#select)：Ant: Select；Open / Selected / Disabled / Multiple / Loading / Empty / Error，选中态使用 p1 + p7。
5. [Checkbox 多选框](#checkbox)：Ant: Checkbox；Unchecked / Checked / Indeterminate / Disabled / 表格全选联动。
6. [Radio 单选框](#radio)：Ant: Radio；基础 Radio、Radio Group、胶囊单选，checked 使用 p6，selected 文本使用 p7。
7. [Table 表格](#table)：Ant: Table；按规范拆分 48px 常规表格与 40px 紧凑表格，保留浅灰表头、选择列、状态 Tag、Tooltip、分页、loading / empty / error。
8. [Tag 标签](#tag)：Ant: Tag；属性标签、状态标签、风险等级、可删除标签；标签必须保留文字。
9. [Tooltip 文字提示](#tooltip)：Ant: Tooltip；用于解释图标、长文本、表头操作和截断字段，只承载短说明。
10. [DatePicker 日期选择器](#datepicker)：Ant: DatePicker；单日期、范围、聚焦、禁用、清空、面板选中和区间态。
11. [Pagination 分页](#pagination)：Ant: Pagination；总数、页码、禁用、当前页、每页条数、跳页输入。

## 4. Token 分类索引
### 框架 / 背景
- `--frame-top-height`：`56px`
- `--sidebar-expanded-width`：`216px`
- `--sidebar-collapsed-width`：`56px`
- `--frame-sidebar-width`：`var(--sidebar-expanded-width)`
- `--frame-page-header-height`：`48px`
- `--top-bg`：`#242933`
- `--page-bg`：`#F2F3F5`
- `--card-bg`：`#FFFFFF`

### 灰阶 / 边框
- `--border`：`#E8EAED`
- `--border-strong`：`#DFE1E6`
- `--gray-2`：`#F8F9FA`
- `--gray-3`：`#F2F3F5`
- `--gray-4`：`#E8EAED`

### 文字
- `--text-title`：`#242933`
- `--text-body`：`#525966`
- `--text-secondary`：`#8A9099`
- `--text-disabled`：`#AEB2B8`
- `--text-inverse`：`#FFFFFF`
- `--text-inverse-secondary`：`#D3D4D6`

### 品牌 / AI
- `--color-ai-default`：`linear-gradient(307deg, #004DFF 0%, #1093FF 65%, #1AFFAF 100%)`
- `--color-ai-hover`：`linear-gradient(0deg, rgba(255,255,255,0.20), rgba(255,255,255,0.20)), linear-gradient(126deg, #1AFFAF 0%, #1093FF 37%, #004DFF 100%)`
- `--color-ai-active`：`linear-gradient(0deg, rgba(0,0,0,0.20), rgba(0,0,0,0.20)), linear-gradient(309deg, #004DFF 0%, #1093FF 54%, #1AFFAF 100%)`
- `--primary`：`#00AB7A`
- `--primary-hover`：`#1DB887`
- `--primary-active`：`#039972`
- `--primary-bg`：`#D9F4EE`
- `--primary-bg-soft`：`#E6F8F3`

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

### 阴影
- `--shadow-card`：`0 4px 16px rgba(36, 41, 51, .05)`
- `--shadow-popover`：`0 8px 24px rgba(36, 41, 51, .14)`

### 动效
- `--motion-fast`：`.15s ease`
- `--motion-base`：`.2s ease`

## 5. AI 生成页面索引约束
- 生成后台页面时，必须优先使用本 HTML 中定义的 Token，不允许随机新增主色。
- 普通主按钮必须使用科技绿主色 `--primary`，AI 类入口才允许使用 AI 渐变。
- 表格常规行高使用 48px，紧凑表格行高使用 40px。
- 表格必须包含 hover、selected、disabled、empty、loading、error 等状态。
- 表单控件默认高度 32px，小尺寸 24px，大尺寸 40px。
- 状态标签必须使用 success / processing / warning / error / default 五类。
- 图标统一使用 iconfont 项目 5177816，不允许混用 emoji 或其他图标库。

## 6. 合并后需要继续补齐的组件
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

## 7. 验收清单
- [ ] 是否补齐完整组件目录索引。
- [ ] 是否补齐 Token 分类索引。
- [ ] 是否明确组件与 Ant Design 的映射关系。
- [ ] 是否明确控件高度 24 / 32 / 40。
- [ ] 是否明确表格密度 48 / 40。
- [ ] 是否明确默认、悬浮、聚焦、激活、禁用、错误状态。
- [ ] 是否统一 iconfont 图标库。
- [ ] 是否避免 `.ant-*` 直接污染全局，必要时增加 `.backend-kit` 命名空间。
