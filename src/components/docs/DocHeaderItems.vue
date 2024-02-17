<script lang="ts" setup>
import Menubar from "primevue/menubar";
import ColorSwitch from "@/components/common/ColorSwitch.vue";
const { items, title } = defineProps(["items", "title"]);
</script>
<template>
    <Menubar class="" :model="items">
        <template #start>
            <h2 class="p-0 m-0">{{ title }}</h2>
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
            <a v-ripple class="px-2 flex items-center " v-bind="props.action">
                <span class="ml-1px" :class="item.icon" />
                <span class="ml-2px">{{ item.label }}</span>
                <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
                    item.shortcut }}</span>
                <i v-if="hasSubmenu"
                    :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </a>
        </template>
        <template #end>
            <div class="flex">
                <ColorSwitch class="h-32px" />
            </div>
        </template>
    </Menubar>
</template>
<style lang="scss" scoped>
:deep(.p-menubar-root-list) {
    --at-apply: mx-2 leading-48px;

    .p-menuitem {
        --at-apply: rounded;
    }

    .p-menuitem-content {
        --at-apply: rounded;
    }
}
</style>
