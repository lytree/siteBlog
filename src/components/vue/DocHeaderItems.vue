<script lang="tsx" setup>
import Menubar from "primevue/menubar";
import type { MenuItem } from "primevue/menuitem";

const items: Array<MenuItem> = [
    {
        label: "首页",
        icon: "pi i-mdi-home",
        url: "/docs",
    },
    {
        label: "归档",
        icon: "pi i-mdi-archive",
        url: "/docs/archive",
    },
    {
        label: "分类",
        icon: "pi i-mdi-category",
        url: "/docs/category",
    },
    {
        label: "标签",
        icon: "pi i-mdi-tag",
        url: "/docs/tag",
    },
    {
        label: "关于",
        icon: "pi i-mdi-about",
        url: "/docs/about",
    },
];


</script>
<template>
    <div>
        <Menubar :model="items">
            <template #start>
                <slot name="avatar"></slot>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <a :href="item.url" v-ripple class="px-2 flex items-center" v-bind="props.action">
                    <span class="ml-1px" :class="item.icon" />
                    <span class="ml-2px">{{ item.label }}</span>
                    <span v-if="item.shortcut"
                        class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
                            item.shortcut }}</span>
                    <i v-if="hasSubmenu"
                        :class="['pi i-mdi-arrow-down', { 'i-mdi-arrow-down ml-2': root, 'i-mdi-arrow-right ml-auto': !root }]"></i>
                </a>
            </template>
            <template #end>

            </template>
        </Menubar>
    </div>
</template>
<style lang="scss" scoped>
:deep(.p-menubar) {
    --at-apply: w-full bg-[var(--card-bg)] border-0;

    .p-menubar-root-list {
        --at-apply: flex flex-auto justify-center mx-2 leading-12;
    }


}
</style>
