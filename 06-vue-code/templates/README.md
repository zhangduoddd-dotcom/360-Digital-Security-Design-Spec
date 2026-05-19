# 框架 HTML 母版调用规则

本目录用于存放可直接复用的固定框架代码。

## 调用规则

| 用户描述 | 调用模板 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | `terminal-security-frame/index.html` |
| 明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | `terminal-security-frame/index.html` |
| 明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | `double-top-navigation-frame/source.html` |
| 明确说“本地安全大脑 / 本脑 / 基于本脑框架” | `local-security-brain-frame/source.html` |
| 明确要求自定义导航框架 | 按用户指定方案处理 |

> 说明：当前 `terminal-security-frame/` 目录名保留不变，但调用语义已更新为“单层导航框架”。AI 不应再把该模板理解为终端业务专属框架。

## 默认框架

当用户明确说“基于本套 GitHub / 本仓库规范 / 本套设计规范”生成页面，且没有明确要求自定义导航框架，也没有明确要求基于双层导航框架时，必须默认使用：

```text
06-vue-code/templates/terminal-security-frame/index.html
```

使用方式：

```text
读取 index.html。
完整复制 index.html 作为页面底座。
只替换业务内容。
保留框架 DOM、CSS、JS。
```

## 单层导航框架调用规则

当用户明确提出以下任一描述时，必须调用：

```text
06-vue-code/templates/terminal-security-frame/index.html
```

触发描述包括：

```text
基于单层导航框架
基于单层顶部导航
单层导航页面
单层顶部导航页面
基于本套 GitHub 生成页面，且未指定双层导航框架
基于本仓库规范生成页面，且未指定双层导航框架
```

使用规则：

```text
1. 完整复制 terminal-security-frame/index.html 作为页面底座。
2. 不根据文字描述重新拼装单层导航。
3. 不沿用旧终端业务属性框架语义。
4. 只替换业务内容、导航文案、菜单数据、页面内容和 mock 数据。
5. 保留 index.html 中的 DOM、CSS、JS、iconfont、hover、active、open、展开收起和响应式交互。
```

## 双层导航框架调用规则

当用户明确提出以下任一描述时，必须调用：

```text
06-vue-code/templates/double-top-navigation-frame/source.html
```

触发描述包括：

```text
基于双层导航框架
基于双层顶部导航
双层导航页面
双层顶部导航页面
double-top-navigation-frame
```

使用规则：

```text
1. 完整复制 double-top-navigation-frame/source.html 作为页面底座。
2. 不根据文字描述重新拼装双层导航。
3. 不沿用旧双层导航框架。
4. 只替换业务内容、导航文案、菜单数据、页面内容和 mock 数据。
5. 保留 source.html 中的 DOM、CSS、JS、iconfont、hover、active、open、展开收起和响应式交互。
```

## 产品框架使用方式

当用户明确说“基于本脑框架”“基于单层导航框架”或“基于双层导航框架”时：

```text
读取对应目录下的 HTML 母版。
完整复制 HTML 母版作为页面底座。
只替换业务内容。
保留框架 DOM、CSS、JS。
```

如果 HTML 母版与 README、INDEX、preview-html.md 等文字说明存在差异，以 HTML 母版为准。

## 业务内容替换范围

```text
Logo / 产品文案
导航数据
页头标题与页头操作
.platform-page-content 内部业务内容
mock 数据
iconfont 映射
```

框架结构、布局尺寸、基础交互、展开收起规则、页头层级、内容区位置保持不变。