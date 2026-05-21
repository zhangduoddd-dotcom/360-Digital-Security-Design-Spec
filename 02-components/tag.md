# 标签规范
## Tag Rules

Keywords: tag, status tag, removable tag, p6, semantic component rules

本文迁移自上传包 `references/component-styles/tag.txt`，用于约束属性标签、状态标签和可删除标签。

## 0. 使用边界

本文只定义标签的语义、使用场景、状态要求和交互规则，不作为 HTML Demo 的真实 DOM / class / CSS / Token 来源。

HTML Demo 中标签真实 DOM / class / CSS / Token 必须以以下文件为准：

```text
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/snippets/*.html
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
```

如果本文与组件样式库存在冲突，以组件样式库中的 `.ant-tag`、`.ant-tag-primary`、`.ant-tag-success`、`.ant-tag-processing`、`.ant-tag-warning`、`.ant-tag-error` 等真实 class 为准。禁止根据本文自行生成 `.tag`、`.tag-status`、`.status-tag`、`.alert-tag` 等旧别名或私有标签 class。

## 1. 使用场景

- 表格状态、等级、分类展示。
- 筛选条件回显。
- 对象属性标记。
- 处理结果识别。

## 2. 类型

| 类型 | 场景 | 规则 |
|---|---|---|
| 属性标签 | 类型、来源、分类 | 灰色或弱色系，不抢视觉 |
| 状态标签 | 启用、禁用、处理中 | 颜色和文字共同表达 |
| 等级标签 | 高、中、低等等级 | 使用统一语义色 |
| 可删除标签 | 筛选条件回显 | 有关闭按钮和 hover 状态 |
| 主色标签 | 重点选中或品牌状态 | `p1` 浅绿底 + `p7` 文本 |

## 3. 尺寸规范

| 尺寸 | 高度 | 字号 / 行高 | 圆角 |
|---|---:|---|---:|
| sm | 20px | 12px / 20px | 4px |
| default | 22px 或 24px | 12px / 20px 或 14px / 22px | 4px |
| lg | 28px | 14px / 22px | 6px |

## 4. 状态与语义

- 正常、成功类状态使用绿色语义色。
- 提醒、待处理类状态使用橙色或黄色语义色。
- 失败、异常类状态使用红色语义色。
- 信息类状态使用蓝色信息语义色。
- 主色选中使用科技绿体系。

标签不能只依赖颜色，必须保留文字说明。

## 5. 使用规则

- 标签文案建议 2–6 字。
- 一个单元格内不宜堆叠过多彩色标签。
- 同一状态在同一产品内颜色保持一致。
- 可删除标签删除后需要反馈或立即更新结果。

## 6. HTML Demo 生成要求

组件语义可参考 Ant Design / Ant Design Vue 的同名 Tag 组件，但本 Skill 不输出 Vue 代码。

HTML Demo 需要模拟普通标签、状态标签、等级标签、可删除标签、hover 和删除反馈。标签 DOM 必须复制 manifest 指向的 snippet，并使用组件样式库真实 `.ant-tag` 体系，最终 HTML 必须按 `component-runtime-contract.md` 注入对应 `.ant-tag` CSS / Token。