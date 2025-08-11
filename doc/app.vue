<script setup lang="ts">
import { zhCN } from '../package/main';
import packageJson from '../package.json';
import PageMenu from './component/menu/index.vue';
import anthor from './component/anchor/index.vue';

const version = `v${packageJson.version}`;
</script>

<template>
  <m-config-provider :locale="zhCN">
    <div class="h-100% flex overflow-hidden">
      <div class="w-200px h-100% overflow-y-auto flex flex-col">
        <div class="p-8px">
          <m-input :value="version" readonly />
        </div>
        <PageMenu />
      </div>
      <div class="flex-1 h-100% p-8px overflow-y-auto">
        <div id="container" class="h-100% overflow-auto translate-x-0 translate-y-0">
          <router-view class="markdown-body" />
        </div>
      </div>
      <anthor />
    </div>
  </m-config-provider>
</template>

<style scoped lang="scss"></style>
