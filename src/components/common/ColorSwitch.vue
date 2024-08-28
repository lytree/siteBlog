<template>
    <ClientOnly>
        <Button icon="pi" :iconClass="isDark ? 'i-mdi:moon-waning-crescent' : 'i-mdi:white-balance-sunny'" text rounded @click="toggleDark()">
        </Button>
    </ClientOnly>
</template>

<script lang="tsx" setup>
import Button from "primevue/button";
import { toggleDark, isDark } from "@/composables/dark";
import ClientOnly from "@/components/common/ClientOnly.tsx";
</script>