# iconfont

本目录保存本地全量 iconfont CSS。

使用规则：

- 默认优先使用母版 `single-nav-green-template.html` 已内置的 iconfont。
- 当页面需要母版未内置的图标 class 时，读取 `font_5177816_5ilr2y8ewpn.css`。
- 单文件 HTML Demo 中只并入实际用到的 `@font-face` 与 `.icon-*` 片段，避免复制整份无关 CSS。
- 图标语义、尺寸、颜色和禁用规则以 `Basic UI component style/component-styles/icon.md` 为准。
