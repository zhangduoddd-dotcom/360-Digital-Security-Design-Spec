# 360-Digital-Security-Design-Spec

360 数字安全设计规范库（2026 年 5 月 9 日更新）

Standard design specification library for 360 digital security business, covering UI specification, interaction rules, visual guidelines and component design standards, unified design language and product experience for digital security related products.

> 面向 AI 高保真页面生成的企业级数字安全产品设计规范库

---

## 📚 仓库简介

本仓库是 **360 数字安全产品设计规范库**，专为企业级 B 端后台系统打造，提供统一的设计标准、组件样式与交互规则。核心目标是支持 **AI 高保真页面生成**，所有规范均基于最新技术栈，可直接用于开源项目归档、团队协作复用。

---

## 快速导航

### 🧩 AI 设计辅助

[ai-image-rules.md——AI 生图强约束与 Negative Prompt 规范](specs/ai/ai-image-rules.md "ai-image-rules.md")

### 🧩 组件设计规范

[Ant Design Vue UI Spec for AI High-Fidelity.md——面向AI高保真页面生成的Ant Design Vue最新组件UI定制规范](specs/components/Ant-Design-Vue-UI-Spec-for-AI-High-Fidelity.md "Ant Design Vue UI Spec for AI High-Fidelity.md")  
[general-components.md——通用组件设计使用规范](specs/components/general-components.md "General Component Design and Usage Specification")


### 🧩 交互规则

[page-container.md——后台管理系统页面搭建基础规则](specs/interaction/page-container.md "Background Management System Page Construction Rules")
[list-table.md-—列表页-表格区域交互规范](specs/interaction/list-table.md "List Page Table Interaction Specification")
[list-search.md-—列表页-搜索栏区域交互基础规范](specs/interaction/list-search.md "search, filter, query, list page, interaction")
[Information Entry.md-—表单页-信息录入交互规范](specs/interaction/Information-Entry.md "search, filter, query, list page, interaction")


### 🧩 页面模板

[dashboard.md-—工作台模板](specs/templates/dashboard\.md "-")
[page.md-—列表页模板](specs/templates/list\-page\.md "-")
[detail.md—详情页模板](specs/templates/detail-page.md "-")
[form.md—表单页模板](specs/templates/form-page.md "-")
[user-management.md—用户管理模板](specs/templates/user-management.md "-")
[system-settings.md—系统设置模板](specs/templates/system-settings.md "-")
[system-config.md—系统通用配置模板](specs/templates/system-config.md "-")


### 🧩 全局基础规范

[basics.md-—全局基础规范](specs/global\-basics\.md "-")

[semantics.md-—语义色与状态标签规范](specs/color\-semantics\.md "-")


---

## ✨ 核心特点

- **企业级 B 端标准**：适配 360 数字安全产品后台系统的设计语言与交互模式
- **AI 高保真友好**：所有规范均提供中英双语标题与关键词，支持 AI 快速解析与生成
- **基于最新 Ant Design Vue**：严格遵循 Ant Design Vue 最新版组件体系，可直接用于 Vue3 项目
- **可直接复用**：完整的模板与组件规范，可直接用于项目归档、团队协作与开源分享

---

## 🎯 使用说明

1. 阅读 `specs/global-basics.md`，了解全局基础设计规范
2. 按业务场景，参考 `templates/` 下的页面模板快速搭建页面结构
3. 组件样式与交互细节，参考 `components/` 和 `interaction/` 下的对应文档
4. AI 生成页面时，以 `Ant Design Vue UI Spec...md` 为核心约束，确保组件样式统一、视觉一致

---

## 📌 相关链接

- [Ant Design Vue 官方文档](https://antdv.com/docs/vue/introduce)

---

## 📅 更新日志

### 2026-05-09（新增）

- 新增 Information Entry.md # 信息录入交互规范

### 2026-05-08（今日新建）

- 初始化仓库核心结构，搭建 specs 目录及各子目录（ai、components、interaction、templates）
- 新建所有核心规范文档、页面模板文档及 AI 设计辅助文档
- 完成 [README.md](https://github.com/zhangduoddd-dotcom/360-Digital-Security-Design-Spec/blob/main/README.md) 编写，明确仓库用途、目录结构及使用说明
- 统一规范文档命名、中英双语标题及关键词，适配 AI 高保真解析需求

---

## 📄 License

本项目采用 MIT License，详情见 `LICENSE` 文件。
