<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { ROUTERS } from '@doc/router/index';

const router = useRouter();

function getRouters(name) {
  return Object.values(ROUTERS[name]).map((item) => {
    return {
      key: item.path,
      label: item.meta.title
    };
  });
}

const items = ref([
  {
    key: 'INTRODUCE',
    label: '介绍',
    children: getRouters('INTRODUCE')
  },
  {
    key: 'BASIC',
    label: '基础',
    children: getRouters('BASIC')
  },
  {
    key: 'BUSINESS',
    label: '业务',
    children: getRouters('BUSINESS')
  }
]);

const openKeysRef = ref(['INTRODUCE', 'BASIC', 'BUSINESS']);
const selectedKeysRef = ref([]);

function handleSelect({ key }) {
  router.push(key);
}

watch(
  router.currentRoute,
  () => {
    selectedKeysRef.value = [router.currentRoute.value.path];
  },
  {
    immediate: true,
    deep: true
  }
);
</script>

<template>
  <m-menu
    v-model:selectedKeys="selectedKeysRef"
    v-model:openKeys="openKeysRef"
    mode="inline"
    :items="items"
    class="flex-1"
    @select="handleSelect"
  />
</template>
