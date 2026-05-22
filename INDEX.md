# 文档索引
## Document Index

本文只负责 AI 最小读取路径和目录索引。所有生成约束、母版边界、组件来源、执行流程和验收规则均以 `SKILL.md` 为唯一真源。

本仓库当前只服务：

```text
高保真、可点击、单文件 HTML Demo 生成与检查
```

## 1. AI 最小读取路径

任何生成或检查任务都先读取：

```text
SKILL.md
INDEX.md
```

然后按页面类型读取对应母版和组件库资产。不要一次性读取全仓库。

## 2. 固定资产路径

| 类型 | 路径 |
|---|---|
| 默认单层导航母版 | `Interaction Construction Specifications/common-single-nav.html` |
| 双层导航母版 | `Interaction Construction Specifications/double-nav-frame.html` |
| 全局 Token / 主题样式 | `Basic UI component style/Green Theme-Global Style.css` |
| 基础与数据录入组件 | `Basic UI component style/Basic & Data Entry.html` |
| 数据展示组件 | `Basic UI component style/Data Display.html` |
| 反馈组件 | `Basic UI component style/Feedback.html` |
| 导航组件 | `Basic UI component style/Navigation.html` |

当前组件库状态：`Feedback.html` 和 `Navigation.html` 尚未补齐完整真实组件 DOM / CSS / 状态时，只能视为待补齐资产，不应作为完整组件真源。

## 3. 页面类型读取映射

| 页面类型 | 母版 | 组件库资产 |
|---|---|---|
| 列表页 | `common-single-nav.html`，明确双层导航时用 `double-nav-frame.html` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、`Data Display.html`、按需读取 `Navigation.html` |
| 表单页 | `common-single-nav.html`，明确双层导航时用 `double-nav-frame.html` | `Green Theme-Global Style.css`、`Basic & Data Entry.html` |
| 详情页 | `common-single-nav.html`，明确双层导航时用 `double-nav-frame.html` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、`Data Display.html`、按需读取 `Feedback.html` |
| 工作台 / Dashboard | `common-single-nav.html`，明确双层导航时用 `double-nav-frame.html` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、`Data Display.html` |
| 分步流程页 | `common-single-nav.html`，明确双层导航时用 `double-nav-frame.html` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、按需读取 `Navigation.html` |
| 异常页 / 空状态页 | `common-single-nav.html`，明确双层导航时用 `double-nav-frame.html` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、按需读取 `Feedback.html` |
| 用户管理 / 系统配置 / 系统设置 | `common-single-nav.html`，明确双层导航时用 `double-nav-frame.html` | `Green Theme-Global Style.css`、`Basic & Data Entry.html`、`Data Display.html`、按需读取 `Feedback.html`、`Navigation.html` |
| HTML Demo 检查 | 读取待检查页面实际使用的母版 | 读取待检查页面实际使用的组件库资产 |

## 4. 目录职责

| 路径 | 职责 |
|---|---|
| `README.md` | 给人看的仓库简介和使用说明 |
| `SKILL.md` | AI 唯一执行约束 |
| `INDEX.md` | AI 最小读取路径和资产索引 |
| `Basic UI component style/` | 全局样式、Token、基础组件、数据展示组件、反馈组件、导航组件资产 |
| `Interaction Construction Specifications/` | 固定 HTML 母版和页面框架交互资产 |

## 5. 维护说明

- 新增或修改 AI 执行规则，只更新 `SKILL.md`。
- 新增或修改读取路径，只更新 `INDEX.md`。
- 母版 HTML、组件 HTML、组件 CSS 均为资产文件，不新增同类约束文档。
- 不新增新的约束文件夹，避免形成第二套规则入口。
