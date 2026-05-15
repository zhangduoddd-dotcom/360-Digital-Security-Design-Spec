# 页面规范总览
## Page Standards Overview

Keywords: page standards, backend pages, ai routing, html demo, vue codegen, page templates

本文是 `04-pages/` 的页面规范总入口，用于帮助 AI、设计师和前端工程师按页面类型选择最小但足够的读取路径。

## 1. 页面规范定位

`04-pages/` 不负责定义全局颜色、间距、圆角、阴影、组件尺寸和平台框架。上述内容应优先读取：

```text
03-interaction/platform-frame.md
03-interaction/page-container.md
01-foundation/layout.md
01-foundation/tokens.md
01-foundation/shadow.md
02-components/component-size.md
```

`04-pages/` 只负责定义页面级结构、信息层级、模块组合、交互状态、AI 生图约束、HTML 预览要求和 Vue 代码生成要求。

## 2. 页面文件清单

| 页面类型 | 文件 | 适用任务 |
|---|---|---|
| 工作台 / Dashboard | `dashboard.md` | 总览、态势、监控、AI 决策、运营分析 |
| 列表页 | `list-page.md` | 检索、筛选、表格、批量操作、分页 |
| 表单页 | `form-page.md` | 新增、编辑、配置、规则、策略、条件组合 |
| 详情页 | `detail-page.md` | 对象详情、抽屉详情、分析详情、时间轴详情 |
| 分步流程页 | `step-flow-page.md` | 向导、审批、发布、策略分阶段配置 |
| 异常页 | `exception-page.md` | 404、500、无权限、空状态、加载失败 |
| 用户管理 | `user-management.md` | 用户列表、组织联动、用户详情、用户组 |
| 系统设置 | `system-settings.md` | 全局参数、数据导出、数据清理、CDN、系统工具 |
| 系统配置 | `system-config.md` | 组织、任务、告警、日志、邀请、备份、应用、网络等通用配置 |

## 3. 推荐读取路径

### 3.1 生成页面 UI / HTML demo

```text
SKILL.md
→ INDEX.md
→ 03-interaction/platform-frame.md
→ 03-interaction/page-container.md
→ 04-pages/overview.md
→ 对应页面规范
→ 06-vue-code/preview-html.md
→ 07-checklists/ai-output.md
```

### 3.2 生成 Vue 页面代码

```text
SKILL.md
→ INDEX.md
→ 03-interaction/platform-frame.md
→ 04-pages/overview.md
→ 对应页面规范
→ 06-vue-code/codegen-rules.md
→ 06-vue-code/antdv-adapter.md
→ 07-checklists/frontend-acceptance.md
```

### 3.3 检查页面质量

```text
04-pages/overview.md
→ 对应页面规范
→ 07-checklists/design-review.md
→ 07-checklists/ai-output.md
→ 07-checklists/frontend-acceptance.md
```

## 4. 页面生成通用原则

- 先判断页面类型，再读取对应页面规范。
- 页面规范不能替代全局框架规范。
- 生成后台页面时必须使用固定平台框架。
- 列表页以表格为核心，不应被做成 Dashboard。
- Dashboard 以概览、诊断和行动为核心，不应堆砌表格。
- 表单页以填写效率、错误控制和保存范围为核心。
- 详情页以对象识别、状态判断、原因定位和下一步操作为核心。
- 系统设置与系统配置页应强调分组、说明、保存反馈和危险操作确认。
- 所有页面必须考虑 loading、empty、error、无权限、禁用、只读和成功 / 失败反馈。

## 5. AI 生成约束

生成 UI 图片、HTML demo 或 Vue 页面时，必须避免：

- 随意改变平台顶部导航和左侧导航结构。
- 把多种页面类型混在一起。
- 大面积堆砌图表、按钮或彩色标签。
- 缺少页面标题、操作区、反馈状态和分页。
- 危险操作没有确认。
- 只做视觉效果，不体现真实业务路径。
- 表格列、字段、状态、操作无法支撑业务判断。

## 6. 输出质量判断

| 维度 | 要求 |
|---|---|
| 结构 | 页面骨架完整，模块顺序符合用户任务路径 |
| 信息 | 关键字段、状态、操作、反馈齐全 |
| 视觉 | 层级清晰，间距稳定，组件样式统一 |
| 交互 | 搜索、筛选、切换、弹窗、抽屉、提交、确认可理解 |
| 状态 | loading、empty、error、无权限、禁用等状态完整 |
| 代码 | Vue / HTML 输出具备 mock 数据和基础交互 |
| AI 生图 | 文字可读、布局不乱、页面类型准确 |
