# HTML 可演示页面规范
## Preview HTML Demo Rules

Keywords: preview html, clickable demo, html demo, backend page, component runtime contract, interaction validation

本文用于约束 AI 生成可直接预览的 HTML 演示页面。该文件服务于设计调整、快速演示和交互验证，只定义 HTML Demo 输出要求，不重复维护组件运行时细则。

## 0. 最高优先级

生成 HTML Demo 时，必须先完整继承框架母版，再从组件样式库抽取业务所需组件 DOM、CSS 与 Token，最后替换业务文案、字段、mock 数据和业务修饰 class。

组件运行时细则唯一读取：

```text
06-vue-code/component-runtime-contract.md
```

不得只注入组件 CSS 后自行编写基础组件 DOM。不得根据 `.ant-*` class 列表自行拼出“看起来像 Ant”的结构。

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

本规范只服务 HTML Demo 生成和验收，不提供 Vue / React / Tailwind / 前端工程代码生成要求。

## 2. 必读文件

生成 HTML Demo 时，先读取根目录：

```text
SKILL.md
INDEX.md
```

再按 `INDEX.md` 中对应任务 profile 读取页面规范、交互规范、组件样式库、组件运行时契约和验收清单。

禁止只读取 `02-components/` 后自行推导 HTML class。禁止只读取框架母版而不读取组件样式库和组件运行时契约。

## 3. 框架模板调用规则

| 场景 | 必须调用 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | `06-vue-code/templates/double-nav-frame.html` |
| 明确要求自定义导航框架 | 按用户指定方案处理 |

HTML 母版是页面底座，不是视觉参考稿。必须完整复制母版 DOM、CSS、JS、iconfont、hover、active、open、collapsed、级联浮层和响应式规则。

## 4. 组件运行时规则

组件真实实现来源：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

组件抽取、CSS 注入、Token 成对、业务 class 追加和旧 class 拦截统一执行：

```text
06-vue-code/component-runtime-contract.md
```

组件语义、状态和行为需要判断时，再按需读取：

```text
02-components/component-semantic-boundary.md
02-components/对应组件文档
```

旧 class 或私有组件 class 深度排查时，再读取：

```text
06-vue-code/deprecated-class-blacklist.md
```

## 5. 文件要求

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

## 6. 基础交互要求

| 页面类型 | HTML 预览交互 |
|---|---|
| 列表页 | 搜索、清空、排序、筛选、分页切换、勾选、已选 N 项、行操作、更多菜单、弹窗确认、Toast 反馈 |
| 表单页 | 字段输入、必填校验、格式提示、条件显隐、提交 loading、成功提示 |
| 详情页 | 标签页切换、展开收起、抽屉或弹窗查看、操作反馈 |
| 工作台 | 卡片 hover、快捷入口点击、简单筛选或标签切换 |
| 分步流程页 | 上一步、下一步、步骤校验、提交 loading、结果反馈 |
| 异常页 | 刷新重试、返回首页、申请权限等可恢复操作 |

读取交互文档后，必须把适用交互转成当前页面自检项。只做静态展示不得交付。

## 7. 输出前自检

输出 HTML Demo 前必须检查：

- 是否完整复制对应 HTML 母版。
- 是否保留母版 DOM、CSS、JS、iconfont、hover、active、open、collapsed 和响应式规则。
- 业务内容是否只进入母版业务内容区。
- 是否读取组件样式库。
- 是否执行 `06-vue-code/component-runtime-contract.md`。
- 所有业务组件 DOM 是否来自组件样式库或未来组件调用清单指向的真实来源。
- 所有已使用组件是否有对应 CSS 和 Token。
- 组件 CSS 是否位于框架母版 CSS 之后、页面业务 CSS 之前。
- 页面业务 CSS 是否只做局部修饰。
- 是否包含 loading、empty、error、success、confirm 等必要状态。
- 是否通过 `07-checklists/html-demo-acceptance.md` 验收。

只要 DOM、CSS、Token 成对抽取检查不通过，禁止交付最终 HTML。
