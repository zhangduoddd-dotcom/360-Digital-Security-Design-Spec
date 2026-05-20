# HTML 可演示页面规范
## Preview HTML Demo Rules

Keywords: preview html, clickable demo, html demo, frontend preview, backend page, single navigation frame, double navigation frame, business component reuse, ant class

本文用于约束 AI 生成可直接预览的 HTML 演示页面。该文件服务于设计调整、快速演示和交互验证。

## 1. 默认使用场景

当用户要求以下内容时，默认只需要生成 HTML 可演示页面：

```text
可演示页面
demo
可点击预览
高保真演示环境
HTML 预览
页面原型演示
```

不需要同时输出 Vue 代码，除非用户明确要求“Vue 代码 / 工程代码 / 前端代码 / 接入项目”。

## 2. 框架模板调用规则

生成 HTML 可演示页面时，必须先判断用户是否明确指定导航框架。

| 场景 | 必须调用 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | `06-vue-code/templates/double-nav-frame.html` |
| 明确要求自定义导航框架 | 按用户指定方案处理 |

规则：

```text
单层导航框架是本套 GitHub 的默认 HTML 母版。
双层导航框架是明确指定时才调用的特定母版。
只有用户明确指定“双层导航框架 / 双层顶部导航 / 双层导航页面”时，才调用 double-nav-frame.html。
只有用户明确要求“自定义导航框架”时，才允许不使用默认单层导航框架母版。
```

## 3. 默认单层导航框架硬约束

当用户明确提出以下任一描述时：

```text
基于本套 GitHub 生成页面
基于本仓库规范生成页面
使用本套设计规范生成页面
基于单层导航框架
基于单层顶部导航
单层导航页面
单层顶部导航页面
```

且没有明确指定“双层导航框架 / 自定义导航框架”时，必须调用：

```text
06-vue-code/templates/common-single-nav.html
```

使用方式：

```text
1. 读取 common-single-nav.html。
2. 完整复制 common-single-nav.html 作为 HTML demo 底座。
3. 只替换业务内容、导航文案、菜单数据、页面内容和 mock 数据。
4. 不重新推导、不重新拼装单层导航框架。
5. 保留 common-single-nav.html 中的 DOM、CSS、JS、iconfont、hover、active、open、展开收起和响应式交互。
```

## 4. 双层导航框架硬约束

当用户明确提出以下任一描述时：

```text
基于双层导航框架
基于双层顶部导航
双层导航页面
双层顶部导航页面
double-nav-frame
double top navigation
```

必须调用：

```text
06-vue-code/templates/double-nav-frame.html
```

使用方式：

```text
1. 读取 double-nav-frame.html。
2. 完整复制 double-nav-frame.html 作为 HTML demo 底座。
3. 只替换业务内容、导航文案、菜单数据、页面内容和 mock 数据。
4. 不重新推导、不重新拼装双层导航框架。
5. 保留 double-nav-frame.html 中的 DOM、CSS、JS、iconfont、hover、active、open、展开收起和响应式交互。
```

## 5. 固定框架保留规则

HTML demo 必须完整保留所调用母版中的固定框架，包括但不限于：

```text
顶部导航 TopNavigation
页面内左侧菜单 Sidebar
页头 Header
页面内容区 PageContent
顶部导航状态
左侧菜单展开 / 收起状态
下拉 / 浮层 / 级联菜单交互
响应式规则
字体渲染规则
iconfont 引用与状态 icon 规则
```

固定框架的结构、尺寸、颜色、icon、展开 / 收起、收起态级联菜单、顶部导航状态和页头结构不允许变化。

只允许替换：

```text
Logo 占位图片
顶部导航文案和路由
左侧菜单业务文案和路由
页面标题文案
页面内容区内的业务内容
mock 数据
必要的业务字段和示例数据
```

不允许替换：

```text
顶部导航高度 / 颜色 / 布局
左侧菜单宽度 / 颜色 / 状态 / 收起交互
收起态级联浮层交互
页头结构
框架 icon 状态规则
页面内容区 padding 和背景
框架 CSS 类名和 JS 交互逻辑
```

## 6. 业务组件复用硬约束

HTML demo 不能只继承框架外壳。页面内容区内的业务组件也必须继承组件样式库中真实可生效的 Ant 风格基础组件 class。

生成 HTML demo 时必须读取并执行：

```text
docs/component-style-library/component_style_library_index.md
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
```

核心原则：

```text
框架母版必须继承，业务组件必须继承真实可生效的 .ant-* 基础 class。
```

业务组件必须采用“真实基础 class + 业务修饰 class”的组合方式：

```html
<button class="ant-btn ant-btn-primary threat-action-btn">批量处置</button>
<div class="ant-input-affix-wrapper threat-search-input">
  <i class="iconfont icon-a-sousuofangdajing"></i>
  <input class="ant-input" placeholder="搜索告警名称 / IP" />
</div>
<div class="ant-select asset-filter-select">
  <div class="ant-select-selector">全部状态</div>
</div>
<div class="ant-table-wrapper threat-alert-table">
  <table class="ant-table ant-table-compact"></table>
</div>
<span class="ant-tag ant-tag-error risk-high">高危</span>
<div class="ant-pagination table-pagination"></div>
```

禁止只使用页面私有组件 class 或旧别名 class：

```html
<button class="alert-button">批量处置</button>
<input class="alert-input" />
<table class="alert-table"></table>
<span class="alert-status-tag">高危</span>
<div class="alert-pagination"></div>
```

页面私有 class 只能用于外层命名空间、布局钩子、业务状态修饰或局部间距，不得替代 `.ant-btn`、`.ant-input`、`.ant-select`、`.ant-table`、`.ant-tag`、`.ant-pagination`、`.toast` 等真实基础组件 class。

如果发现业务区出现 `.alert-button`、`.alert-table`、`.alert-input`、`.xxx-btn`、`.xxx-table`、`.xxx-pagination`，或错误使用 `.btn`、`.form-input`、`.data-table`、`.tag-status`、`.status-tag`、`.pagination` 等旧别名 class，必须先改回真实 `.ant-*` 基础 class 后再交付。

## 7. 文件要求

HTML 可演示页面必须满足：

- 单文件可打开。
- 包含完整 HTML、CSS、JavaScript。
- 不依赖构建工具。
- 不请求真实接口。
- 使用 mock 数据。
- 支持基础点击交互。
- 必须完整实现所调用的固定框架母版。
- 业务内容只能写入母版指定的业务内容区。
- 业务组件必须复用组件样式库中的真实基础 class，不能另写一套私有组件样式。
- 视觉风格应接近正式 Ant Design Vue 页面。
- 体现品牌色、Token、组件尺寸、交互状态和反馈规则。
- 使用规范指定的 iconfont Font Class，不用字符、emoji 或 CSS 自造图标。
- 必须继承字体渲染基线，避免伪粗体、伪斜体和浏览器字体合成。

## 8. 基础交互要求

| 页面类型 | HTML 预览交互 |
|---|---|
| 列表页 | 搜索、重置、分页切换、勾选、已选 N 项、行操作、弹窗确认、Toast 反馈 |
| 表单页 | 字段输入、必填校验、格式提示、条件显隐、提交 loading、成功提示 |
| 详情页 | 标签页切换、展开收起、抽屉或弹窗查看、操作反馈 |
| 工作台 | 卡片 hover、快捷入口点击、简单筛选或标签切换 |
| 分步流程页 | 上一步、下一步、步骤校验、提交 loading、结果反馈 |
| 异常页 | 刷新重试、返回首页、申请权限等可恢复操作 |
| AI 原生页面 | 执行中、生成结果、编辑结果、重新生成、应用结果、查看依据 |

## 9. 样式要求

- 基于本套 GitHub 生成页面时，默认调用 `06-vue-code/templates/common-single-nav.html`，不得临时拼装导航框架。
- 明确指定“基于单层导航框架 / 单层顶部导航 / 单层导航页面”时，必须调用 `06-vue-code/templates/common-single-nav.html`。
- 明确指定“基于双层导航框架 / 双层顶部导航 / 双层导航页面”时，必须调用 `06-vue-code/templates/double-nav-frame.html`。
- 必须读取并执行 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 与 `06-vue-code/business-component-reuse-rules.md`。
- 必须继承字体渲染规则：`font-synthesis: none`、`font-synthesis-weight: none`、`font-synthesis-style: none`、`-webkit-font-smoothing: antialiased`、`-moz-osx-font-smoothing: grayscale`。
- 使用浅灰页面背景和白色内容卡片。
- 使用 `p6 #00AB7A` 作为品牌主色。
- 主按钮默认 p6，hover p5，active p7。
- 输入框 focus 使用 p6 边框和 p1 外发光。
- 普通业务按钮不能误用 AI 渐变。
- 保持 4px 间距基准。
- 表格、表单、按钮、标签样式与规范一致，并复用真实基础组件 class。
- 不使用过强装饰、营销视觉或夸张动效。
- 不新增平台框架规范外的游离色值。
- 表格、列表、表单、按钮、输入框、抽屉、提示说明等高密度文本区域不得出现伪粗体。

## 10. 输出前自检

输出 HTML demo 前必须检查：

- 是否完整复制对应 HTML 母版。
- 是否保留母版 DOM、CSS、JS、iconfont、hover、active、open、collapsed 和响应式规则。
- 业务内容是否只进入母版业务内容区。
- 是否读取 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html`。
- 是否读取 `06-vue-code/component-style-code-map.md`。
- 是否读取 `06-vue-code/business-component-reuse-rules.md`。
- Button 是否使用 `.ant-btn` 系列真实基础 class。
- Input / Search 是否使用 `.ant-input` / `.ant-input-affix-wrapper`。
- Select 是否使用 `.ant-select` 系列真实基础 class。
- Table 是否使用 `.ant-table-wrapper` + `.ant-table`。
- Tag / 状态标签是否使用 `.ant-tag` 与 `.ant-tag-success` / `.ant-tag-warning` / `.ant-tag-error` 等语义 class。
- Pagination 是否使用 `.ant-pagination`。
- Toast 是否使用 `.toast-holder` / `.toast`。
- 是否存在 `.alert-button`、`.alert-table`、`.alert-input`、`.xxx-btn`、`.xxx-table`、`.xxx-pagination` 等同义私有组件样式。
- 是否错误使用 `.btn`、`.form-input`、`.data-table`、`.tag-status`、`.status-tag`、`.pagination` 等旧别名 class。
- 页面私有 class 是否只是追加修饰，而不是替代基础组件 class。

## 11. 与 Vue 代码的关系

HTML 可演示页面用于快速查看和调整界面。

只有用户明确要求以下内容时，才额外输出 Vue 3 + TypeScript + Ant Design Vue 代码：

```text
Vue 代码
工程代码
前端代码
接入项目
```

如果同时输出 Vue 和 HTML，两者应在页面结构、字段、状态、文案和主要视觉风格上保持一致；固定框架、业务组件 class 复用和字体渲染规则必须保持一致。