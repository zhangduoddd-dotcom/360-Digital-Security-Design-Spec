# 后台设计规范
## Backend Design Standards

这是面向 B 端后台产品的设计规范仓库，用于帮助设计师、产品和 AI Agent 生成、检查和统一后台高保真 HTML Demo。

本仓库当前目标：

```text
生成符合设计规范、组件规范和交互规范的高保真可点击 HTML 页面。
```

不再维护 Vue 工程代码生成规范。

## 1. 使用方式

AI 生成或检查页面时，只需要从根目录读取：

```text
SKILL.md
INDEX.md
```

其中：

- `SKILL.md`：AI 生成高保真 HTML Demo 时的执行契约、默认交付方式、硬约束和冲突优先级。
- `INDEX.md`：唯一文档索引，负责“任务 → 最小读取路径”和“目录职责”。

不要从各目录内寻找 overview、reference、README 或子级导读文件。目录导读唯一维护在根目录 `INDEX.md`。

## 2. 常用任务

生成列表页 HTML Demo：

```text
读取 SKILL.md
→ 读取 INDEX.md 中的 html-demo-list-page profile
→ 按 profile 读取对应页面、交互、母版边界、组件 snippet manifest、组件运行时契约和验收文件
```

检查 HTML Demo 是否符合规范：

```text
读取 SKILL.md
→ 读取 INDEX.md
→ 读取对应页面规范、交互规范和 html-demo-acceptance.md
```

维护或调整规范文档：

```text
读取 SKILL.md
→ 读取 INDEX.md
→ 只修改对应唯一真源文档
```

## 3. 目录结构

```text
Backend-Design-Standards/
├── README.md                      # 给人看的简介
├── SKILL.md                       # AI 执行契约
├── INDEX.md                       # 唯一文档索引和最小读取路径
├── 01-foundation/                 # Token、颜色、字体、布局、阴影
├── 02-components/                 # 组件语义、状态、交互说明
├── 03-interaction/                # 页面交互规则
├── 04-pages/                      # 页面类型结构
├── 06-vue-code/                   # 历史目录名；当前保留 HTML Demo、母版边界和组件运行时契约
├── 07-checklists/                 # HTML Demo 输出验收清单
└── docs/component-style-library/  # 组件 manifest、稳定 DOM snippet、CSS / Token / 视觉状态来源
```

## 4. 组件样式库结构

```text
docs/component-style-library/component_snippet_manifest.json
= 组件定位入口，声明组件 key、snippetFile、requiredClasses、cssScopes、tokens、states。

docs/component-style-library/snippets/*.html
= 稳定组件 DOM 复制入口。

docs/component-style-library/backend_ai_ui_component_kit_with_index.html
= 组件 CSS、Token、视觉状态和完整样式参考来源。
```

AI 生成 HTML Demo 时，稳定基础组件 DOM 优先来自 `snippets/*.html`；组件 CSS / Token 从 `backend_ai_ui_component_kit_with_index.html` 校验和抽取。

## 5. 维护原则

- 根目录只保留 `README.md`、`SKILL.md`、`INDEX.md` 三个入口文件。
- 01～08 目录内不再维护目录导读、overview、reference 或子级 README。
- 同一规则只维护一份唯一真源。
- 页面结构归 `04-pages/`。
- 交互规则归 `03-interaction/`。
- 组件语义归 `02-components/`。
- 组件定位归 `docs/component-style-library/component_snippet_manifest.json`。
- 稳定组件 DOM 归 `docs/component-style-library/snippets/`。
- 组件 CSS / Token / 视觉状态归 `docs/component-style-library/backend_ai_ui_component_kit_with_index.html`。
- HTML Demo 生成、母版边界和组件运行时契约归 `06-vue-code/`。
- 验收只放 `07-checklists/html-demo-acceptance.md`，不反向创造生成规则。

## License

MIT License