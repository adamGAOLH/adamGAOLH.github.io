<template>
  <div>我是首页</div>
  <button>点击我</button>
  <div class="bofs">我的信息是{{ userInfo }}</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const { userInfo } = storeToRefs(userStore);
</script>

<style lang="scss">
.bofs {
  color: $test-color;
}
</style>
