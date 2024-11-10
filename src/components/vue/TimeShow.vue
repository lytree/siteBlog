<script setup lang="tsx">
import * as dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const currentTime = ref(new Date());
let intervalId: string | number | NodeJS.Timeout | undefined = undefined;

onMounted(() => {
  intervalId = setInterval(() => {
    currentTime.value = new Date();
  }, 1000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = undefined;
  }
});
</script>
<template>
  <div id="show_date" class="m-[10px] text-center">{{ dayjs.default(currentTime).locale('zh-cn').format('YYYY-MM-DD dddd') }}</div>
  <div id="show_time" class="text-center" style="text-shadow: 1px 1px 2px #000">{{ dayjs.default(currentTime).format('HH:mm:ss') }}</div>
</template>
