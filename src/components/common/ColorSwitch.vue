<template>
    <Button icon="pi i-carbon-sun dark:i-carbon-moon" rounded @click="toggleDark()">

    </Button>
</template>
  
<script lang="ts" setup>
import Button from "primevue/button";
import { toggleDark } from "@/composables/dark"
</script>
  