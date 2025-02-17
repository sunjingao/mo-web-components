## Page

### 简单操作
+ 作用在m-page组件上的属性都会传递到m-table上
+ condition为搜索条件，内置的是m-form，相关配置相同
+ 条件改变时会调用getTableDataAsync进行接口请求

```vue preview
<template>
    <m-page
        :condition="condition"
        :getTableDataAsync="getTableDataAsync"
        :columns="columns"
    >
    </m-page>
</template>
<script setup lang="ts">
 import {ref} from "vue";

const condition = ref({
  items: [
    {
      componentName: 'mInput',
      uploadKey: '1Input',
      formItemProps: {
        label: '条件1'
      }
    },
    {
      componentName: 'mInput',
      uploadKey: '2Input',
      formItemProps: {
        label: '条件2'
      }
    },
    {
      componentName: 'mInput',
      uploadKey: '3Input',
      formItemProps: {
        label: '条件3'
      }
    },
  ]
})

const columns = ref([
  {
    title: '车型',
    dataIndex: 'fullName',
    width: 200,
  },
  {
    title: '车型1',
    dataIndex: 'fullName1',
    width: 200,
  },
  {
    title: '车型2',
    dataIndex: 'fullName2',
  },
])

function getTableDataAsync(params) {
  console.log(params);
  return new Promise(
      (resolve) => {
        resolve({
          data: [
            { fullName: '大众1', fullName1: '一汽大众1', fullName2: 'CC1' },
            { fullName: '大众2', fullName1: '一汽大众2', fullName2: 'CC2' },
            { fullName: '大众3', fullName1: '一汽大众3', fullName2: 'CC3' },
            { fullName: '大众4', fullName1: '一汽大众4', fullName2: 'CC4' },
            { fullName: '大众5', fullName1: '一汽大众5', fullName2: 'CC5' },
            { fullName: '大众6', fullName1: '一汽大众6', fullName2: 'CC6' },
            { fullName: '大众7', fullName1: '一汽大众7', fullName2: 'CC7' },
            { fullName: '大众8', fullName1: '一汽大众8', fullName2: 'CC8' },
            { fullName: '大众9', fullName1: '一汽大众9', fullName2: 'CC9' },
            { fullName: '大众10', fullName1: '一汽大众10', fullName2: 'CC10' },
          ],
          pageable: {
            totalElements: 28,
          }
        })
      }
  )
}
</script>
```


### 请求
+ 当进行首次请求前，可能需要进行一些其他操作，传入 delayFirstAsync 异步可实现
+ 如需要对上传的参数进行处理，传入 getTableDataExtraParamsAsync 异步函数，处理后的对象会作为请求参数
+ 支持某个查询条件变化后直接触发查询

```vue preview
<template>
    <m-page
        :condition="condition"
        :getTableDataAsync="getDataAsync"
        :columns="columns"
        :delayFirstAsync="delayFirstAsync"
        :getTableDataExtraParamsAsync="getTableDataExtraParamsAsync"
    >
    </m-page>
</template>
<script setup lang="ts">
import {ref} from "vue";

const condition = ref({
  items: [
    {
      componentName: 'mInput',
      uploadKey: '1Input',
      formItemProps: {
        label: '条件1'
      }
    },
    {
      componentName: 'mInput',
      uploadKey: '2Input',
      enableQuery: true,
      formItemProps: {
        label: '条件2'
      }
    },
    {
      componentName: 'mInput',
      uploadKey: '3Input',
      formItemProps: {
        label: '条件3'
      }
    },
  ]
})

const columns = ref([
  {
    title: '车型',
    dataIndex: 'fullName',
    width: 200,
  },
  {
    title: '车型1',
    dataIndex: 'fullName1',
    width: 200,
  },
  {
    title: '车型2',
    dataIndex: 'fullName2',
  },
])

function delayFirstAsync() {
  return new Promise(
      resolve => {
        setTimeout(
            () => {
              resolve()
            },
            1000 * 3
        )
      }
  )
}

function getTableDataExtraParamsAsync(params) {
  console.log('getTableDataExtraParamsAsync', params)
  return new Promise(
      resolve => {
        resolve({
          aa: 11
        })
      }
  )
}

function getDataAsync(params) {
  console.log('getData', params);
  return new Promise(
      (resolve) => {
        resolve({
          data: [
            { fullName: '大众1', fullName1: '一汽大众1', fullName2: 'CC1' },
            { fullName: '大众2', fullName1: '一汽大众2', fullName2: 'CC2' },
            { fullName: '大众3', fullName1: '一汽大众3', fullName2: 'CC3' },
            { fullName: '大众4', fullName1: '一汽大众4', fullName2: 'CC4' },
            { fullName: '大众5', fullName1: '一汽大众5', fullName2: 'CC5' },
            { fullName: '大众6', fullName1: '一汽大众6', fullName2: 'CC6' },
            { fullName: '大众7', fullName1: '一汽大众7', fullName2: 'CC7' },
            { fullName: '大众8', fullName1: '一汽大众8', fullName2: 'CC8' },
            { fullName: '大众9', fullName1: '一汽大众9', fullName2: 'CC9' },
            { fullName: '大众10', fullName1: '一汽大众10', fullName2: 'CC10' },
          ],
          pageable: {
            totalElements: 28,
          }
        })
      }
  )
}
</script>
```




### 切换
+ 支持配置顶部切换
+ 支持配置table上方的切换
+ 切换的内容会作为参数传入

```vue preview
<template>
    <m-page
        :condition="condition"
        :getTableDataAsync="getData"
        :columns="columns"
        :pageTopTabs="pageTopTabs"
        :tableAboveTabs="tableAboveTabs"
    >
    </m-page>
</template>
<script setup lang="ts">
 import {ref} from "vue";

const condition = ref({
  items: [
    {
      componentName: 'mInput',
      uploadKey: '1Input',
      formItemProps: {
        label: '条件1'
      }
    },
    {
      componentName: 'mInput',
      uploadKey: '2Input',
      formItemProps: {
        label: '条件2'
      }
    },
    {
      componentName: 'mInput',
      uploadKey: '3Input',
      formItemProps: {
        label: '条件3'
      }
    },
  ]
})

const columns = ref([
  {
    title: '车型',
    dataIndex: 'fullName',
    width: 200,
  },
  {
    title: '车型1',
    dataIndex: 'fullName1',
    width: 200,
  },
  {
    title: '车型2',
    dataIndex: 'fullName2',
  },
])

function getData(params) {
  console.log(params);
  return new Promise(
      (resolve) => {
        resolve({
          data: [
            { fullName: '大众1', fullName1: '一汽大众1', fullName2: 'CC1' },
            { fullName: '大众2', fullName1: '一汽大众2', fullName2: 'CC2' },
            { fullName: '大众3', fullName1: '一汽大众3', fullName2: 'CC3' },
            { fullName: '大众4', fullName1: '一汽大众4', fullName2: 'CC4' },
            { fullName: '大众5', fullName1: '一汽大众5', fullName2: 'CC5' },
            { fullName: '大众6', fullName1: '一汽大众6', fullName2: 'CC6' },
            { fullName: '大众7', fullName1: '一汽大众7', fullName2: 'CC7' },
            { fullName: '大众8', fullName1: '一汽大众8', fullName2: 'CC8' },
            { fullName: '大众9', fullName1: '一汽大众9', fullName2: 'CC9' },
            { fullName: '大众10', fullName1: '一汽大众10', fullName2: 'CC10' },
          ],
          pageable: {
            totalElements: 28,
          }
        })
      }
  )
}

const pageTopTabs = ref({
  uploadKey: 'pageTopKey',
  items: [
    {
      tab: 'one top',
      key: 'oneValue top',
    },
    {
      tab: 'two top',
      key: 'twoValue top',
    }
  ]
});

const tableAboveTabs = ref({
  uploadKey: 'tableAboveKey',
  defaultValue: 'twoValue above',
  items: [
    {
      tab: 'one above',
      key: 'oneValue above',
    },
    {
      tab: 'two above',
      key: 'twoValue above',
    }
  ]
});

</script>
```



### 功能区
+ 默认展示全屏 及 自定义列
+ 下载按钮可配置
+ 支持常规按钮及多选按钮配置

```vue preview
<template>
    <m-page
        :condition="condition"
        :getTableDataAsync="getData"
        :columns="columns"
        :ability="ability"
    >
    </m-page>
</template>
<script setup lang="ts">
 import {ref} from "vue";

const condition = ref({
  items: [
    {
      componentName: 'mInput',
      uploadKey: '1Input',
      formItemProps: {
        label: '条件1'
      }
    },
    {
      componentName: 'mInput',
      uploadKey: '2Input',
      formItemProps: {
        label: '条件2'
      }
    },
    {
      componentName: 'mInput',
      uploadKey: '3Input',
      formItemProps: {
        label: '条件3'
      }
    },
  ]
})

const columns = ref([
  {
    title: '车型',
    dataIndex: 'fullName',
    width: 200,
  },
  {
    title: '车型1',
    dataIndex: 'fullName1',
    width: 200,
  },
  {
    title: '车型2',
    dataIndex: 'fullName2',
  },
])

const ability = ref({
  download: {
    enable: true,
    getBlobAsync(params) {
        console.log('api', params)
        return Promise.resolve()
    }
  },
  items: [
    {
      label: '按钮1',
      async confirmAsync(param1) {
        console.log('按钮1 confirmAsync', param1);
      }
    },
    {
      label: '按钮2',
      async confirmAsync(param1) {
        console.log('按钮2 confirmAsync', param1);
      }
    },
    {
      type: 'multiple',
      items: [
        {
          label: '批量操作1',
          items: [
            {
              label: '驳回1',
              mode: 'fail',
              async confirmAsync(...params) {
                console.log('驳回1', params);
              }
            },
            {
              label: '允许通过1',
              mode: 'success',
              async confirmAsync(...params) {
                console.log('允许通过1', params);
              }
            }
          ]
        },
      ]
    }
  ]
});

function getData(params) {
  console.log(params);
  return new Promise(
      (resolve) => {
        resolve({
          data: [
            { fullName: '大众1', fullName1: '一汽大众1', fullName2: 'CC1' },
            { fullName: '大众2', fullName1: '一汽大众2', fullName2: 'CC2' },
            { fullName: '大众3', fullName1: '一汽大众3', fullName2: 'CC3' },
            { fullName: '大众4', fullName1: '一汽大众4', fullName2: 'CC4' },
            { fullName: '大众5', fullName1: '一汽大众5', fullName2: 'CC5' },
            { fullName: '大众6', fullName1: '一汽大众6', fullName2: 'CC6' },
            { fullName: '大众7', fullName1: '一汽大众7', fullName2: 'CC7' },
            { fullName: '大众8', fullName1: '一汽大众8', fullName2: 'CC8' },
            { fullName: '大众9', fullName1: '一汽大众9', fullName2: 'CC9' },
            { fullName: '大众10', fullName1: '一汽大众10', fullName2: 'CC10' },
          ],
          pageable: {
            totalElements: 28,
          }
        })
      }
  )
}

</script>
```


### Props

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| getTableDataAsync | 获取接口数据 | Function | { form搜索条件，分页, 顶部切换， table上方切换} | - | 是 |
| delayFirstAsync | 首次接口请求前的延时 | Function | - | - | 否 |
| getTableDataExtraParamsAsync | 请求参数调整 | Function | { form搜索条件，分页, 顶部切换， table上方切换} | - | 否 |
| pageTopTabs、tableAboveTabs | 标签配置 | [Object](#tabs) | - | - | 否 |
| ability | 标签配置 | [Object](#ability) | - | - | 否 |
| condition，同form组件配置 | - | - | - | - | - |
| 其它，同m-table配置 | - | - | - | - | - |


### ability

| 参数      | 说明          | 类型                                                                                                                 | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |--------------------------------------------------------------------------------------------------------------------|--------------------------------  |-------- |-------- |
| config | 配置 | {align: 'right', download: { enable: true, getBlobAsync({ form搜索条件，分页, 顶部切换， table上方切换}){ return {blob, name} } }} | - | - | 否 |
| items | 操作数组 | Array                                                                                                              | [normal[]](#ability-normal)、[multiple[]](#ability-multiple) | - | 否 |


### ability-normal

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| label | 展示文字 | String | - | - | 是 |
| disabled | 是否禁止操作 | Boolean | - | false | 否 |
| hidden | 是否隐藏 | Boolean | - | false | 否 |
| confirmAsync | 点击回调 | Function |  | - | 是 |

### ability-multiple

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| type | 类型 | String | multiple | multiple | 是 |
| items | 配置项 | Array | [ability-multiple-item[]](#ability-multiple-item) | - | 是 |

### ability-multiple-item

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| label | 展示文字 | String | - | - | 是 |
| disabled | 是否禁止操作 | Boolean | - | false | 否 |
| hidden | 是否隐藏 | Boolean | - | false | 否 |
| enableCrossPage | 跨页面是否包含之前内容 | Boolean | - | false | 否 |
| getCheckboxProps | 多选是否禁止操作函数 | Function | record | ()=>{} | 否 |
| items | 顶部按钮配置 | Array | [ability-multiple-item-item[]](#ability-multiple-item-item) | - | 是 |

### ability-multiple-item-item

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| label | 展示文字 | String | - | - | 是 |
| confirmAsync | 点击回调 | Function |  | - | 是 |
| disabled | 是否禁止操作 | Boolean | - | false | 否 |
| hidden | 是否隐藏 | Boolean | - | false | 否 |
| mode，同m-table的mode | - | - | - | - | - |

### tabs

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| items | 配置数组 | Array | [tabs-item](#tabs-item) | - | 是 |


### tabs-item

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| 同m-tab-pane属性 | - | - |  | - | - |


### Expose

| 名称 | 说明       |
|---------- |----------|
| antFormComponent | form实例   |
| antTableComponent | table实例子 |
| getTableData | 获取数据接口   |
| handleFormQuery | 点击搜索进行查询 |
