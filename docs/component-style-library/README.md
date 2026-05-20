# 组件基础样式库
## Component Style Library

Keywords: component style library, html demo, component index, css token, ant design vue, ai generation, backend ui

本目录用于沉淀后台组件基础样式库的可运行 HTML Demo、索引说明和 AI 生成校验入口。

## 1. 文件说明

| 文件 | 作用 |
|---|---|
| [backend_ai_ui_component_kit_with_index.html](./backend_ai_ui_component_kit_with_index.html) | 组件基础样式库完整 HTML Demo。该文件作为视觉与状态覆盖基准，不压缩、不重写、不裁剪。 |
| [component_style_library_index.md](./component_style_library_index.md) | 组件样式库索引说明，包含组件目录、Token 分类、状态覆盖、AI 生成约束和验收清单。 |

## 2. 使用定位

- `02-components/` 是组件文字规范和设计原则来源。
- `06-vue-code/component-style-code-map.md` 是组件规范到 HTML Demo / Vue 代码的映射入口。
- 本目录提供可运行的组件样式 Demo，用于校验组件视觉、状态、交互和 Token 是否落地一致。

三者关系：

```text
02-components/ 文字规范
→ 06-vue-code/component-style-code-map.md 代码映射
→ docs/component-style-library/ 可运行样式 Demo 与索引校验
```

## 3. AI 读取规则

当任务涉及以下内容时，应读取本目录：

- 检查组件样式是否符合规范。
- 生成或修正 HTML Demo 中的 Button、Input、Select、Checkbox、Radio、Tabs、Table、Tag、Tooltip、DatePicker、Pagination。
- 排查 hover / active / selected / disabled / loading / empty / error 等状态。
- 对比组件尺寸、间距、圆角、阴影、状态色和 Token。
- 验证 AI 生成页面是否遵循组件基础样式库。

推荐读取顺序：

```text
ROLE.md
→ SKILL.md
→ INDEX.md
→ 02-components/overview.md
→ 06-vue-code/component-style-code-map.md
→ docs/component-style-library/component_style_library_index.md
→ docs/component-style-library/backend_ai_ui_component_kit_with_index.html
```

## 4. HTML 文件保护规则

`backend_ai_ui_component_kit_with_index.html` 是完整源文件 Demo，维护时必须遵循：

- 不为了整理索引而压缩 HTML。
- 不为了补充说明而重写组件结构。
- 不删除已存在的组件章节、CSS、JS 或 mock 数据。
- 如需补充规范说明，优先修改 Markdown 文档。
- 如需修复 HTML 内部 bug，只做最小修改，并在索引中记录原因。

## 5. 当前已处理事项

- HTML 已统一使用 iconfont 项目 `5177816` 的最新 `font_5177816_df7h6mjlznn` 字体文件。
- HTML 已移除旧的 `font_5177816_bhdsh3zh4q.css` 外链。
- HTML 已采用内联 `@font-face` 方式声明 iconfont，减少外链 CSS 版本不一致带来的影响。
- HTML 已补充 `--text-tertiary: #AEB2B8;`，用于 DatePicker 后缀图标等弱层级文本 / 图标颜色。
- 后续维护 HTML 时仍应遵循最小修改原则，不压缩、不重写、不裁剪已有组件章节、CSS、JS 或 mock 数据。

## 6. 验收清单

- [ ] HTML Demo 是否仍能直接打开预览。
- [ ] Button / Tabs / Input / Select / Checkbox / Radio / Table / Tag / Tooltip / DatePicker / Pagination 是否完整保留。
- [ ] CSS Token 是否未被批量重写。
- [ ] JS 交互是否未被删除。
- [ ] iconfont 是否统一使用 `font_5177816_df7h6mjlznn`。
- [ ] `--text-tertiary` 是否存在并可用于弱层级图标 / 文本。
- [ ] 索引说明是否与 HTML 实际内容一致。
- [ ] AI 生成或检查任务是否能从本目录找到组件样式库入口。
