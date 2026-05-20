# 文档结构与职责边界
## Documentation Structure and Responsibility Boundary

Keywords: documentation structure, reading order, component layers, html demo, component dom extraction, ant class, css injection

本文定义本仓库文档的目录关系、职责边界和 AI 默认读取顺序。用于避免多个规范文件重复约束、互相冲突，尤其避免 HTML Demo 组件 DOM、class 与 CSS 引用不稳定。

## 1. 总体分层

本仓库文档按以下层级理解：

```text
00 入口层
→ 01 基础 Token 层
→ 02 组件语义层
→ 03 交互规则层
→ 04 页面模式层
→ 06 实现与样式映射层
→ 07 验收层
```

生成 HTML Demo 时，必须明确：

```text
02-components 不决定 HTML Demo 的 DOM / class / CSS。
真实组件 DOM / class / CSS / Token 来自 component-style-library 和 06-vue-code 抽取、映射与注入规则。
```

## 2. 目录职责

| 目录 / 文件 | 职责 | 不承担的职责 |
|---|---|---|
| `ROLE.md` | 定义 AI 角色、设计判断方式、输出质量要求 | 不定义具体组件 DOM / class |
| `SKILL.md` | 总入口、任务分流、硬约束、默认读取顺序 | 不承载完整组件 CSS |
| `INDEX.md` | 主索引、人工和 AI 的导航入口 | 不重复长篇组件规范 |
| `01-foundation/` | Token、颜色、字体、布局、阴影等基础规则 | 不决定页面业务结构 |
| `02-components/` | 组件语义、使用场景、状态要求、交互规则 | 不决定 HTML Demo 的真实 DOM / class / CSS |
| `03-interaction/` | 搜索、表格交互、表单录入、导航、权限等交互模式 | 不决定组件最终 CSS |
| `04-pages/` | 页面类型模板：列表、表单、详情、工作台等 | 不重写基础组件样式 |
| `06-vue-code/` | HTML Demo、Vue 代码、组件 DOM 抽取、class 映射、样式注入、旧 class 黑名单、模板母版 | 不定义组件语义本身 |
| `07-checklists/` | 输出验收、设计走查、前端实现检查 | 不作为生成源头 |
| `docs/component-style-library/` | 可运行组件样式库，提供真实组件 DOM、`.ant-*` class、CSS 与 Token | 不解释完整业务场景 |

## 3. 组件相关文件职责

```text
02-components/component-doc-boundary.md
= 02 组件文档职责边界

02-components/*.md
= 组件语义、状态、交互规则

docs/component-style-library/backend_ai_ui_component_kit_with_index.html
= 真实组件 DOM、.ant-* class、CSS 与 Token

06-vue-code/component-dom-extraction-rules.md
= 约束 HTML Demo 组件 DOM 必须从组件样式库抽取

06-vue-code/component-style-code-map.md
= 组件语义到真实 .ant-* class 的映射

06-vue-code/business-component-reuse-rules.md
= 业务区组件复用真实 DOM / class / CSS / Token 的规则

06-vue-code/component-style-import-rules.md
= 确保最终 HTML 注入所需组件 CSS 与依赖 Token

06-vue-code/component-reading-order-rules.md
= 强制先读真实样式层，再读 02 语义层

06-vue-code/deprecated-class-blacklist.md
= 集中维护旧别名 class 和私有组件 class 黑名单
```

## 4. HTML Demo 正确读取顺序

生成可演示 HTML Demo 时，必须按以下顺序读取：

```text
1. ROLE.md
2. SKILL.md
3. INDEX.md
4. 06-vue-code/templates/README.md
5. 06-vue-code/templates/common-single-nav.html 或 double-nav-frame.html
6. 04-pages/overview.md
7. 对应页面规范，例如 04-pages/list-page.md
8. docs/component-style-library/backend_ai_ui_component_kit_with_index.html
9. docs/component-style-library/component_style_library_index.md
10. 06-vue-code/component-dom-extraction-rules.md
11. 06-vue-code/component-style-code-map.md
12. 06-vue-code/business-component-reuse-rules.md
13. 06-vue-code/component-style-import-rules.md
14. 06-vue-code/component-reading-order-rules.md
15. 06-vue-code/deprecated-class-blacklist.md
16. 02-components/component-doc-boundary.md
17. 02-components/overview.md
18. 对应 02-components 组件语义文档
19. 07-checklists/ai-output.md
```

核心原则：

```text
先确认框架母版。
再抽取真实组件 DOM / CSS / Token。
再读取 02-components 补充语义和状态。
最后验收。
```

## 5. 生成 HTML Demo 的三段式样式结构

最终 HTML 的 `<style>` 应按以下顺序组织：

```text
1. 框架母版 CSS
2. 组件样式库 CSS
3. 当前页面业务 CSS
```

| 样式段 | 来源 | 内容 |
|---|---|---|
| 框架母版 CSS | `06-vue-code/templates/*.html` | 顶部导航、左侧菜单、页头、页面容器、框架 Token、iconfont |
| 组件样式库 CSS | `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` | `.ant-btn`、`.ant-input`、`.ant-select`、`.ant-table`、`.ant-tag`、`.ant-pagination`、`.toast` 等 |
| 页面业务 CSS | 当前页面 | 页面布局、业务间距、列宽、局部修饰、业务状态 class |

## 6. 组件决策规则

HTML Demo 中基础组件必须来自真实样式库：

| 组件 | 正确来源 |
|---|---|
| Button | 组件样式库 Button DOM / CSS / Token |
| Input | 组件样式库 Input DOM / CSS / Token |
| Select | 组件样式库 Select DOM / CSS / Token |
| Table | 组件样式库 Table DOM / CSS / Token |
| Tag | 组件样式库 Tag DOM / CSS / Token |
| Pagination | 组件样式库 Pagination DOM / CSS / Token |
| Toast | 组件样式库 Toast DOM / CSS / Token |

旧别名 class 和页面私有组件 class 统一集中到：

```text
06-vue-code/deprecated-class-blacklist.md
```

## 7. 冲突解决优先级

```text
1. 页面框架：以 06-vue-code/templates/*.html 为准。
2. 组件 DOM / class / CSS / Token：以 docs/component-style-library/backend_ai_ui_component_kit_with_index.html 为准。
3. 组件 DOM 抽取：以 06-vue-code/component-dom-extraction-rules.md 为准。
4. 组件 CSS 注入：以 06-vue-code/component-style-import-rules.md 为准。
5. 组件 class 映射：以 06-vue-code/component-style-code-map.md 为准。
6. 业务组件复用：以 06-vue-code/business-component-reuse-rules.md 为准。
7. 旧 class 黑名单：以 06-vue-code/deprecated-class-blacklist.md 为准。
8. 组件语义和状态：以 02-components/*.md 为准。
9. 页面结构：以 04-pages/*.md 为准。
10. 输出验收：以 07-checklists/*.md 为准。
```

## 8. 建议目录关系图

```text
Backend-Design-Standards/
├── ROLE.md
├── SKILL.md
├── INDEX.md
├── DOCS-STRUCTURE.md
├── 01-foundation/
├── 02-components/
├── 03-interaction/
├── 04-pages/
├── 06-vue-code/
│   ├── component-dom-extraction-rules.md
│   ├── component-reading-order-rules.md
│   ├── component-style-code-map.md
│   ├── business-component-reuse-rules.md
│   ├── component-style-import-rules.md
│   ├── deprecated-class-blacklist.md
│   ├── preview-html.md
│   ├── codegen-rules.md
│   └── templates/
├── 07-checklists/
└── docs/
    └── component-style-library/
        ├── component_style_library_index.md
        └── backend_ai_ui_component_kit_with_index.html
```

## 9. 后续维护原则

1. 新增组件语义规则，放入 `02-components/`。
2. 新增真实组件 DOM / CSS，放入 `docs/component-style-library/`。
3. 新增 DOM 抽取要求，更新 `06-vue-code/component-dom-extraction-rules.md`。
4. 新增 HTML / Vue 映射，更新 `06-vue-code/component-style-code-map.md`。
5. 新增防误用规则，更新 `06-vue-code/business-component-reuse-rules.md` 或 `06-vue-code/deprecated-class-blacklist.md`。
6. 新增 CSS 注入要求，更新 `06-vue-code/component-style-import-rules.md`。

不要在多个文档里重复定义同一套 class 名称，也不要在规范文档里手写基础组件 DOM 示例。