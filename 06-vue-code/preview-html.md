# HTML 可演示页面规范
## Preview HTML Demo Rules

Keywords: preview html, clickable demo, html demo, backend page, snippet manifest, component runtime contract

本文只定义 HTML Demo 的输出形态、模板调用和基础交互要求；组件运行时细节统一读取 `06-vue-code/component-runtime-contract.md`。

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

## 2. 必读入口

生成 HTML Demo 时，先读取：

```text
SKILL.md
INDEX.md
```

再按 `INDEX.md` 中对应 `html-demo-*` profile 读取页面规范、交互规范、母版边界契约、组件 manifest、组件运行时契约和验收清单。

不要从 `02-components/` 推导 DOM / class / CSS；`02-components/` 只作为组件语义、状态和行为说明。

## 3. 框架模板调用规则

| 场景 | 必须调用 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | `06-vue-code/templates/double-nav-frame.html` |
| 明确要求自定义导航框架 | 按用户指定方案处理 |

HTML 母版是页面底座，不是视觉参考稿。母版可替换区域按以下文件判断：

```text
06-vue-code/template-boundary-contract.md
```

## 4. 组件实现入口

HTML Demo 中的稳定基础组件必须按以下链路实现：

```text
docs/component-style-library/component_snippet_manifest.json
→ docs/component-style-library/snippets/*.html
→ docs/component-style-library/backend_ai_ui_component_kit_with_index.html
→ 06-vue-code/component-runtime-contract.md
```

组件语义、状态和行为需要判断时，再按需读取：

```text
02-components/component-semantic-boundary.md
02-components/对应组件文档
```

## 5. 文件要求

HTML 可演示页面必须满足：

- 单文件可打开。
- 包含完整 HTML、CSS、JavaScript。
- 不依赖构建工具。
- 不请求真实接口。
- 使用 mock 数据。
- 支持主要点击交互。
- 完整继承指定框架母版。
- 业务内容只写入母版指定业务内容区。
- 稳定基础组件 DOM 来自 manifest 指向的 snippetFile。
- 组件 CSS 与 Token 由组件样式库提供并按运行时契约校验。
- 页面业务 CSS 只补充布局、宽度、间距和局部业务修饰。
- 继承字体渲染基线和 iconfont 规则。

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

输出 HTML Demo 前必须确认：

- 已继承对应 HTML 母版。
- 已读取 `template-boundary-contract.md`。
- 业务内容只进入母版业务内容区。
- 已读取 `component_snippet_manifest.json`。
- 所有稳定基础组件 DOM 来自 manifest 指定 snippetFile。
- 已读取组件样式库作为 CSS / Token 来源。
- 已执行 `component-runtime-contract.md`。
- 包含 loading、empty、error、success、confirm 等必要状态。
- 通过 `07-checklists/html-demo-acceptance.md` 验收。