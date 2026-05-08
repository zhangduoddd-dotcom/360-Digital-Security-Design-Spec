# 面向AI高保真页面生成的Ant Design Vue最新组件UI定制规范
# Ant Design Vue Latest Component UI Custom Specification for AI High\-Fidelity Page Generation
Keywords: Vue3, Ant Design Vue, latest version, AI page generation, high\-fidelity UI, component style customization, CSS variables, theme tokens, enterprise UI specification, UI design rules

### 中文关键词

Vue3、Ant Design Vue最新版、AI页面生成、高保真UI、组件样式定制、CSS变量、主题令牌、企业级UI规范、UI设计规则

# Ant Design Vue 最新版 通用组件 UI 样式规范（AI 高保真生成专用）

**文档用途**：专供AI生成高保真页面使用，严格基于Ant Design Vue最新版组件体系，定制统一通用组件UI样式规则，无需修改组件原生功能与交互，实现AI一键生成标准化UI页面，可直接用于GitHub开源项目归档、团队协作复用。

**官方参考**：Ant Design Vue 最新版官方文档 https://antdv\.com/docs/vue/introduce

**核心要求**：AI 生成高保真页面时，需完全基于 Ant Design Vue 最新版组件结构，仅替换组件视觉样式（不修改组件功能、交互逻辑、布局结构），确保组件样式统一、视觉一致，贴合以下规范。

**官方参考链接**

- Ant Design Vue 最新版官方文档：[https://antdv\.com/docs/vue/introduce](https://antdv.com/docs/vue/introduce)

- Ant Design Vue GitHub 仓库（获取最新组件信息）：[https://github\.com/vueComponent/ant\-design\-vue](https://github.com/vueComponent/ant-design-vue)

- 版本日志（确保适配最新组件样式）：[https://github\.com/vueComponent/ant\-design\-vue/releases](https://github.com/vueComponent/ant-design-vue/releases)

---

## 一、AI 生成核心规则

- 基础组件库：必须基于 Ant Design Vue 最新版，组件类型、交互逻辑与官方保持一致（如按钮点击反馈、输入框校验提示、弹窗交互等不做任何修改）。

- 样式定制范围：仅修改组件视觉样式（圆角、颜色、边框、阴影等），不改变组件尺寸比例、布局结构、功能按钮位置。

- 样式统一性：所有同类型组件（如所有按钮、所有输入框）需严格遵循同一规范，避免视觉混乱。

- 高保真要求：生成的页面需完整呈现以下样式规范，细节清晰（如颜色精准匹配、圆角无偏差、阴影层次明显），可直接作为视觉交付物。

---

## 二、通用组件 UI 样式规范（AI 必遵循）

### 2\.1 全局基础样式规范

|样式类型|规范值|对应变量|AI 生成说明|
|---|---|---|---|
|小号圆角|4px|\-\-radius\-sm|适用于小号按钮、输入框、标签、图标容器|
|中号圆角|6px|\-\-radius\-md|适用于默认按钮、卡片、下拉菜单、表单控件|
|大号圆角|8px|\-\-radius\-lg|适用于弹窗、抽屉、头像、大卡片、模态框|
|边框颜色|\#E8EAED|\-\-border\-color|所有组件边框统一使用此颜色，无特殊例外|
|背景色|\#F8F9FA|\-\-bg\-color|页面背景、组件默认背景统一使用|
|小阴影|0 2px 8px rgba\(0,0,0,0\.08\)|\-\-shadow\-sm|适用于卡片、普通组件|
|中阴影|0 4px 16px rgba\(0,0,0,0\.12\)|\-\-shadow\-md|适用于下拉菜单、弹窗|

### 2\.2 品牌主色规范（核心）

AI 生成时，所有主色相关组件（主按钮、选中状态、强调文本等）需严格使用以下色值，按对应场景匹配：

```css
--p1: #D9F4EE; /* 主色浅背景 */
--p2: #B9F7E2; /* 主色浅 hover */
--p3: #71EDC2; /* 主色中浅 */
--p4: #4AD3A4; /* 主色中 */
--p5: #1db887; /* 主色 hover 状态 */
--p6: #00ab7a; /* 主色基准（核心色） */
--p7: #039972; /* 主色 active 状态 */
--p8: #008563; /* 主色深 */
--p9: #006853; /* 主色特深 */
--p10: #013C32; /* 主色最深（文本搭配） */
```

### 2\.3 功能语义色规范（AI 直接取用）

```css
/* 错误/失败（如错误提示、删除按钮） */
--s-red-1: #FFE8E6; /* 错误背景 */
--s-red-6: #F0131E; /* 错误核心色 */

/* 警告（如警告提示、警告按钮） */
--s-orange-1: #FFF8E6; /* 警告背景 */
--s-orange-6: #F58A02; /* 警告核心色 */

/* 成功（如成功提示、确认按钮） */
--s-green-1: #EFF8EE; /* 成功背景 */
--s-green-6: #52C41A; /* 成功核心色 */

/* 信息（如信息提示、辅助文本） */
--blue-1: #E6F7FF; /* 信息背景 */
--blue-6: #1890FF; /* 信息核心色 */
```

### 2\.4 文本色规范（AI 严格匹配）

```css
--text-primary: #242933; /* 主要文本（标题、正文） */
--text-secondary: #8A9099; /* 次要文本（提示、说明） */
--text-disabled: #DFE1E6; /* 禁用文本（禁用组件文本） */
```

---

## 三、核心通用组件样式细节（AI 必遵循）

以下为 Ant Design Vue 最新版高频通用组件的具体样式要求，AI 生成时需逐一匹配，确保高保真还原：

### 3\.1 按钮组件（Button）

- 尺寸与圆角：小号（4px）、中号（6px）、大号（8px），对应上述圆角规范。

- 主按钮：背景色 \#00ab7a（\-\-p6）、hover 背景 \#1db887（\-\-p5）、active 背景 \#039972（\-\-p7），无额外边框，文字白色。

- 成功按钮：背景色 \#52C41A（\-\-s\-green\-6），边框同背景色，文字白色。

- 危险按钮：背景色 \#F0131E（\-\-s\-red\-6），边框同背景色，文字白色。

- 所有按钮过渡效果：all 0\.3s ease（平滑过渡）。

### 3\.2 输入类组件（Input/Select/DatePicker）

- 圆角：统一 6px（\-\-radius\-md），边框颜色 \#E8EAED（\-\-border\-color）。

- 聚焦状态：边框颜色 \#00ab7a（\-\-p6），外发光 0 0 0 2px \#D9F4EE（\-\-p1）。

- 下拉菜单（Select 下拉、DatePicker 面板）：圆角 6px，阴影 0 4px 16px rgba\(0,0,0,0\.12\)。

- 文本颜色：输入文本 \#242933（\-\-text\-primary），提示文本 \#8A9099（\-\-text\-secondary）。

### 3\.3 卡片组件（Card）

- 圆角：6px（\-\-radius\-md），边框颜色 \#E8EAED（\-\-border\-color）。

- 阴影：0 2px 8px rgba\(0,0,0,0\.08\)（\-\-shadow\-sm）。

- 卡片头部：底部边框颜色 \#E8EAED，标题文本 \#242933（\-\-text\-primary）。

- 卡片内容：背景色 \#ffffff（\-\-gray\-1），文本颜色 \#242933。

### 3\.4 弹窗/抽屉（Modal/Drawer）

- 圆角：8px（\-\-radius\-lg），弹窗内容区无额外边框。

- 头部/底部：头部底部边框颜色 \#E8EAED，标题文本 \#242933。

- 抽屉：右侧无圆角，左侧圆角 8px，背景色 \#ffffff。

### 3\.5 表格组件（Table）

- 整体圆角：6px（\-\-radius\-md），overflow: hidden（避免圆角漏出）。

- 表头：背景色 \#F8F9FA（\-\-bg\-color），文本 \#242933，底部边框 \#E8EAED。

- 表体：行 hover 背景 \#F8F9FA，单元格底部边框 \#E8EAED，文本 \#242933。

### 3\.6 其他高频组件

- 标签（Tag）：圆角 6px，背景 \#D9F4EE（\-\-p1），文本 \#00ab7a（\-\-p6），无边框。

- 头像（Avatar）：圆角 8px，背景 \#00ab7a（\-\-p6），文本白色。

- 单选/复选（Radio/Checkbox）：选中状态背景 \#00ab7a（\-\-p6），边框同背景色。

- 开关（Switch）：开启状态背景 \#00ab7a（\-\-p6）。

---

## 四、AI 生成补充说明

- 组件适配：严格匹配 Ant Design Vue 最新版组件形态，不添加官方组件库中没有的额外元素。

- 样式优先级：当组件有多种状态（常态、hover、active、禁用）时，优先匹配上述规范中的对应状态色值和样式。

- 一致性要求：所有同类型组件（如所有按钮、所有输入框）的圆角、颜色、阴影必须完全统一，不出现差异。

- 高保真细节：颜色需精准匹配规范中的色值，圆角无偏差，阴影层次清晰，组件间距均匀，符合企业级视觉标准。
