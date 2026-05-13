# 字体规范
## Typography

Keywords: typography, font, type scale, line height, backend

本文定义后台页面的字体家族、字号、行高、字重和层级规则。

## 1. 字体家族

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
```

## 2. 字阶与行高

| 类型 | 字号 | 行高 | 字重 | 使用场景 |
|---|---:|---:|---:|---|
| 页面标题 | 28px | 36px | 600 / 700 | 页面主标题 |
| 模块标题 | 18px | 26px | 600 | 卡片标题、分区标题 |
| 导航 / 大按钮 | 16px | 28px | 400 / 500 | 顶部导航、重要按钮 |
| 正文 | 14px | 22px | 400 | 表格、表单、普通文本 |
| 辅助文本 | 12px | 20px | 400 | 提示、说明、标签、元信息 |
| 高密度表格文本 | 12px | 20px | 400 | 高密度列表页表格 |

## 3. 使用规则

同一页面不要混用过多字号。标题清楚但不夸张。表格和表单默认 14px，超高密度表格可用 12px。错误提示必须说明原因和修正方式。