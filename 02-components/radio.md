# 单选规范
## Radio Rules

Keywords: radio, radio group, segmented radio, selected, p6

本文迁移自上传包 `references/component-styles/radio.txt`，用于约束单选框、单选组和胶囊单选按钮。

## 1. 使用场景

- 多个互斥选项中选择一个。
- 表单中的状态、类型、模式选择。
- 低数量选项的快速切换。
- 胶囊单选适合比普通 radio 更强的视觉切换。

## 2. 类型

| 类型 | 场景 |
|---|---|
| 基础 Radio | 表单中普通互斥选项 |
| Radio Group | 一组选项，支持横排或竖排 |
| Radio Button / 胶囊单选 | 轻量模式切换、筛选切换 |

## 3. 尺寸规范

| 类型 | 推荐尺寸 | 字号 / 行高 |
|---|---|---|
| 基础 Radio | 控件 16px，行高 22px | 14px / 22px |
| 胶囊单选 | 单项高度 32px | 14px / 22px |
| 紧凑胶囊 | 单项高度 24px | 12px / 20px |

## 4. 状态要求

必须覆盖：

```text
Unchecked / Hover / Checked / Disabled / Checked Disabled / Focus
```

- checked 使用 `p6 #00AB7A`。
- hover 使用 `p5` 或浅灰底。
- selected 文本可使用 `p7`。
- disabled 弱化文字和控件，不响应 hover。

## 5. 使用规则

- 单组选项不宜过多，超过 5 个建议改用 Select。
- 选项文案应短且互斥。
- 默认选中项需要符合业务安全默认值。
- 胶囊单选用于切换模式时，需要保持当前项明显。

## 6. Vue / HTML 生成要求

Vue 使用 `a-radio`、`a-radio-group` 或 `a-radio-button`。HTML 预览需要模拟 checked、hover、disabled、focus 和胶囊选中态。