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

## 1. 默认交付方式

默认且唯一交付目标为：

```text
单文件 HTML Demo
```

HTML Demo 必须可打开、可点击、可验证主要交互。它不是静态截图，也不是框架工程代码。

## 2. 生成前判断

生成前必须判断：

- 页面类型。
- 用户主任务。
- P0 / P1 / P2 / P3 信息层级。
- 需要的基础组件。
- 是否存在高风险操作。
- 是否覆盖 loading / empty / error / success / disabled / confirm。
- 当前页面需要读取哪些 `03-interaction/` 交互规则。

不得为了视觉丰富增加无业务意义的装饰，不得跳过结构、交互和状态判断直接生成页面。

## 3. 任务分流

| 用户任务 | 执行模式 | 读取方式 |
|---|---|---|
| 生成 HTML Demo / 高保真页面 | HTML Demo 模式 | 读取 `INDEX.md` 中对应 `html-demo-*` profile |
| 检查页面是否符合规范 | 验收模式 | 读取页面规范、交互规范、组件运行时契约和验收清单 |
| 修改 / 合并 / 删除规范文档 | 文档维护模式 | 读取 `INDEX.md` 的唯一真源归属表，只修改真源文件 |

## 4. HTML Demo 三大硬约束

最终 HTML Demo 必须由三部分组成：

```text
框架母版 HTML
+ 组件 snippet DOM 与组件样式库 CSS / Token
+ 当前页面业务内容、mock 数据和交互 JS
```

执行时必须满足：

- 框架母版以 `06-vue-code/templates/*.html` 为准。
- 母版可替换区域以 `06-vue-code/template-boundary-contract.md` 为准。
- 组件定位以 `docs/component-style-library/component_snippet_manifest.json` 为准。
- 稳定组件 DOM 以 `docs/component-style-library/snippets/*.html` 为准。
- 组件 CSS / Token 以 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 为准。
- 组件运行时抽取、注入和成对检查以 `06-vue-code/component-runtime-contract.md` 为准。
- 组件语义、状态和行为只在需要时读取 `02-components/component-semantic-boundary.md` 与对应组件文档。
- 页面交互细节以 `03-interaction/` 对应文件为准。
- 最终验收以 `07-checklists/html-demo-acceptance.md` 为准。

## 5. 标准生成流程

```text
识别任务类型
→ 读取 INDEX.md 获取最小读取 profile
→ 锁定 HTML 母版
→ 读取 template-boundary-contract.md 判断业务替换区域
→ 读取页面规范和交互规范
→ 读取 component_snippet_manifest.json 定位组件
→ 复制所需 snippets/*.html 中的稳定组件 DOM
→ 读取组件样式库校验 CSS / Token
→ 执行 component-runtime-contract.md
→ 按需读取组件语义文档
→ 生成单文件 HTML Demo
→ 按 html-demo-acceptance.md 自检
→ 不通过则先修正再交付
```

## 6. 冲突优先级

当文档发生冲突时，按以下顺序判断：

```text
1. HTML 母版：06-vue-code/templates/*.html
2. 母版替换边界：06-vue-code/template-boundary-contract.md
3. 稳定组件定位：docs/component-style-library/component_snippet_manifest.json
4. 稳定组件 DOM：docs/component-style-library/snippets/*.html
5. 组件 CSS / Token：docs/component-style-library/backend_ai_ui_component_kit_with_index.html
6. 组件运行时契约：06-vue-code/component-runtime-contract.md
7. 页面结构：04-pages/*.md
8. 交互规则：03-interaction/*.md
9. 组件语义：02-components/component-semantic-boundary.md、02-components/*.md
10. 输出验收：07-checklists/html-demo-acceptance.md
```

验收清单只负责检查结果，不反向创造新的生成规则。

## 7. 禁止交付条件

出现以下任一情况，不得交付最终结果：

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