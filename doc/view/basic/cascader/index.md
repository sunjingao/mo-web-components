## Cascader

### 搜索功能
+ 默认开启搜索功能
+ 搜索时，支持拼音搜索中文

```vue preview

<template>
  <div>
    <m-cascader
      v-model:value="value"
      :options="options"
      placeholder="Please select"
    />
  </div>
</template>
<script lang="ts" setup>
  import {ref, watch} from 'vue';

  const options = [
    {
      value: 'zhongwen',
      label: '中文',
      children: [
        {
          value: 'zhongwen1',
          label: '中文1',
          children: [
            {
              value: 'zhongwen11',
              label: '中文11',
            },
            {
              value: 'zhongwen111',
              label: '中文111',
            },
          ],
        },
      ],
    },
    {
      value: 'yingwen',
      label: '英文',
      children: [
        {
          value: 'yingwen1',
          label: '英文1',
          children: [
            {
              value: 'yingwen11',
              label: '英文11',
            },
          ],
        },
      ],
    },
  ];
  const value = ref<string[]>([]);
  watch(
    value,
    val => {
      console.log(111, val);
    }
  )
</script>
```



### 全选
+ 多选时，自动开启全选功能
+ 未开启show-checked-strategy=Cascader.SHOW_CHILD时

```vue preview

<template>
  <div>
    <m-cascader
      v-model:value="value"
      :options="options"
      multiple
      placeholder="Please select"
    />
  </div>
</template>
<script lang="ts" setup>
  import {ref, watch} from 'vue';

  const options = [
    {
      value: 'zhejiang',
      label: '中文',
      children: [
        {
          value: 'hangzhou',
          label: '中文1',
          children: [
            {
              value: 'xihu',
              label: '中文11',
            },
            {
              value: 'xihu2',
              label: '中文111',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: '英文',
      children: [
        {
          value: 'nanjing',
          label: '英文1',
          children: [
            {
              value: 'zhonghuamen',
              label: '英文11',
            },
          ],
        },
      ],
    },
  ];
  const value = ref<string[]>([]);
  watch(
    value,
    val => {
      console.log(111, val);
    }
  )
</script>
```


### 全选
+ 多选时，自动开启全选功能
+ 开启show-checked-strategy=Cascader.SHOW_CHILD时

```vue preview

<template>
  <div>
    <m-cascader
      v-model:value="value"
      :options="options"
      multiple
      placeholder="Please select"
      :show-checked-strategy="Cascader.SHOW_CHILD"
    />
  </div>
</template>
<script lang="ts" setup>
  import {ref, watch} from 'vue';
  import { Cascader } from 'ant-design-vue';
  
  const options = [
    {
      value: 'zhejiang',
      label: '中文',
      children: [
        {
          value: 'hangzhou',
          label: '中文1',
          children: [
            {
              value: 'xihu',
              label: '中文11',
            },
            {
              value: 'xihu2',
              label: '中文111',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: '英文',
      children: [
        {
          value: 'nanjing',
          label: '英文1',
          children: [
            {
              value: 'zhonghuamen',
              label: '英文11',
            },
          ],
        },
      ],
    },
  ];
  const value = ref<string[]>([]);
  watch(
    value,
    val => {
      console.log(222, val);
    }
  )
</script>
```


### 注意
+ 如果option中的文字字段不是label，要手动传入filter，否则搜索不准确


### Props

| 参数      | 说明         | 类型      | 可选值或函数参数 | 默认值  | 是否必填  |
|---------- |------------|---------|----------|------|-------- |
| enableSelectAll | 多选时，是否开启全选 | Boolean | -        | true | 否 | 
