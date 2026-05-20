# 业务组件复用基础 HTML 样式硬约束
## Business Component Reuse Rules

Keywords: html demo, component reuse, base class, business component, style inheritance

## 1. 问题背景

生成 HTML Demo 时，不能只继承顶部导航、左侧菜单、页头和页面容器。右侧业务内容区里的按钮、表格、表单、标签、分页器、提示信息、弹窗和抽屉等组件，也必须复用规范中已经定义好的基础组件结构和 class。

错误做法是：框架来自 `common-single-nav.html`，但业务组件重新写成 `.alert-button`、`.alert-table`、`.alert-input`、`.xxx-pagination` 等私有样式。这样会导致基础 HTML 组件样式无法生效，组件视觉与状态也无法统一。

正确做法是：业务组件必须先使用基础组件 class，再追加页面业务修饰 class。

---

## 2. 总原则

```text
框架母版必须继承，业务组件 class 也必须继承。
```

生成页面时必须同时做到：

1. 页面外壳继承 `06-vue-code/templates/` 中的 HTML 母版。
2. 业务组件继承 `06-vue-code/component-style-code-map.md` 中定义的 HTML Demo 结构和 class。
3. 页面私有 class 只能作为命名空间、布局钩子或业务修饰类追加，不能替代基础组件 class。
4. 缺少业务场景样式时，只能在基础组件 class 上做少量扩展，不能复制一套新的组件样式。

---

## 3. 必须复用的基础组件 class

| 组件类型 | 必须优先使用的基础 class | 允许追加的业务 class 示例 | 禁止只使用的私有 class 示例 |
|---|---|---|---|
| 按钮 | `.btn`、`.btn-primary`、`.btn-secondary`、`.btn-danger` | `.threat-action-btn`、`.batch-action-btn` | `.alert-button`、`.threat-btn` |
| 输入框 | `.form-input`、`.search-input` | `.threat-search-input` | `.alert-input`、`.risk-input` |
| 下拉选择 | `.select`、`.select-panel`、`.select-option` | `.asset-filter-select` | `.alert-select` |
| 表格 | `.data-table` | `.threat-alert-table`、`.asset-risk-table` | `.alert-table`、`.risk-table` |
| 标签 | `.tag`、`.tag-status` | `.status-danger`、`.status-warning` | `.alert-tag`、`.risk-tag` |
| 分页器 | `.pagination` | `.table-pagination` | `.alert-pagination` |
| 提示信息 | `.alert` | `.alert-warning-block` | `.threat-alert-box` |
| 抽屉 | `.drawer` | `.detail-drawer` | `.alert-detail-drawer` |
| 弹窗 | `.modal` | `.confirm-modal` | `.alert-modal` |
| 消息反馈 | `.toast` | `.save-success-toast` | `.alert-toast` |

---

## 4. 业务组件 class 写法

### 4.1 正确写法

```html
<button class="btn btn-primary threat-action-btn">批量处置</button>
<input class="form-input search-input threat-search-input" />
<table class="data-table threat-alert-table"></table>
<span class="tag tag-status status-danger">高危</span>
<div class="pagination table-pagination"></div>
```

### 4.2 错误写法

```html
<button class="alert-button">批量处置</button>
<input class="alert-input" />
<table class="alert-table"></table>
<span class="alert-status-tag">高危</span>
<div class="alert-pagination"></div>
```

错误原因：这些 class 重新定义了组件实现，绕过了基础 HTML 组件样式，导致规范中的按钮、表格、标签、分页器等样式无法继承。

---

## 5. CSS 扩展边界

允许新增：

- 页面整体布局 class。
- 业务区模块 class。
- 特定字段宽度。
- 表格列宽或内容密度微调。
- 业务状态修饰类。
- 局部布局间距。

不允许新增：

- 与 `.btn` 同义的新按钮组件样式。
- 与 `.data-table` 同义的新表格组件样式。
- 与 `.form-input` / `.select` 同义的新表单控件样式。
- 与 `.tag` / `.tag-status` 同义的新状态标签样式。
- 与 `.pagination` 同义的新分页器样式。
- 与 `.alert`、`.drawer`、`.modal` 同义的新提示、抽屉、弹窗样式。

如果确实需要差异化，只能写成：

```css
.threat-alert-page .data-table {
  /* 只补充业务场景需要的局部样式 */
}

.threat-alert-page .tag-status.status-danger {
  /* 只补充状态语义，不重写 tag 基础结构 */
}
```

不得写成：

```css
.alert-table {
  /* 重新定义整套表格 */
}
```

---

## 6. 生成前必须输出组件映射表

生成 HTML Demo 前，AI 必须先在内部完成以下映射；如用户要求展示过程，也可以输出：

| 业务模块 | 组件类型 | 基础 class | 业务修饰 class | 是否需要补充样式 |
|---|---|---|---|---|
| 搜索区 | Input / Select / Button | `.form-input` / `.select` / `.btn` | 页面语义 class | 仅补布局 |
| 工具栏 | Button | `.btn` / `.btn-primary` / `.btn-secondary` | 页面语义 class | 仅补间距 |
| 数据表格 | Table / Tag / Action Button | `.data-table` / `.tag-status` / `.btn` | 页面语义 class | 仅补列宽 |
| 分页区 | Pagination | `.pagination` | 页面语义 class | 仅补对齐 |
| 详情抽屉 | Drawer / Tag / Button | `.drawer` / `.tag-status` / `.btn` | 页面语义 class | 仅补信息布局 |

未完成组件映射，不得直接生成 HTML。

---

## 7. 输出前检查规则

输出 HTML Demo 前必须检查：

- [ ] 是否完整继承 HTML 母版。
- [ ] 业务内容是否只进入母版业务内容区。
- [ ] Button 是否使用 `.btn` 系列基础 class。
- [ ] Input / Search 是否使用 `.form-input` / `.search-input`。
- [ ] Select 是否使用 `.select` 系列基础 class。
- [ ] Table 是否使用 `.data-table`。
- [ ] Tag / 状态标签是否使用 `.tag` / `.tag-status`。
- [ ] Pagination 是否使用 `.pagination`。
- [ ] Alert / Drawer / Modal / Toast 是否使用对应基础 class。
- [ ] 是否存在 `.alert-button`、`.alert-table`、`.alert-input`、`.xxx-btn`、`.xxx-table`、`.xxx-pagination` 等同义私有组件样式。
- [ ] 页面私有 class 是否只是追加修饰，而不是替代基础组件 class。

只要检查发现业务组件没有复用基础 class，必须先修正后再交付。

---

## 8. 与其他文档的关系

执行优先级：

```text
HTML 母版
→ component-style-code-map.md
→ business-component-reuse-rules.md
→ 02-components 组件规范
→ 页面规范
→ 页面私有业务样式
```

如果业务页面样式与基础组件 class 冲突，以基础组件 class 为准。

如果 Markdown 文字规范与可运行组件样式库 Demo 存在差异，涉及框架以 HTML 母版为准，涉及组件细节以组件样式库 Demo 为视觉参考。