---
name: backend-design-standards
description: Use this skill when the user asks for B-end/backend/admin/management-system UI design, 中后台/后台管理/管理系统页面, dashboard/workbench, list/form/detail/config/user-management pages, clickable HTML demos, high-fidelity previews, or design-standard-compliant HTML pages. This skill only targets high-fidelity single-file HTML Demo generation and review. Do not generate Vue, React, Tailwind, frontend engineering code, or framework project code from this standard.
version: 1.0.0
---

# 后台设计规范 Skill
## Backend Design Standards Skill

本文是 AI 使用本仓库生成高保真后台 HTML Demo 时的唯一执行契约。目录导读、最小读取路径和文档索引统一读取 `INDEX.md`。

本仓库当前目标：

```text
生成符合设计规范、组件规范和交互规范的高保真可点击 HTML Demo。
```

不维护 Vue / React / Tailwind / 前端工程代码生成规范。

## 0. 角色与判断原则

AI 默认以资深 B 端产品 UI/UX 设计师视角工作，同时具备 HTML Demo 高保真还原和交互验证意识。

页面生成目标优先级：

```text
清晰 > 稳定 > 高效 > 可验证 > 高保真
```

生成前必须先判断：

- 页面类型是什么。
- 用户主任任务是什么。
- P0 / P1 / P2 / P3 信息分别是什么。
- 需要哪些组件。
- 是否存在高风险操作。
- 是否覆盖 loading / empty / error / success / disabled / confirm。
- 输出是否便于直接打开 HTML Demo 评审和交互验证。

不得为了视觉丰富增加无业务意义的装饰，不得跳过结构、交互和状态判断直接生成页面。

## 1. 默认交付方式

默认且唯一交付目标为：

```text
单文件 HTML Demo
```

HTML Demo 必须可打开、可点击、可验证主要交互。它不是静态截图，也不是框架工程代码。

## 2. 任务分流

| 用户任务 | 执行模式 | 读取方式 |
|---|---|---|
| 生成 HTML Demo / 高保真页面 | HTML Demo 模式 | 读取 `INDEX.md` 中对应 `html-demo-*` profile |
| 检查页面是否符合规范 | 验收模式 | 读取页面规范、交互规范、组件运行时契约和验收清单 |
| 修改 / 合并 / 删除规范文档 | 文档维护模式 | 读取 `INDEX.md` 的唯一真源归属表，只修改真源文件 |

不提供 Vue、React、Tailwind、前端工程代码或框架项目代码生成要求。

## 3. HTML Demo 三大硬约束

最终 HTML Demo 必须由三部分组成：

```text
框架母版 HTML
+ 组件 snippet DOM 与组件样式库 CSS / Token
+ 当前页面业务内容、mock 数据和交互 JS
```

不得脱离框架母版重新写页面。不得脱离 manifest / snippet 文件重写基础组件 DOM。不得读取交互规范后只做静态视觉展示。

### 3.1 框架必须继承母版

所有页面必须完整继承指定框架母版 HTML，不得自行重写顶部导航、侧边导航、页头和内容容器。

默认母版：

```text
06-vue-code/templates/common-single-nav.html
```

母版替换边界：

```text
06-vue-code/template-boundary-contract.md
```

框架母版是页面底座，不是视觉参考稿。

必须保留：

- 顶部导航结构。
- 左侧导航结构。
- 页面头部结构。
- 内容容器结构。
- 框架 CSS。
- 框架 JS。
- iconfont。
- hover / active / collapsed / open 等框架交互。

只允许替换：Logo、导航文案、菜单文案、页面标题、页头允许替换项、业务内容区内容和 mock 数据。

未完整继承框架母版时，HTML Demo 视为生成失败。

### 3.2 组件必须来自 manifest 与 snippet

所有稳定基础组件的 DOM 必须从组件 snippet manifest 指向的 `snippetFile` 中复制。

组件定位入口：

```text
docs/component-style-library/component_snippet_manifest.json
```

稳定 DOM 复制入口：

```text
docs/component-style-library/snippets/*.html
```

组件 CSS / Token 来源：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

运行时规则唯一读取：

```text
06-vue-code/component-runtime-contract.md
```

组件语义、状态和行为需要判断时，再按需读取：

```text
02-components/component-semantic-boundary.md
02-components/对应组件文档
```

未完成 manifest key / snippetFile / DOM / CSS scope / Token 成对抽取时，HTML Demo 视为生成失败。

### 3.3 交互必须逐项落地

已读取的页面交互规范必须转换为当前页面验收清单，生成后逐项自检；任一当前业务适用硬性项缺失，不得交付。

页面专项交互细节以 `03-interaction/` 对应文件为唯一真源。列表页必须读取并落实：

```text
03-interaction/list-search.md
03-interaction/list-table.md
```

## 4. 生成流程

```text
识别任务类型
→ 读取 INDEX.md 获取最小读取 profile
→ 锁定 HTML 母版
→ 读取 template-boundary-contract.md 判断业务替换区域
→ 读取页面规范
→ 读取交互规范
→ 读取 component_snippet_manifest.json
→ 复制所需 snippets/*.html 中的稳定组件 DOM
→ 读取组件样式库校验 CSS / Token
→ 执行 component-runtime-contract.md
→ 按需读取组件语义文档
→ 生成单文件 HTML Demo
→ 按 html-demo-acceptance.md 自检
→ 不通过则先修正再交付
```

## 5. 组件实现规则

HTML Demo 中稳定基础组件 DOM 必须来自：

```text
docs/component-style-library/snippets/*.html
```

组件 CSS / Token 必须来自：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

必须执行：

```text
06-vue-code/component-runtime-contract.md
```

关键规则：

- Button、Input、Select、Table、Tag、Pagination、Toast 等稳定基础组件必须使用 manifest 指向的 snippet DOM。
- 使用了某组件 snippet DOM，就必须同步抽取或校验该组件 CSS scope 与依赖 Token。
- manifest 中 `pendingComponents` 标注的组件不得被当作稳定基础组件使用。
- 最终 HTML 的样式顺序必须是：母版 CSS → 组件样式库 CSS → 页面业务 CSS。
- 页面业务 class 只能追加在真实组件 DOM 上作业务修饰，不得替代基础组件 class。
- 命中旧 class 快速拦截项时必须修正；需要深度排查时读取 `06-vue-code/deprecated-class-blacklist.md`。

## 6. 交互落地规则

读取交互文档不等于完成。

生成页面前，必须将当前页面相关交互规范转换为内部验收清单；生成后逐项自检。

交互细节不得在 `SKILL.md` 重复维护。列表页、表单页、详情页等页面的交互项以 `03-interaction/` 对应文件为准；缺少任一当前业务适用项，不得交付。

## 7. 冲突优先级

当文档发生冲突时，按以下顺序判断：

```text
1. HTML 母版：06-vue-code/templates/*.html
2. 母版替换边界：06-vue-code/template-boundary-contract.md
3. 稳定组件 DOM 定位：docs/component-style-library/component_snippet_manifest.json
4. 稳定组件 DOM：docs/component-style-library/snippets/*.html
5. 组件 CSS / Token：docs/component-style-library/backend_ai_ui_component_kit_with_index.html
6. 组件运行时抽取与 CSS / Token 注入：06-vue-code/component-runtime-contract.md
7. 页面结构：04-pages/*.md
8. 交互规则：03-interaction/*.md
9. 组件语义：02-components/component-semantic-boundary.md、02-components/*.md
10. 输出验收：07-checklists/*.md
```

验收清单只负责检查结果，不反向创造新的生成规则。

## 8. 禁止交付条件

出现以下任一情况，禁止交付最终结果：

- 未使用固定 HTML 母版。
- 改写或破坏母版固定结构。
- 未读取 `template-boundary-contract.md` 判断业务替换区域。
- 业务内容整体替换 `.terminal-right-panel`。
- 稳定基础组件未命中 manifest key。
- 稳定基础组件没有对应 snippetFile。
- 业务组件 DOM / CSS scope / Token 未成对抽取或校验。
- 只写 `.ant-*` class，但没有对应 snippet DOM / CSS。
- 把 pending 组件当作稳定基础组件使用。
- 命中旧 class 或私有组件 class 拦截项。
- 页面只有静态视觉，没有主要交互可点击验证。
- 缺少 loading、empty、error、success、confirm 等适用状态。
- 未落实 `03-interaction/` 对应文件中当前业务适用的页面交互规则。
- 未按 `07-checklists/html-demo-acceptance.md` 完成最终自检。