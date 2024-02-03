<script lang="ts" setup>
import Menubar from "primevue/menubar";
const { items: [] } = defineProps(["items"]);
</script>
<template>
    <Menubar class="leading-7" :model="items"></Menubar>
</template>
