# 图标 Icon 规范
## Icon Rules

Keywords: icon, iconfont, font class, semantic consistency, backend components, project 5177816

本文定义后台产品中的图标使用规则。AI 生成页面、HTML 可演示页面、Vue 代码或设计稿时，遇到 icon 必须优先遵循本文。

## 1. 默认图标来源

设计和页面生成中遇到 icon 时，统一优先使用 iconfont 项目 `5177816`。

### 1.1 在线 CSS

```text
https://at.alicdn.com/t/c/font_5177816_s2f2dxpzy3.css
```

### 1.2 Font Class 引入

```css
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "iconfont"; /* Project id 5177816 */
  src: url('//at.alicdn.com/t/c/font_5177816_s2f2dxpzy3.woff2?t=1779174195791') format('woff2'),
       url('//at.alicdn.com/t/c/font_5177816_s2f2dxpzy3.woff?t=1779174195791') format('woff'),
       url('//at.alicdn.com/t/c/font_5177816_s2f2dxpzy3.ttf?t=1779174195791') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

使用方式：

```html
<i class="iconfont icon-a-quanjucaidan1"></i>
```

禁止继续使用旧项目 `3024647` 作为默认 icon 来源。

## 2. 使用原则

- 相同语义、相同动作、相同状态必须使用同一个 icon。
- 不同页面中同一含义的 icon 不得随意更换。
- icon 仅作为辅助识别，不能替代文字说明。
- 关键操作按钮不建议只使用 icon，除非空间有限且语义非常明确。
- 图标语义不清时，必须配合 Tooltip 或文字说明。
- 右侧全局配置区、表格工具区等低频辅助操作可使用纯 icon 按钮，但 hover 时必须显示具体操作名称。
- 未明确含义或暂无匹配图标时，统一使用 `icon-APTzuzhiguanli1` 作为占位，不允许自己绘制或临时创造图标。

## 3. 框架固定 icon 映射

以下 icon 是框架模板中的固定映射，AI 生成页面时不得随意替换。

| 使用位置 | 状态 / 含义 | Font Class | Unicode |
|---|---|---|---|
| 双层导航全局菜单 | 全局菜单入口 | `icon-a-quanjucaidan1` | `\eacc` |
| 顶部订阅 / 守护天数 | 360 全网安全大脑 | `icon-anquandanao` | `\e8dc` |
| 公司 / 组织切换 | 公司 / 组织 | `icon-gongsi` | `\e8dd` |
| 顶部下拉 | 未展开 / 收起态，箭头向下 | `icon-xiajiantou` | `\e8e0` |
| 顶部下拉 | 已展开，箭头向上 | `icon-shangjiantou` | `\e8de` |
| 用户中心 | 用户入口 | `icon-gerenzhongxin` | `\e8db` |
| 系统设置 | 设置入口 | `icon-a-shezhixitong` | `\e720` |
| 左侧菜单整体展开 / 收起 | 展开态按钮，点击后收起 | `icon-xiangzuozhankai` | `\e8df` |
| 左侧菜单整体展开 / 收起 | 收起态按钮，点击后展开 | `icon-xiangyouzhankai` | `\e8e1` |
| 左侧菜单项无明确语义 | 默认占位 | `icon-APTzuzhiguanli1` | `\e8ee` |
| 可视化 / 统计入口 | 统计报表 | `icon-tongjibaobiao` | `\e8b0` |
| 邮件 / 消息 | 邮件信息 | `icon-a-youjianxinxi` | `\e7a2` |
| 权限 | 权限锁 | `icon-a-quanxiansuo` | `\e7ae` |

## 4. 状态 icon 使用规则

### 4.1 下拉展开 / 收起

顶部导航、左侧菜单、级联下拉中的展开 / 收起图标必须使用不同 Font Class，不允许通过 CSS 旋转同一个图标获得状态。

```html
<!-- 未展开：向下 -->
<i class="iconfont icon-xiajiantou"></i>

<!-- 已展开：向上 -->
<i class="iconfont icon-shangjiantou"></i>
```

### 4.2 左侧菜单整体展开 / 收起

```html
<!-- 展开态侧栏：点击后收起 -->
<i class="iconfont icon-xiangzuozhankai"></i>

<!-- 收起态侧栏：点击后展开 -->
<i class="iconfont icon-xiangyouzhankai"></i>
```

## 5. 语义一致性规则

| 含义类型 | 推荐 class / 规则 |
|---|---|
| 新建 / 添加 | `icon-add` 或明确新增类 icon |
| 编辑 | `icon-bianji` / `icon-a-bianjixiugai` |
| 删除 | `icon-shanchu` / `icon-shanchu1`，必须配合风险确认 |
| 导入 | `icon-daoru` |
| 导出 / 下载 | `icon-xiazai` / `icon-piliangxiazai`，按语义匹配 |
| 上传 | `icon-shangchuan` / `icon-shangchuanwenjian` |
| 刷新 | `icon-a-shuaxingengxinzhongzhi` |
| 配置 | `icon-a-shezhixitong` / `icon-ruanjianshezhi` |
| 筛选 | `icon-shaixuan` |
| 搜索 | `icon-a-sousuofangdajing` |
| 告警 / 风险 | 按语义色和等级规范配合使用，不只依赖图标表达 |
| AI 能力 | 使用已明确的 AI / 智能类图标，或配合 AI 渐变按钮风格 |
| 无明确含义 | `icon-APTzuzhiguanli1` |

## 6. 样式规则

- 图标默认尺寸建议为 16px。
- 表格行操作、工具栏紧凑按钮可使用 14px 或 16px。
- 左侧菜单一级 icon 固定 18px。
- 页面级入口、卡片入口可使用 18px 或 20px。
- 图标颜色默认使用 `#8A9099`。
- 深色顶部导航中，普通 icon 默认使用弱白，hover / open 使用纯白。
- 深色顶部导航中，原本使用品牌色的 icon hover 时保持品牌色不变。
- 白色侧边栏中，icon 默认灰色，hover / active 使用品牌主色。
- 禁用状态使用灰阶，不可点击。
- 风险操作图标可使用错误色，但必须同时保留文字或确认机制。

## 7. 代码生成要求

### 7.1 HTML 可演示页面

生成 HTML 可演示页面时，可以通过在线 CSS 引入 iconfont 用于体验和调试。

要求：

- 使用 `font-family: "iconfont"`。
- 使用官方 Font Class，例如 `<i class="iconfont icon-a-quanjucaidan1"></i>`。
- 不要手写 unicode `content`，除非是在维护 iconfont CSS 文件本身。
- 不要用 CSS 自绘 icon。
- 不要用 emoji 或字符替代 icon。
- 不要在页面中混用多套来源不明的 icon。
- 同一语义的 icon 在同一页面和跨页面中保持一致。

### 7.2 Vue / 工程代码

生成 Vue 工程代码时：

- 如果项目已接入该 iconfont，应优先复用项目内 icon 组件或字体文件。
- 不建议在企业生产环境直接依赖在线 iconfont 链接。
- 企业客户需下载字体包自行发布使用并做好备份。
- 如果使用 Ant Design Vue 自带 icon，必须保证与本规范的语义一致性，不得同义混用。

## 8. 禁止项

- 禁止同一个含义在不同页面使用不同 icon。
- 禁止只靠 icon 表达关键操作。
- 禁止删除、停用、覆盖等风险操作只显示 icon 而没有文字、Tooltip 或确认机制。
- 禁止在同一页面混用多套风格差异明显的 icon。
- 禁止把线上 iconfont 链接作为企业生产环境唯一依赖。
- 禁止在没有匹配图标时自己绘制、拼接或临时创造图标；统一使用 `icon-APTzuzhiguanli1` 占位。