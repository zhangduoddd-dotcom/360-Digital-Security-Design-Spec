# AI 输出验收清单
## AI Output Checklist

Keywords: ai output, checklist, html demo, backend, component dom extraction, component css injection

本文用于检查 HTML Demo 或页面结构是否符合 B 端后台规范。当前仓库的最终验收唯一真源是 `07-checklists/html-demo-acceptance.md`；本文只保留轻量总览，避免重复维护细节规则。

## 1. 必读验收来源

生成或检查 HTML Demo 时，必须以以下文件为准：

```text
07-checklists/html-demo-acceptance.md
```

如本文与 `html-demo-acceptance.md` 冲突，以 `html-demo-acceptance.md` 为准。

## 2. 总体验收项

- [ ] HTML Demo 是可直接打开的单文件。
- [ ] 已完整继承指定 HTML 母版。
- [ ] 业务内容只写入母版指定业务内容区。
- [ ] 基础组件 DOM、class、CSS、Token 来自组件样式库。
- [ ] 未命中旧 class 或私有组件 class 黑名单。
- [ ] 页面类型、信息层级和主任务明确。
- [ ] 包含 mock 数据。
- [ ] 支持主要点击交互。
- [ ] 覆盖 loading、empty、error、success、disabled、confirm 中的适用状态。
- [ ] 高风险操作有二次确认。
- [ ] 通过 `html-demo-acceptance.md` 的对应页面专项检查。

## 3. 修正顺序

发现问题时按以下顺序修正：

```text
固定 HTML 母版
→ 组件 DOM 抽取
→ 组件 CSS / Token 注入
→ 旧 class 黑名单
→ 页面类型结构
→ 业务字段与文案
→ 交互状态
→ 视觉细节
```

只要组件 DOM / CSS / Token 未成对抽取，或旧 class 黑名单检查不通过，禁止交付最终 HTML Demo。
