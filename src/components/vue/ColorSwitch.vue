<template>
    <div class="inline-block">
        <ClientOnly>
            <button id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button"
                :class="isDark ? 'icon-[material-symbols--mode-night]' : 'icon-[material-symbols--sunny]'"
                aria-label="Toggle dark mode" @click="toggleDark()"
                class="inline-flex items-center justify-center w-5 h-5  rounded-lg p-2">
            </button>
        </ClientOnly>
    </div>
</template>
<script lang="tsx" setup>
import { toggleDark, isDark } from "@/composables/dark";
import ClientOnly from "@/components/vue/ClientOnly";



</script>