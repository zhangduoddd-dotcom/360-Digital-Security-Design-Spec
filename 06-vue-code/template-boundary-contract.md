# HTML 母版替换边界契约
## Template Boundary Contract

Keywords: html template boundary, business content, frame locked, single nav, double nav

本文用于约束 HTML Demo 生成时母版中哪些区域可以替换、哪些区域必须保持不变。当前 `common-single-nav.html` 和 `double-nav-frame.html` 文件体量较大，后续应在模板内追加同名注释边界；在模板未内嵌边界前，本文作为边界判断依据。

## 1. 总原则

生成 HTML Demo 时必须完整继承指定 HTML 母版。

页面业务内容只能进入业务内容区，不得重写顶部导航、左侧导航、页头、框架容器、响应式规则、收起展开交互和框架 JS。

## 2. 建议内嵌边界

后续应在 HTML 母版中追加以下注释：

```html
<!-- FRAME_LOCKED_START: top navigation / side navigation / page shell. Do not rewrite. -->
...
<!-- FRAME_LOCKED_END -->

<!-- PAGE_HEADER_LOCKED_START: keep structure, only replace allowed text/actions. -->
...
<!-- PAGE_HEADER_LOCKED_END -->

<!-- BUSINESS_CONTENT_START: replace only this block for page business content. -->
...
<!-- BUSINESS_CONTENT_END -->
```

## 3. common-single-nav.html 边界

`common-single-nav.html` 中：

- 顶部导航、左侧导航、菜单展开收起、级联浮层、页头容器、右侧整体容器属于框架锁定区。
- `.terminal-right-panel` 是右侧区域容器，不应整体替换。
- 页头结构应保留，只允许替换标题、说明、少量页头右侧业务动作。
- 业务页面主体应放入右侧内容区的主内容容器内。
- 母版中的示例业务卡片、示例表格、示例文案在生成具体页面时必须替换掉。

## 4. double-nav-frame.html 边界

`double-nav-frame.html` 中：

- 双层顶部导航、左侧导航、页面框架容器、级联交互和响应式 JS 属于框架锁定区。
- 右侧业务内容区中的示例内容可以替换。
- 生成具体页面时不得把双层导航改造成单层导航，也不得把单层导航母版内容混入双层导航母版。

## 5. 可替换内容

允许替换：

- 页面标题文案。
- 页面说明文案。
- 页头右侧业务按钮文案和业务动作。
- 业务主体内容。
- mock 数据。
- 业务字段、业务状态、业务表格列。

## 6. 不可替换内容

必须保留：

- 框架根容器。
- 顶部导航 DOM、CSS、JS。
- 左侧导航 DOM、CSS、JS。
- 菜单展开、收起、级联浮层逻辑。
- 页头基础结构。
- 内容区外层容器、背景、滚动规则、最小宽度规则。
- 母版 iconfont 与基础字体渲染规则。

## 7. 验收

HTML Demo 输出前必须确认：

- 没有整体替换 `.terminal-right-panel`。
- 没有删除顶部导航或左侧导航。
- 没有删除页头基础结构。
- 没有保留母版示例业务内容。
- 具体业务内容只出现在业务主体内容区。
- 如果母版已内嵌 `BUSINESS_CONTENT_START / END`，则只替换该边界内部内容。