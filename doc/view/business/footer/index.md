## Footer
用于页面中底部的操作展示

### 展示效果
+ 吸底展示
+ 按钮需要配置

#### 精简配置
```vue preview
<template>
  <div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <m-footer :items="items"></m-footer>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const items = ref([
    {
      confirmAsync() {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        resolve()
                    },
                    1000 * 3
                )
            }
        )
      },
      label: '取消',
    },
    {
      async confirmAsync() {
        console.log('驳回', arguments);
      },
      label: '驳回',
      mode: 'fail',
    },
    {
      async confirmAsync() {
        console.log('通过', arguments);
      },
      label: '通过',
      mode: 'success',
    },
])
</script>
```

#### 全部配置
```vue preview
<template>
  <div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <div class="h-40px">内容</div>
     <m-footer :items="items"></m-footer>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const items = ref([
    {
          // 获取是否为disabled
          disabled: false,
          // 获取是否为hidden
          hidden: false,
          // 点击回调
          async confirmAsync() {
            console.log('confirmAsync', arguments);
          },
          // 文字描述
          label: '通过',
          // 按钮类型
          mode: 'success',
          // 是否为loading状态
          loading: false
    },
])

setTimeout(
    () => {
      items.value[0].disabled = true;
      setTimeout(
          () => {
            items.value[0].disabled = false;
            items.value[0].hidden = true;
            setTimeout(
                () => {
                  items.value[0].hidden = false;
                  items.value[0].loading = true;
                },
                1000
            )
          },
          1000
      )
    },
    1000
)

</script>
```



### Props

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| [items](#items) | 配置项 | Array | - | [] | 是 |


### items

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| disabled | 是否禁止操作 | Boolean | - | false | 否 |
| hidden | 是否隐藏 | Boolean | - | false | 否 |
| confirmAsync | 点击回调 | Function | - | - | 是 |
| label | 展示内容 | String | - | - | 是 |
| mode | 按钮类型 | String | normal、fail、success | normal | 否 |
| loading | 是否loading状态 | Boolean | - | false | 否 |
