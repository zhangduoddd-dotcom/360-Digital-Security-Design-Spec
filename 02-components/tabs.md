# 页签规范
## Tabs Rules

Keywords: tabs, tab navigation, segmented content, p6

本文迁移自上传包 `references/component-styles/tabs.txt`，用于约束页签切换、状态页签和内容分组。

## 0. 使用边界

本文只定义 Tabs 的语义、使用场景、状态要求和交互规则，不作为 HTML Demo 的真实 DOM / class / CSS / Token 来源。

HTML Demo 中 Tabs 真实 DOM / class / CSS / Token 必须以以下文件为准：

```text
docs/component-style-library/component_snippet_manifest.json
docs/component-style-library/snippets/*.html
docs/component-style-library/backend_ai_ui_component_kit_with_index.html
06-vue-code/component-runtime-contract.md
```

如果本文与组件样式库存在冲突，以组件样式库中的 `.ant-tabs`、`.ant-tabs-nav`、`.ant-tabs-tab` 等真实 class 为准。禁止根据本文自行生成 `.tabs`、`.tab-nav`、`.status-tabs` 等旧别名或私有页签 class。

## 1. 使用场景

- 同一对象下的多个并列信息区。
- 按状态、类型、集合切换列表。
- 页面内轻量内容分组。

不适合使用 Tabs 的场景：流程步骤、复杂导航、跨业务模块跳转。

## 2. 类型

| 类型 | 场景 |
|---|---|
| 基础线型 Tabs | 页面内常规分组 |
| 卡片型 Tabs | 较强容器感的分组 |
| 状态 Tabs | 按状态切换数据集合 |
| 胶囊 Tabs | 轻量筛选或模式切换 |

## 3. 状态要求

必须覆盖：

```text
Default / Hover / Active / Disabled / Count Badge / Overflow
```

- active 使用 `p6` 或 `p7`。
- active 下划线或选中背景使用科技绿体系。
- hover 不改变布局高度。
- disabled 不响应点击。

## 4. 数量规则

- 顶层页签建议 2–5 个。
- 超过 6 个应考虑下拉、折叠或侧边导航。
- 页签文案应短，避免换行。
- 状态数量可用 Badge 展示，但不要堆叠过多颜色。

## 5. HTML Demo 生成要求

组件语义可参考 Ant Design / Ant Design Vue 的同名 Tabs 组件，但本 Skill 不输出 Vue 代码。

HTML Demo 需要模拟 hover、active、disabled、数量标识、切换内容和溢出处理。Tabs DOM 必须复制 manifest 指向的 snippet，并使用组件样式库真实 `.ant-tabs` 体系，最终 HTML 必须按 `component-runtime-contract.md` 注入对应 `.ant-tabs` CSS / Token。