# 后台设计规范
## Backend Design Standards

这是面向 B 端后台产品的设计规范仓库，用于帮助设计师、产品、AI Agent 和前端工程师生成、检查和统一后台 UI、HTML Demo 与 Vue 页面代码。

## 1. 使用方式

AI 生成或检查页面时，只需要从根目录读取：

```text
SKILL.md
INDEX.md
```

其中：

- `SKILL.md`：AI 生成高保真页面时的执行契约、默认交付方式、硬约束和冲突优先级。
- `INDEX.md`：唯一文档索引，负责“任务 → 最小读取路径”和“目录职责”。

不要从各目录内寻找 overview、reference、README 或子级导读文件。目录导读唯一维护在根目录 `INDEX.md`。

## 2. 常用任务

生成列表页 HTML Demo：

```text
读取 SKILL.md
→ 读取 INDEX.md 中的 html-demo-list-page profile
→ 按 profile 读取对应页面、交互、组件样式库和验收文件
```

生成 Vue 页面代码：

```text
读取 SKILL.md
→ 读取 INDEX.md 中的 vue-* profile
→ 按 profile 读取工程规则、页面规范和验收文件
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
├── 06-vue-code/                   # HTML / Vue 生成、组件抽取与注入规则
├── 07-checklists/                 # 输出验收清单
└── docs/component-style-library/  # 真实组件 DOM / class / CSS / Token
```

## 4. 维护原则

- 根目录只保留 `README.md`、`SKILL.md`、`INDEX.md` 三个入口文件。
- 01～08 目录内不再维护目录导读、overview、reference 或子级 README。
- 同一规则只维护一份唯一真源。
- 页面结构归 `04-pages/`。
- 交互规则归 `03-interaction/`。
- 组件语义归 `02-components/`。
- 真实组件 DOM / class / CSS / Token 归 `docs/component-style-library/`。
- HTML / Vue 生成和组件抽取注入规则归 `06-vue-code/`。
- 验收只放 `07-checklists/`，不反向创造生成规则。

## License

MIT License
