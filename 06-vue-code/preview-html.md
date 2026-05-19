# HTML 可演示页面规范
## Preview HTML Demo Rules

Keywords: preview html, clickable demo, html demo, frontend preview, backend page, platform frame, font rendering, terminal security frame, double top navigation frame

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

## 2. 底层框架硬约束

生成任何 HTML 可演示页面时，默认必须优先读取并使用：

```text
03-interaction/platform-frame.md
06-vue-code/templates/platform-frame/index.html
```

### 2.1 框架模板调用优先级

| 场景 | 必须调用 |
|---|---|
| 默认后台页面 / 未指定特定产品框架 | `06-vue-code/templates/platform-frame/` |
| 用户明确说“本地安全大脑 / 本脑 / 基于本脑框架” | `06-vue-code/templates/local-security-brain-frame/` |
| 用户明确说“终端安全管理系统 / 终端 / 基于终端框架” | `06-vue-code/templates/terminal-security-frame/` |
| 用户明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | `06-vue-code/templates/double-top-navigation-frame/source.html` |

规则：

```text
默认后台页面继续使用通用 platform-frame。
本脑框架、终端框架和双层导航框架只是主线中的特定框架变体。
只有用户明确指定对应框架时，才允许调用对应模板。
明确指定双层导航框架时，必须完整复制 double-top-navigation-frame/source.html 作为页面底座。
```

### 2.2 双层导航框架硬约束

当用户明确提出以下任一描述时：

```text
基于双层导航框架
基于双层顶部导航
双层导航页面
双层顶部导航页面
double-top-navigation-frame
```

必须调用：

```text
06-vue-code/templates/double-top-navigation-frame/source.html
```

使用方式：

```text
1. 读取 source.html。
2. 完整复制 source.html 作为 HTML demo 底座。
3. 只替换业务内容、导航文案、菜单数据、页面内容和 mock 数据。
4. 不重新推导、不重新拼装、不沿用旧双层导航框架。
5. 保留 source.html 中的 DOM、CSS、JS、iconfont、hover、active、open、展开收起和响应式交互。
```

HTML demo 默认必须包含并锁定以下框架：

```text
顶部通用导航 TopNavigation
页面内左侧菜单 Sidebar
可返回页头 ReturnHeader
页面内容区 PageContent
```

固定框架的结构、尺寸、颜色、icon、展开 / 收起、收起态级联菜单、顶部导航状态和页头结构不允许变化。

只允许替换：Logo 占位图片、顶部一级导航文案和路由、左侧菜单业务文案和路由、页面标题文案、`.platform-page-content` 内的业务内容、mock 数据。

不允许替换：顶部导航高度 / 颜色 / 布局、左侧菜单宽度 / 颜色 / 状态 / 收起交互、收起态级联浮层交互、可返回页头结构、框架 icon 状态规则、页面内容区 padding 和背景。

## 3. 文件要求

HTML 可演示页面必须满足：

- 单文件可打开。
- 包含完整 HTML、CSS、JavaScript。
- 不依赖构建工具。
- 不请求真实接口。
- 使用 mock 数据。
- 支持基础点击交互。
- 必须完整实现平台固定框架。
- 业务内容只能写入 `.platform-page-content`。
- 视觉风格应接近正式 Ant Design Vue 页面。
- 体现品牌色、Token、组件尺寸、交互状态和反馈规则。
- 使用真实 `asset/icons/*.svg` 引用，不用字符、emoji 或 CSS 自造图标。
- 必须继承 `font-rendering.css` 或等效字体渲染基线。

## 4. 平台框架交互要求

| 框架区域 | 必须交互 |
|---|---|
| 顶部导航 | 默认、hover、选中、可点击下拉、右侧功能浮层、用户浮层 |
| 左侧菜单展开态 | 一级 / 二级 / 三级菜单、选中态、hover 态、禁用态、展开 / 收起态 |
| 左侧菜单收起态 | 56px 收起态、hover icon 灰色底、级联浮层、点击叶子菜单同步选中 |
| 收起态级联浮层 | 逐层展开，不把二级 / 三级堆在同一个浮层 |
| 可返回页头 | 只包含返回按钮和标题 |
| 页面内容区 | 承载业务内容，不侵入固定框架 |

## 5. 基础交互要求

| 页面类型 | HTML 预览交互 |
|---|---|
| 列表页 | 搜索、重置、分页切换、勾选、已选 N 项、行操作、弹窗确认、Toast 反馈 |
| 表单页 | 字段输入、必填校验、格式提示、条件显隐、提交 loading、成功提示 |
| 详情页 | 标签页切换、展开收起、抽屉或弹窗查看、操作反馈 |
| 工作台 | 卡片 hover、快捷入口点击、简单筛选或标签切换 |
| 分步流程页 | 上一步、下一步、步骤校验、提交 loading、结果反馈 |
| 异常页 | 刷新重试、返回首页、申请权限等可恢复操作 |
| AI 原生页面 | 执行中、生成结果、编辑结果、重新生成、应用结果、查看依据 |

## 6. 样式要求

- 必须先遵循 `03-interaction/platform-frame.md` 中的框架样式。
- 如果用户明确指定“终端安全管理系统 / 终端”，必须调用 `06-vue-code/templates/terminal-security-frame/`，不得用通用框架临时拼装。
- 如果用户明确指定“本地安全大脑 / 本脑”，必须调用 `06-vue-code/templates/local-security-brain-frame/`，不得用通用框架临时拼装。
- 如果用户明确指定“基于双层导航框架 / 双层顶部导航 / 双层导航页面”，必须调用 `06-vue-code/templates/double-top-navigation-frame/source.html`，不得用通用框架或旧双层导航框架临时拼装。
- 必须继承字体渲染规则：`font-synthesis: none`、`font-synthesis-weight: none`、`font-synthesis-style: none`、`-webkit-font-smoothing: antialiased`、`-moz-osx-font-smoothing: grayscale`。
- 使用浅灰页面背景和白色内容卡片。
- 使用 `p6 #00AB7A` 作为品牌主色。
- 主按钮默认 p6，hover p5，active p7。
- 输入框 focus 使用 p6 边框和 p1 外发光。
- 普通业务按钮不能误用 AI 渐变。
- 保持 4px 间距基准。
- 表格、表单、按钮、标签样式与规范一致。
- 不使用过强装饰、营销视觉或夸张动效。
- 不新增平台框架规范外的游离色值。
- 表格、列表、表单、按钮、输入框、抽屉、提示说明等高密度文本区域不得出现伪粗体。

## 7. 与 Vue 代码的关系

HTML 可演示页面用于快速查看和调整界面。只有用户明确要求工程代码时，才额外输出 Vue 3 + TypeScript + Ant Design Vue 代码。

如果同时输出 Vue 和 HTML，两者应在页面结构、字段、状态、文案和主要视觉风格上保持一致；平台固定框架和字体渲染规则必须保持一致。