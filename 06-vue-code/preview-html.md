# HTML 可演示页面规范
## Preview HTML Demo Rules

Keywords: preview html, clickable demo, html demo, frontend preview, backend page, single navigation frame, double navigation frame, component css injection, ant class

本文用于约束 AI 生成可直接预览的 HTML 演示页面。该文件服务于设计调整、快速演示和交互验证。

## 0. 最高优先级

生成 HTML Demo 时，以下规则优先于页面内容、业务字段、视觉微调和组件语义：

```text
先完整继承框架母版，再强制注入所用组件 CSS，最后才允许生成业务组件 DOM。
```

也就是说：

```text
没有对应组件 CSS，就不允许使用对应 .ant-* class。
没有完成组件 CSS 注入校验，就不允许输出最终 HTML。
```

执行顺序必须是：

```text
1. 完整复制 HTML 母版。
2. 读取组件样式库。
3. 判断业务页面需要哪些组件。
4. 从组件样式库提取并注入这些组件的 CSS。
5. 再生成业务组件 DOM。
6. 最后追加页面业务 CSS。
7. 输出前扫描：使用了哪些 .ant-* class，就必须存在对应 CSS。
```

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

## 2. 必读文件

生成 HTML Demo 时必须读取：

```text
ROLE.md
SKILL.md
DOCS-STRUCTURE.md
INDEX.md
06-vue-code/templates/README.md
06-vue-code/templates/common-single-nav.html 或 06-vue-code/templates/double-nav-frame.html
04-pages/overview.md
对应页面规范
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
docs/component-style-library/component_style_library_index.md
06-vue-code/component-style-code-map.md
06-vue-code/business-component-reuse-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/component-reading-order-rules.md
06-vue-code/deprecated-class-blacklist.md
02-components/component-doc-boundary.md
02-components/overview.md
对应 02-components 组件语义文档
07-checklists/ai-output.md
```

禁止只读取 `02-components/` 后自行推导 HTML class。禁止只读取框架母版而不读取组件样式库。

## 3. 框架模板调用规则

| 场景 | 必须调用 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | `06-vue-code/templates/double-nav-frame.html` |
| 明确要求自定义导航框架 | 按用户指定方案处理 |

HTML 母版是页面底座，不是视觉参考稿。必须完整复制母版 DOM、CSS、JS、iconfont、hover、active、open、collapsed、级联浮层和响应式规则。

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

## 4. 组件 CSS 强制注入规则

组件 CSS 注入是硬门槛，优先级高于“使用 .ant-* class”。

必须执行：

```text
06-vue-code/component-style-import-rules.md
```

要求：

- 最终 HTML 使用 `.ant-btn`，必须存在按钮完整 CSS。
- 最终 HTML 使用 `.ant-input`，必须存在输入框完整 CSS。
- 最终 HTML 使用 `.ant-select`，必须存在选择器完整 CSS。
- 最终 HTML 使用 `.ant-table`，必须存在表格完整 CSS。
- 最终 HTML 使用 `.ant-tag`，必须存在标签完整 CSS。
- 最终 HTML 使用 `.ant-pagination`，必须存在分页器完整 CSS。
- 最终 HTML 使用 `.toast`，必须存在消息反馈完整 CSS。

最终 HTML 的 `<style>` 必须按以下顺序组织：

```text
1. 框架母版 CSS
2. 组件样式库 CSS
3. 当前页面业务 CSS
```

组件 CSS 必须来自：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

不得只写组件 class 而不注入对应 CSS。不得用页面业务 CSS 临时重写一套组件样式来代替组件样式库。

## 5. 业务组件 class 规则

业务组件必须采用：

```text
真实基础 class + 业务修饰 class
```

示例：

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

旧别名 class 和页面私有组件 class 统一按以下文件检查：

```text
06-vue-code/deprecated-class-blacklist.md
```

如果最终 HTML 中出现黑名单 class，必须先修正后再交付。

## 6. 文件要求

HTML 可演示页面必须满足：

- 单文件可打开。
- 包含完整 HTML、CSS、JavaScript。
- 不依赖构建工具。
- 不请求真实接口。
- 使用 mock 数据。
- 支持基础点击交互。
- 必须完整实现所调用的固定框架母版。
- 业务内容只能写入母版指定的业务内容区。
- 业务组件必须复用组件样式库中的真实基础 class。
- 业务组件 CSS 必须完整注入。
- 页面业务 CSS 只能补充布局、宽度、间距和局部业务修饰。
- 视觉风格应接近正式 Ant Design Vue 页面。
- 体现品牌色、Token、组件尺寸、交互状态和反馈规则。
- 使用规范指定的 iconfont Font Class，不用字符、emoji 或 CSS 自造图标。
- 必须继承字体渲染基线，避免伪粗体、伪斜体和浏览器字体合成。

## 7. 基础交互要求

| 页面类型 | HTML 预览交互 |
|---|---|
| 列表页 | 搜索、重置、分页切换、勾选、已选 N 项、行操作、弹窗确认、Toast 反馈 |
| 表单页 | 字段输入、必填校验、格式提示、条件显隐、提交 loading、成功提示 |
| 详情页 | 标签页切换、展开收起、抽屉或弹窗查看、操作反馈 |
| 工作台 | 卡片 hover、快捷入口点击、简单筛选或标签切换 |
| 分步流程页 | 上一步、下一步、步骤校验、提交 loading、结果反馈 |
| 异常页 | 刷新重试、返回首页、申请权限等可恢复操作 |

## 8. 输出前自检

输出 HTML Demo 前必须检查：

- 是否完整复制对应 HTML 母版。
- 是否保留母版 DOM、CSS、JS、iconfont、hover、active、open、collapsed 和响应式规则。
- 业务内容是否只进入母版业务内容区。
- 是否读取组件样式库。
- 是否读取并执行 `component-style-code-map.md`。
- 是否读取并执行 `business-component-reuse-rules.md`。
- 是否读取并执行 `component-style-import-rules.md`。
- 是否读取并执行 `component-reading-order-rules.md`。
- 是否读取并执行 `deprecated-class-blacklist.md`。
- 是否读取 `02-components/component-doc-boundary.md`。
- 所有业务组件是否使用真实 `.ant-*` class。
- 所有已使用 `.ant-*` class 是否存在对应 CSS。
- 组件 CSS 是否位于框架母版 CSS 之后、页面业务 CSS 之前。
- 页面业务 CSS 是否只做局部修饰，没有重写基础组件。
- 是否包含 loading、empty、error、success、confirm 等必要状态。
- 是否通过 `07-checklists/ai-output.md` 验收。

只要 CSS 注入检查不通过，禁止交付最终 HTML。

## 9. 与 Vue 代码的关系

HTML 可演示页面用于快速查看和调整界面。

只有用户明确要求以下内容时，才额外输出 Vue 3 + TypeScript + Ant Design Vue 代码：

```text
Vue 代码
工程代码
前端代码
接入项目
```

如果同时输出 Vue 和 HTML，两者应在页面结构、字段、状态、文案和主要视觉风格上保持一致；固定框架、业务组件 class 复用和字体渲染规则必须保持一致。