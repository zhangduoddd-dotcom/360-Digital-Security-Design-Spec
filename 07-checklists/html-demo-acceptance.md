# HTML Demo 验收清单
## HTML Demo Acceptance Checklist

Keywords: html demo acceptance, snippet manifest, snippet file, template boundary, component dom, token, interaction

本文用于检查 HTML Demo 是否符合设计规范、交互规则和高保真预览要求。本文只负责验收结果，不反向创造新的页面交互规则；页面专项交互以 `03-interaction/` 对应文件为准。

## 0. HTML Demo 三大硬约束验收

- [ ] HTML Demo 是否由“框架母版 HTML + 组件 snippet DOM + 组件样式库 CSS / Token + 当前页面业务内容、mock 数据和交互 JS”组成。
- [ ] 是否完整继承指定框架母版 HTML。
- [ ] 是否按 `06-vue-code/template-boundary-contract.md` 判断母版可替换区域。
- [ ] 是否未自行重写顶部导航、侧边导航、页头和内容容器。
- [ ] 是否读取 `docs/component-style-library/component_snippet_manifest.json`。
- [ ] 页面使用的每个稳定基础组件是否都能对应到 manifest 中的组件 key。
- [ ] 页面使用的每个稳定基础组件是否都有 manifest 指定的 `snippetFile`。
- [ ] 每个稳定基础组件 DOM 是否来自对应 `snippetFile` 的 `SNIPPET_START / SNIPPET_END` 区间。
- [ ] 是否按 manifest 中的 `cssScopes` 和 `tokens` 注入或校验对应 CSS / Token。
- [ ] 是否未自行拼装或仿写 Button、Input、Select、Table、Tag、Pagination、Toast 等基础组件。
- [ ] 是否把已读取的页面交互规范转换为当前页面验收清单。
- [ ] 是否逐项落地当前页面适用的交互规则。
- [ ] 是否不存在“只读了规范但未实现”的情况。

任一项不通过时，HTML Demo 视为验收失败。

## 1. 交付物完整性

- [ ] 已提供可直接打开预览的单文件 HTML。
- [ ] HTML 文件包含完整 HTML、CSS、JavaScript。
- [ ] 不依赖构建工具。
- [ ] 不请求真实接口。
- [ ] 使用 mock 数据。
- [ ] 支持主要点击交互。
- [ ] 没有只给静态页面而缺少 loading、empty、error、反馈状态。
- [ ] 主要业务路径可以通过 HTML Demo 验证。

## 2. 母版与布局

- [ ] 已完整继承指定 HTML 母版。
- [ ] 已读取 `06-vue-code/template-boundary-contract.md`。
- [ ] 业务内容只进入母版业务主体内容区。
- [ ] 未整体替换 `.terminal-right-panel`。
- [ ] 未重写顶部导航、侧边导航、页头和内容容器结构。
- [ ] 未删除页头、内容容器、侧边栏、顶部导航固定结构。
- [ ] 未保留母版中的示例业务卡片或示例文案。
- [ ] 页面整体宽度、边距、栅格、内容区符合设计规范。
- [ ] 顶部导航、侧边导航、主内容区位置稳定。
- [ ] 页面最小宽度和横向滚动策略正确。
- [ ] 1920px、1440px、1366px、1280px 下布局可用。
- [ ] 侧边栏收起态和展开态可用。
- [ ] 表格列多时横向滚动和固定列正确。
- [ ] 内容区域宽度不足时，通过换行、堆叠或横向滚动处理，而不是强行压缩到不可读。

## 3. 组件实现

- [ ] 已读取 `docs/component-style-library/component_snippet_manifest.json`。
- [ ] 页面使用的每个稳定基础组件都能对应到 manifest 中的组件 key。
- [ ] 页面使用的每个稳定基础组件都有 `snippetFile`。
- [ ] 基础组件 DOM 来自 `docs/component-style-library/snippets/*.html`。
- [ ] 每个稳定基础组件 DOM 都来自对应 snippet 文件中的 `SNIPPET_START / SNIPPET_END` 区间。
- [ ] 没有使用 manifest 以外的组件作为稳定基础组件。
- [ ] manifest 中 `pendingComponents` 标注的组件没有被当作稳定基础组件使用。
- [ ] 使用 pending 组件时，已标注“组件样式库待补齐组件”，且只补充最小可用结构与样式。
- [ ] 已使用组件的 CSS scope 已从组件样式库注入或校验。
- [ ] 已使用组件的 Token 已注入或复用母版同名 Token。
- [ ] 最终样式顺序为：母版 CSS → 组件样式库 CSS → 页面业务 CSS。
- [ ] 页面业务 class 只做命名空间、布局钩子或业务修饰。
- [ ] 没有用 div 伪造 Button、Input、Select、Table、Tag、Pagination、Toast 等基础组件。
- [ ] 没有命中 `deprecated-class-blacklist.md` 中的旧 class 或私有组件 class。
- [ ] 按钮尺寸、颜色、hover、active、disabled、loading 状态正确。
- [ ] 输入框、选择器、日期控件状态完整。
- [ ] 表格表头、行高、单元格 padding、hover、固定列表现正确。
- [ ] 标签、状态点颜色与语义一致。
- [ ] Tooltip、帮助说明、错误提示的位置和触发方式正确。

## 4. 交互状态

本节只检查通用交互状态是否存在；具体页面交互细节以 `03-interaction/` 对应文件为准。

- [ ] 搜索、清空、筛选、排序等当前页面适用交互逻辑正确。
- [ ] 勾选行相关操作与勾选状态联动。
- [ ] 勾选后展示 `已选 N 项`，未勾选时不展示。
- [ ] 关键操作有确认。
- [ ] 异步操作有 loading。
- [ ] 成功、失败、异常、空状态反馈完整。
- [ ] 空状态和异常状态有下一步操作。
- [ ] 删除、禁用、还原、覆盖、发布、重置等操作有二次确认。
- [ ] 高风险操作不能只用 Toast 提示。

## 5. 数据与文案

- [ ] 空值统一展示为 `-`。
- [ ] 时间格式统一，例如 `YYYY-MM-DD HH:MM:SS`。
- [ ] 数字格式、总数格式、分页格式统一。
- [ ] 表头、字段、按钮文案与设计规范一致。
- [ ] Tooltip、错误提示、帮助信息内容准确。
- [ ] 风险、等级、状态标签文案使用标准命名。
- [ ] 确认弹窗标题包含动作和对象。
- [ ] 高风险操作说明包含操作结果和是否可恢复。

## 6. Token 与样式

| 检查项 | 验收标准 |
|---|---|
| 主色 | 普通主操作使用 `p6 #00AB7A`，hover 使用 `p5`，active 使用 `p7` |
| AI 按钮 | AI 功能入口使用 AI 默认 / AI 悬停 / AI 按下三态渐变 |
| AI 与普通按钮区分 | 普通保存、提交、筛选、导出、删除按钮没有误用 AI 渐变 |
| 中性色 | 背景、hover、边框、分割线、正文、标题分别调用正确 `gray-*` |
| 功能色 | 成功、警告、错误、信息使用对应 Green / Orange / Red / Blue Token |
| 风险等级色 | 致命、严重、高危、中危、低危、安全按 Deep red / Red / Orange red / Orange / Yellow / Green 映射 |
| Focus ring | 表单聚焦、错误、成功、警告状态使用 2px 外描边 Token，不改变组件尺寸 |
| 投影 | 卡片使用一级投影；弹窗 / 抽屉使用二级投影；AI 超级输入框 hover 使用专门阴影 |
| 硬编码 | 关键颜色、阴影、字号、间距不应大量散乱硬编码 |
| 字体渲染 | 必须继承字体渲染基线，关闭浏览器伪粗体 / 伪斜体 |

## 7. 字体与文本实现

- [ ] 全局设置统一 `font-family`。
- [ ] 页面标题、模块标题、正文、辅助文本、高密度表格文本符合字体规范。
- [ ] 图表、表格、弹窗、抽屉中的字体与页面字体一致。
- [ ] 已设置 `font-synthesis: none`。
- [ ] 已设置 `font-synthesis-weight: none`。
- [ ] 已设置 `font-synthesis-style: none`。
- [ ] 已设置 `-webkit-font-smoothing: antialiased`。
- [ ] 已设置 `-moz-osx-font-smoothing: grayscale`。
- [ ] 表格、列表、配置抽屉等高密度信息区域没有出现正文视觉接近标题字重的情况。
- [ ] 正文、表单、列表、按钮、输入框、选择器、抽屉内容、提示说明没有依赖浏览器伪粗体。

## 8. 页面专项交互验收

页面专项交互验收不得在本文重复定义。生成或检查页面时，必须先读取对应页面的 `03-interaction/` 交互规范，并将当前业务适用项转换为页面内部验收清单。

| 页面类型 | 交互真源 | 验收方式 |
|---|---|---|
| 列表页搜索区 | `03-interaction/list-search.md` | 按搜索区当前业务适用项逐项检查 |
| 列表页表格区 | `03-interaction/list-table.md` | 按表格区当前业务适用项逐项检查 |
| 表单页 | `03-interaction/form-entry.md` | 按表单录入当前业务适用项逐项检查 |
| 详情页 / 页面容器 | `03-interaction/page-container.md` | 按页面容器和当前业务适用项逐项检查 |

列表页验收必须以 `03-interaction/list-search.md` 和 `03-interaction/list-table.md` 为准。分页位置、空数据分页、固定列、空数据表格表现等细节不得在本文另行定义。

缺少任一当前页面适用的硬性项，视为 HTML Demo 验收失败。