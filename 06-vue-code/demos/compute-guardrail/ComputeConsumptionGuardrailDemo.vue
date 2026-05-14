<template>
  <div class="page-wrap">
    <a-page-header title="算力消耗防护" sub-title="应用安全护栏 / 全局配置演示" />

    <a-card class="toolbar" :bordered="false">
      <a-space>
        <a-button type="primary" @click="priorityOpen = true">应用优先级维护</a-button>
        <a-button @click="algorithmOpen = true">调度算法配置</a-button>
      </a-space>
    </a-card>

    <a-card title="算力消耗规则" :loading="tableLoading">
      <template #extra>
        <a-tag color="blue">高优先级应用永远优先保障</a-tag>
      </template>
      <a-table :columns="columns" :data-source="tableData" row-key="id" :pagination="{ pageSize: 6 }" />
    </a-card>

    <a-drawer v-model:open="priorityOpen" width="540" title="应用优先级维护">
      <a-alert type="info" show-icon message="默认优先级为 P1。应用列表来源于智能应用管理。" />
      <a-table :columns="priorityColumns" :data-source="appPriorityList" :pagination="false" row-key="appId" class="mt12">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'priority'">
            <a-select v-model:value="record.priority" style="width: 120px">
              <a-select-option value="P0">P0</a-select-option>
              <a-select-option value="P1">P1</a-select-option>
              <a-select-option value="P2">P2</a-select-option>
            </a-select>
          </template>
        </template>
      </a-table>
    </a-drawer>

    <a-drawer v-model:open="algorithmOpen" width="760" title="调度算法配置">
      <a-form layout="vertical">
        <a-form-item label="调度算法选择">
          <a-select v-model:value="algorithmType">
            <a-select-option value="wfq">加权公平调度（WFQ）</a-select-option>
          </a-select>
        </a-form-item>

        <a-alert
          type="warning"
          show-icon
          message="基于实时 TPM / 最大 TPM 的占比触发阈值限制；当高负载时优先保障高优先级应用。"
        />

        <a-card title="各模型每分钟最大 TOKEN（TPM）" size="small" class="mt12">
          <div v-for="m in modelTpm" :key="m.id" class="model-row">
            <a-space style="width: 100%; justify-content: space-between">
              <div>
                <b>{{ m.model }}</b>
                <a-tag size="small" :color="tagColor(m.matchType)">{{ matchTypeText(m.matchType) }}</a-tag>
              </div>
              <a-input-number
                v-model:value="m.maxTpm"
                :min="0"
                :step="10000"
                placeholder="留空=无限大"
                style="width: 220px"
              />
            </a-space>
          </div>
          <a-typography-text type="secondary">可不填写：表示该模型 TPM 视为无限大，不参与优先级阈值控制。</a-typography-text>
        </a-card>

        <a-card title="各优先级最大阈值百分比（整数，不超过 100，且依次降低）" size="small" class="mt12">
          <a-space>
            <a-form-item label="P0%"><a-input-number v-model:value="thresholds.P0" :min="0" :max="100" :precision="0" /></a-form-item>
            <a-form-item label="P1%"><a-input-number v-model:value="thresholds.P1" :min="0" :max="100" :precision="0" /></a-form-item>
            <a-form-item label="P2%"><a-input-number v-model:value="thresholds.P2" :min="0" :max="100" :precision="0" /></a-form-item>
          </a-space>
          <a-alert v-if="thresholdError" type="error" :message="thresholdError" show-icon />
        </a-card>
      </a-form>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type MatchType = 'exact' | 'prefix' | 'default'
const tableLoading = ref(false)
const priorityOpen = ref(true)
const algorithmOpen = ref(true)
const algorithmType = ref('wfq')

const tableData = ref([
  { id: 1, ruleName: '算力消耗-qwen', model: 'qwen2.5-72b', target: 'API KEY', status: '启用' },
  { id: 2, ruleName: '全局限流-ds', model: 'deepseek-v3.2', target: '不区分对象', status: '启用' }
])

const appPriorityList = ref([
  { appId: 'a1', appName: '内容审核助手', priority: 'P1' },
  { appId: 'a2', appName: '智能客服系统', priority: 'P1' },
  { appId: 'a3', appName: '默认应用-未分组', priority: 'P1' }
])

const modelTpm = ref([
  { id: 'm1', model: 'gpt-4o', matchType: 'exact' as MatchType, maxTpm: 500000 },
  { id: 'm2', model: 'qwen2.5-72b', matchType: 'prefix' as MatchType, maxTpm: 300000 },
  { id: 'm3', model: 'default-model', matchType: 'default' as MatchType, maxTpm: undefined }
])

const thresholds = ref({ P0: 90, P1: 85, P2: 80 })
const thresholdError = computed(() => {
  const { P0, P1, P2 } = thresholds.value
  if ([P0, P1, P2].some((v) => !Number.isInteger(v) || v > 100 || v < 0)) return '阈值必须为 0~100 的整数。'
  if (!(P0 >= P1 && P1 >= P2)) return '阈值需依次降低：P0 ≥ P1 ≥ P2。'
  return ''
})

const columns = [
  { title: '规则名称', dataIndex: 'ruleName' },
  { title: '业务模型', dataIndex: 'model' },
  { title: '对象标识', dataIndex: 'target' },
  { title: '运行状态', dataIndex: 'status' }
]
const priorityColumns = [
  { title: '应用名称', dataIndex: 'appName' },
  { title: '调度优先级', key: 'priority' }
]

const matchTypeText = (t: MatchType) => (t === 'exact' ? '精确匹配' : t === 'prefix' ? '前缀匹配' : '缺省匹配')
const tagColor = (t: MatchType) => (t === 'exact' ? 'blue' : t === 'prefix' ? 'gold' : 'default')
</script>

<style scoped>
.page-wrap { padding: 20px; background: #f5f7fb; min-height: 100vh; }
.toolbar { margin-bottom: 12px; }
.mt12 { margin-top: 12px; }
.model-row { border-bottom: 1px solid #f0f0f0; padding: 10px 0; }
</style>
