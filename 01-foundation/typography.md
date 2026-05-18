# 字体规范
## Typography

Keywords: typography, font, type scale, line height, font weight, figma, frontend, backend

本文定义后台页面的字体家族、字号、行高、字重和层级规则。AI 生成页面、HTML 预览和 Vue 代码时，必须使用统一字体体系，避免不同页面出现字阶混乱。

## 1. 字体家族

优先使用系统默认界面字体，保证跨平台可读性。

```css
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "Helvetica Neue",
  "PingFang SC",
  "Hiragino Sans GB",
  "Microsoft YaHei UI",
  "Microsoft YaHei",
  Arial,
  sans-serif;
```

使用规则：

- macOS 优先使用系统字体和 `PingFang SC`。
- Windows 优先使用 `Microsoft YaHei UI` 和 `Microsoft YaHei`。
- Web 工程中不要引入额外字体文件，除非品牌规范明确要求。
- 图表、表格、表单、弹窗、抽屉中的字体必须与页面正文保持一致。

## 2. 字阶与行高

| 类型 | 字号 | 行高 | 字重 | 使用场景 |
|---|---:|---:|---:|---|
| 超大标题 | 48px | 54px | 600 / 700 | 大屏标题、品牌主标题、少量视觉主标题 |
| 页面标题 | 28px | 36px | 600 / 700 | 页面主标题、重要报告标题 |
| 模块标题 | 18px | 26px | 600 | 卡片标题、分区标题、抽屉主标题 |
| 导航 / 大按钮 | 16px | 28px | 400 / 500 | 顶部导航、重要按钮、页签标题 |
| 正文 | 14px | 22px | 400 | 表格、表单、普通文本、说明正文 |
| 辅助文本 | 12px | 20px | 400 | 提示、说明、标签、元信息 |
| 高密度表格文本 | 12px | 20px | 400 | 高密度列表页表格、日志、审计记录 |

## 3. 字重规范

| 字重 | CSS 值 | 使用场景 |
|---|---:|---|
| Regular | 400 | 正文、说明、表单内容、表格内容 |
| Medium | 500 | 导航选中、按钮、重点字段、状态强调 |
| Bold | 600 / 700 | 页面标题、模块标题、关键数字、强强调信息 |

使用规则：

- 标题清楚但不夸张，不要用过多粗体制造噪音。
- 正文默认 400，只有需要强调的信息使用 500。
- Dashboard 核心数值可使用 600 / 700，但辅助文字仍使用 400。
- 表格高密度场景优先使用 12px / 20px，避免强行压缩行高。

## 4. 层级使用规则

- 同一页面不要混用过多字号，常规页面建议控制在 3–4 个字号内。
- 页面主标题使用 28px；如果平台框架较克制，也可在页面级规范中降为 18px / 20px，但同一系统必须统一。
- 模块标题、卡片标题使用 18px / 26px。
- 表格和表单默认 14px / 22px。
- 超高密度表格、日志、审计记录可使用 12px / 20px。
- 错误提示必须说明原因和修正方式，不要只写“错误”。
- 辅助文本不能低于可读对比度，不应因为弱化而不可读。

## 5. Figma 交付要求

| 交付项 | 要求 |
|---|---|
| Text Style | 按页面标题、模块标题、正文、辅助文本、高密度表格文本建立样式 |
| 命名方式 | 建议使用 `Typography/Page Title/28` 这类可读命名 |
| 字号使用 | 不直接手动输入散乱字号，优先使用 Text Style |
| 状态标注 | 关键页面需标注标题、正文、辅助文本的使用场景 |
| 表格文字 | 高密度表格需明确是否使用 12px |

## 6. 前端落地要求

- Vue / HTML 输出应统一设置基础 `font-family`。
- 不要在不同组件中散乱写不同字体族。
- 文本字号、行高、字重应优先抽象成 CSS 变量或样式类。
- 图表中的字体也应使用系统字体，不要使用浏览器默认 serif 字体。
- 表格、表单、按钮、标签、tooltip、弹窗等组件应保持字阶一致。

推荐基础变量：

```css
:root {
  --font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;

  --font-size-page-title: 28px;
  --line-height-page-title: 36px;
  --font-size-section-title: 18px;
  --line-height-section-title: 26px;
  --font-size-body: 14px;
  --line-height-body: 22px;
  --font-size-caption: 12px;
  --line-height-caption: 20px;
}
```

## 7. AI 生成要求

- AI 生图时，主要中文标题必须可读，不要生成过小、过密、扭曲的文字。
- Dashboard 核心数值可以大号展示，但辅助信息必须有层级。
- 列表页和表单页以可读性优先，不应为了视觉冲击使用过大标题。
- 生成 HTML / Vue 代码时，字号、行高、字重必须与本文件保持一致。
