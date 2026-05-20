# 业务组件复用基础 HTML 样式硬约束
## Business Component Reuse Rules

Keywords: html demo, component reuse, ant class, business component, style inheritance, css injection, deprecated class blacklist

## 0. 最高优先级

业务组件复用不是只写 `.ant-*` class，而是必须同时满足：

```text
真实 .ant-* class + 对应组件 CSS 已注入 + 不命中旧 class 黑名单。
```

如果最终 HTML 没有注入对应组件 CSS，即使 DOM 中写了 `.ant-btn`、`.ant-table`、`.ant-pagination`，也视为未通过规范。

## 1. 问题背景

生成 HTML Demo 时，不能只继承顶部导航、左侧菜单、页头和页面容器。右侧业务内容区里的按钮、输入框、选择器、表格、标签、分页器、提示信息、弹窗和抽屉等组件，也必须复用组件样式库中真实存在、可生效的基础组件结构、class 与 CSS。

当前仓库的可运行组件样式库 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 使用 Ant Design 风格 class，例如：

```text
.ant-btn
.ant-input
.ant-select
.ant-table
.ant-tag
.ant-pagination
.toast
```

正确做法是：业务组件必须先使用 Ant 基础组件 class，再追加页面业务修饰 class，并确保最终 HTML 已注入这些基础组件 class 对应的 CSS。

禁止 class 统一集中维护在：

```text
06-vue-code/deprecated-class-blacklist.md
```

## 2. 总原则

```text
框架母版必须继承，业务组件必须继承真实可生效的 Ant 风格基础 class，组件 CSS 必须强制注入。
```

生成页面时必须同时做到：

1. 页面外壳继承 `06-vue-code/templates/` 中的 HTML 母版。
2. 业务组件继承 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 中真实存在的 Ant 风格 HTML 结构和 class。
3. 最终 HTML 必须按 `06-vue-code/component-style-import-rules.md` 注入所用组件 CSS。
4. `06-vue-code/component-style-code-map.md` 只能映射到真实样式库 class，不得发明另一套别名 class。
5. 页面私有 class 只能作为命名空间、布局钩子或业务修饰类追加，不能替代基础组件 class。
6. 禁止使用 `06-vue-code/deprecated-class-blacklist.md` 中列出的旧别名 class 或页面私有组件 class。
7. 缺少业务场景样式时，只能在基础组件 class 上做少量扩展，不能复制一套新的组件样式。

## 3. 必须复用的基础组件 class

| 组件类型 | 必须优先使用的真实基础 class | 允许追加的业务 class 示例 |
|---|---|---|
| 按钮 | `.ant-btn`、`.ant-btn-primary`、`.ant-btn-dashed`、`.ant-btn-text`、`.ant-btn-link`、`.ant-btn-ai`、`.ant-btn-sm`、`.ant-btn-lg`、`.ant-btn-icon-only` | `.threat-action-btn`、`.batch-action-btn` |
| 输入框 | `.ant-input`、`.ant-input-affix-wrapper`、`.ant-input-status-error`、`.ant-input-sm`、`.ant-input-lg` | `.threat-search-input` |
| 文本域 | `.ant-input`、`.ant-textarea`、`.ant-input-show-count` | `.threat-textarea` |
| 下拉选择 | `.ant-select`、`.ant-select-selector`、`.ant-select-dropdown`、`.ant-select-item`、`.ant-select-item-option-selected`、`.ant-select-disabled` | `.asset-filter-select` |
| 复选框 | `.ant-checkbox-wrapper`、`.ant-checkbox`、`.ant-checkbox-checked`、`.ant-checkbox-indeterminate` | `.table-check` |
| 单选框 | `.ant-radio-wrapper`、`.ant-radio`、`.ant-radio-checked`、`.ant-radio-button-wrapper` | `.filter-radio` |
| Tabs | `.ant-tabs`、`.ant-tabs-nav`、`.ant-tabs-tab`、`.ant-tabs-tab-active`、`.ant-tabs-content` | `.threat-tabs` |
| 表格 | `.ant-table-wrapper`、`.ant-table-toolbar`、`.ant-table-scroll`、`.ant-table`、`.ant-table-compact`、`.ant-table-cell-actions`、`.ant-table-empty`、`.ant-table-loading`、`.ant-table-error` | `.threat-alert-table`、`.asset-risk-table` |
| 标签 | `.ant-tag`、`.ant-tag-primary`、`.ant-tag-success`、`.ant-tag-processing`、`.ant-tag-warning`、`.ant-tag-error`、`.ant-tag-lg` | `.status-critical`、`.risk-high` |
| 日期选择 | `.ant-picker`、`.ant-picker-range`、`.ant-picker-dropdown`、`.ant-picker-cell-selected` | `.log-time-picker` |
| 分页器 | `.ant-pagination`、`.ant-pagination-item`、`.ant-pagination-item-active`、`.ant-pagination-prev`、`.ant-pagination-next`、`.ant-pagination-options` | `.table-pagination` |
| Tooltip | `.tooltip-anchor`、`.ant-tooltip`、`.ant-tooltip-open` | `.field-tooltip` |
| Toast / Message | `.toast-holder`、`.toast` | `.save-success-toast` |

> 注意：当前组件样式库索引显示 Alert、Modal、Drawer 仍属于“后续补齐建议”，基础 HTML 中尚未形成稳定 class。生成这些组件时可以按 Ant 风格预留 `.ant-alert`、`.ant-modal`、`.ant-drawer`，但必须在页面 CSS 中补齐最小样式，并标注为“样式库待补齐组件”，不得伪装成已存在的完整基础样式。

## 4. 业务组件 class 写法

正确写法：

```html
<button class="ant-btn ant-btn-primary threat-action-btn">批量处置</button>
<div class="ant-input-affix-wrapper threat-search-input">
  <i class="iconfont icon-a-sousuofangdajing"></i>
  <input class="ant-input" placeholder="搜索告警名称 / IP" />
</div>
<div class="ant-select asset-filter-select">
  <div class="ant-select-selector">全部状态</div>
</div>
<div class="ant-table-wrapper threat-alert-table">
  <table class="ant-table ant-table-compact"></table>
</div>
<span class="ant-tag ant-tag-error risk-high">高危</span>
<div class="ant-pagination table-pagination"></div>
```

禁止写法统一见：

```text
06-vue-code/deprecated-class-blacklist.md
```

## 5. CSS 扩展边界

允许新增：

- 页面整体布局 class。
- 业务区模块 class。
- 特定字段宽度。
- 表格列宽或内容密度微调。
- 业务状态修饰类。
- 局部布局间距。
- 样式库尚未覆盖组件的最小补充样式，例如 `.ant-alert`、`.ant-modal`、`.ant-drawer`。

不允许新增：

- 与 `.ant-btn` 同义的新按钮组件样式。
- 与 `.ant-table` / `.ant-table-wrapper` 同义的新表格组件样式。
- 与 `.ant-input` / `.ant-select` 同义的新表单控件样式。
- 与 `.ant-tag` 同义的新状态标签样式。
- 与 `.ant-pagination` 同义的新分页器样式。
- 用黑名单文件中的旧别名 class 或页面私有组件 class 替代真实 `.ant-*` class。
- 用页面业务 CSS 临时重写一套组件样式来代替组件样式库 CSS。

差异化只能写成：

```css
.threat-alert-page .ant-table-wrapper.threat-alert-table {
  /* 只补充业务场景需要的局部样式 */
}

.threat-alert-page .ant-tag.risk-high {
  /* 只补充业务语义，不重写 ant-tag 基础结构 */
}
```

## 6. 组件 CSS 注入要求

生成 HTML Demo 时，只写 `.ant-*` class 不够，还必须执行：

```text
06-vue-code/component-style-import-rules.md
```

关键要求：

- 最终 HTML 中使用了 `.ant-btn`，必须存在按钮完整 CSS。
- 最终 HTML 中使用了 `.ant-table`，必须存在表格完整 CSS。
- 最终 HTML 中使用了 `.ant-tag`，必须存在标签完整 CSS。
- 最终 HTML 中使用了 `.ant-pagination`，必须存在分页器完整 CSS。
- 组件 CSS 必须来自 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html`。
- 组件 CSS 必须放在框架 CSS 之后、页面业务 CSS 之前。
- 只要最终 HTML 使用了 `.ant-*` class 但没有对应 CSS 定义，就判定为未通过验收。

## 7. 生成前必须输出组件映射表

生成 HTML Demo 前，AI 必须先在内部完成以下映射；如用户要求展示过程，也可以输出：

| 业务模块 | 组件类型 | 真实基础 class | CSS 来源 | 业务修饰 class | 是否需要补充样式 |
|---|---|---|---|---|---|
| 搜索区 | Input / Select / Button | `.ant-input-affix-wrapper` / `.ant-input` / `.ant-select` / `.ant-btn` | 组件样式库 | 页面语义 class | 仅补布局 |
| 工具栏 | Button | `.ant-btn` / `.ant-btn-primary` / `.ant-btn-text` / `.ant-btn-link` | 组件样式库 | 页面语义 class | 仅补间距 |
| 数据表格 | Table / Tag / Action Button | `.ant-table-wrapper` / `.ant-table` / `.ant-tag` / `.ant-btn` | 组件样式库 | 页面语义 class | 仅补列宽 |
| 分页区 | Pagination | `.ant-pagination` | 组件样式库 | 页面语义 class | 仅补对齐 |
| 详情抽屉 | Drawer / Tag / Button | `.ant-drawer` / `.ant-tag` / `.ant-btn` | Drawer 需补最小样式 | 页面语义 class | Drawer 当前需补最小样式 |

未完成组件映射和 CSS 注入范围确认，不得直接生成 HTML。

## 8. 输出前检查规则

输出 HTML Demo 前必须检查：

- [ ] 是否完整继承 HTML 母版。
- [ ] 业务内容是否只进入母版业务内容区。
- [ ] 是否执行 `06-vue-code/component-style-import-rules.md` 并注入所需组件 CSS。
- [ ] 是否执行 `06-vue-code/deprecated-class-blacklist.md` 并确认最终 HTML 无黑名单 class。
- [ ] Button 是否使用 `.ant-btn` 系列真实基础 class，且最终 HTML 有对应 CSS。
- [ ] Input / Search 是否使用 `.ant-input` / `.ant-input-affix-wrapper`，且最终 HTML 有对应 CSS。
- [ ] Select 是否使用 `.ant-select` 系列真实基础 class，且最终 HTML 有对应 CSS。
- [ ] Table 是否使用 `.ant-table-wrapper` + `.ant-table`，且最终 HTML 有对应 CSS。
- [ ] Tag / 状态标签是否使用 `.ant-tag` 及语义 class，且最终 HTML 有对应 CSS。
- [ ] Pagination 是否使用 `.ant-pagination`，且最终 HTML 有对应 CSS。
- [ ] Toast 是否使用 `.toast-holder` / `.toast`，且最终 HTML 有对应 CSS。
- [ ] 页面私有 class 是否只是追加修饰，而不是替代基础组件 class。

只要检查发现业务组件没有复用真实基础 class，或复用了真实 class 但没有注入对应 CSS，必须先修正后再交付。

## 9. 与其他文档的关系

执行优先级：

```text
HTML 母版
→ docs/component-style-library/backend_ai_ui_component_kit_with_index.html
→ docs/component-style-library/component_style_library_index.md
→ component-style-import-rules.md
→ component-style-code-map.md
→ business-component-reuse-rules.md
→ deprecated-class-blacklist.md
→ 02-components 组件规范
→ 页面规范
→ 页面私有业务样式
```

如果 Markdown 文字规范与可运行组件样式库 Demo 存在差异，涉及页面框架时以 `06-vue-code/templates/` 母版为准，涉及组件 class 与状态细节时以 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 为准。