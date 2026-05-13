# 前端验收清单
## Frontend Acceptance Checklist

Keywords: frontend acceptance, checklist, vue, html preview, backend

本文用于检查 Vue 页面代码和 HTML 预览文件是否符合设计规范、交互规则和工程落地要求。

## 1. 交付物完整性

- [ ] 已提供 Vue 3 + TypeScript + Ant Design Vue 页面代码。
- [ ] 已提供可直接打开预览的 HTML 文件。
- [ ] Vue 页面和 HTML 预览在结构、字段、文案和主要视觉风格上保持一致。
- [ ] HTML 预览文件支持基础点击交互。

## 2. 布局实现

- [ ] 页面整体宽度、边距、栅格、内容区符合设计规范。
- [ ] 顶部导航、侧边导航、主内容区位置稳定。
- [ ] 表格列多时横向滚动和固定列正确。

## 3. 组件实现

- [ ] 按钮尺寸、颜色、hover、active、disabled 状态正确。
- [ ] 输入框、选择器、日期控件、上传控件状态完整。
- [ ] 表格表头、行高、单元格 padding、hover、固定列表现正确。

## 4. 交互状态

- [ ] 搜索、重置、筛选、排序逻辑正确。
- [ ] 批量操作与勾选状态联动。
- [ ] 高风险操作有确认。
- [ ] 异步请求有 loading。
- [ ] 成功、失败、异常、空状态反馈完整。