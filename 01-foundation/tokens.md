# Token 规范
## Tokens

Keywords: tokens, css variables, color token, spacing token, backend

本文定义基础样式变量，方便 AI 生成统一的设计稿、HTML 预览文件和 Vue 页面代码。

## 1. 推荐 CSS 变量

```css
:root {
  --bds-primary: #00AB7A;
  --bds-primary-hover: #1DB887;
  --bds-primary-active: #039972;
  --bds-bg-page: #F8F9FA;
  --bds-bg-card: #FFFFFF;
  --bds-bg-hover: #F2F3F5;
  --bds-border: #E8EAED;
  --bds-border-strong: #DFE1E6;
  --bds-text-primary: #242933;
  --bds-text-body: #525966;
  --bds-text-secondary: #8A9099;
  --bds-text-disabled: #AEB2B8;
  --bds-success: #52C41A;
  --bds-warning: #F58A02;
  --bds-error: #F0131E;
  --bds-info: #1890FF;
  --bds-radius-card: 8px;
  --bds-radius-control: 6px;
  --bds-space-1: 4px;
  --bds-space-2: 8px;
  --bds-space-3: 12px;
  --bds-space-4: 16px;
  --bds-space-6: 24px;
}
```

## 2. 使用规则

重复出现的颜色、间距、圆角优先使用 Token。Vue 代码和 HTML 预览文件中不要散乱硬编码颜色和间距。