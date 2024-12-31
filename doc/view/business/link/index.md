## Link
用于展示可以跳转的链接内容

### 类型
+ type有不同的类型展示

```vue preview
<template>
  <div>
      <m-link>默认</m-link>
      <m-link type="success" class="ml-8px">
            成功
      </m-link>         
      <m-link type="info" class="ml-8px">
            提示
      </m-link>
      <m-link type="warning" class="ml-8px">
            警告
      </m-link>
      <m-link type="danger" class="ml-8px">
            危险
      </m-link>       
  </div>
</template>
<script lang="ts" setup>
</script>
```

### 禁止操作
+ 是否禁止操作

```vue preview
<template>
  <div>
     <div class="mb-8px flex items-center">正常<m-switch v-model:checked="disabled" />禁用</div>
     <m-link :disabled="disabled">
            默认
      </m-link>
      <m-link type="success" :disabled="disabled" class="ml-8px">
            成功
      </m-link>         
      <m-link type="info" :disabled="disabled" class="ml-8px">
            提示
      </m-link>
      <m-link type="warning" :disabled="disabled" class="ml-8px">
            警告
      </m-link>
      <m-link type="danger" :disabled="disabled" class="ml-8px">
            危险
      </m-link>    
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const disabled = ref(false)
</script>
```

### 跳转链接
+ 点击进行跳转

```vue preview
<template>
  <div>
      <m-link href="/test">
            跳转
      </m-link>
  </div>
</template>
<script lang="ts" setup>
</script>
```


**Props**

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| type | 类型 | String | primary、success、info、warning、danger | primary | 否 |
| disabled | 是否禁止操作 | Boolean | - | false | 否 |
| href | 跳转链接 | String | - | - | 否 |
