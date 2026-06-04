# 数据指标卡 Data Metric Card 规范
## Data Metric Card Rules

Keywords: data metric card, KPI, overview metric, 3Dicon, list page overview, dashboard metric

本文定义后台页面中数据指标卡的视觉、交互、素材来源和 HTML Demo 验收规则。AI 生成列表页、概览页、Dashboard 或工作台时，只要出现“关键统计数据 + 3D 图标”的组合，必须读取本文。

## 1. 使用范围

数据指标卡用于页面内关键统计数据展示，常见于列表页顶部概览、风险概览、Dashboard 指标区和工作台摘要区。

3Dicon 仅允许在数据指标卡中使用，不用于：

- 顶部导航、左侧菜单、按钮、表格行操作、表头筛选、分页、Tag、Alert、Toast。
- 普通功能入口卡、信息卡、空状态、弹窗标题、抽屉标题。
- 纯装饰插画、营销式入口、AI 生成配图。

若页面只是菜单图标、按钮图标、状态图标或表格操作图标，必须继续使用 `icon.md` 和 `assets/iconfont/`，不得使用 3Dicon。

## 2. 固定素材来源

数据指标卡中的 3D 图标仅允许使用本规范包提供的正式素材库：

```text
assets/3Dicon/
```

硬约束：

- 只能选择 `assets/3Dicon/` 中已经存在的图片。
- 不允许自行绘制、拼接、生成、改色、重绘、裁切成新图标或替换为其他来源素材。
- 不允许用 iconfont、SVG、自制插画、emoji、AI 生成图标替代数据指标卡的 3Dicon。
- 当库内没有完全匹配语义的图标时，选择库内最接近的图标，或反馈设计确认；不得临时创造新图标。
- HTML Demo 可按相对路径引用，例如 `assets/3Dicon/风险资产.png`；单文件交付场景如需内嵌图片，应先确认交付方式，不得改造素材本身。

## 3. 结构

单张指标卡由以下两部分组成：

```text
3D 图标 + 文案组合
          ├─ 指标标题
          └─ 指标数值
```

结构规则：

- 图标在左，文案组合在右。
- 图标和文案组合水平排列。
- 文案组合上下排列，上方为指标标题，下方为指标数值。
- 多个指标卡必须放在同一个指标卡容器中。
- 指标卡内不放趋势图、说明长文、按钮组、Tag 堆叠、图例或二级说明。
- 只有纯数值指标卡可以不额外增加图表标题，但每张卡内的指标标题必须清晰可见。

## 4. 尺寸与间距

| 项目 | 规则 |
|---|---|
| 卡片内边距 | 上下左右 `20px` |
| 卡片圆角 | `6px` |
| 卡片背景 | `Gray 中性 / gray-2` |
| 3D 图标尺寸 | `40px × 40px` |
| 图标与文案组合横向间距 | `16px` |
| 指标标题字号 | `12px` |
| 指标数值字号 | `24px` |
| 指标数值字重 | `Medium`（CSS 可落为 `font-weight: 500`） |

容器规则：

- 多张指标卡在同一个容器内自适应等宽排列。
- 标准列表页 / 风险概览中建议一行展示 4 个指标卡。
- 宽度不足时优先遵守页面最小内容宽度和横向滚动规则，不得压缩到标题或数值不可读。
- 如指标数量超过 4 个，优先换行或拆分分组；不要把 5 个以上指标硬塞进一行。

## 5. 文字与颜色

| 元素 | 字号 | 字重 | 默认颜色 |
|---|---|---|---|
| 指标标题 | `12px` | Regular | `Gray 中性 / gray-8` |
| 指标数值 | `24px` | Medium | `Gray 中性 / gray-9` |

颜色规则：

- 无语义数据默认使用 `Gray 中性 / gray-9`。
- 无语义但可跳转的数据，hover 时数值颜色使用 `Brand 品牌 / p5`。
- 有明确语义的数据，默认使用对应语义色的 `7` 号色。
- 有明确语义且可跳转的数据，hover 时数值颜色使用对应语义色的 `5` 号色。
- 如果该语义色没有 `5` 号色，则 hover 使用对应语义色的 `6` 号色。
- 标题颜色不随 hover 改变。
- 3D 图标不随 hover 改色、缩放或替换。

## 6. 交互

- 只有数据可跳转时，整张卡片可点击。
- 可跳转卡片可使用 `<a>` 或具备等价可访问语义的交互元素。
- hover 仅改变指标数值颜色，不改变卡片背景、标题颜色或图标表现。
- 不可跳转数据不显示手型指针，hover 不改变数值颜色。
- 可跳转卡片必须提供明确 `aria-label` 或可被读屏识别的完整文本。
- 3D 图标通常为装饰性图片，`alt` 可置空并设置 `aria-hidden="true"`；不要让读屏重复朗读图标文件名。

## 7. 与列表页布局的关系

数据指标卡属于概览信息，不是表格主工作区。

- 列表页中，数据指标卡通常出现在搜索区下方、工具栏上方。
- 搜索区、指标卡区、工具栏和分页应保持相对固定。
- 表格主体内容区承担主要纵向滚动。
- 指标卡不得为了填满页面高度而被拉高。
- 指标卡不得挤压表格主体到不可扫读状态。

具体容器组合和滚动规则继续遵循 `Interaction Construction Specifications/list-page.md` 和 `Interaction Construction Specifications/page-container.md`。

## 8. HTML Demo 参考结构

```html
<div class="metric-card-grid" aria-label="数据指标">
  <a class="metric-card metric-card--semantic" href="#table" aria-label="查看风险资产">
    <img class="metric-card__icon" src="assets/3Dicon/风险资产.png" alt="" aria-hidden="true" />
    <span class="metric-card__content">
      <span class="metric-card__label">风险资产</span>
      <span class="metric-card__value">128</span>
    </span>
  </a>
</div>
```

```css
.metric-card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.metric-card {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
  padding: 20px;
  border-radius: 6px;
  background: var(--gray-2);
}

.metric-card__icon {
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  object-fit: contain;
}

.metric-card__label {
  color: var(--gray-8);
  font-size: 12px;
  line-height: 20px;
}

.metric-card__value {
  color: var(--gray-9);
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
}
```

## 9. 禁止项

- 禁止把 3Dicon 用在数据指标卡以外的组件中。
- 禁止自行创造、生成、改造或替换 3Dicon 素材。
- 禁止给指标卡增加额外描边、强投影、渐变背景、大面积语义色背景或装饰动效。
- 禁止在指标卡中放复杂说明、趋势图、按钮、标签堆叠或图例。
- 禁止把不可跳转数据做成链接或手型指针。
- 禁止 hover 时改变标题颜色、图标颜色、图标尺寸或卡片背景。

## 10. 验收清单

- [ ] 3D 图标来自 `assets/3Dicon/` 现有素材。
- [ ] 3D 图标尺寸为 `40px × 40px`。
- [ ] 卡片内边距为 `20px`，圆角为 `6px`，背景为 `gray-2`。
- [ ] 图标与文案组合间距为 `16px`。
- [ ] 标题为 `12px / gray-8`。
- [ ] 数值为 `24px / Medium`。
- [ ] 默认数值颜色和语义数值颜色符合规则。
- [ ] 可跳转数据 hover 仅改变数值颜色。
- [ ] 不可跳转数据 hover 不变色、不出现手型指针。
- [ ] 多张卡片在同一容器内自适应等宽排列。
- [ ] 列表页中除表格主体外不因指标卡导致外层页面纵向滚动。
