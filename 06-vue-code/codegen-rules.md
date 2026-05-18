# Vue 代码与 HTML 演示生成规则
## Vue Code and HTML Demo Generation Rules

Keywords: vue codegen, html demo, ant design vue, preview html, typescript, backend page, ai result, font rendering

本文用于约束 AI 生成后台页面代码和 HTML 可演示页面。默认应先判断用户要的是“可演示页面”还是“工程代码”。

## 1. 默认交付物判断

### 1.1 可演示页面 / demo / 可点击预览

当用户要求生成可演示页面、页面 demo、可点击预览、高保真演示环境、HTML 预览时，默认只输出：

```text
一个可直接打开预览的 HTML 文件
```

HTML 文件必须包含完整 HTML、CSS、JavaScript、mock 数据和基础点击交互，不依赖构建工具，不请求真实接口。

### 1.2 Vue 代码 / 工程代码

当用户明确要求生成 Vue 代码、前端代码、工程代码、接入项目或 Vue3 + TypeScript + Ant Design Vue 页面时，输出：

```text
1. Vue 3 + TypeScript + Ant Design Vue 页面代码
2. 一个可直接打开预览的 HTML 文件
```

如果用户明确只要 Vue 代码，可以只输出 Vue 代码；如果用户明确只要 HTML，可以只输出 HTML。

## 2. HTML 预览文件要求

HTML 文件用于给设计师快速看效果和调交互，应满足：

- 单文件可打开。
- 包含完整 HTML、CSS、JavaScript。
- 不依赖构建工具。
- 不请求真实接口。
- 使用 mock 数据。
- 支持基础点击交互。
- 视觉风格接近正式 Ant Design Vue 页面。
- 包含 loading、empty、error、反馈等基础状态。
- 必须继承平台固定框架和字体渲染基线。

## 3. Vue 代码要求

当用户明确要求 Vue / 工程代码时，Vue 代码必须包含：

- 清晰的类型定义。
- mock 数据或接口占位。
- loading、empty、error 状态。
- 搜索、重置、分页、排序、提交等必要交互。
- 成功、失败、删除确认等操作反馈。
- 符合页面规范和交互规范的结构。
- 与 HTML 预览一致的字段、文案、状态和主要视觉风格。
- 继承统一字体栈和字体渲染基线，禁止浏览器伪粗体 / 伪斜体。

## 4. 页面类型要求

### 列表页

必须包含搜索 / 筛选区、表格操作栏、表格主体、状态标签、行操作、分页、loading、empty、error。

### 表单页

必须包含字段分组、表单校验、必填标识、取消、保存或提交、提交 loading、成功或失败反馈。

### 详情页

必须包含返回入口、对象摘要、状态标识、基础信息、关联信息、操作记录或关联列表。

### 工作台

必须包含核心指标、待办或风险入口、快捷入口、趋势或分类统计、最近动态。

### 分步流程页

必须包含步骤条、当前步骤内容、上一步 / 下一步 / 提交逻辑、步骤校验、结果反馈。

### 异常页

必须包含异常标题、说明文案和建议操作，例如刷新重试、返回首页、申请权限。

## 5. AI 原生页面要求

生成 AI 原生平台、多智能体协作、智能生成、AI 审核、AI 分析类页面时，必须包含以下结构。

### 5.1 AI 任务状态

至少定义以下状态中的必要项：

```text
待配置、执行中、生成结果、审核中、已应用、失败、已归档
```

状态必须体现在 UI 上，不要只存在于代码变量中。

### 5.2 AI 结果数据结构

AI 结果数据建议包含：

```ts
interface AiResult {
  id: string
  title: string
  generatedAt: string
  modelName?: string
  sourceData?: string[]
  conclusion: string
  evidence: string[]
  riskTips?: string[]
  confidence?: '高置信' | '中置信' | '低置信' | '未知'
  status: '待审核' | '已编辑' | '已应用' | '失败'
}
```

HTML 演示文件中可用 mock 数据模拟以上结构；Vue 工程代码中应定义对应类型。

### 5.3 AI 结果操作

AI 结果必须支持：

- 复制。
- 编辑。
- 重新生成。
- 应用结果。
- 查看依据。
- 查看操作记录。

应用 AI 结果前必须允许用户编辑。高风险结果应用前必须二次确认。

### 5.4 审核与追溯

AI 操作记录必须保留：

- 来源数据。
- 输入内容。
- 输出内容。
- 执行时间。
- 操作者。
- 使用模型。
- 应用结果时间。

多智能体协作页面需要展示每个智能体的贡献、状态或执行进度。

## 6. CSS、Token 与字体渲染要求

- 普通主按钮使用 `p6 #00AB7A`，hover 使用 `p5 #1DB887`，active 使用 `p7 #039972`。
- AI 功能入口可使用 AI 三态渐变，但普通保存、提交、筛选、导出、删除按钮禁止使用 AI 渐变。
- 卡片使用一级投影，弹窗、抽屉、遮罩浮层使用二级投影。
- 表格、表单等高密度内容区域不要滥用强投影。
- Focus ring 使用 2px 外描边，不改变组件尺寸。
- 如工程不适合中文 CSS 变量名，必须使用英文 alias。
- 全局必须使用规范字体栈。
- 必须设置 `font-synthesis: none`、`font-synthesis-weight: none`、`font-synthesis-style: none`。
- 必须设置 `-webkit-font-smoothing: antialiased` 和 `-moz-osx-font-smoothing: grayscale`。
- 表格、列表、表单、按钮、输入框、选择器、抽屉和提示说明等高密度文本区域不得依赖伪粗体。

## 7. 禁止项

- 不要把“可演示页面 / demo / 可点击预览”默认扩大成交付 Vue 工程代码。
- 不要用 AI 生图 Prompt 替代代码或 HTML 实现要求。
- 不要只输出静态结构而没有基础状态和交互。
- 不要散乱硬编码大量颜色和间距。
- 不要省略字体渲染基线，避免页面文字在不同系统中异常变粗。
- 不要让 AI 结果直接成为最终发布内容，必须保留人工审核或确认路径。
- 不要缺少 AI 结果来源、依据、置信度或操作记录。

## 8. 验收入口

生成完成后，对照：

```text
07-checklists/frontend-acceptance.md
```
