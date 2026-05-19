# 框架 HTML 母版调用规则

本目录用于存放可直接复用的固定框架代码。

## 调用规则

| 用户描述 | 调用模板 |
|---|---|
| 默认后台页面 / 通用后台页面 / 未指定特定产品框架 | `platform-frame/` |
| 明确说“本地安全大脑 / 本脑 / 基于本脑框架” | `local-security-brain-frame/source.html` |
| 明确说“终端安全管理系统 / 终端 / 基于终端框架” | `terminal-security-frame/source.html` |
| 明确说“基于双层导航框架 / 双层顶部导航 / 双层导航页面” | `double-top-navigation-frame/source.html` |

## 默认框架

未指定特定产品框架时，继续使用：

```text
06-vue-code/templates/platform-frame/
03-interaction/platform-frame.md
```

## 产品框架使用方式

当用户明确说“基于本脑框架”“基于终端框架”或“基于双层导航框架”时：

```text
读取对应目录下的 source.html。
完整复制 source.html 作为页面底座。
只替换业务内容。
保留框架 DOM、CSS、JS。
```

如果 `source.html` 与 README、INDEX、preview-html.md 等文字说明存在差异，以 `source.html` 为准。

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