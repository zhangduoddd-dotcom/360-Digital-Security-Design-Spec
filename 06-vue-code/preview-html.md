# HTML 可演示页面规范
## Preview HTML Demo Rules

Keywords: preview html, clickable demo, html demo, backend page, component dom extraction, component css injection, ant class

本文用于约束 AI 生成可直接预览的 HTML 演示页面。该文件服务于设计调整、快速演示和交互验证。

## 0. 最高优先级

生成 HTML Demo 时，以下规则优先于页面内容、业务字段、视觉微调和组件语义：

```text
先完整继承框架母版，再从组件样式库抽取业务所需组件 DOM、CSS 与 Token，最后只替换业务文案、字段、mock 数据和业务修饰 class。
```

不得只注入组件 CSS 后自行编写基础组件 DOM。不得根据 `.ant-*` class 列表自行拼出“看起来像 Ant”的结构。

执行顺序必须是：

```text
1. 完整复制 HTML 母版。
2. 读取组件样式库。
3. 判断业务页面需要哪些基础组件。
4. 从组件样式库抽取这些组件的真实 DOM。
5. 从组件样式库抽取这些组件的 CSS 与依赖 Token。
6. 替换业务文案、字段、mock 数据和状态文案。
7. 追加业务修饰 class。
8. 追加页面业务 CSS。
9. 输出前检查 DOM、CSS、Token 是否成对抽取。
```

## 1. 默认使用场景

当用户要求以下内容时，默认生成 HTML 可演示页面：

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

生成 HTML Demo 时，先读取根目录：

```text
SKILL.md
INDEX.md
```

再按 `INDEX.md` 中对应任务 profile 读取页面规范、交互规范、组件样式库、组件抽取规则和验收清单。

禁止只读取 `02-components/` 后自行推导 HTML class。禁止只读取框架母版而不读取组件样式库。

## 3. 框架模板调用规则

| 场景 | 必须调用 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | `06-vue-code/templates/double-nav-frame.html` |
| 明确要求自定义导航框架 | 按用户指定方案处理 |

HTML 母版是页面底座，不是视觉参考稿。必须完整复制母版 DOM、CSS、JS、iconfont、hover、active、open、collapsed、级联浮层和响应式规则。

## 4. 组件 DOM / CSS / Token 成对抽取规则

必须执行：

```text
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-import-rules.md
```

要求：

- 最终 HTML 使用 Button，必须抽取组件库 Button DOM、Button CSS 和依赖 Token。
- 最终 HTML 使用 Input，必须抽取组件库 Input DOM、Input CSS 和依赖 Token。
- 最终 HTML 使用 Select，必须抽取组件库 Select DOM、Select CSS 和依赖 Token。
- 最终 HTML 使用 Table，必须抽取组件库 Table DOM、Table CSS 和依赖 Token。
- 最终 HTML 使用 Tag，必须抽取组件库 Tag DOM、Tag CSS 和依赖 Token。
- 最终 HTML 使用 Pagination，必须抽取组件库 Pagination DOM、Pagination CSS 和依赖 Token。
- 最终 HTML 使用 Toast，必须抽取组件库 Toast DOM、Toast CSS 和依赖 Token。

最终 HTML 的 `<style>` 必须按以下顺序组织：

```text
1. 框架母版 CSS
2. 组件样式库 CSS
3. 当前页面业务 CSS
```

## 5. 业务组件规则

业务组件必须采用：

```text
组件库真实 DOM + 组件库真实基础 class + 业务修饰 class + 组件库对应 CSS
```

本文不提供手写基础组件 DOM 示例。基础组件 DOM 必须从以下文件抽取：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
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
- 业务组件 DOM、CSS、Token 必须来自组件样式库并成对抽取。
- 页面业务 CSS 只能补充布局、宽度、间距和局部业务修饰。
- 使用规范指定的 iconfont Font Class。
- 必须继承字体渲染基线。

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
- 是否读取并执行 `component-dom-extraction-rules.md`。
- 是否读取并执行 `component-style-import-rules.md`。
- 是否读取并执行 `component-style-code-map.md`。
- 是否读取并执行 `business-component-reuse-rules.md`。
- 是否读取并执行 `deprecated-class-blacklist.md`。
- 所有业务组件 DOM 是否来自组件样式库。
- 所有已使用组件是否有对应 CSS 和 Token。
- 组件 CSS 是否位于框架母版 CSS 之后、页面业务 CSS 之前。
- 页面业务 CSS 是否只做局部修饰。
- 是否包含 loading、empty、error、success、confirm 等必要状态。
- 是否通过 `07-checklists/ai-output.md` 或 `07-checklists/frontend-acceptance.md` 验收。

只要 DOM、CSS、Token 成对抽取检查不通过，禁止交付最终 HTML。

## 9. 与 Vue 代码的关系

HTML 可演示页面用于快速查看和调整界面。

只有用户明确要求 Vue 代码、工程代码、前端代码或接入项目时，才额外输出 Vue 3 + TypeScript + Ant Design Vue 代码。
