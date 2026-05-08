# 基于 Vue 3 + Ant Design Vue 最新组件库定制通用组件 UI 样式规范
## Ant Design Vue Customization Specification
Keywords: Vue3, Ant Design Vue, latest, theme, tokens, style customization

## 文档信息

- **适用框架**：Vue 3 + Ant Design Vue 官方组件库
- **定制范围**：全站 63 个组件统一圆角 + 自定义品牌色彩规范
- **圆角规则**：small=4px / medium=6px / large=8px
- **定制方式**：全局 CSS 变量覆盖（零入侵源码、不影响组件交互）
- **文件格式**：Markdown 知识库（复制下方全文，保存为 `.md` 文件即可使用）

***

## 一、概述

### 1.1 背景

基于 **Ant Design Vue 官方组件库** 进行企业级样式定制，保留组件所有原生交互、状态、功能，仅通过 **全局 CSS 变量 + 样式覆盖** 统一全站视觉规范。

### 1.2 核心目标

1. 全站 63 个组件**圆角标准化**
2. 替换为项目专属**品牌色彩体系**
3. 全局统一管理样式，一键修改全站生效
4. 兼容所有主流浏览器，无样式冲突

### 1.3 组件分类（全站 63 个）

| 分类     | 组件数量 | 组件列表                                                                                                                                               |
| ------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 通用组件   | 3    | Button、Icon、Typography                                                                                                                             |
| 布局组件   | 4    | Layout、Row、Col、Divider                                                                                                                             |
| 导航组件   | 7    | Menu、Tabs、Breadcrumb、Dropdown、Pagination、Steps、Anchor                                                                                              |
| 数据录入组件 | 17   | Input、InputNumber、Select、Cascader、AutoComplete、DatePicker、TimePicker、Upload、Radio、Checkbox、Switch、Slider、Rate、ColorPicker、Transfer、Form、TreeSelect |
| 数据展示组件 | 19   | Table、List、Card、Tag、Tooltip、Popover、Collapse、Timeline、Tree、Carousel、Avatar、Badge、Calendar、Descriptions、Empty、Result、Statistic、Image、Watermark      |
| 反馈组件   | 10   | Alert、Message、Notification、Modal、Drawer、Popconfirm、Spin、Skeleton、Progress、Loading                                                                  |
| 其他组件   | 3    | Affix、BackTop、InfiniteScroll                                                                                                                       |

***

## 二、视觉规范

### 2.1 圆角规范

| 尺寸        | 圆角值 | CSS 变量        |
| --------- | --- | ------------- |
| 小（small）  | 4px | `--radius-sm` |
| 中（medium） | 6px | `--radius-md` |
| 大（large）  | 8px | `--radius-lg` |

### 2.2 自定义色彩规范（项目专属）

#### 主色系列

```
\--p1: #D9F4EE; --p2: #B9F7E2; --p3: #71EDC2; --p4: #4AD3A4; --p5: #1db887;

\--p6: #00ab7a; /\* 主色 \*/ --p7: #039972; --p8: #008563; --p9: #006853; --p10: #013C32;
```

#### 功能色 / 语义色

```
/\* 错误/失败 \*/ --s-red-1: #FFE8E6; --s-red-2: #FFBEB8; --s-red-6: #F0131E; --s-red-7: #C90616;

/\* 警告 \*/ --s-orange-1: #FFF8E6; --s-orange-4: #FFC054; --s-orange-6: #F58A02; --s-orange-7: #CF6E00;

/\* 成功 \*/ --s-green-1: #EFF8EE; --s-green-3: #BCE0B4; --s-green-6: #52C41A; --s-green-7: #389E0D;

/\* 提醒/信息 \*/ --blue-1: #E6F7FF; --blue-3: #91D5FF; --blue-6: #1890FF; --blue-7: #096DD9;
```

#### 中性色 / 文本色

```
\--gray-1: #ffffff; --gray-2: #F8F9FA; --gray-3: #F2F3F5; --gray-4: #E8EAED;

\--gray-5: #DFE1E6; --gray-6: #AEB2B8; --gray-7: #8A9099; --gray-8: #525966;

\--gray-9: #242933; --gray-10: #000000;
```

***

## 三、实施步骤（3 步完成定制）

### 步骤 1：创建全局主题变量文件

创建文件：`src/assets/global-theme.css`

```
/\* ====================== 全局根变量：圆角 + 品牌色彩 + 基础样式 ====================== \*/

html,

:root {

&#x20; /\* 1. 圆角变量 \*/

&#x20; \--radius-sm: 4px;

&#x20; \--radius-md: 6px;

&#x20; \--radius-lg: 8px;

&#x20; /\* 2. 主色系列 \*/

&#x20; \--p1: #D9F4EE;

&#x20; \--p2: #B9F7E2;

&#x20; \--p3: #71EDC2;

&#x20; \--p4: #4AD3A4;

&#x20; \--p5: #1db887;

&#x20; \--p6: #00ab7a;

&#x20; \--p7: #039972;

&#x20; \--p8: #008563;

&#x20; \--p9: #006853;

&#x20; \--p10: #013C32;

&#x20; /\* 3. 功能色 \*/

&#x20; \--s-red-1: #FFE8E6;

&#x20; \--s-red-2: #FFBEB8;

&#x20; \--s-red-6: #F0131E;

&#x20; \--s-red-7: #C90616;

&#x20; \--s-orange-1: #FFF8E6;

&#x20; \--s-orange-4: #FFC054;

&#x20; \--s-orange-6: #F58A02;

&#x20; \--s-orange-7: #CF6E00;

&#x20; \--s-green-1: #EFF8EE;

&#x20; \--s-green-3: #BCE0B4;

&#x20; \--s-green-6: #52C41A;

&#x20; \--s-green-7: #389E0D;

&#x20; \--blue-1: #E6F7FF;

&#x20; \--blue-3: #91D5FF;

&#x20; \--blue-6: #1890FF;

&#x20; \--blue-7: #096DD9;

&#x20; /\* 4. 中性色 \*/

&#x20; \--gray-1: #ffffff;

&#x20; \--gray-2: #F8F9FA;

&#x20; \--gray-3: #F2F3F5;

&#x20; \--gray-4: #E8EAED;

&#x20; \--gray-5: #DFE1E6;

&#x20; \--gray-6: #AEB2B8;

&#x20; \--gray-7: #8A9099;

&#x20; \--gray-8: #525966;

&#x20; \--gray-9: #242933;

&#x20; \--gray-10: #000000;

&#x20; /\* 5. 主题派生变量（直接使用） \*/

&#x20; \--primary: var(--p6);

&#x20; \--primary-hover: var(--p5);

&#x20; \--primary-click: var(--p7);

&#x20; \--success: var(--s-green-6);

&#x20; \--warning: var(--s-orange-6);

&#x20; \--danger: var(--s-red-6);

&#x20; \--info: var(--blue-6);

&#x20; \--text-primary: var(--gray-9);

&#x20; \--text-secondary: var(--gray-7);

&#x20; \--text-disabled: var(--gray-5);

&#x20; \--border-color: var(--gray-4);

&#x20; \--bg-color: var(--gray-2);

&#x20; /\* 6. 基础样式变量 \*/

&#x20; \--border-width: 1px;

&#x20; \--border-style: solid;

&#x20; \--spacing-xs: 4px;

&#x20; \--spacing-sm: 8px;

&#x20; \--spacing-md: 16px;

&#x20; \--spacing-lg: 24px;

&#x20; \--shadow-sm: 0 2px 8px rgba(0,0,0,0.08);

&#x20; \--shadow-md: 0 4px 16px rgba(0,0,0,0.12);

&#x20; \--transition: all 0.3s ease;

&#x20; \--font-size: 14px;

}

/\* 全局样式重置：跨浏览器统一 \*/

\* {

&#x20; box-sizing: border-box;

&#x20; margin: 0;

&#x20; padding: 0;

}

button,input,select,textarea {

&#x20; -webkit-appearance: none;

&#x20; -moz-appearance: none;

&#x20; appearance: none;

&#x20; outline: none;

}
```

### 步骤 2：创建全站组件样式覆盖文件

创建文件：`src/assets/antd-override.css`

```
/\* ====================== 全站63个组件样式全覆盖 ====================== \*/

/\* 1.通用组件 \*/

.ant-btn-small{border-radius:var(--radius-sm,4px)!important;transition:var(--transition)!important}

.ant-btn-middle{border-radius:var(--radius-md,6px)!important;transition:var(--transition)!important}

.ant-btn-large{border-radius:var(--radius-lg,8px)!important;transition:var(--transition)!important}

.ant-btn-primary{background:var(--primary)!important;border-color:var(--primary)!important}

.ant-btn-primary:hover{background:var(--primary-hover)!important;border-color:var(--primary-hover)!important}

.ant-btn-primary:active{background:var(--primary-click)!important;border-color:var(--primary-click)!important}

.anticon{border-radius:var(--radius-sm,4px);color:var(--text-secondary);transition:var(--transition)}

.ant-typography{border-radius:var(--radius-sm,4px);color:var(--text-primary);padding:var(--spacing-xs)}

/\* 2.布局组件 \*/

.ant-layout,.ant-row,.ant-col,.ant-divider{border-radius:var(--radius-sm,4px);border-color:var(--border-color)!important;background:var(--bg-color);transition:var(--transition)}

/\* 3.导航组件 \*/

.ant-menu{border-radius:var(--radius-md,6px);background:var(--gray-1)}

.ant-menu-item-selected{background:var(--p1)!important;color:var(--primary)!important}

.ant-dropdown-menu{border-radius:var(--radius-md,6px)!important;box-shadow:var(--shadow-md)!important}

.ant-pagination-item-active{background:var(--primary)!important;border-color:var(--primary)!important}

.ant-steps-item-icon{background:var(--primary)!important}

/\* 4.数据录入组件 \*/

.ant-input,.ant-input-number{border-radius:var(--radius-md,6px)!important;border-color:var(--border-color)!important}

.ant-input:focus{border-color:var(--primary)!important;box-shadow:0 0 0 2px var(--p1)!important}

.ant-select-selector{border-color:var(--border-color)!important}

.ant-radio-checked .ant-radio-inner,.ant-checkbox-checked .ant-checkbox-inner{background:var(--primary)!important;border-color:var(--primary)!important}

.ant-switch-checked{background:var(--primary)!important}

/\* 5.数据展示组件 \*/

.ant-card{border-radius:var(--radius-md,6px)!important;border-color:var(--border-color)!important}

.ant-tag{border-radius:var(--radius-md,6px)!important;background:var(--p1)!important;color:var(--primary)!important}

.ant-avatar{border-radius:var(--radius-lg,8px)!important;background:var(--primary)!important}

/\* 6.反馈组件 \*/

.ant-alert{border-radius:var(--radius-md,6px)!important}

.ant-modal-content,.ant-drawer-content{border-radius:var(--radius-lg,8px)!important}

/\* 7.其他组件 \*/

.ant-affix,.ant-back-top{border-radius:var(--radius-sm,4px);background:var(--primary)!important}
```

### 步骤 3：项目入口引入配置

修改文件：`src/main.js` / `src/main.ts`

```
import { createApp } from 'vue'

import App from './App.vue'

// 引入Ant Design Vue官方组件库

import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/reset.css'

// 引入自定义全局样式（核心）

import './assets/global-theme.css'

import './assets/antd-override.css'

const app = createApp(App)

app.use(Antd)

app.mount('#app')
```

***

## 四、使用示例

无需修改组件代码，直接使用 Ant Design Vue 原生语法，自动应用定制样式：

```
\<template>

&#x20; \<div style="padding: 20px">

&#x20;   \<!-- 按钮：自动应用圆角+品牌色 -->

&#x20;   \<a-button size="small" type="primary">小按钮\</a-button>

&#x20;   \<a-button size="middle" type="success">中按钮\</a-button>

&#x20;   \<a-button size="large" type="danger">大按钮\</a-button>

&#x20;   \<!-- 输入框+卡片：自动应用统一样式 -->

&#x20;   \<a-input style="width: 200px; margin: 0 10px" />

&#x20;   \<a-card title="卡片" style="width: 300px; margin-top: 20px">内容\</a-card>

&#x20; \</div>

\</template>
```

***

## 五、全局维护指南

### 5.1 修改全站圆角

仅需修改 `global-theme.css` 中的变量，全站同步生效：

```
\--radius-sm: 4px;

\--radius-md: 6px;

\--radius-lg: 8px;
```

### 5.2 修改品牌主色

仅需修改主色变量，无需改动组件：

```
\--primary: var(--p6);
```

### 5.3 新增 / 修改样式

直接在 `antd-override.css` 中追加样式，支持所有组件状态：

- 正常态
- hover 悬浮态
- focus 聚焦态
- active 点击态
- disabled 禁用态

***

## 六、跨浏览器兼容方案

1. **CSS 变量兜底**：`var(--radius-sm, 4px)` 不支持变量的浏览器自动使用像素值
2. **浏览器前缀**：自动兼容 Chrome/Firefox/Safari/Edge/ 国产浏览器
3. **样式重置**：清除浏览器默认样式，杜绝渲染差异
4. **深度选择器**：完美覆盖第三方组件样式

***

## 七、常见问题

### 7.1 会影响组件功能吗？

不会。仅修改样式，**100% 保留 Ant Design Vue 原生交互、逻辑、事件**。

### 7.2 样式不生效怎么办？

1. 确认两个 CSS 文件已正确引入
2. 样式文件需放在 Ant Design Vue 官方样式之后
3. 优先级使用 `!important` 保证覆盖

### 7.3 支持自定义扩展吗？

支持。可在变量中新增颜色、间距、阴影等，无缝扩展全站样式。

