# Token 规范
## Tokens

Keywords: tokens, css variables, color token, spacing token, shadow token, frontend alias, font rendering, p6

本文定义基础样式变量，方便 AI 生成统一的设计稿、HTML 预览文件和 Vue 页面代码。设计文档可保留中文 Token，工程落地建议同时提供英文 alias。

## 1. 主色统一策略

主线包默认普通品牌主色统一为：

```text
p6 #00AB7A 科技绿
```

规则：

- 普通主按钮、链接型操作、选中态、focus ring、hover 强调都以 `p6` 为主。
- hover 使用 `p5 #1DB887`，active 使用 `p7 #039972`。
- 浅选中背景使用 `p1 #D9F4EE`。
- 蓝色不作为普通品牌主色，只保留为 `info` 信息语义色。
- 原有 AI 渐变 Token 保持不变；本次主色统一不改 AI 渐变。

## 2. 原始 CSS Token

```css
:root {
  --AI 悬停: linear-gradient(0deg, rgba(255,255,255,0.20), rgba(255,255,255,0.20)),linear-gradient(126deg, #1AFFAF 0%,#1093FF 37%,#004DFF 100%);
  --AI 按下: linear-gradient(0deg, rgba(0,0,0,0.20), rgba(0,0,0,0.20)),linear-gradient(309deg, #004DFF 0%,#1093FF 54%,#1AFFAF 100%);
  --AI 默认: linear-gradient(307deg, #004DFF 0%,#1093FF 65%,#1AFFAF 100%);

  --p1: #D9F4EE;
  --p2: #B9F7E2;
  --p3: #71EDC2;
  --p4: #4AD3A4;
  --p5: #1DB887;
  --p6: #00AB7A;
  --p7: #039972;
  --p8: #008563;
  --p9: #006853;
  --p10: #013C32;

  --gray-1: #FFFFFF;
  --gray-2: #F8F9FA;
  --gray-3: #F2F3F5;
  --gray-4: #E8EAED;
  --gray-5: #DFE1E6;
  --gray-6: #AEB2B8;
  --gray-7: #8A9099;
  --gray-8: #525966;
  --gray-9: #242933;
  --gray-10: #000000;

  --Green-1: #EFF8EE;
  --Green-3: #BCE0B4;
  --Green-6: #52C41A;
  --Green-7: #389E0D;

  --Orange-1: #FFF8E6;
  --Orange-4: #FFC054;
  --Orange-6: #F58A02;
  --Orange-7: #CF6E00;

  --Red-1: #FFE8E6;
  --Red-2: #FFBEB8;
  --Red-3: #FF948F;
  --Red-5: #FC3D40;
  --Red-6: #F0131E;
  --Red-7: #C90616;

  --Blue-1: #E6F7FF;
  --Blue-3: #91D5FF;
  --Blue-4: #69C0FF;
  --Blue-5: #40A9FF;
  --Blue-6: #1890FF;
  --Blue-7: #096DD9;
  --Blue-8: #0050B3;

  --Yellow-1: #FFFFE6;
  --Yellow-5: #EBD426;
  --Yellow-6: #DFBC00;
  --Yellow-7: #B89600;

  --Orange-red-1: #FFF3E6;
  --Orange-red-3: #FFBC85;
  --Orange-red-6: #F05A0A;
  --Orange-red-7: #C94000;

  --Deep-red-1: #FCE7E3;
  --Deep-red-2: #F0A399;
  --Deep-red-6: #BC0004;
  --Deep-red-7: #960008;

  --Default: 0px 0px 0px 2px #D9F4EE;
  --Error: 0px 0px 0px 2px #FFE8E6;
  --Success: 0px 0px 0px 2px #EFF8EE;
  --Warning: 0px 0px 0px 2px #FFF8E6;

  --shadow-level-1-up: 0px -4px 16px 0px rgba(36,41,51,0.05);
  --shadow-level-1-down: 0px 4px 16px 0px rgba(36,41,51,0.05);
  --shadow-level-1-right: 4px 0px 16px 0px rgba(36,41,51,0.05);
  --shadow-level-1-left: -4px 0px 16px 0px rgba(36,41,51,0.05);

  --shadow-level-2-up: 0px -8px 80px 0px rgba(36,41,51,0.08);
  --shadow-level-2-down: 0px 8px 80px 0px rgba(36,41,51,0.08);
  --shadow-level-2-right: 6px 0px 80px 0px rgba(36,41,51,0.08);
  --shadow-level-2-left: -8px 0px 80px 0px rgba(36,41,51,0.08);

  --shadow-default: 0px 3px 6px -4px rgba(0,0,0,0.12),0px 6px 16px 0px rgba(0,0,0,0.08),0px 9px 28px 8px rgba(0,0,0,0.04);
  --shadow-hover: 0px 1px 2px -2px rgba(0,0,0,0.16),0px 3px 6px 0px rgba(0,0,0,0.12),0px 5px 12px 4px rgba(0,0,0,0.08);
  --shadow-superbox-hover: 0px 4px 12px 0px rgba(183,179,255,0.50);

  --font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

## 3. 推荐英文 Alias

工程中建议通过英文 alias 调用，避免中文变量名和空格变量名在构建链中产生兼容问题。

```css
:root {
  /* Brand */
  --color-primary-bg: var(--p1);
  --color-primary-hover: var(--p5);
  --color-primary: var(--p6);
  --color-primary-active: var(--p7);
  --color-primary-text-active: var(--p8);

  /* AI: keep original gradient tokens */
  --color-ai-default: var(--AI 默认);
  --color-ai-hover: var(--AI 悬停);
  --color-ai-active: var(--AI 按下);

  /* Text */
  --color-text-title: var(--gray-9);
  --color-text-primary: var(--gray-8);
  --color-text-secondary: var(--gray-7);
  --color-text-disabled: var(--gray-6);
  --color-text-placeholder: var(--gray-6);

  /* Background and border */
  --color-bg-container: var(--gray-1);
  --color-bg-page: var(--gray-2);
  --color-bg-hover: var(--gray-3);
  --color-divider: var(--gray-4);
  --color-border: var(--gray-5);

  /* Font */
  --font-family-system: var(--font-family-base);

  /* Semantic */
  --color-success-bg: var(--Green-1);
  --color-success-border: var(--Green-3);
  --color-success: var(--Green-6);
  --color-success-active: var(--Green-7);

  --color-warning-bg: var(--Orange-1);
  --color-warning-border: var(--Orange-4);
  --color-warning: var(--Orange-6);
  --color-warning-active: var(--Orange-7);

  --color-error-bg: var(--Red-1);
  --color-error-border: var(--Red-2);
  --color-error: var(--Red-6);
  --color-error-active: var(--Red-7);

  --color-info-bg: var(--Blue-1);
  --color-info-border: var(--Blue-3);
  --color-info: var(--Blue-6);
  --color-info-active: var(--Blue-7);

  /* Focus ring */
  --focus-default: var(--Default);
  --focus-error: var(--Error);
  --focus-success: var(--Success);
  --focus-warning: var(--Warning);

  /* Shadow */
  --shadow-card: var(--shadow-level-1-down);
  --shadow-layer: var(--shadow-level-2-down);
  --shadow-card-hover: var(--shadow-hover);
  --shadow-ai-input-hover: var(--shadow-superbox-hover);
}
```

## 4. 字体渲染基础规则

前端基础样式必须关闭浏览器字体合成，并启用平滑抗锯齿。

```css
html,
body,
button,
input,
textarea,
select {
  font-family: var(--font-family-system);
  font-synthesis: none;
  font-synthesis-weight: none;
  font-synthesis-style: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

## 5. Token 命名与重复变量处理

| 情况 | 处理规则 |
|---|---|
| `Blue-*` | 仅作为 info 信息语义色，不作为普通品牌主色 |
| `gray-6/7/8/9` 重复出现，色值一致 | 保留第一次定义即可 |
| `P6` 与 `p6` 一致 | 前端交付统一使用小写 `p6` |
| `P7` 与 `p7` 一致 | 前端交付统一使用小写 `p7` |
| 中文变量名如 `AI 默认`、`投影-默认` | 设计文档保留中文名；代码落地建议增加英文 alias |

## 6. 前端落地注意事项

- 如果构建链对中文 CSS 变量名、空格变量名兼容性不好，应以英文 alias 为主，中文 Token 只保留在设计文档和 Figma Token 中。
- 重复 Token 不要重复声明。
- `P6/P7` 是 `p6/p7` 的别名，工程交付统一使用小写。
- 普通主按钮继续使用 `p6/p5/p7`。
- 不要将蓝色作为普通 primary button、链接、表格行操作或选中态主色。
- 原有 AI 渐变 Token 不参与本次普通主色替换。
- 旧项目如果曾使用蓝色作为普通主色，需要在主题层映射到 `p6 #00AB7A`。
- 工程基础样式必须继承字体渲染基础规则，不允许依赖浏览器伪粗体或伪斜体。

## 7. AI / Vue 生成要求

- Vue 代码和 HTML 预览文件中应优先使用 Token 或 alias，不要散乱硬编码颜色。
- AI 生图 Prompt 中可继续使用原有 AI 三态渐变描述。
- 普通 B 端主色描述统一使用“科技绿主色”。
- 代码生成时若需要输出 CSS，优先输出英文 alias。
- 设计验收和前端验收应检查 Token 是否被正确调用。
- HTML / Vue 代码必须包含字体渲染基础规则，不得省略 `font-synthesis` 和字体抗锯齿设置。
