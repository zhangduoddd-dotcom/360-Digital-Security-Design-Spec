# 本地安全大脑框架模板
## Local Security Brain Frame Template

本目录是“本地安全大脑 / 本脑”类产品专用的固定框架模板。它适用于一级导航较多、顶部需要承载订阅状态 / 组织 / 用户 / 通知 / 设置等信息的业务产品。

该模板不是通用平台框架的替代品，而是平台框架的特定产品变体。

## 0. 调用条件

只有当用户明确提出以下需求时，AI 才能调用本模板：

```text
基于本地安全大脑框架设计页面
基于本脑框架设计页面
本地安全大脑产品页面
本脑产品页面
使用双层顶部导航 + 184px 左侧窄版菜单 + 页签式页头
```

其他后台页面默认仍然调用：

```text
06-vue-code/templates/platform-frame/
03-interaction/platform-frame.md
```

禁止在用户未明确指定“本地安全大脑 / 本脑”时，默认使用本模板。

## 1. 适用场景

```text
本地安全大脑
本脑类安全产品
一级导航较多的安全运营类产品
需要双层顶部导航的业务产品
需要页签式内容页头的业务产品
```

## 2. 文件结构

```text
local-security-brain-frame/
├── index.html                         # 可直接打开预览的本脑框架 HTML
├── local-security-brain-frame.css     # 固定框架样式，业务禁止修改
├── local-security-brain-frame-data.js # 唯一允许改的框架数据入口
├── local-security-brain-frame.js      # 固定框架交互，业务禁止修改
└── README.md
```

## 3. 固定结构

```text
本脑固定框架
├── 68px 双层顶部导航
│   ├── Logo 区
│   ├── 顶部状态信息区
│   └── 一级导航区
├── 页面主体
│   ├── 184px 左侧窄版菜单
│   └── 右侧内容区
│       ├── 40px 页签式页头
│       └── 内容容器
```

## 4. 核心固定规则

| 区域 | 固定规则 |
|---|---|
| 顶部导航 | 68px 双层导航，不允许改成通用 56px 顶部导航 |
| 左侧导航 | 展开态固定 184px，不使用通用 216px 宽度 |
| 内容页头 | 使用 40px 页签式页头，不使用普通返回页头 |
| 内容容器 | 横向、纵向填满页面；白底、边框、圆角；无阴影 |
| 左侧菜单选中 | 仅叶子节点可选中；父级只负责展开 / 收起 |
| 顶部导航下拉 | 悬停 / 点击时按导航项实时定位，不能错位 |

## 5. 允许替换

```text
Logo 图片
顶部导航文案和路由
顶部状态文案
组织 / 用户文案
左侧菜单业务文案和路由
页签文案
内容区业务内容
mock 数据
iconfont 映射
```

## 6. 禁止替换

```text
68px 双层顶部导航结构
184px 左侧菜单宽度
40px 页签式页头结构
左侧菜单状态规则
顶部导航下拉定位逻辑
内容容器填满页面规则
内容容器无阴影规则
```

## 7. Icon 说明

当前模板先使用内置 SVG / CSS 图形作为稳定占位，避免预览时图标缺失。

后续当 iconfont 项目提供完整 `icon class / unicode` 映射后，应在 `local-security-brain-frame-data.js` 中补充语义映射，不要在页面里临时替换 icon。

建议未来映射方式：

```js
icons: {
  globalMenu: 'icon-quanju-caidan',
  organization: 'icon-zuzhi',
  user: 'icon-yonghu',
  notice: 'icon-tongzhi',
  setting: 'icon-shezhi',
  sidebarSmartSearch: 'icon-zhinengjiansuo',
  sidebarThreatGraph: 'icon-wei胁tupu'
}
```

## 8. AI 使用要求

生成本脑类页面时，必须直接复制本模板，然后只替换：

```text
local-security-brain-frame-data.js
.platform-page-content 内部业务内容
```

不要重新按规范拼装框架，避免顶部导航、左侧菜单、页签头和内容容器出现偏差。

生成非本脑类页面时，必须继续使用主线通用框架：

```text
06-vue-code/templates/platform-frame/
03-interaction/platform-frame.md
```
