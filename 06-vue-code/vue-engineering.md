# Vue 工程落地规范
## Vue Engineering Rules

Keywords: vue engineering, file structure, mock data, state, backend

本文用于约束 AI 生成 Vue 页面代码时的工程组织、类型定义、状态管理和 mock 数据处理。

## 1. 默认输出形态

用户没有要求工程化拆分时，默认输出单文件页面：

```text
Page.vue
preview.html
```

用户要求工程化拆分时，推荐输出：

```text
Page.vue
components/
  SearchBar.vue
  DataTable.vue
types.ts
columns.ts
mock.ts
api.ts
preview.html
```

## 2. 类型与状态

表格数据必须定义 interface，表单数据必须定义表单类型，不要大量使用 any。页面内状态优先使用 ref、reactive、computed、watch。

## 3. 样式落地

使用局部 class 管理样式，尽量使用 CSS 变量表达颜色、间距和圆角。不要在模板里散落大量 inline style。