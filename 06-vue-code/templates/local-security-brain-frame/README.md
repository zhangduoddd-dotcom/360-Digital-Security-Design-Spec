# 本脑框架 HTML 母版调用规则

本目录存放“本地安全大脑 / 本脑”类产品的固定 HTML 母版。

核心原则：本脑框架不是可重新推导的文字规范，而是必须原样套用的 HTML 母版。

## 0. 调用条件

只有当用户明确提出以下需求时，AI 才能调用本模板：

```text
基于本地安全大脑框架设计页面
基于本脑框架设计页面
本地安全大脑产品页面
本脑产品页面
使用本脑框架
使用双层顶部导航 + 184px 左侧窄版菜单 + 页签式页头
```

未明确指定本脑时，不默认使用本模板。基于本套 GitHub 的默认页面应使用：

```text
06-vue-code/templates/terminal-security-frame/index.html
```

## 1. 唯一结构来源

```text
index.html
```

`index.html` 是本脑框架的唯一母版来源。AI 生成页面时不得根据 README、INDEX 或其他文字规范重新推导框架结构。

如果 `index.html` 与文字说明存在差异，以 `index.html` 为准。

## 2. 必须原样保留

```text
68px 双层顶部导航
顶部状态信息区
顶部一级导航与下拉交互
184px 左侧窄版菜单
左侧菜单展开 / 收起交互
页签式内容页头
右侧内容容器结构
页面最小宽度与自适应规则
字体渲染规则
所有框架内置 hover / active / disabled / open 状态
```

## 3. 允许替换

```text
Logo 图片或 Logo 文案
顶部导航业务文案和路由
顶部状态数据
组织 / 用户等业务文案
左侧菜单业务文案和路由
页签文案和页签数据
.platform-page-content 内部业务内容
mock 数据
iconfont 映射
```

## 4. 禁止替换

```text
顶部导航高度、结构、颜色和交互
顶部右侧信息区结构
左侧导航宽度、颜色、状态和展开收起交互
收起态菜单交互
页签头结构和位置
内容容器布局方式
页面最小宽度
字体渲染规则
框架 CSS 类名和 JS 交互逻辑
```

## 5. AI 使用方式

```text
1. 读取 index.html
2. 完整复制 index.html 作为页面底座
3. 只在允许替换区域填充业务内容
4. 保留所有框架结构、样式、脚本和交互
5. 输出可直接打开预览的 HTML
```

## 6. 与主线默认框架的关系

```text
默认基于本套 GitHub 生成页面：使用 06-vue-code/templates/terminal-security-frame/index.html
明确单层导航场景：使用 06-vue-code/templates/terminal-security-frame/index.html
明确双层导航场景：使用 06-vue-code/templates/double-top-navigation-frame/source.html
明确本脑场景：使用 06-vue-code/templates/local-security-brain-frame/index.html
```

本模板是特定产品 HTML 母版，不替代默认单层导航框架。