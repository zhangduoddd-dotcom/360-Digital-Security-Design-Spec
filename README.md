# 后台设计规范
## Backend Design Standards

Keywords: backend design, design skill, ai readable, vue codegen, ai image

这是面向 B 端后台产品的一份当前有效设计 Skill，用于帮助设计师、产品、AI Agent 和前端工程师生成、检查和统一后台 UI、AI 生图 Prompt 与 Vue 页面代码。

## 1. 优先阅读

```text
SKILL.md
INDEX.md
```

## 2. 目录结构

```text
Backend-Design-Standards/
├── README.md
├── SKILL.md
├── INDEX.md
├── CHANGELOG.md
├── 01-foundation/
├── 02-components/
├── 03-interaction/
├── 04-pages/
├── 05-ai-image/
├── 06-vue-code/
└── 07-checklists/
```

## 3. 核心原则

- 线上文档即最新最准版本，不保留历史规范目录。
- 文档使用英文短路径、中文正文、中英标题和英文 Keywords。
- AI 按任务读取少量文档，但首次生成必须先读取固定框架、页面类型和验收清单。
- demo / 预览 / 可点击页面默认只输出 HTML；明确要求 Vue / 前端代码 / 工程接入时输出 Vue 代码，并可同时提供 HTML 预览。

## 4. 常用读取路径

生成列表页 Vue 代码：

```text
SKILL.md
→ INDEX.md
→ 04-pages/list-page.md
→ 03-interaction/list-search.md
→ 03-interaction/list-table.md
→ 06-vue-code/codegen-rules.md
→ 06-vue-code/preview-html.md
→ 07-checklists/frontend-acceptance.md
```

生成 AI 生图 Prompt：

```text
SKILL.md
→ INDEX.md
→ 04-pages/list-page.md
→ 05-ai-image/prompt-rules.md
→ 05-ai-image/negative-prompts.md
→ 07-checklists/ai-output.md
```

## License

MIT License.
