# 框架 HTML 母版调用规则

本目录用于存放可直接复用的固定框架代码。

## 调用规则

| 用户描述 | 调用模板 |
|---|---|
| 基于本套 GitHub 生成页面 / 按本仓库规范生成页面 / 未明确指定导航框架 | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于单层导航框架 / 单层顶部导航 / 单层导航页面” | `06-vue-code/templates/common-single-nav.html` |
| 明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | `06-vue-code/templates/double-nav-frame.html` |
| 明确要求自定义导航框架 | 按用户指定方案处理 |


## 默认框架

当用户明确说“基于本套 GitHub / 本仓库规范 / 本套设计规范”生成页面，且没有明确要求自定义导航框架，也没有明确要求基于双层导航框架时，必须默认使用：

```text
06-vue-code/templates/common-single-nav.html
```

使用方式：

```text
读取 06-vue-code/templates/common-single-nav.html
完整复制 06-vue-code/templates/common-single-nav.html 作为页面底座。
只替换业务内容。
保留框架 DOM、CSS、JS。
```

## 单层导航框架调用规则

当用户明确提出以下任一描述时，必须调用：

```text
06-vue-code/templates/common-single-nav.html
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
1. 完整复制 06-vue-code/templates/common-single-nav.html 作为页面底座。
2. 不根据文字描述重新拼装单层导航。
3. 不沿用旧终端业务属性框架语义。
4. 只替换业务内容、导航文案、菜单数据、页面内容和 mock 数据。
5. 保留 index.html 中的 DOM、CSS、JS、iconfont、hover、active、open、展开收起和响应式交互。
```

## 双层导航框架调用规则

当用户明确提出以下任一描述时，必须调用：

```text
06-vue-code/templates/double-nav-frame.html
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
1. 完整复制 06-vue-code/templates/double-nav-frame.html 作为页面底座。
2. 不根据文字描述重新拼装双层导航。
3. 不沿用旧双层导航框架。
4. 只替换业务内容、导航文案、菜单数据、页面内容和 mock 数据。
5. 保留 06-vue-code/templates/double-nav-frame.html 中的 DOM、CSS、JS、iconfont、hover、active、open、展开收起和响应式交互。
```
