<script lang="tsx" setup>
import type { MenuItem } from "primevue/menuitem";

const items: Array<MenuItem> = [
    {
        key: "index",
        label: "首页",
        icon: "pi i-mdi-home",
        url: "/docs",
    },
    {
        key: "archive",
        label: "归档",
        icon: "pi i-mdi-archive",
        url: "/docs/archive",
    },
    {
        key: "category",
        label: "分类",
        icon: "pi i-mdi-category",
        url: "/docs/category",
    },
    {
        key: "tag",
        label: "标签",
        icon: "pi i-mdi-tag",
        url: "/docs/tag",
    },
    {
        key: "about",
        label: "关于",
        icon: "pi i-mdi-about",
        url: "/docs/about",
    }
];
const pt = {
    root: ({ instance }: any) => [
        'p-menubar p-component',
        {
            'p-menubar-mobile': instance.queryMatches,
            'p-menubar-mobile-active': instance.mobileActive
        }
    ],
    start: 'p-menubar-start',
    button: 'p-menubar-button',
    rootList: 'p-menubar-root-list',
    item: ({ instance, processedItem }: any) => {

        return [
            'p-menubar-item',
            {
                'p-menubar-item-active': instance.isItemActive(processedItem),

            }
        ]
    },
    itemContent: 'p-menubar-item-content',
    itemLink: 'p-menubar-item-link',
    itemIcon: 'p-menubar-item-icon',
    itemLabel: 'p-menubar-item-label',
    submenuIcon: 'p-menubar-submenu-icon',
    submenu: 'p-menubar-submenu',
    separator: 'p-menubar-separator',
    end: 'p-menubar-end'
}

</script>
<template>
    <div>
        <Menubar :model="items" breakpoint="768px" :pt=pt>
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
