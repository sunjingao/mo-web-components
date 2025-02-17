<template>
  <m-anchor
    v-if="isShowRef"
    class="mr-8px"
    :items="itemsRef"
    :getContainer="getContainer"
    @click="handleClick"
  />
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();

    // 切换页面后，相同id的dom会自定定位，解决这个问题
    const isShowRef = ref(true);

    const itemsRef = ref([]);

    function getContainer() {
      return document.getElementById('container');
    }

    router.afterEach(() => {
      isShowRef.value = false;
      nextTick(() => {
        isShowRef.value = true;

        itemsRef.value = [...document.getElementById('container').querySelectorAll('h3')].map(
          (item) => {
            return {
              key: `${item.id}`,
              href: `#${item.id}`,
              title: `${item.id}`
            };
          }
        );
      });
    });

    function handleClick(e) {
      e.preventDefault();
    }

    return {
      itemsRef,
      isShowRef,
      getContainer,
      handleClick
    };
  }
});
</script>
<style lang="scss" src="./css/index.scss"></style>
