# 360\-Digital\-Security\-Design\-Spec

Standard design specification library for 360 digital security business, covering UI specification, interaction rules, visual guidelines and component design standards, unified design language and product experience for digital security related products\.

> 面向 AI 高保真页面生成的企业级数字安全产品设计规范库
> 
> 

---

## 📚 仓库简介

本仓库是 **360 数字安全产品设计规范库**，专为企业级 B 端后台系统打造，提供统一的设计标准、组件样式与交互规则。核心目标是支持 **AI 高保真页面生成**，所有规范均基于最新技术栈，可直接用于开源项目归档、团队协作复用。

---

## 📂 目录结构

```Plain Text
360-Digital-Security-Design-Spec/
├── specs/
│ ├── ai/ # AI 设计辅助规则
│ │ └── ai-image-rules.md # AI 生图强约束与 Negative Prompt 规范
│ ├── components/ # 组件设计规范
│ │ ├── Ant Design Vue UI Spec...md # 面向 AI 生成的 Ant Design Vue 最新组件定制规范
│ │ └── general-components.md # 通用组件设计使用规范
│ ├── interaction/ # 交互规则
│ │ ├── page-container.md # 页面容器搭建规则
│ │ ├── list-table.md # 列表页表格交互规范
│ │ └── list-search.md # 列表页搜索栏交互规范
│ ├── templates/ # 页面模板
│ │ ├── dashboard.md # 工作台模板
│ │ ├── list-page.md # 列表页模板
│ │ ├── detail-page.md # 详情页模板
│ │ ├── form-page.md # 表单页模板
│ │ ├── user-management.md # 用户管理模板
│ │ ├── system-settings.md # 系统设置模板
│ │ └── system-config.md # 系统通用配置模板
│ ├── color-semantics.md # 语义色与状态标签规范
│ └── global-basics.md # 全局基础规范
├── LICENSE
└── README.md
```

---

## ✨ 核心特点

- **企业级 B 端标准**：适配 360 数字安全产品后台系统的设计语言与交互模式

- **AI 高保真友好**：所有规范均提供中英双语标题与关键词，支持 AI 快速解析与生成

- **基于最新 Ant Design Vue**：严格遵循 Ant Design Vue 最新版组件体系，可直接用于 Vue3 项目

- **可直接复用**：完整的模板与组件规范，可直接用于项目归档、团队协作与开源分享

---

## 🎯 使用说明

1. 阅读 `specs/global\-basics\.md`，了解全局基础设计规范

2. 按业务场景，参考 `templates/` 下的页面模板快速搭建页面结构

3. 组件样式与交互细节，参考 `components/` 和 `interaction/` 下的对应文档

4. AI 生成页面时，以 `Ant Design Vue UI Spec\.\.\.md` 为核心约束，确保组件样式统一、视觉一致

---

## 📌 相关链接

- [Ant Design Vue 官方文档](https://antdv.com/docs/vue/introduce)

---

## 📅 更新日志

### 2026\-05\-08（今日新建）

- 初始化仓库核心结构，搭建 specs 目录及各子目录（ai、components、interaction、templates）

- 新建所有核心规范文档、页面模板文档及 AI 设计辅助文档

- 完成 \[README\.md\]\(README\.md\) 编写，明确仓库用途、目录结构及使用说明

- 统一规范文档命名、中英双语标题及关键词，适配 AI 高保真解析需求

---

## 📄 License

本项目采用 MIT License，详情见 `LICENSE` 文件。

