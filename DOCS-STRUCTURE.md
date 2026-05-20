# 文档结构与职责边界
## Documentation Structure and Responsibility Boundary

Keywords: documentation structure, reading order, component layers, html demo, ant class, css injection

本文定义本仓库文档的目录关系、职责边界和 AI 默认读取顺序。用于避免多个规范文件重复约束、互相冲突，尤其避免 HTML Demo 组件 class / CSS 引用不稳定。

## 1. 总体分层

本仓库文档按以下层级理解：

```text
00 入口层
→ 01 基础 Token 层
→ 02 组件语义层
→ 03 交互规则层
→ 04 页面模式层
→ 05 AI 生图层
→ 06 实现与样式映射层
→ 07 验收层
```

其中，生成 HTML Demo 时，最容易冲突的是：

```text
02-components 与 docs/component-style-library、06-vue-code 之间的职责边界。
```

必须明确：

```text
02-components 不决定 HTML class / CSS。
真实 HTML class / CSS 来自 component-style-library 和 06-vue-code 映射规则。
```

---

## 2. 目录职责

| 目录 / 文件 | 职责 | 不承担的职责 |
|---|---|---|
| `ROLE.md` | 定义 AI 角色、设计判断方式、输出质量要求 | 不定义具体组件 class |
| `SKILL.md` | 总入口、任务分流、硬约束、默认读取顺序 | 不承载完整组件 CSS |
| `INDEX.md` | 主索引、人工和 AI 的导航入口 | 不重复长篇组件规范 |
| `01-foundation/` | Token、颜色、字体、布局、阴影等基础规则 | 不决定页面业务结构 |
| `02-components/` | 组件语义、使用场景、状态要求、交互规则 | 不决定 HTML Demo 的真实 class / CSS |
| `03-interaction/` | 搜索、表格交互、表单录入、导航、权限等交互模式 | 不决定组件最终 CSS |
| `04-pages/` | 页面类型模板：列表、表单、详情、工作台等 | 不重写基础组件样式 |
| `05-ai-image/` | 生图 Prompt 与负向约束 | 不生成可运行 HTML |
| `06-vue-code/` | HTML Demo、Vue 代码、组件 class 映射、样式注入、模板母版 | 不定义组件语义本身 |
| `07-checklists/` | 输出验收、设计走查、前端实现检查 | 不作为生成源头 |
| `docs/component-style-library/` | 可运行组件样式库，提供真实 `.ant-*` class 与 CSS | 不解释完整业务场景 |

---

## 3. 组件相关文件职责

组件相关文件按以下职责分层：

```text
02-components/component-doc-boundary.md
= 02 组件文档职责边界

02-components/*.md
= 组件语义、状态、交互规则

docs/component-style-library/backend_ai_ui_component_kit_with_index.html
= 真实可运行 .ant-* class 与 CSS

06-vue-code/component-style-code-map.md
= 组件语义到真实 .ant-* class 的映射

06-vue-code/business-component-reuse-rules.md
= 禁止业务区私有 class / 旧别名 class

06-vue-code/component-style-import-rules.md
= 确保最终 HTML 注入所需组件 CSS

06-vue-code/component-reading-order-rules.md
= 强制先读真实样式层，再读 02 语义层
```

---

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
10. 06-vue-code/component-style-code-map.md
11. 06-vue-code/business-component-reuse-rules.md
12. 06-vue-code/component-style-import-rules.md
13. 06-vue-code/component-reading-order-rules.md
14. 02-components/component-doc-boundary.md
15. 02-components/overview.md
16. 对应 02-components 组件语义文档
17. 07-checklists/ai-output.md
```

核心原则：

```text
先确认框架母版。
再确认真实组件 class / CSS。
再读取 02-components 补充语义和状态。
最后验收。
```

---

## 5. 生成 HTML Demo 的三段式样式结构

最终 HTML 的 `<style>` 应按以下顺序组织：

```text
1. 框架母版 CSS
2. 组件样式库 CSS
3. 当前页面业务 CSS
```

解释：

| 样式段 | 来源 | 内容 |
|---|---|---|
| 框架母版 CSS | `06-vue-code/templates/*.html` | 顶部导航、左侧菜单、页头、页面容器、框架 Token、iconfont |
| 组件样式库 CSS | `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` | `.ant-btn`、`.ant-input`、`.ant-select`、`.ant-table`、`.ant-tag`、`.ant-pagination`、`.toast` 等 |
| 页面业务 CSS | 当前页面 | 页面布局、业务间距、列宽、局部修饰、业务状态 class |

禁止：

```text
只复制框架母版 CSS，却在业务区直接写 .ant-btn / .ant-table。
```

只要最终 HTML 使用了 `.ant-*` class，就必须有对应 CSS 定义。

---

## 6. 组件 class 决策规则

HTML Demo 中基础组件 class 必须来自真实样式库。

| 组件 | 正确基础 class | 禁止旧别名 / 私有 class |
|---|---|---|
| Button | `.ant-btn`、`.ant-btn-primary`、`.ant-btn-text`、`.ant-btn-link` | `.btn`、`.btn-primary`、`.alert-button` |
| Input | `.ant-input`、`.ant-input-affix-wrapper` | `.form-input`、`.search-input`、`.alert-input` |
| Select | `.ant-select`、`.ant-select-selector` | `.select`、`.select-panel`、`.alert-select` |
| Table | `.ant-table-wrapper`、`.ant-table`、`.ant-table-compact` | `.data-table`、`.alert-table`、`.risk-table` |
| Tag | `.ant-tag`、`.ant-tag-success`、`.ant-tag-warning`、`.ant-tag-error` | `.tag`、`.tag-status`、`.status-tag` |
| Pagination | `.ant-pagination`、`.ant-pagination-item` | `.pagination`、`.alert-pagination` |
| Toast | `.toast-holder`、`.toast` | `.alert-toast` |

业务 class 只能追加：

```html
<button class="ant-btn ant-btn-primary threat-action-btn">处置</button>
<div class="ant-table-wrapper threat-alert-table">
  <table class="ant-table ant-table-compact"></table>
</div>
<span class="ant-tag ant-tag-error risk-high">高危</span>
```

---

## 7. 冲突解决优先级

当多个文档之间存在冲突时，按以下优先级判断：

```text
1. 页面框架：以 06-vue-code/templates/*.html 为准。
2. 组件 class / CSS：以 docs/component-style-library/backend_ai_ui_component_kit_with_index.html 为准。
3. 组件 class 映射：以 06-vue-code/component-style-code-map.md 为准。
4. 业务组件复用：以 06-vue-code/business-component-reuse-rules.md 为准。
5. 组件 CSS 注入：以 06-vue-code/component-style-import-rules.md 为准。
6. 组件语义和状态：以 02-components/*.md 为准。
7. 页面结构：以 04-pages/*.md 为准。
8. 输出验收：以 07-checklists/*.md 为准。
```

特别说明：

```text
如果 02-components 中的文字与 .ant-* class / CSS 冲突，以组件样式库为准。
```

---

## 8. 建议目录关系图

```text
Backend-Design-Standards/
├── ROLE.md
├── SKILL.md
├── INDEX.md
├── DOCS-STRUCTURE.md
├── 01-foundation/
├── 02-components/
│   ├── component-doc-boundary.md
│   ├── overview.md
│   ├── component-size.md
│   ├── button.md
│   ├── input.md
│   ├── select.md
│   ├── table.md
│   ├── tag.md
│   └── ...
├── 03-interaction/
├── 04-pages/
├── 05-ai-image/
├── 06-vue-code/
│   ├── component-reading-order-rules.md
│   ├── component-style-code-map.md
│   ├── business-component-reuse-rules.md
│   ├── component-style-import-rules.md
│   ├── preview-html.md
│   ├── codegen-rules.md
│   └── templates/
├── 07-checklists/
└── docs/
    └── component-style-library/
        ├── component_style_library_index.md
        └── backend_ai_ui_component_kit_with_index.html
```

---

## 9. 后续维护原则

新增或修改文档时遵守：

1. 新增组件语义规则，放入 `02-components/`。
2. 新增真实组件 CSS，放入 `docs/component-style-library/`。
3. 新增 HTML / Vue 映射，更新 `06-vue-code/component-style-code-map.md`。
4. 新增防误用规则，更新 `06-vue-code/business-component-reuse-rules.md`。
5. 新增 CSS 注入要求，更新 `06-vue-code/component-style-import-rules.md`。
6. 新增读取顺序或目录关系，更新本文和 `INDEX.md`。

不要在多个文档里重复定义同一套 class 名称，避免再次出现 `.btn` / `.ant-btn` 并存的问题。