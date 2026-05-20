---
name: backend-design-standards
description: Use this skill when the user asks for B-end/backend/admin/management-system UI design, 中后台/后台管理/管理系统页面, dashboard/workbench, list/form/detail/config/user-management pages, clickable HTML demos, high-fidelity previews, or Vue 3 + TypeScript + Ant Design Vue frontend pages. By default, UI generation should output a single-file HTML demo first; only generate Vue/React/Tailwind/frontend engineering code when the user explicitly requests it. Also use it when reviewing or standardizing generated backend UI against this design standard.
version: 1.0.0
---

# 后台设计规范 Skill
## Backend Design Standards Skill

本文是 AI 使用本仓库生成高保真后台页面时的唯一执行契约。目录导读、最小读取路径和文档索引统一读取 `INDEX.md`。

## 0. 角色与判断原则

AI 默认以资深 B 端产品 UI/UX 设计师视角工作，同时具备企业级前端交付意识。

页面生成的目标优先级为：

```text
清晰 > 稳定 > 高效 > 可交付 > 美观
```

生成前必须先判断：

- 页面类型是什么。
- 用户主任务是什么。
- P0 / P1 / P2 / P3 信息分别是什么。
- 需要哪些组件。
- 是否存在高风险操作。
- 是否覆盖 loading / empty / error / success / disabled / confirm。
- 输出是否便于 HTML Demo 或 Vue 工程落地。

不得为了视觉丰富增加无业务意义的装饰，不得跳过结构、交互和状态判断直接生成页面。

## 1. 默认交付方式

默认交付为：

```text
单文件 HTML Demo
```

适用用户表达：

```text
生成页面 / 生成界面 / 做一个后台页面 / demo / 可演示页面 / 可点击预览 / 高保真预览 / HTML 预览
```

只有用户明确要求以下内容时，才生成 Vue / 前端工程代码：

```text
Vue 代码 / 前端代码 / 工程代码 / 接入项目 / Vue3 + TypeScript + Ant Design Vue
```

HTML Demo 必须是可打开、可点击、可验证主要交互的高保真演示文件，不是静态截图。

## 2. 任务分流

| 用户任务 | 执行模式 | 读取方式 |
|---|---|---|
| 生成 HTML Demo / 高保真页面 | HTML Demo 模式 | 读取 `INDEX.md` 中对应 `html-demo-*` profile |
| 生成 Vue 页面代码 | Vue 工程模式 | 读取 `INDEX.md` 中对应 `vue-*` profile |
| 检查页面是否符合规范 | 验收模式 | 读取页面规范、交互规范和 checklist |
| 修改 / 合并 / 删除规范文档 | 文档维护模式 | 读取 `INDEX.md` 的唯一真源归属表，只修改真源文件 |

## 3. 首要硬约束

1. 必须先使用固定 HTML 母版；默认使用 `06-vue-code/templates/common-single-nav.html`。
2. 不得自行重写顶部导航、侧边导航、页头、内容容器和母版交互。
3. 业务组件 DOM / class / CSS / Token 必须从组件样式库成对抽取。
4. 不得从 `02-components/` 推导真实 HTML DOM、class 或 CSS。
5. 页面业务 class 只能追加修饰，不得替代基础组件 DOM 或基础 class。
6. 已读取的交互规范必须转换为当前页面内部验收清单。
7. HTML Demo 不得以“Vue 工程再实现”为理由降级交互。
8. 任一当前页面适用的硬性验收项缺失时，不得交付。

## 4. 生成流程

```text
识别任务类型
→ 读取 INDEX.md 获取最小读取 profile
→ 锁定 HTML 母版
→ 读取页面规范
→ 读取交互规范
→ 从组件样式库抽取 DOM / CSS / Token
→ 生成 HTML Demo 或 Vue 页面代码
→ 按 checklist 自检
→ 不通过则先修正再交付
```

## 5. 组件实现规则

HTML Demo 中基础组件必须来自：

```text
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

必须执行：

```text
06-vue-code/component-dom-extraction-rules.md
06-vue-code/component-style-import-rules.md
06-vue-code/deprecated-class-blacklist.md
```

规则：

- Button、Input、Select、Table、Tag、Pagination、Toast 等基础组件必须使用组件样式库真实 DOM。
- 使用了某组件 DOM，就必须同步抽取该组件 CSS 与依赖 Token。
- 最终 HTML 的样式顺序必须是：母版 CSS → 组件样式库 CSS → 页面业务 CSS。
- 命中旧 class 黑名单时必须修正。

## 6. 交互落地规则

读取交互文档不等于完成。

生成页面前，必须将当前页面相关交互规范转换为内部验收清单；生成后逐项自检。

列表页必须重点落实：

```text
搜索 / 清空 / loading / empty / 排序 / 列筛选 / 勾选联动 / 固定列 / 行操作 / 更多菜单 / 分页 / 禁用 Tooltip / 二次确认 / Toast 反馈
```

缺少任一当前业务适用项，不得交付。

## 7. 冲突优先级

当文档发生冲突时，按以下顺序判断：

```text
1. HTML 母版：06-vue-code/templates/*.html
2. 组件真实 DOM / class / CSS / Token：docs/component-style-library/backend_ai_ui_component_kit_with_index.html
3. 组件 DOM 抽取与 CSS 注入：06-vue-code/component-dom-extraction-rules.md、component-style-import-rules.md
4. 页面结构：04-pages/*.md
5. 交互规则：03-interaction/*.md
6. 组件语义：02-components/*.md
7. 输出验收：07-checklists/*.md
```

验收清单只负责检查结果，不反向创造新的生成规则。

## 8. 禁止交付条件

出现以下任一情况，禁止交付最终结果：

- 未使用固定 HTML 母版。
- 改写或破坏母版固定结构。
- 业务组件 DOM / CSS / Token 未成对抽取。
- 只写 `.ant-*` class，但没有对应真实 DOM / CSS。
- 命中旧 class 或私有组件 class 黑名单。
- 页面只有静态视觉，没有主要交互可点击验证。
- 缺少 loading、empty、error、success、confirm 等适用状态。
- 列表页只实现“搜索 + 表格 + 分页”的粗结构，缺少排序、筛选、勾选联动、固定列、确认反馈等适用交互。
- 未按 `07-checklists/frontend-acceptance.md` 完成最终自检。
