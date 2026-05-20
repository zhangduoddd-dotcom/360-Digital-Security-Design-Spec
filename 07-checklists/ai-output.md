# AI 输出验收清单
## AI Output Checklist

Keywords: ai output, checklist, ui generation, backend, ant class, component reuse, component css injection

本文用于检查 HTML Demo、Vue 页面或页面结构是否符合 B 端后台规范。生成完成后必须先按本清单自检；发现不满足项时，应先修正输出，而不是把问题留给用户二次追问。

## 1. 结构完整性

- [ ] 页面类型明确。
- [ ] 已使用固定平台框架。
- [ ] 顶部通用导航、左侧菜单、可返回页头、页面内容区完整。
- [ ] 业务内容只出现在母版指定业务内容区内。
- [ ] 未改动固定框架的高度、宽度、颜色、icon、收起态和级联浮层。
- [ ] 核心业务模块完整出现。
- [ ] 主操作与次操作层级清楚。

## 2. 固定框架专项

- [ ] 默认后台页面使用 `06-vue-code/templates/common-single-nav.html`，除非用户明确指定双层导航或自定义导航。
- [ ] 用户明确指定双层导航时，才使用 `06-vue-code/templates/double-nav-frame.html`。
- [ ] 完整保留母版 DOM、CSS、JS、iconfont、hover、active、open、collapsed 和响应式规则。
- [ ] 可返回页头只包含返回按钮和标题。
- [ ] 业务内容区内没有重新生成面包屑或额外顶层页头。
- [ ] 左侧菜单展开态和收起态来自同一份菜单数据。
- [ ] 收起态菜单支持逐层级联浮层，而不是把二级 / 三级堆在一个浮层。

## 3. 页面类型专项

### 3.1 列表页

- [ ] 包含搜索 / 筛选区。
- [ ] 包含工具栏或批量操作区。
- [ ] 包含表头、数据行、状态标签、操作列。
- [ ] 包含分页器、总数信息、每页条数。
- [ ] 支持搜索、重置、分页、勾选、已选 N 项、行操作。
- [ ] 危险行操作或批量操作有二次确认。

### 3.2 表单页

- [ ] 包含字段分组、必填标识、说明文案。
- [ ] 包含默认、输入中、错误、禁用、提交 loading、成功 / 失败反馈。
- [ ] 字段超过 12 个时已分组；字段超过 20 个时已步骤化。
- [ ] 取消、保存、提交等主次操作层级清晰。
- [ ] 脏状态离开页面有确认。

### 3.3 详情页

- [ ] 包含对象摘要、对象状态、关键识别信息。
- [ ] 包含基础信息、关联信息、操作记录或关联列表。
- [ ] 对象名称、状态标签和业务操作在内容区内表达，不替代固定 ReturnHeader。
- [ ] 支持标签页切换、展开收起、抽屉 / 弹窗查看或操作反馈中的必要项。

### 3.4 工作台 / Dashboard

- [ ] 包含核心指标、待办、风险、快捷入口或动态信息。
- [ ] 图表数量克制，未把列表页错误生成成 Dashboard。
- [ ] 首屏能支持用户判断状态和下一步操作。

## 4. 组件与 Token 专项

- [ ] 普通主色使用 `p6 #00AB7A`，hover 使用 `p5 #1DB887`，active 使用 `p7 #039972`。
- [ ] 普通保存、提交、筛选、导出、删除按钮未误用 AI 渐变。
- [ ] 常规控件默认 32px 高度；紧凑控件 24px；宽松控件 40px。
- [ ] 圆角只使用 4 / 6 / 8px 档位。
- [ ] 表格行高默认 40px 或 48px，按组件样式库密度规范执行。
- [ ] 状态表达不只依赖颜色，同时保留文字或图标说明。
- [ ] icon 优先使用规范 iconfont，未使用 emoji 或字符临时替代。
- [ ] 字体渲染基线已包含 `font-synthesis: none` 和字体平滑规则。

## 4.1 业务组件 class 复用专项

- [ ] 已读取 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html`。
- [ ] 已读取 `docs/component-style-library/component_style_library_index.md`。
- [ ] 已读取 `06-vue-code/component-style-code-map.md`。
- [ ] 已读取 `06-vue-code/business-component-reuse-rules.md`。
- [ ] 已读取 `06-vue-code/component-style-import-rules.md`。
- [ ] 已读取 `06-vue-code/component-reading-order-rules.md`。
- [ ] 已读取 `06-vue-code/deprecated-class-blacklist.md`。
- [ ] 已读取 `02-components/component-doc-boundary.md`。
- [ ] 业务区 Button 使用 `.ant-btn` / `.ant-btn-primary` / `.ant-btn-text` / `.ant-btn-link` / `.ant-btn-ai` 等真实基础 class，而不是页面私有按钮 class。
- [ ] 业务区 Input / Search 使用 `.ant-input` / `.ant-input-affix-wrapper` 等真实基础 class。
- [ ] 业务区 Select 使用 `.ant-select` / `.ant-select-selector` / `.ant-select-dropdown` / `.ant-select-item` 等真实基础 class。
- [ ] 业务区 Table 使用 `.ant-table-wrapper` + `.ant-table`，紧凑表格可追加 `.ant-table-compact`。
- [ ] 业务区 Tag / 状态标签使用 `.ant-tag` 及 `.ant-tag-success` / `.ant-tag-processing` / `.ant-tag-warning` / `.ant-tag-error` 等真实语义 class。
- [ ] 业务区 Pagination 使用 `.ant-pagination` / `.ant-pagination-item` / `.ant-pagination-item-active` 等真实基础 class。
- [ ] 业务区 Toast / Message 使用 `.toast-holder` / `.toast`。
- [ ] Alert / Drawer / Modal 如需使用，应采用 `.ant-alert` / `.ant-drawer` / `.ant-modal` 命名并补充最小样式，因为当前组件样式库将其列为待补齐组件。
- [ ] 页面业务 class 只作为外层命名空间、布局钩子或修饰类追加，没有替代真实基础组件 class。
- [ ] 最终 HTML 没有命中 `06-vue-code/deprecated-class-blacklist.md` 中列出的旧别名 class 或页面私有组件 class。
- [ ] 新增 CSS 只补充业务布局、列宽、局部间距或特殊语义状态，没有重写真实基础组件的高度、字号、圆角、边框、hover、active、disabled、loading 等核心状态。

## 4.2 组件 CSS 注入专项

- [ ] 最终 HTML 使用 `.ant-btn` 时，必须存在按钮完整 CSS，包括 default、hover、active、disabled、loading。
- [ ] 最终 HTML 使用 `.ant-input` / `.ant-input-affix-wrapper` 时，必须存在输入框完整 CSS，包括 default、hover、focus、disabled、error。
- [ ] 最终 HTML 使用 `.ant-select` 时，必须存在选择器完整 CSS，包括 selector、dropdown、item、selected、disabled、empty、loading。
- [ ] 最终 HTML 使用 `.ant-table` 时，必须存在表格完整 CSS，包括 wrapper、table、compact、hover、selected、loading、empty、error。
- [ ] 最终 HTML 使用 `.ant-tag` 时，必须存在标签完整 CSS，包括 success、processing、warning、error 等语义状态。
- [ ] 最终 HTML 使用 `.ant-pagination` 时，必须存在分页器完整 CSS，包括 item、active、prev、next、options、quick jumper。
- [ ] 最终 HTML 使用 `.toast` 时，必须存在 Toast / Message 完整 CSS。
- [ ] 组件 CSS 必须来自 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html`。
- [ ] 组件 CSS 必须放在框架母版 CSS 之后、页面业务 CSS 之前。
- [ ] 组件 CSS 依赖的 Token 若母版缺失，必须补充；若母版已有同名 Token，不得重复定义冲突值。
- [ ] 只要最终 HTML 使用了 `.ant-*` class 但没有对应 CSS 定义，就判定为未通过验收。

## 5. 交互与状态专项

- [ ] 包含 loading、empty、error、无权限、禁用、成功 / 失败反馈中的必要项。
- [ ] 异步操作有 loading，防止重复点击。
- [ ] 删除、禁用、还原、覆盖、发布、重置等高风险操作有二次确认。
- [ ] 确认弹窗说明动作对象、影响范围和是否可恢复。
- [ ] 空状态和异常状态有下一步操作。
- [ ] HTML demo 使用 mock 数据，不请求真实接口。
- [ ] HTML demo 支持基础点击交互，而不是静态截图式页面。

## 6. 修正顺序

按以下顺序修正：固定框架、组件 CSS 注入、真实组件 class 继承、旧 class 黑名单、页面类型、模块结构、业务字段、组件清单、交互状态、Token 与字体、视觉风格、负向约束。

只要组件 CSS 注入或旧 class 黑名单检查不通过，禁止交付最终 HTML。