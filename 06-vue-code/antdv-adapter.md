# Ant Design Vue 适配规范
## Ant Design Vue Adapter Rules

Keywords: ant design vue, adapter, style override, brand color, theme token, vue codegen

本文定义 Vue 代码生成时如何使用和适配 Ant Design Vue 组件。默认基于 Ant Design Vue 最新版组件结构，仅替换组件视觉样式，不修改组件原生功能、交互逻辑和布局结构。

## 1. 使用原则

- Ant Design Vue 是默认组件基础。
- 优先使用组件库能力，再做局部样式适配。
- 只修改视觉样式，例如圆角、颜色、边框、阴影。
- 不修改组件原生功能、交互逻辑、布局结构和功能按钮位置。
- 不用普通 div 伪造 Ant Design Vue 已经提供的成熟组件。
- HTML 预览文件不强制真实引入 Ant Design Vue，但视觉和结构应尽量模拟正式 Vue 版本。

## 2. 品牌主题 Token

### 2.1 基础变量

```css
:root {
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;

  --border-color: #E8EAED;
  --bg-color: #F8F9FA;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.12);

  --p1: #D9F4EE;
  --p2: #B9F7E2;
  --p3: #71EDC2;
  --p4: #4AD3A4;
  --p5: #1DB887;
  --p6: #00AB7A;
  --p7: #039972;
  --p8: #008563;
  --p9: #006853;
  --p10: #013C32;

  --s-red-1: #FFE8E6;
  --s-red-6: #F0131E;
  --s-orange-1: #FFF8E6;
  --s-orange-6: #F58A02;
  --s-green-1: #EFF8EE;
  --s-green-6: #52C41A;
  --blue-1: #E6F7FF;
  --blue-6: #1890FF;

  --text-primary: #242933;
  --text-secondary: #8A9099;
  --text-disabled: #DFE1E6;
}
```

### 2.2 品牌色使用边界

- Ant Design Vue 默认蓝色不得作为产品主色继续使用。
- 主按钮、选中态、开关开启态、Radio / Checkbox 选中态、Tabs 激活态必须使用 p6 体系。
- 蓝色只用于信息提示、链接、进行中、待处理等语义，不作为品牌主色。
- 普通主按钮使用 p6 / p5 / p7，AI 按钮使用 AI 三态渐变，两者不能混用。

## 3. Ant Design Vue 组件视觉覆盖规则

### 3.1 Button

| 类型 | 样式规则 |
|---|---|
| 主按钮 | 背景 p6 `#00AB7A`，hover p5 `#1DB887`，active p7 `#039972`，文字白色，无额外边框 |
| 成功按钮 | 背景 `#52C41A`，边框同背景色，文字白色 |
| 危险按钮 | 背景 `#F0131E`，边框同背景色，文字白色 |
| 辅助按钮 | 白底或浅底，边框 `#E8EAED`，文字 `#242933` 或 `#525966` |
| 禁用按钮 | 禁用背景、边框、文字使用灰阶，不可点击 |

所有按钮过渡效果建议使用：

```css
transition: all 0.3s ease;
```

### 3.2 Input / Select / DatePicker / TimePicker

| 状态 | 样式规则 |
|---|---|
| 默认 | 圆角 6px，边框 `#E8EAED`，文本 `#242933` |
| hover | 边框可使用 p5 或更明显的边框色 |
| focus | 边框 p6 `#00AB7A`，外发光 `0 0 0 2px #D9F4EE` |
| placeholder | 文字 `#8A9099` |
| disabled | 文本使用禁用灰，背景使用弱灰 |
| error | 边框 `#F0131E`，浅红外发光或错误提示 |

下拉菜单、Select 面板、DatePicker 面板：

- 圆角 6px。
- 阴影 `0 4px 16px rgba(0,0,0,0.12)`。
- 选中项使用 p6。
- hover 项使用浅主色或浅灰背景。

### 3.3 Card

- 圆角 6px。
- 边框 `#E8EAED`。
- 阴影 `0 2px 8px rgba(0,0,0,0.08)`。
- 头部底部边框 `#E8EAED`。
- 标题文本 `#242933`。
- 内容背景 `#FFFFFF`，文本 `#242933`。

### 3.4 Modal / Drawer

Modal：

- 圆角 8px。
- 内容区无额外边框。
- 头部 / 底部边框 `#E8EAED`。
- 标题文本 `#242933`。
- 弹层阴影使用中阴影或二级投影。

Drawer：

- 背景 `#FFFFFF`。
- 右侧抽屉一般右侧无圆角，左侧圆角 8px。
- 左侧抽屉反向处理。
- 头部 / 底部边框 `#E8EAED`。
- 使用二级投影。

### 3.5 Table

- 表头背景 `#F8F9FA`。
- 表头文本 `#242933`。
- 表头底部边框 `#E8EAED`。
- 表体文本 `#242933` 或正文色。
- 行 hover 背景 `#F8F9FA` 或 `#F2F3F5`，保持与列表页表格规范一致。
- 单元格底部边框 `#E8EAED`。
- 如果使用外层卡片容器，圆角在外层容器处理；表格本体按 `03-interaction/list-table.md` 可保持无外边框、无圆角。

### 3.6 Tag / Avatar / Radio / Checkbox / Switch

| 组件 | 样式规则 |
|---|---|
| Tag 默认品牌样式 | 圆角 6px，背景 p1 `#D9F4EE`，文本 p6 `#00AB7A`，无边框或弱边框 |
| Avatar | 圆角 8px，背景 p6，文字白色 |
| Radio 选中态 | 背景 / 边框 p6 |
| Checkbox 选中态 | 背景 / 边框 p6 |
| Switch 开启态 | 背景 p6 |
| Tabs 激活态 | 文本 p6，下划线 p6 |
| Pagination 当前页 | 背景或边框 p6，文字按可读性设置 |

## 4. 表格适配

表头高度稳定，行高稳定，操作列固定在右侧，状态标签可读，空值统一展示为 `-`，列多时支持横向滚动，分页位置稳定。更完整规则见：

```text
03-interaction/list-table.md
```

## 5. 表单适配

label 对齐清晰，必填项有标识，校验错误有文案，placeholder 有统一规则，提交按钮和取消按钮层级明确，长表单应分组或分步。更完整规则见：

```text
03-interaction/form-entry.md
02-components/form.md
```

## 6. 代码生成要求

Vue 代码生成 Ant Design Vue 页面时，必须：

- 使用 Ant Design Vue 最新版组件结构。
- 使用品牌色 p6 作为 primary 主色。
- 覆盖主按钮、选中态、聚焦态、Switch 开启态、Radio / Checkbox 选中态、Tabs 激活态。
- 保持组件原生功能和交互逻辑不变。
- 样式覆盖集中在主题 Token、CSS 变量或局部 class 中。
- 不要散落大量 inline style。
- 不要继续使用 Ant Design Vue 默认蓝色作为主色。

## 7. HTML 预览关系

HTML 预览文件不强制真实引入 Ant Design Vue，但必须体现同样的品牌色覆盖：

- 主按钮 p6 / p5 / p7。
- 输入框 focus 使用 p6 + p1 外发光。
- Select / DatePicker 面板圆角 6px + 中阴影。
- 卡片圆角 6px + 小阴影。
- 弹窗圆角 8px + 中阴影。
- Tag 品牌样式为 p1 背景 + p6 文本。
- Radio / Checkbox / Switch 选中使用 p6。
