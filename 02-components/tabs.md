# 页签规范
## Tabs Rules

Keywords: tabs, tab navigation, segmented content, p6

本文迁移自上传包 `references/component-styles/tabs.txt`，用于约束页签切换、状态页签和内容分组。

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

## 5. Vue / HTML 生成要求

Vue 使用 `a-tabs`。HTML 预览需要模拟 hover、active、disabled、数量标识、切换内容和溢出处理。