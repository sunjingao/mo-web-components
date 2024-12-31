## Drawer

### 展示效果
+ 点击遮罩不会关闭
```vue preview
<template>
<div>
   <m-button @click="showDrawer">Open</m-button>
   <m-drawer
    v-model:open="open"
    title="标题"
  >
    <template #extra>
        <m-button @click="cancel">关闭</m-button>
        <m-button class="ml-8px" mode="success" @click="submit">开启</m-button>
    </template>
  </m-drawer>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const open = ref(false);

const showDrawer = () => {
  open.value = true;
};

function cancel() {
    open.value = false
}

function submit() {
    open.value = false
}
</script>
```





### antd功能
+ 除弃用属性，其余属性、事件、插槽均支持

```vue preview
<template>
<div>
   <m-button @click="showDrawer">Open</m-button>
   <m-drawer
    v-model:open="open"
    title="标题"
    placement="left"
    @afterOpenChange="handleAfterOpenChange"
  >
    <template #extra>
       <m-button @click="cancel">关闭</m-button>
      <m-button class="ml-8px" mode="success" @click="submit">开启</m-button>
    </template>
  </m-drawer>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const open = ref(false);

const showDrawer = () => {
  open.value = true;
};

function cancel() {
    open.value = false
}

function submit() {
    open.value = false
}

function handleAfterOpenChange() {
    console.log('handleAfterOpenChange')
}
</script>
```


### antd弃用属性
