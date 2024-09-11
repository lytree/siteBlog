<template>
    <div class="inline-block">
        <ClientOnly>
            <Button icon="pi" :iconClass="isDark ? 'i-material-symbols:mode-night' : 'i-material-symbols:sunny'"
                size="small" text rounded @click="toggleDark()">
            </Button>
        </ClientOnly>
    </div>
</template>

<script lang="tsx" setup>
import Button from "primevue/button";
import { toggleDark, isDark } from "@/composables/dark";
import ClientOnly from "@/components/vue/ClientOnly";



</script>