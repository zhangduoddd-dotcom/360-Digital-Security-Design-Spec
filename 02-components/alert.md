# Alert 警示提示规范
## Alert Rules

Keywords: alert, notice, warning, page feedback, semantic color

本文迁移自上传包 `references/component-styles/alert.txt`，用于约束页面级提示、说明、警告和异常信息。

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

## 5. Vue / HTML 生成要求

Vue 使用 `a-alert`。HTML 预览需要模拟 info、success、warning、error、closable 和 action 状态。