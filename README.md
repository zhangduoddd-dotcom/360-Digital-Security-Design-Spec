# 后台设计规范
## Backend Design Standards

这是面向 B 端后台产品的设计规范仓库，用于帮助设计师、产品和 AI Agent 生成、检查和统一后台高保真 HTML Demo。

本仓库当前目标：

```text
生成符合设计规范、组件规范和交互规范的高保真、可点击、单文件 HTML 页面。
```

不维护 Vue / React / Tailwind / 前端工程代码生成规范。

## 使用方式

AI 生成或检查页面时，从根目录读取：

```text
SKILL.md
INDEX.md
```

其中：

- `SKILL.md` 是 AI 唯一执行约束，负责生成目标、母版边界、组件来源、执行流程、验收规则和禁止项。
- `INDEX.md` 是路径索引，负责页面类型到母版和组件库资产的最小读取路径。

## 目录结构

```text
Backend-Design-Standards/
├── README.md                                  # 给人看的简介
├── SKILL.md                                   # AI 唯一执行约束
├── INDEX.md                                   # AI 路径索引
├── Basic UI component style/                  # 全局样式、Token、组件 HTML / CSS 资产
└── Interaction Construction Specifications/   # 固定 HTML 母版和框架交互资产
```

## 核心资产

固定母版：

```text
Interaction Construction Specifications/common-single-nav.html
Interaction Construction Specifications/double-nav-frame.html
```

组件库资产：

```text
Basic UI component style/Green Theme-Global Style.css
Basic UI component style/Basic & Data Entry.html
Basic UI component style/Data Display.html
Basic UI component style/Feedback.html
Basic UI component style/Navigation.html
```

## 维护原则

- 约束只维护在 `SKILL.md`。
- 路径只维护在 `INDEX.md`。
- 母版 HTML、组件 HTML、组件 CSS 是资产，不作为第二套约束文档。
- 不新增新的约束文件夹，避免形成多个规则入口。

## License

MIT License
