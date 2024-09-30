<script lang="tsx" setup>
import type { MenuItem } from "primevue/menuitem";

const items: Array<MenuItem> = [

    {
        key: "index",
        label: "首页",
        icon: "pi i-material-symbols-home",
        url: "/blog"
    },
    {
        key: "archive",
        label: "归档",
        icon: "pi i-material-symbols-archive",
        url: "/blog/archive"

    },
    // {
    //     key: "category",
    //     label: "分类",
    //     icon: "pi i-material-symbols-category",
    //     url: "/blog/category"
    // },
    // {
    //     key: "tag",
    //     label: "标签",
    //     icon: "pi i-material-symbols-tag",
    //     url: "/blog/tag"
    // },
    {
        key: "about",
        label: "关于",
        icon: "pi i-material-symbols-person",
        url: "/blog/about"
    }
];
const pt = {
    root: ({ instance }: any) => [
        ' w-full h-full bg-[var(--card-bg)]  border-0  p-menubar p-component',
        {
            'p-menubar-mobile': instance.queryMatches,
            'p-menubar-mobile-active': instance.mobileActive,
        }
    ],
    start: 'p-menubar-start',
    button: 'p-menubar-button',
    rootList: 'bg-[var(--card-bg)] border-0 p-menubar-root-list ',
    item: ({ instance, processedItem }: any) => {
        return [
            'p-menubar-item',
            {
                'p-menubar-item-active': instance.isItemActive(processedItem),
                'p-disabled': instance.isItemDisabled(processedItem)
            }
        ]
    },
    itemContent: 'p-menubar-item-content',
    itemLink: 'p-menubar-item-link',
    itemIcon: 'p-menubar-item-icon',
    itemLabel: 'p-menubar-item-label',
    submenuIcon: 'p-menubar-submenu-icon',
    submenu: ({ instance, processedItem }: any) => {
        return [
            'p-menubar-submenu',
            {
                'flex': instance.isItemActive(processedItem),
                'hidden': !instance.isItemActive(processedItem),
            }
        ]
    },
    separator: 'p-menubar-separator',
    end: 'p-menubar-end'
}
</script>
<template>
    <Menubar id="MenuHeader" :model="items" breakpoint="768px" :pt=pt>
        <template #start>
            <!-- <div>test</div> -->
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
            <a :href="item.url" v-ripple class="px-2 flex items-center" v-bind="props.action">
                <span class="ml-1px" :class="item.icon" />
                <span class="ml-2px">{{ item.label }}</span>
                <span v-if="item.shortcut"
                    class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
                        item.shortcut }}</span>
                <i v-if="hasSubmenu"
                    :class="['pi i-material-symbols-arrow-downward', { 'i-material-symbols-arrow-downward ml-2': root, 'i-material-symbols-arrow-right ml-auto': !root }]"></i>
            </a>
        </template>
        <template #end>
            <!-- <div>test</div> -->
        </template>
    </Menubar>
</template>
