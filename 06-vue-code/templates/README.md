# 框架模板调用规则
## Frame Template Routing Rules

本目录用于存放可直接复用的固定框架代码。AI 生成页面时，应优先直接复制对应模板代码，再替换业务内容，避免重复按规范重新拼装框架导致样式和交互偏差。

## 1. 默认调用规则

| 用户描述 | 调用模板 |
|---|---|
| 默认后台页面 / 通用后台页面 / 未指定特定产品框架 | [`platform-frame/`](./platform-frame/) |
| 明确说“本地安全大脑 / 本脑 / 基于本脑框架” | [`local-security-brain-frame/`](./local-security-brain-frame/) |
| 明确说“终端安全管理系统 / 终端 / 基于终端框架” | [`terminal-security-frame/`](./terminal-security-frame/) |

## 2. 主线默认框架

未指定特定产品框架时，必须继续使用：

```text
06-vue-code/templates/platform-frame/
03-interaction/platform-frame.md
```

不要默认使用本脑框架或终端框架。

## 3. 本脑框架调用条件

只有用户明确说：

```text
本地安全大脑
本脑
基于本脑框架
使用双层顶部导航
```

才调用：

```text
06-vue-code/templates/local-security-brain-frame/
```

## 4. 终端框架调用条件

只有用户明确说：

```text
终端安全管理系统
终端
基于终端框架
使用本级中心 / 区域中心切换
```

才调用：

```text
06-vue-code/templates/terminal-security-frame/
```

## 5. 业务内容替换规则

无论调用哪个模板，固定框架部分都不允许重新设计或重写。AI 只能替换：

```text
Logo / 产品文案
导航数据
页头标题与页头操作
.platform-page-content 内部业务内容
mock 数据
iconfont 映射
```

框架结构、布局尺寸、基础交互、展开收起规则、页头层级、内容区位置不允许改动。
