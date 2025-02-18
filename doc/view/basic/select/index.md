## Select

### 搜索功能
+ 单选时也会默认开启搜索功能
+ 搜索时，支持拼音搜索中文

```vue preview

<template>
  <div>
    <m-select
      v-model:value="selectedItems"
      style="width: 100%"
      :options="ops"
    >
    </m-select>
  </div>
</template>
<script lang="ts" setup>
  import {ref, watch} from 'vue'

  const test = ref(false)
  const ops = ref([
    {
      value: 'jack',
      label: '中1',
    },
    {
      value: 'lucy',
      label: '式12',
    },
    {
      value: 'disabled',
      label: '美123',
    },
    {
      value: 'yiminghe',
      label: '学1234',
    },
  ]);
  const selectedItems = ref<string[]>([]);

  watch(
    selectedItems,
    val => {
      console.log(val)
    }
  )
</script>
```

### 全选
+ 多选时，自动开启全选功能

```vue preview

<template>
  <div>
    <m-select
      v-model:value="selectedItems"
      style="width: 100%"
      :options="ops"
      mode="multiple"
    >
    </m-select>
  </div>
</template>
<script lang="ts" setup>
  import {ref, computed, watch} from 'vue'

  const test = ref(false)
  const ops = ref([
    {
      value: 'jack',
      label: '中1',
    },
    {
      value: 'lucy',
      label: '中12',
    },
    {
      value: 'disabled',
      label: '中123',
    },
    {
      value: 'yiminghe',
      label: '中1234',
    },
  ]);
  const selectedItems = ref<string[]>([]);

  watch(
    selectedItems,
    val => {
      console.log(val)
    }
  )
</script>
```

### 注意
+ 如果option中的文字字段不是label，要手动传入filterOption，否则搜索不准确

### Props

| 参数      | 说明         | 类型      | 可选值或函数参数 | 默认值  | 是否必填  |
|---------- |------------|---------|----------|------|-------- |
| enableSelectAll | 多选时，是否开启全选 | Boolean | -        | true | 否 | 
