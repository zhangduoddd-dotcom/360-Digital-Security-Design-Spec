# Ant Design Vue 组件规范
## Ant Design Vue Component Rules

Keywords: ant design vue, component mapping, vue codegen, backend components

本文用于约束 Vue 页面代码生成时的组件选择。默认使用 Ant Design Vue 作为后台页面组件基础。

## 1. 基础原则

- Vue 代码生成时优先使用 Ant Design Vue 组件。
- 表格、表单、选择器、弹窗、抽屉、反馈、上传、进度、统计等成熟控件应使用组件库能力。
- 只做必要的局部样式适配，不做大范围全局覆盖。
- HTML 预览文件不强制真实引入 Ant Design Vue，但结构和视觉应尽量对齐正式 Vue 版本。

## 2. 推荐组件映射

### 2.1 基础操作

| 场景 | Ant Design Vue 组件 |
|---|---|
| 按钮 | `a-button` |
| 下拉菜单 | `a-dropdown`、`a-menu` |
| 图标按钮 | `a-button` + icon |
| Tooltip | `a-tooltip` |
| Popover | `a-popover` |
| Popconfirm | `a-popconfirm` |

### 2.2 数据录入

| 场景 | Ant Design Vue 组件 |
|---|---|
| 表单 | `a-form`、`a-form-item` |
| 输入框 | `a-input` |
| 文本域 | `a-textarea` |
| 数字输入框 | `a-input-number` |
| Select | `a-select` |
| Radio | `a-radio`、`a-radio-group` |
| Checkbox | `a-checkbox`、`a-checkbox-group` |
| Switch | `a-switch` |
| Cascader | `a-cascader` |
| TreeSelect | `a-tree-select` |
| DatePicker | `a-date-picker`、`a-range-picker` |
| TimePicker | `a-time-picker`、`a-time-range-picker` 或日期时间组合实现 |
| Transfer | `a-transfer` |
| Upload | `a-upload`、`a-upload-dragger` |

### 2.3 数据展示

| 场景 | Ant Design Vue 组件 |
|---|---|
| 表格 | `a-table` |
| 卡片 | `a-card` |
| 统计数值 | `a-statistic` |
| 标签 | `a-tag` |
| 徽标数 / 状态点 | `a-badge` |
| 描述列表 | `a-descriptions`、`a-descriptions-item` |
| 时间轴 | `a-timeline`、`a-timeline-item` |
| 折叠面板 | `a-collapse`、`a-collapse-panel` |
| 空状态 | `a-empty` |
| 结果页 / 异常页 | `a-result` |

### 2.4 反馈与异常

| 场景 | Ant Design Vue 组件 |
|---|---|
| 全局提示 | `message` |
| 通知提醒 | `notification` |
| 警告提示 | `a-alert` |
| 弹窗 | `a-modal` |
| 抽屉 | `a-drawer` |
| 加载中 | `a-spin` |
| 进度条 | `a-progress` |
| 骨架屏 | `a-skeleton` |

## 3. 样式适配边界

允许对以下内容做局部样式适配：

- 页面容器、卡片、间距、背景、边框。
- 表格列宽、操作列、状态标签。
- 表单布局、按钮区对齐。
- 上传区域、空状态、异常页插图区。
- AI 能力入口和 AI 结果区的业务样式。

不建议：

- 大量覆盖 Ant Design Vue 内部 class。
- 修改组件核心交互行为。
- 通过全局样式影响所有页面。
- 用普通 div 伪造表格、选择器、日期面板、上传、进度条等成熟组件。

## 4. 代码生成要求

- Vue 代码必须优先使用本文组件映射。
- 组件尺寸、状态和使用边界必须同时参考 `02-components/component-size.md`。
- 数据录入组件规则参考 `02-components/form.md`。
- 数据展示组件规则参考 `02-components/table.md`。
- 反馈组件规则参考 `02-components/feedback.md`。
- HTML 预览文件可以用原生 HTML/CSS/JS 模拟，但结构、尺寸、状态和交互要对齐正式 Vue 版本。
