# Alert 警示提示规范
## Alert Rules

Keywords: alert, notice, warning, page feedback, semantic color

本文迁移自上传包 `references/component-styles/alert.txt`，用于约束页面级提示、说明、警告和异常信息。

## 0. 使用边界

本文只定义 Alert 的语义、使用场景、状态要求和交互规则，不作为 HTML Demo 的真实 DOM / class / CSS / Token 来源。

HTML Demo 中 Alert 真实 DOM / class / CSS / Token 必须以以下文件为准：

```text
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/snippets/*.html
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
```

如果本文与组件样式库存在冲突，以组件样式库中的 `.ant-alert`、`.ant-alert-content`、`.ant-alert-message` 等真实 class 为准。禁止根据本文自行生成 `.alert`、`.notice`、`.risk-alert` 等旧别名或私有提示 class。

## 1. 使用场景

- 页面顶部的重要说明。
- 表单提交前后的风险提示。
- 配置影响范围说明。
- 异常、权限、失败、成功等状态反馈。

## 2. 类型

| 类型 | 场景 | 语义 |
|---|---|---|
| info | 普通说明、帮助信息 | 蓝色信息语义色 |
| success | 成功、完成、已生效 | 绿色语义色 |
| warning | 风险提示、待确认 | 橙色或黄色语义色 |
| error | 失败、异常、阻断 | 红色语义色 |

## 3. 结构

```text
Icon + Title + Description + Action / Close
```

- 标题说明问题或结果。
- 描述说明原因、影响和下一步。
- 可关闭 Alert 必须有关闭入口。
- 有操作时按钮层级不能超过主内容操作。

## 4. 使用规则

- Alert 不用于普通装饰。
- 高风险提示必须明确影响范围。
- 错误提示必须给出解决建议。
- 页面顶部不要堆叠多个 Alert。
- 语义色必须与内容一致。

## 5. HTML Demo 生成要求

组件语义可参考 Ant Design / Ant Design Vue 的同名 Alert 组件，但本 Skill 不输出 Vue 代码。

HTML Demo 需要模拟 info、success、warning、error、closable 和 action 状态。Alert DOM 必须复制 manifest 指向的 snippet，并使用组件样式库真实 `.ant-alert` 体系，最终 HTML 必须按 `component-runtime-contract.md` 注入对应 `.ant-alert` CSS / Token。