# UE-系统特定等级标签、状态标签、语义色使用规范.md

***

## 一、标签通用规则

1. **一致性原则**：当同一系统中有同一维度的标签在不同页面类型出现时，尽量保持样式一致。
2. **标准化原则**：使用系统统一定义的标签样式，优先使用默认标签样式。
3. **替代规则**：当结果类、状态标签在表格中出现时，可使用状态点替代 icon。

***

## 二、标签降噪规则

1. **类别控制**：为保证系统最重要状态清晰，整个系统的面性标签类别≤3 类。
2. **等级区分**：表格中有多个特定等级标签时，尽量只保留一个等级为面性标签，其他等级均使用线性加面性标签；操作状态较多时，非重要状态可用状态点代替 icon。

***

## 三、统一定义的标签样式

### （一）等级标签

- 面性标签：用于功能模块中标识**最重要信息、需用户优先识别**的等级。
- 线性加面性标签：用于功能模块中标识**较重要信息、需用户快速识别**的等级。
- 以下为各场景等级标签示意（含图标与文案）：

| 场景分类        | 等级 / 状态             |
| ----------- | ------------------- |
| 告警 - 告警级别   | 紧急、严重、警告、提醒         |
| 安全事件 - 事件级别 | 紧急、严重、警告、提醒         |
| 攻击者 - 威胁等级  | 紧急、高危、中危、低危、无风险、未知  |
| 漏洞等级        | 超危、高危、中危、低危、信息      |
| 脆弱性 - 威胁等级  | 超危、高危、中危、低危、信息      |
| 风险资产 - 风险等级 | 已失陷、高风险、中风险、低风险、无风险 |

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MTJkYzc2ZTFiOGVmODI4MTE1ZTFjZWEwMGZlYTFkMzBfMWJjNDc5MjYzYTc0YzhiOTdlNGFjYTVkYmNjZjY4M2VfSUQ6NzYzNjY3Nzc4NzU3NTM1NjM3NF8xNzc4MDU1MTU2OjE3NzgxNDE1NTZfVjM)

***

### （二）状态标签

- 适用场景：在功能模块中提供**解释性 / 描述性的状态 / 结果信息**时，使用「icon + 文字标签」；吸引用户注意、表达正在运行的状态，可使用动画的形式（即线性加面性标签，线性 icon 可设计循环动效）。

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=OWFjNmFkODJhNGY1ZDkxZGViOGRlNjkyN2ZmNzI3NzhfYjBmZWYwYTQyYzlmOTA2MDcyOTllM2VhMGFkMjcwODNfSUQ6NzYzNjY3ODE2OTU4NDM1NjU1N18xNzc4MDU1MTU2OjE3NzgxNDE1NTZfVjM)

- 以下为各场景状态标签示意（含图标与文案）：

| 场景分类 | 状态 / 结果              |
| ---- | -------------------- |
| 研判结果 | 攻击成功、误报、攻击失败、未研判     |
| 处置状态 | 待处置、处置中、处置完成、忽略、处置失败 |
| 置信度  | 高置信、中置信、低置信、未知       |

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MmMzOTRhNWUzYWIxOTA2M2I5YTFkZWMzMGQ4NDUxZTFfMGE0MDA1Y2ViOWYzNTQ2MmFjYWE3ODJmMDdmMTQ1NmVfSUQ6NzYzNjY3ODA3MzI1MjkwODIyMF8xNzc4MDU1MTU2OjE3NzgxNDE1NTZfVjM)

***

### （三）默认标签

- 适用场景：无需区分状态、仅展示标签内容时，可使用默认标签。
- 特殊说明：如需在默认标签中区分信息优先级，可使用蓝色（信息）标签进行强调。
- 示例：`默认标签（如“一般内容”）`、`强调标签（如“强内容”，蓝色样式）`

***

### （四）其他状态标签

- 适用场景：其他非特定的内容，可使用普通多彩标签。
- 样式类型：
  1. 面性标签
  2. 线性加面性标签
  3. icon + 文字标签
- 用色规则
  - **线性加面性标签**：底色使用对应语义色的 `\-1` 号，文字色使用对应语义色的 `\-7` 号；特殊灰色使用 `\#E8EAED`（gray-4）为底色，`\#525966`（gray-8）为文字色。
  - **面性标签**：底色使用对应语义色的 `\-6` 号，文字色使用 `\#FFFFFF`（gray-1）；
  - **icon 标签**：icon 使用对应语义色的 `\-6` 号为底色，使用 `\#525966`（gray-8）为文字色。
  | 色系 | 颜色编号         | 色值         | 说明                  |
  | -- | ------------ | ---------- | ------------------- |
  | 深红 | Deep red-1   | `\#FCE7E3` | 线性标签底色              |
  | 深红 | Deep red-6   | `\#BC0004` | 面性标签 / Icon 底色      |
  | 深红 | Deep red-7   | `\#960008` | 线性标签文字色             |
  | 红  | Red-1        | `\#FFE8E6` | 线性标签底色              |
  | 红  | Red-6        | `\#F0131E` | 面性标签 / Icon 底色      |
  | 红  | Red-7        | `\#C90616` | 线性标签文字色             |
  | 深橙 | Orange red-1 | `\#FFF3E6` | 线性标签底色              |
  | 深橙 | Orange red-6 | `\#F05A0A` | 面性标签 / Icon 底色      |
  | 深橙 | Orange red-7 | `\#C94000` | 线性标签文字色             |
  | 橙  | Orange-1     | `\#FFF8E6` | 线性标签底色              |
  | 橙  | Orange-6     | `\#F58A02` | 面性标签 / Icon 底色      |
  | 橙  | Orange-7     | `\#CF6E00` | 线性标签文字色             |
  | 黄  | Yellow-1     | `\#ffffe6` | 线性标签底色              |
  | 黄  | Yellow-6     | `\#DFBC00` | 面性标签 / Icon 底色      |
  | 黄  | Yellow-7     | `\#B89600` | 线性标签文字色             |
  | 绿  | Green-1      | `\#EFF8EE` | 线性标签底色              |
  | 绿  | Green-6      | `\#52C41A` | 面性标签 / Icon 底色      |
  | 绿  | Green-7      | `\#389E0D` | 线性标签文字色             |
  | 蓝  | Blue-1       | `\#E6F7FF` | 背景色                 |
  | 蓝  | Blue-6       | `\#1890FF` | 面性标签 / Icon 底色      |
  | 蓝  | Blue-7       | `\#096DD9` | 线性标签文字色             |
  | 灰  | gray-4       | `\#E8EAED` | 特殊灰色线性标签底色          |
  | 灰  | gray-6       | `\#AEB2B8` | 面性标签 / Icon 底色      |
  | 灰  | gray-8       | `\#525966` | 特殊灰色线性标签 / Icon 文字色 |

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NGM0MmQwNTA5YmM1NDlmZGNlYzRiMjJlNjVhOTc5NDFfMGQxMGQwMjU2NWRiYmJmYzFiZDcyMTBmMmM3NGU2ZDJfSUQ6NzYzNjY4NDYwNzE0NDU0NTQ3MV8xNzc4MDU1MTU2OjE3NzgxNDE1NTZfVjM)

***

## 四、状态点 + 文案规范

### （一）使用规范

- 用途：用于表示状态的小圆点（6\*6px）与文字间距 4px，常用于表示**非重要的结果、严重等级、操作进程**等。
- 颜色规范：状态点使用对应语义色的 `\-6` 号颜色，无需搭配icon和文字色（贴合状态点6\*6px小圆点的视觉定义）。

### （二）核心语义色值

| 颜色 | 颜色编号     | 色值         | 语义说明               |
| -- | -------- | ---------- | ------------------ |
| 红色 | Red-6    | `\#F0131E` | 失败、阻断、不可用、严重异常     |
| 橙色 | Orange-6 | `\#F58A02` | 异常、预警、轻微问题、不阻断流程   |
| 蓝色 | Blue-6   | `\#1890FF` | 进行中、待处理、待审批、正常流转   |
| 绿色 | Green-6  | `\#52C41A` | 启动、成功、完成、正常运行      |
| 灰色 | gray-6   | `\#AEB2B8` | 草稿、已停止、用户主动终止、禁用状态 |

> 注：深红色、深橙色为多级等级专属定义色，不使用在流程颜色中。

***

### （三）三大场景用色规则

1. **流程节点状态**
   - 未进入流程 / 草稿 → **灰色**
   - 待处理 / 审批中 / 流转中 → **蓝色**
   - 异常 / 回退 / 不通过 → **橙色**
   - 正常结束流程：完成 / 结束 → **绿色**
   - 异常结束流程：失败 / 失效 / 阻断 → **红色**
   - 用户主动终止且无需关注 → **灰色**
2. **功能开关状态**
   - 启动 / 开启 → **绿色**
   - 停止 / 关闭（无风险） → **灰色**
3. **数据连接状态**
   - 正常传输 / 连接正常 → **绿色**
   - 轻微异常 / 有小问题（不影响传输） → **橙色**
   - 阻断性故障 / 无法传输 → **红色**

***

### （四）约束规则

1. 流程 “未结束” 时，禁止使用红色、绿色。
2. 草稿状态，禁止使用蓝色、橙色。
3. 同一状态只允许使用一种语义色，不混用、不自定义。

***

