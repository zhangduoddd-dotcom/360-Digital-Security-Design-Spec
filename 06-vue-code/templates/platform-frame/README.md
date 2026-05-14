# 平台固定框架代码模板
## Locked Platform Frame Template

本目录是所有后台页面生成时必须复用的底层框架代码模板。它不是参考示例，而是可直接复制的固定框架预制件。

## 文件结构

```text
platform-frame/
├── index.html                # 可直接打开预览的固定框架 HTML
├── platform-frame.css        # 固定框架样式，业务禁止修改
├── platform-frame-data.js    # 唯一允许改的框架数据入口
├── platform-frame.js         # 固定框架交互，业务禁止修改
└── asset/icons/              # 固定框架使用的 SVG icon
```

## 使用方式

生成任何 HTML demo 时，必须以 `index.html` 为底板。

只允许修改：

```text
1. platform-frame-data.js 中的 Logo、顶部导航、左侧菜单、路由、默认选中项
2. index.html 中 .platform-page-content 内的业务内容
3. asset/icons/svg_21e691e3.svg，可替换为真实 Logo，占位尺寸不变
```

禁止修改：

```text
platform-frame.css
platform-frame.js
顶部导航结构、尺寸、颜色、交互
左侧菜单结构、尺寸、颜色、展开 / 收起、收起态级联菜单
可返回页头结构
页面内容区 padding 和背景
框架 icon 状态规则
```

## 固定框架边界

```text
TopNavigation：固定
Sidebar：固定
ReturnHeader：固定
PageContent：可替换业务内容
```

业务只能进入 `.platform-page-content`。

## 对应规范

必须同时遵循：

```text
03-interaction/platform-frame.md
06-vue-code/preview-html.md
02-components/icon.md
01-foundation/color.md
```

## AI 使用提醒

后续生成列表页、表单页、详情页、工作台、异常页、AI 原生页面时，不要重新生成框架。先复制本模板，再替换业务内容区。