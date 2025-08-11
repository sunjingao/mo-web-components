## Button

### 模式
+ 按钮仅有三种颜色效果，
+ + normal：白色背景；用于取消等无状态的操作
+ + fail：红色背景；用于失败、反对、驳回等状态的操作
+ + success：蓝色背景；用于成功、同意、通过、确认等状态的操作
```vue preview
<template>
<div>
    <m-button>取消</m-button>
    <br />
    <m-button mode="fail" class="mt-8px">驳回</m-button>
    <br />
    <m-button mode="success" class="mt-8px">确定</m-button>
</div>
</template>
<script lang="ts" setup>
</script>
```

### antd功能
+ 除弃用属性，其余属性、事件、插槽均支持

```vue preview
<template>
<div>
    <div class="mb-8px flex items-center">正常<m-switch v-model:checked="disabled" />禁用</div>
    <m-button :disabled="disabled" @click="handleClick">取消</m-button>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const disabled = ref(false)

function handleClick() {
    console.log('click')
}
</script>
```

### antd弃用属性
type、danger、target

### Props

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| mode | 模式 | string | normal、fail、success | normal | 否 | 
