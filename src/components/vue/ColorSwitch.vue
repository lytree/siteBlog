<template>
    <div class="inline-block">
        <ClientOnly>
            <button id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button"
                :class="isDark ? 'icon-[material-symbols--mode-night]' : 'icon-[material-symbols--sunny]'"
                aria-label="Toggle dark mode" @click="toggleDark()"
                class="text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-5 h-5 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            </button>
        </ClientOnly>
    </div>
</template>
<script lang="tsx" setup>
import { toggleDark, isDark } from "@/composables/dark";
import ClientOnly from "@/components/vue/ClientOnly";



</script>