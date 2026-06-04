# 后台设计规范

这是面向 B 端后台产品的 HTML Demo 设计规范包，用于生成、检查和统一高保真、可点击、单文件 HTML Demo。

## 使用方式

生成或检查页面时，先读取根目录入口：

```text
SKILL.md
INDEX.md
```

核心约束：

- 固定继承 `Basic UI component style/single-nav-green-template.html`。
- 色彩与 Token 以 `Basic UI component style/Green Theme-Global Style.css` 为准。
- 布局与尺寸遵循 `Basic UI component style/layout.md`。
- 按页面类型读取 `Interaction Construction Specifications/`。
- 按实际组件读取 `Basic UI component style/component-styles/`，生成后必须回检。
- 普通图标只能来自 iconfont：`Basic UI component style/component-styles/icon.md` 与 `assets/iconfont/font_5177816_5ilr2y8ewpn.css`。
- 数据指标卡 3D 图标只能来自 `assets/3Dicon/`，选图先查 `assets/3Dicon/INDEX.md`，并遵循 `Basic UI component style/component-styles/data-metric-card.md`。

## 目录结构

```text
./
├── SKILL.md
├── INDEX.md
├── README.md
├── AGENT.md
├── check-repo-sync.sh
├── preview.html
├── Basic UI component style/
│   ├── single-nav-green-template.html
│   ├── Green Theme-Global Style.css
│   ├── layout.md
│   ├── color.md
│   ├── shadow.md
│   ├── tokens.md
│   ├── typography.md
│   ├── Green Dark Theme-Global Style.css
│   └── component-styles/
├── Interaction Construction Specifications/
└── assets/
    ├── iconfont/
    └── 3Dicon/
        └── INDEX.md
```

本规范包只保留一套主规范路径。静态资源仅包含正式 iconfont 与数据指标卡专用 `3Dicon` 素材库。
