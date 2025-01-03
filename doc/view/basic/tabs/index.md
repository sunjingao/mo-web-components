## Tabs

### 展示效果
+ 按照UiUe规范，操作应该在右侧
```vue preview
<template>
<div>
  <m-tabs v-model:activeKey="activeKey">
    <m-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</m-tab-pane>
    <m-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</m-tab-pane>
    <m-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</m-tab-pane>
  </m-tabs>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const activeKey = ref('1');
</script>
```

### antd弃用属性
