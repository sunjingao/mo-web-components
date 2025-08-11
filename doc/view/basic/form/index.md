## Form表单


### 简单使用
+ label默认靠右对齐
+ label默认自动在结尾加冒号
+ 在m-form标签上写的内容会直接传递给a-form
+ 在m-form标签中的插槽会传递给数据录入的各个组件
+ items包含：
+ + 绑定对象的配置；
+ + formItemProps中的内容会传给a-form-item；
+ + componentProps的内容会传递给组件；

#### items精简配置
```vue preview
<template>
  <m-form
        v-model="formRef"
        :items="items"
    ></m-form>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const formRef = ref({});

const items = ref([
  {
    componentName: 'mInput',
    uploadKey: '1mInput',
    formItemProps: { label: 'mInput1' }
  }
]);

watch(
    formRef,
    () => {
      console.log('formRef.value', formRef.value);
    },
    {
      deep: true
    }
);

</script>
```

#### items全部配置
```vue preview
<template>
<div>
  <m-form
        v-model="formRef"
        :items="items"
        :rules="rules"
    ></m-form>
</div>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const formRef = ref({});

const items = ref([
  {
    componentName: 'mInput',
    uploadKey: 'mInput1',
    defaultValue: '设置的默认值',
    formItemProps: { label: 'mInput1' },
  },
  {
    componentName: 'mInput',
    uploadKey: 'mInput2',
    formItemProps: { 
        label: 'Input2',
        tooltip: 'label配置'
    },
  },
  {
    componentName: 'mInput',
    uploadKey: 'mInput3',
    formItemProps: { label: 'mInput3' },
    componentProps: { label: 'mInput3', prefix: 'prefix' },
  },
  {
    componentName: 'mInput',
    uploadKey: 'mInput4',
    formItemProps: { 
        label: 'mInp4'
    },
  },
]);

const rules = {
        mInput4: [
            { required: true, message: '必填', trigger: 'change' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
          ]
    }

watch(
    formRef,
    () => {
      console.log('formRef.value', formRef.value);
    },
    {
      deep: true
    }
);

</script>
```


### 返显
+ 常用语详情页等展示

#### 配置
```vue preview
<template>
  <m-form
        v-model="formRef"
        :items="items"
        layout="vertical"
  ></m-form>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const formRef = ref({});

const items = ref([
  {
    componentName: 'mFormItemDes',
    uploadKey: 'val1',
    defaultValue: '123321',
    formItemProps: { label: 'mInput1' },
  },
  {
    componentName: 'mFormItemDes',
    uploadKey: 'val2',
    formItemProps: { label: 'mInput2' },
  },
  {
    componentName: 'mFormItemDes',
    uploadKey: 'val3',
    defaultValue: '123321',
    formItemProps: { label: 'mInput3' },
  },
  {
    componentName: 'mFormItemDes',
    uploadKey: 'val4',
    defaultValue: '123321',
    formItemProps: { label: 'mInput4' },
  },
]);

watch(
    formRef,
    () => {
      console.log('formRef.value', formRef.value);
    },
    {
      deep: true
    }
);

setTimeout(
    () => {
        formRef.value = {
            val1: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容'
        }
    },
    1000 * 3
)

</script>
```



### 隐藏功能
+ 支持某项根据条件进行隐藏

```vue preview
<template>
  <div class="mb-8px flex items-center">展示<m-switch v-model:checked="hidden" />隐藏</div>
  <m-form
        v-model="formRef"
        :items="items"
    >
  </m-form>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const formRef = ref({});

const hidden = ref(false)

const items = ref([
  {
    componentName: 'mInput',
    uploadKey: 'mInput1',
    defaultValue: '默认值',
    hidden: hidden,
    formItemProps: { label: 'mInput1' }
  },
  {
    componentName: 'mInput',
    uploadKey: 'mInput2',
    formItemProps: { label: 'mInput2' }
  },
]);

watch(
    formRef,
    () => {
      console.log('formRef.value', formRef.value);
    },
    {
      deep: true
    }
);

</script>
```


### 排版
+ 支持1列、2列、3列（默认）
+ label与组件支持水平（默认）和竖直两种
+ labelCol和wrapperCol的默认值分别是6，18，可以自行调整。水平排列的时候和应为24。竖直排列时不设置labelCol、wrapperCol，默认撑满

```vue preview
<template>
<div>
    <div class="flex mb-8px">
        <m-select v-model:value="columnsNumber">
            <m-select-option :value="5">5列</m-select-option>
            <m-select-option :value="4">4列</m-select-option>
            <m-select-option :value="3">3列</m-select-option>
            <m-select-option :value="2">2列</m-select-option>
            <m-select-option :value="1">1列</m-select-option>
        </m-select>
        <m-select v-model:value="layout" class="ml-8px" @change="handleSelect">
            <m-select-option value="horizontal">水平</m-select-option>
            <m-select-option value="vertical">竖直</m-select-option>
        </m-select>
        <m-slider v-model:value="labelCol.span" :min="1" :max="23" @change="handleLabelChange" class="w-100px" />
        <m-slider v-model:value="wrapperCol.span" :min="1" :max="23" :disabled="sliderDisabled" class="w-100px ml-8px" />
    </div>
  <m-form
        v-model="formRef"
        :items="items"
        :columnsNumber="columnsNumber"
        :layout="layout"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
    ></m-form>
</div>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const formRef = ref({});

const sliderDisabled = ref(true)

const columnsNumber = ref(3)
const layout = ref('horizontal')
const labelCol=ref({
    span: 6
})
const wrapperCol=ref({
    span: 18
})

const items = ref([
  {
    componentName: 'mInput',
    uploadKey: '1mInput',
    formItemProps: { label: 'mInput1' },
  },
  {
    componentName: 'mInput',
    uploadKey: '2mInput',
    formItemProps: { label: 'mInput2' },
  },
  {
    componentName: 'mInput',
    uploadKey: '3mInput',
    formItemProps: { label: 'mInput3' },
  },
  {
    componentName: 'mInput',
    uploadKey: '4mInput',
    formItemProps: { 
        label: 'mInp4',
    },
  },
    {
    componentName: 'mInput',
    uploadKey: '5mInput',
    formItemProps: { 
        label: 'mInp5',
    },
  },
    {
    componentName: 'mInput',
    uploadKey: '6mInput',
    formItemProps: { 
        label: 'mInp6',
    },
  },
]);

function handleSelect() {
    if (layout.value === 'horizontal') {
            sliderDisabled.value = true
    } else {
            sliderDisabled.value = false
    }
}

function handleLabelChange() {
    if (layout.value === 'horizontal') {
            wrapperCol.value.span = 24 - labelCol.value.span
    }
}

watch(
    formRef,
    () => {
      console.log('formRef.value', formRef.value);
    },
    {
      deep: true
    }
);

</script>
```



### 内置组件
+ 支持ant-design-vue中数据录入部分的所有组件
+ 支持preview-download组件
+ 以上组件在form中做了以下集成，所以配置中不需要进行设置以下属性
+ + v-model对应关系，如v-model:value或v-model:checked的value或者checked
+ + 默认值

```vue preview
<template>
  <m-form
        v-model="formRef"
        :items="items"
    ></m-form>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const formRef = ref({});

const items = ref([
  {
    componentName: 'mCascader',
    uploadKey: '1mCascader',
    formItemProps: {
      label: 'mCascader'
    },
    componentProps: {
      multiple: true,
      options: [
        {
          value: 'zhejiang', label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou', label: 'Hangzhou',
              children: [
                { value: 'xihu', label: 'West Lake' }
              ]
            }
          ]
        },
        {
          value: 'jiangsu', label: 'Jiangsu',
          children: [
            {
              value: 'nanjing', label: 'Nanjing',
              children: [
                { value: 'zhonghuamen', label: 'Zhong Hua Men' }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    componentName: 'mDatePicker',
    uploadKey: '2mDatePicker',
    formItemProps: {
      label: '日期'
    },
    componentProps: {
      format: 'YYYY/MM/DD'
    }
  },
  {
    componentName: 'mCheckbox',
    uploadKey: '3mCheckbox',
    formItemProps: { label: '选择' }
  },
  {
    componentName: 'mCheckboxGroup',
    uploadKey: '4mCheckboxGroup',
    formItemProps: {
      label: '多选'
    },
    componentProps: {
      options: [
        {label: 'Apple', value: 'AppleValue'},
        {label: 'Pear', value: 'Pear'},
        {label: 'Ora', value: 'Ora'}
      ]
    }
  },
  {
    componentName: 'mRangePicker',
    uploadKey: '5mRangePicker',
    formItemProps: { label: '日期范围' },
    componentProps: { format: 'YYYY/MM/DD' }
  },
  {
    componentName: 'mInput',
    uploadKey: '6mInput',
    defaultValue: '111',
    formItemProps: { label: 'mInput' },
  },
  {
    componentName: 'mInputNumber',
    uploadKey: '7mInputNumber',
    formItemProps: { label: '数字输入' },
    componentProps: { min: 1, max: 10 }
  },
  {
    componentName: 'mRadioGroup',
    uploadKey: '8mRadioGroup',
    formItemProps: { label: '单选' },
    componentProps: {
      options: [
        {label: 'Apple', value: 'Apple'},
        {label: 'Pear', value: 'Pear'},
        {label: 'Ora', value: 'Ora', disabled: true}
      ]
    }
  },
  {
    componentName: 'mRate',
    uploadKey: '9mRate',
    formItemProps: { label: 'mRate' },
  },
  {
    componentName: 'mSelect',
    uploadKey: '10mSelect',
    defaultValue: [],
    formItemProps: { label: 'mSelect' },
    componentProps: {
      mode: 'multiple',
      options: [
        { value: 'value1', label: '1' },
        { value: 'value2', label: '2' },
        { value: 'value3', label: '3' },
      ]
    }
  },
  {
    componentName: 'mSlider',
    uploadKey: '11mSlider',
    formItemProps: {
      label: 'mSlider'
    },
  },
  {
    componentName: 'mSwitch',
    uploadKey: '12mSwitch',
    formItemProps: {
      label: 'mSwitch'
    },
  },
  {
    componentName: 'mTimePicker',
    uploadKey: '13mTimePicker',
    formItemProps: {
      label: '时间'
    },
  },
  {
    componentName: 'mTimeRangePicker',
    uploadKey: '14mTimeRangePicker',
    formItemProps: {
      label: '时间范围'
    },
  },
  {
    componentName: 'mTreeSelect',
    uploadKey: '15mTreeSelect',
    formItemProps: {
      label: '树形选择'
    },
    componentProps: {
      treeData: [
        {
          label: 'root 1',
          value: 'root 1',
          children: [
            {
              label: 'parent 1',
              value: 'parent 1',
              children: [
                {
                  label: 'parent 1-0',
                  value: 'parent 1-0',
                  children: [
                    {
                      label: 'my leaf',
                      value: 'leaf1'
                    },
                    {
                      label: 'your leaf',
                      value: 'leaf2'
                    }
                  ]
                },
                {
                  label: 'parent 1-1',
                  value: 'parent 1-1'
                }
              ]
            },
            {
              label: 'parent 2',
              value: 'parent 2'
            }
          ]
        }
      ]
    }
  },
  {
    componentName: 'mUpload',
    uploadKey: '16mUpload',
    formItemProps: {
      label: 'mUpload'
    },
    defaultValue: [
      {
        name: '1',
        url: 'https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png',
      }
    ],
    componentProps: {
        uploadAsync: function() {
           return Promise.resolve({
                name: '测试1',
                url: 'https://www.runoob.com/try/demo_source/pineapple.jpg'
            })
        }
    }
  },
  {
    componentName: 'mPreviewDownload',
    uploadKey: '图片',
    defaultValue: 'https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png',
    formItemProps: {
      label: '图片'
    }
  },
  {
    componentName: 'mPreviewDownload',
    uploadKey: '18mPreviewDownload',
    defaultValue: 'https://www.runoob.com/try/demo_source/horse.ogg',
    formItemProps: {
      label: '音频'
    }
  },
  {
    componentName: 'mPreviewDownload',
    uploadKey: '19mPreviewDownload',
    defaultValue: 'https://www.runoob.com/try/demo_source/movie.mp4',
    formItemProps: {
      label: '视频'
    }
  },
  {
    componentName: 'mPreviewDownload',
    uploadKey: '20mPreviewDownload',
    defaultValue: 'https://static.jyshare.com/download/sites.xlsx',
    formItemProps: {
      label: 'xlsx'
    }
  },
  {
    componentName: 'mPreviewDownload',
    uploadKey: '21mPreviewDownload',
    defaultValue: 'https://www.runoob.com/manual/github-git-cheat-sheet.pdf',
    formItemProps: {
      label: 'pdf'
    },
  },
]);

watch(
    formRef,
    () => {
      console.log('formRef.value', formRef.value);
    },
    {
      deep: true
    }
);

</script>
```



### v-model:key
+ 在ant-design-vue的组件中，v-model绑定的key值不确定时的情况，即非上方文档 内置组件 中的组件，传入 vModelKey

#### 配置
```vue preview
<template>
  <m-form
        v-model="formRef"
        :items="items"
    ></m-form>
</template>
<script lang="ts" setup>
import {ref, watch, computed} from 'vue';

const formRef = ref({});

const menusRef = ref([
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
      },
    ],
  },
])

const items = ref([
 {
    componentName: 'mTree',
    uploadKey: 'menus',
    formItemProps: {
      label: '测试'
    },
    defaultValue: [],
    vModelKey: 'checkedKeys',
    componentProps: {
      checkable: true,
      treeData: computed(() => {
        return menusRef.value;
      }),
      onCheck(val) {
        formRef.value.menus = val;
      }
    }
  }
]);

setTimeout(
    () => {
        formRef.value.menus = ['0-0-1']
    },
    1000
)

</script>
```



### 自定义组件
+ 当内置组件无法满足需求时，可以进行自定义组件的配置
+  + 需要注册全局组件
+  + componentProps中的参数会注入组件
+  + 会传递一个value，这个value的值就是uploadKey，子组件触发update:value，会修改绑定的model对象

```vue preview
<template>
  <m-form
        v-model="formRef"
        :items="items"
    ></m-form>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';
import test from './component/test/index.vue'

const formRef = ref({});

const items = ref([
  {
    componentName: test, // 全局注册的组件名称
    uploadKey: 'custom', // form表单中的key
    defaultValue: '123', // 默认值
    formItemProps: {
      label: '自定义组件'
    },
    componentProps: {
      columns: [
        { title: 'Name', dataIndex: 'name', width: 200 },
        { title: 'Cash Assets', dataIndex: 'money', width: 200 },
        { title: 'Address', dataIndex: 'address' },
      ],
      data: [
        { name: 'John Brown', money: '￥300,000.00', address: 'New York No. 1 Lake Park' },
        { name: 'Jim Green', money: '￥1,256,000.00', address: 'London No. 1 Lake Park' },
        { name: 'Joe Black', money: '￥120,000.00', address: 'Sidney No. 1 Lake Park' }
      ]
    }
  },
]);

watch(
    formRef,
    () => {
      console.log('formRef.value', formRef.value);
    },
    {
      deep: true
    }
);



// <template>
//   <div>
//     <span>我是自定义组件</span>
//     <m-input v-model:value="customSelf" class="mt-8px" />
//     <m-table class="mt-8px" :columns="columns" :dataSource="data" :pagination="false" />
//   </div>
// </template>
// 
// import { defineComponent } from 'vue';
// import { useVModel } from '@vueuse/core/index';
// 
// export default defineComponent({
//   props: {
//     value: String,
//     columns: Array,
//     data: Array
//   },
//   setup(props, { emit }) {
//     const customSelf = useVModel(props, 'value', emit);
// 
//     return {
//       customSelf
//     };
//   }
// });



</script>
```


### antd功能
除弃用属性，其余属性、事件、插槽均支持
```vue preview
<template>
  <m-title>表单标题</m-title>
  <div class="mb-8px flex items-center">展示<m-switch v-model:checked="hidden" />隐藏</div>
  <m-form
        ref="formComRef"
        v-model="formRef"
        :items="items"
        :rules="rules"
    >
        <template #prefix="bindValue">
           <div v-if="bindValue.uploadKey === 'mInput1'">
             1prefix插槽
           </div>
           <div v-if="bindValue.uploadKey === 'mInput2'">
             2prefix插槽
           </div>
        </template>
    </m-form>
    <m-footer :items="footerItems"></m-footer>
</template>
<script lang="ts" setup>
import {ref, watch, computed} from 'vue';

const formComRef = ref()

const formRef = ref({});

const hidden = ref(false)

const items = ref([
  {
    componentName: 'mInput',
    uploadKey: 'mInput1',
    hidden: hidden,
    formItemProps: { label: 'mInput1' }
  },
  {
    componentName: 'mInput',
    uploadKey: 'mInput2',
    defaultValue: '默认值',
    formItemProps: { label: 'mInput2' },
    componentProps: {
        showCount:true,
    }
  },
  {
    componentName: 'mInput',
    hidden: hidden,
    uploadKey: 'mInput3',
    formItemProps: { 
        label: 'mInput3',
        rules: computed(
            () => {
                return hidden.value ? null : [
                            { required: true, message: 'form-item设置的必填', trigger: 'change' }
                        ]       
            }
        )
    },
  },
]);

const rules =computed(
    () => {
        return hidden.value ? null : {
            mInput1: [
                { required: true, message: 'form设置的必填', trigger: 'change' },
              ],
        }       
    }
)

const footerItems = ref([
    {
      async confirmAsync() {
        await formComRef.value.antFormComponent.validate()
        console.log(111)
      },
      label: '通过',
      mode: 'success',
    },
])

watch(
    formRef,
    () => {
      console.log('formRef.value', formRef.value);
    },
    {
      deep: true
    }
);

</script>
```



### form弃用属性
model（已在内部设置好，rules校验不受影响）

### form-item弃用
name（已在内部设置好，rules校验不受影响）

### Props

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| modelValue | 绑定的对象 | Object | - | - | 是 |
| items | 绑定的对象 | Array | [item[]](#item) | [] | 是 |
| columnsNumber | 列的数量 | Number | 1、2、3、4、5 | 3 | 否 |
| layout | label与input等组件的排列 | String | horizontal、vertical | horizontal | 否 |


### item

| 参数                                        | 说明                                                                                                  | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------|---------- |--------------------------------  |-------- |-------- |
| componentName                             | 组件名称                                                                                                | String | - | - | 是 |
| uploadKey                                 | 绑定数据对象中的key值                                                                                        | String | - | - | 是 |
| vModelKey                                 | 绑定组件v-model的key值（非本文档中内置组件中的部分，ant-design-vue其它的组件）                                                 | String | - | value | 否 |
| defaultValue                              | 组件的默认值，如多选组件的默认值为[]                                                                                 | - | - | false | 否 |
| hidden                                    | 是否隐藏                                                                                                | Boolean | - | false | 否 |
| condition: { enableChangeQuery: false, enableEnterQuery: false } | enableChangeQuery:此项为Page组件中的功能，开启后当数据改变时会触发查询。enableEnterQuery：page组件的功能，仅对input和inputEnter生效，回车搜索 | Boolean | - | false | 否 |
| formItemProps                             | form-item组件的props                                                                                   | - | - | - | 否 |
| componentProps                            | 组件的props，如a-input的props                                                                             | - | - | - | 否 |


### Expose

| 名称 | 说明 |
|---------- |-------- |
| antFormComponent | form实例 |
| antFormModel | v-model绑定的值 |
