---
name: backend-design-standards
description: Use this skill when the user asks for B-end/backend/admin/management-system UI design, 中后台/后台管理/管理系统页面, dashboard/workbench, list/form/detail/config/user-management pages, clickable HTML demos, high-fidelity previews, AI image prompts for backend UI, or Vue 3 + TypeScript + Ant Design Vue frontend pages. Also use it when reviewing or standardizing generated backend UI against this design standard.
version: 1.0.0
---

# 后台设计规范 Skill
## Backend Design Standards Skill

Keywords: backend design, ai routing, html preview, vue codegen, ai image, ant design vue

## 1. 默认定位

这是 B 端后台界面设计 Skill 的总入口。AI 应先判断用户任务类型，再读取最少但足够的文档。

本 Skill 的首轮生成目标是稳定遵循规范，而不是只生成一个通用后台页面。首次生成前必须先完成任务路由、框架选择、页面类型选择和验收清单选择。

默认前端技术栈：

```text
Vue 3 + TypeScript + Ant Design Vue + Composition API + <script setup lang="ts">
```

默认演示交付形态：

```text
可直接打开预览的单文件 HTML
```

## 2. 首次生成硬约束

以下规则在任何后台页面、HTML demo、Vue 页面代码、高保真界面或页面截图任务中都优先于页面细节：

1. 必须使用固定平台框架；业务内容只能进入 `.platform-page-content`。
2. 不得改动顶部通用导航、左侧菜单、收起态级联浮层、可返回页头、页面内容区 padding 和背景。
3. 默认后台页面使用 `06-vue-code/templates/platform-frame/`；只有用户明确指定“本地安全大脑 / 本脑”或“终端安全管理系统 / 终端”时，才使用对应产品模板。
4. 可返回页头只包含返回按钮和标题；不得加入面包屑、业务按钮或额外筛选控件。
5. 普通主色使用 `p6 #00AB7A`，hover 使用 `p5 #1DB887`，active 使用 `p7 #039972`；普通按钮不得误用 AI 渐变。
6. 常规控件默认 32px 高度，紧凑控件 24px，宽松控件 40px；圆角只使用 4 / 6 / 8px 档位。
7. HTML demo 必须包含 mock 数据、基础点击交互、loading、empty、error、成功 / 失败反馈，不请求真实接口。
8. 列表页必须包含搜索 / 筛选、工具栏、表格、状态、行操作、分页和总数；表单页必须包含校验、提交 loading 和反馈；详情页必须包含对象识别、状态和关联信息。
9. 危险操作必须二次确认，并说明动作对象、影响范围和是否可恢复。
10. 输出完成后必须按 `07-checklists/ai-output.md` 或 `07-checklists/frontend-acceptance.md` 自检，发现不满足项必须先修正。

## 3. 默认读取顺序

所有任务先读取 `INDEX.md`，然后按任务分流：

| 任务 | 默认读取 |
|---|---|
| 查询设计规则 | `01-foundation/`、`02-components/`、`03-interaction/` |
| 生成页面结构 | `03-interaction/platform-frame.md` + `04-pages/overview.md` + 对应页面规范 |
| 生成 AI 生图 Prompt | `05-ai-image/` + 对应页面规范 |
| 生成可演示页面 / demo / 可点击预览 | `03-interaction/platform-frame.md` + `04-pages/overview.md` + `06-vue-code/preview-html.md` + `07-checklists/ai-output.md` |
| 生成 Vue 页面代码 / 工程代码 | `03-interaction/platform-frame.md` + `04-pages/overview.md` + `06-vue-code/codegen-rules.md` + `07-checklists/frontend-acceptance.md` |
| 检查输出质量 | `07-checklists/` |

## 4. 生成交付规则

### 4.1 可演示页面 / demo / 可点击预览

当用户要求“生成可演示页面”“做 demo”“可点击预览”“高保真演示环境”“HTML 预览”时，默认只需要输出：

```text
一个可直接打开预览的 HTML 文件
```

HTML 预览文件必须包含完整 HTML、CSS、JavaScript、mock 数据和基础点击交互，不依赖构建工具，不请求真实接口。

### 4.2 Vue 代码 / 工程代码

只有当用户明确要求“生成 Vue 代码”“生成前端代码”“工程代码”“接入项目”“Vue3 + TypeScript + Ant Design Vue”时，才输出：

```text
1. Vue 3 + TypeScript + Ant Design Vue 页面代码
2. 一个可直接打开预览的 HTML 文件
```

HTML 预览文件用于快速查看页面效果和基础点击交互；正式工程交付仍以 Vue 代码为准。

### 4.3 交付物判定优先级

- 用户只说“demo / 预览 / 可点击 / 高保真演示 / HTML”时，只输出 HTML。
- 用户明确说“Vue / 前端代码 / 工程代码 / 接入项目”时，输出 Vue 代码；如未明确排除预览，同时补充 HTML 预览。
- 用户明确说“只要 Vue”时，不输出 HTML。
- 用户明确说“只要 HTML”时，不输出 Vue。

## 5. 输出约束

- 界面必须专业、清晰、适合企业级 B 端后台。
- 优先保证信息效率、任务路径和交互完整性。
- 生成可演示页面时，HTML 文件必须能直接打开并支持基础交互。
- Vue 代码生成时必须优先使用 Ant Design Vue 组件。
- 页面应包含 loading、empty、error、反馈等基础状态。
- 首轮输出不得省略固定框架、关键交互状态或验收自检。
