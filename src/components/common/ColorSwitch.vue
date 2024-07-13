<template>
    <Button icon="pi i-mdi-white-balance-sunny dark:i-mdi-weather-night" text rounded @click="toggleDark()">
    </Button>
</template>

<script lang="ts" setup>
import Button from "primevue/button";
import { toggleDark } from "@/composables/dark";
</script>