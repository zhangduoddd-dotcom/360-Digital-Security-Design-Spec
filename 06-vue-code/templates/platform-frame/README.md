# 旧版平台固定框架代码模板
## Legacy Platform Frame Template

本目录是旧版通用平台框架，仅用于历史参考、比对旧页面结构或迁移旧 Demo。

当前主线默认 HTML 母版已经切换为：

```text
06-vue-code/templates/terminal-security-frame/index.html
```

> 说明：`terminal-security-frame/` 目录名保留不变，但调用语义是“单层导航框架”。

## 1. 当前状态

```text
platform-frame/ = legacy / archive
```

AI 生成新页面时，不应默认调用本目录。

只有在用户明确提出以下需求时，才允许读取本目录：

```text
查看旧版平台框架
对比旧框架
迁移旧 platform-frame 页面
沿用 legacy platform-frame
```

## 2. 默认页面生成规则

基于本套 GitHub / 本仓库规范生成页面时，默认调用：

```text
06-vue-code/templates/terminal-security-frame/index.html
```

明确要求双层导航框架时，调用：

```text
06-vue-code/templates/double-top-navigation-frame/source.html
```

明确要求本地安全大脑 / 本脑框架时，调用：

```text
06-vue-code/templates/local-security-brain-frame/index.html
```

## 3. 文件结构

```text
platform-frame/
├── index.html
├── platform-frame.css
├── platform-frame-data.js
├── platform-frame.js
└── asset/icons/
```

以上文件保留用于历史参考，不作为新页面默认底座。

## 4. 禁止误用

AI 不得再把本目录描述为“所有后台页面生成时必须复用的底层框架”。

AI 不得在未明确要求 legacy 框架时使用本目录生成新页面。

如果本文件与 `INDEX.md`、`06-vue-code/preview-html.md`、`06-vue-code/templates/README.md` 的主线规则存在差异，以主线规则为准。