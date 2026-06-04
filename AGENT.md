# AGENT.md

## 1. 文档定位

这是当前设计规范包的维护 SOP。它约束维护者：

- 先读什么。
- 以什么为真相来源。
- 如何检查规则没有被写乱。

本目录是“规则库 + 母版资产 + 组件规范 + 交互规范”，不是业务应用项目。

## 2. 真相来源

当多个文件表达不一致时，按下面顺序判断：

1. `SKILL.md`：执行目标、读取流程、交付物和禁止项。
2. `Basic UI component style/single-nav-green-template.html`：固定框架、运行结构、内置组件 class 和框架交互。
3. `Basic UI component style/Green Theme-Global Style.css`：颜色、Token、字体与动效变量。
4. `Interaction Construction Specifications/*.md`：页面类型交互逻辑。
5. `Basic UI component style/layout.md`：布局、栅格、响应式和滚动规则。
6. `Basic UI component style/component-styles/*`：具体组件尺寸、状态和 HTML Demo 结构。
7. `assets/iconfont/` 与 `assets/3Dicon/`：正式静态资源。
8. `INDEX.md`：路径索引和最小读取映射。

本规范包只保留一套主规范路径；`assets/3Dicon/` 只能按数据指标卡规范使用。

## 3. 修改原则

- 修改 AI 执行规则时，优先改 `SKILL.md`。
- 修改读取路径时，优先改 `INDEX.md`。
- 修改母版时，检查 `Basic UI component style/single-nav-green-template.html` 和 `preview.html`。
- 修改绿色主题 Token 时，检查 `Basic UI component style/Green Theme-Global Style.css`。
- 修改交互规范时，只改 `Interaction Construction Specifications/`。
- 修改组件规范时，只改 `Basic UI component style/component-styles/`。
- 修改 iconfont 资源时，检查 `assets/iconfont/` 和 `Basic UI component style/component-styles/icon.md`。
- 修改 3Dicon 资源或数据指标卡规则时，检查 `assets/3Dicon/`、`assets/3Dicon/INDEX.md` 和 `Basic UI component style/component-styles/data-metric-card.md`。
- 不新增第二套规则入口，不重新引入镜像目录，不让旧蓝色主题或工程代码规则成为默认入口。

## 4. HTML Demo 维护底线

HTML Demo 规则必须始终保持：

- 固定母版：`Basic UI component style/single-nav-green-template.html`。
- 颜色规范：`Basic UI component style/Green Theme-Global Style.css`。
- 布局规范：`Basic UI component style/layout.md`。
- 交互规范：`Interaction Construction Specifications/`。
- 组件规范：`Basic UI component style/component-styles/`。
- 图标规范：普通图标默认且只能读取 `Basic UI component style/component-styles/icon.md` 与 `assets/iconfont/font_5177816_5ilr2y8ewpn.css`，统一版本为 `//at.alicdn.com/t/c/font_5177816_5ilr2y8ewpn.css`；数据指标卡 3D 图标读取 `Basic UI component style/component-styles/data-metric-card.md`、`assets/3Dicon/INDEX.md` 与 `assets/3Dicon/`。
- 输出形式：高保真、可点击、单文件 HTML Demo。

React / Vue / Tailwind / shadcn 工程输出不是本规范默认目标。

## 5. 自检

维护后至少检查：

```text
./check-repo-sync.sh
```

若命中来自历史入口或已不存在资产路径，需要改正。
