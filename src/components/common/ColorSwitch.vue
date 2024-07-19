<template>
    <Button icon="pi" :iconClass="isDark?'pi-moon': 'pi-sun' " text rounded @click="toggleDark()">
    </Button>
</template>

<script lang="tsx" setup>
import Button from "primevue/button";
import { toggleDark, isDark } from "@/composables/dark";
</script>