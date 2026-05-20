# 规则唯一真源

> 本文件用于收敛重复规则，明确每类规则的唯一维护位置。其他文档可以引用、路由或验收这些规则，但不应重复定义同一规则。

## 1. 维护原则

1. 同一条生成规则只能有一个唯一真源。
2. 页面、组件、模板、验收清单各自负责自己的层级，不跨层级重复定义。
3. 当文档之间发生冲突时，优先级按本文件的“冲突处理”执行。
4. 验收清单只负责检查结果，不新增生成规则。
5. 运行时入口文档可以保留摘要，但必须指向唯一真源。

## 2. 规则归属表

| 规则主题 | 唯一真源 | 其他文档处理 |
|---|---|---|
| AI 角色、任务边界、默认工作方式 | `ROLE.md` | 其他文档不重复定义角色职责 |
| AI 启动顺序、任务路由、默认交付路径 | `SKILL.md` | `README.md`、`INDEX.md` 只保留入口说明 |
| 文档分层和读取顺序 | `INDEX.md`、`DOCS-STRUCTURE.md` | 其他文件不维护完整目录索引 |
| HTML Demo 默认交付与工程代码触发条件 | `SKILL.md` | 基础规范、代码规范只做摘要引用 |
| 模板选择、单层/双层导航优先级 | `06-vue-code/templates/README.md` | `SKILL.md`、`preview-html.md`、页面规范只保留入口或引用 |
| 单个 HTML 母版的可变/不可变范围 | 对应 `06-vue-code/templates/*.html` 文件头部注释 | 文字规范若与母版冲突，以母版为准 |
| HTML Demo 文件、状态与交互要求 | `06-vue-code/preview-html.md` | 页面规范只补充页面类型差异 |
| 组件真实 DOM / class / CSS / Token 来源 | `docs/component-style-library/backend_ai_ui_component_kit_with_index.html` 与 `docs/component-style-library/component_style_library_index.md` | `02-components/` 不推导 HTML DOM 或 class |
| 组件 DOM 抽取 | `06-vue-code/component-dom-extraction-rules.md` | 其他文件不重复抽取流程 |
| 组件 CSS 与 Token 注入 | `06-vue-code/component-style-import-rules.md` | 其他文件只引用注入顺序 |
| 组件语义到真实 class 映射 | `06-vue-code/component-style-code-map.md` | 其他文件不另写 class 映射表 |
| 业务组件复用与页面业务 class 边界 | `06-vue-code/business-component-reuse-rules.md` | 其他文件只验收，不重复规则全文 |
| 组件读取顺序 | `06-vue-code/component-reading-order-rules.md` | `INDEX.md` 只保留任务路由入口 |
| 旧 class 与私有组件 class 禁用清单 | `06-vue-code/deprecated-class-blacklist.md` | 其他文件不维护重复黑名单 |
| 组件语义、状态和交互要求 | `02-components/*.md` | 不作为 HTML Demo 真实 DOM / class / CSS 来源 |
| 页面类型结构与信息层级 | `04-pages/*.md` | 不重复框架母版和组件抽取规则 |
| 列表页结构、筛选、表格、批量操作 | `04-pages/list-page.md` | 组件和模板文档不重复列表页业务结构 |
| 详情页结构、Tab、抽屉、关联信息 | `04-pages/detail-page.md` | 组件和模板文档不重复详情页业务结构 |
| 输出验收 | `07-checklists/*.md` | 只做检查项，不定义新的生成规则 |

## 3. 冲突处理

1. 页面框架冲突时，以 `06-vue-code/templates/*.html` 为准。
2. 模板选择冲突时，以 `06-vue-code/templates/README.md` 为准。
3. 组件 DOM / class / CSS / Token 冲突时，以组件样式库和 `06-vue-code` 抽取、注入规则为准。
4. 页面结构冲突时，以对应 `04-pages/*.md` 为准。
5. 输出验收冲突时，以 `07-checklists/*.md` 为准，但验收清单不能反向创造新的生成规则。

## 4. 重复规则清理建议

以下内容后续应逐步从其他文档中删除或改为引用：

1. 重复描述“固定 HTML 母版如何选择”的段落，应合并到 `06-vue-code/templates/README.md`。
2. 重复描述“组件 DOM / class / CSS 如何抽取”的段落，应合并到 `06-vue-code/component-dom-extraction-rules.md` 和 `06-vue-code/component-style-import-rules.md`。
3. 重复维护旧 class 黑名单的段落，应合并到 `06-vue-code/deprecated-class-blacklist.md`。
4. 页面规范中的框架容器说明，应统一改为“母版页头”和“母版业务内容区”，不再使用旧口径 `ReturnHeader` 或 `.platform-page-content`。
5. `02-components/*.md` 只保留组件语义、状态、行为和验收说明，不应输出或推导真实 HTML DOM / class。

## 5. 写作约束

1. 新增规则前，先检查本文件是否已有归属主题。
2. 如果已有归属主题，只更新唯一真源文件，并在其他位置引用它。
3. 如果需要新增规则主题，先在本文件登记唯一真源。
4. 不在验收清单、页面规范、组件规范中复制大段模板或抽取流程。
5. 不用旧框架术语描述新母版结构。
