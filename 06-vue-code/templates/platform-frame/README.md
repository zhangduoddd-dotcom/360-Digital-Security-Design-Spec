# 平台固定框架代码模板

本目录是平台固定底层框架的可复用代码模板。

生成任何 HTML demo 时，应以本目录中的 `index.html` 为底板，只替换业务内容区和业务数据。

## 文件说明

```text
index.html              固定框架 HTML 结构
platform-frame.css      固定框架样式
platform-frame.js       固定框架交互与示例数据
asset/icons/            固定框架所需 SVG icon
```

## 使用规则

- 业务内容只写入 `.platform-page-content`。
- 业务可替换顶部导航文案、左侧菜单文案、页面标题和 mock 数据。
- 框架结构、尺寸、颜色、icon 状态、收起态级联菜单和可返回页头保持不变。

关联规范：`03-interaction/platform-frame.md`。