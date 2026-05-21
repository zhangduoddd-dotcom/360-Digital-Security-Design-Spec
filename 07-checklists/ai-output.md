# AI 输出验收总览
## AI Output Acceptance Summary

Keywords: ai output, acceptance summary, html demo, snippet manifest, component runtime

本文只作为 HTML Demo 输出验收的轻量总览。最终验收唯一真源为：

```text
07-checklists/html-demo-acceptance.md
```

如本文与最终验收清单存在差异，以 `html-demo-acceptance.md` 为准。

## 1. 关键检查项

- [ ] HTML Demo 是可直接打开的单文件。
- [ ] 已完整继承指定 HTML 母版。
- [ ] 已读取 `06-vue-code/template-boundary-contract.md`。
- [ ] 业务内容只写入母版指定业务内容区。
- [ ] 已读取 `docs/component-style-library/component_snippet_manifest.json`。
- [ ] 稳定基础组件 DOM 来自 manifest 指向的 `snippets/*.html`。
- [ ] 基础组件 CSS / Token 来自组件样式库。
- [ ] pending 组件已按待补齐组件处理。
- [ ] 页面类型、信息层级和主任务明确。
- [ ] 包含 mock 数据。
- [ ] 支持主要点击交互。
- [ ] 覆盖 loading、empty、error、success、disabled、confirm 中的适用状态。
- [ ] 高风险操作有二次确认。
- [ ] 通过 `html-demo-acceptance.md` 的对应页面专项检查。

## 2. 建议修正顺序

```text
固定 HTML 母版
→ 母版替换边界
→ 组件 manifest 定位
→ 组件 snippet DOM
→ 组件 CSS / Token 注入
→ 页面类型结构
→ 业务字段与文案
→ 交互状态
→ 视觉细节
```

交付前应完成 manifest key、snippetFile、DOM、CSS scope、Token 的成对检查。