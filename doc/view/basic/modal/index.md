## Modal

### 展示效果
+ 点击遮罩不会关闭
```vue preview
<template>
  <div>
    <m-button @click="showModal">Open</m-button>
    <m-modal v-model:open="open" title="标题" @ok="handleOk">
      <p>内容</p>
    </m-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  open.value = false;
};
</script>
```


### antd功能
+ 除弃用属性，其余属性、事件、插槽均支持

```vue preview
<template>
  <div>
    <m-button @click="showModal">Open</m-button>
    <m-modal v-model:open="open" title="标题" @ok="handleOk" confirmLoading>
      <p>内容</p>
    </m-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  open.value = false;
};
</script>
```


### antd弃用属性
