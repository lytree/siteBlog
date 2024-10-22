<script lang="tsx" setup>
import type { MenuItem } from "primevue/menuitem";
withDefaults(defineProps<{
    title: string
}>(), {
    title: ""
})
const items: Array<MenuItem> = [

    {
        key: "index",
        label: "首页",
        icon: "pi icon-[material-symbols--home]",
        url: "/blog/"
    },
    {
        key: "archive",
        label: "归档",
        icon: "pi icon-[material-symbols--archive]",
        url: "/blog/archive/"

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
        icon: "pi icon-[material-symbols--person]",
        url: "/blog/about/"
    }
];
const pt = {
    root: ({ instance }: any) => [
        ' w-full h-full   border-0  p-menubar p-component',
        {
            'p-menubar-mobile': instance.queryMatches,
            'p-menubar-mobile-active': instance.mobileActive,
        }
    ],
    start: 'p-menubar-start',
    button: 'p-menubar-button',
    rootList: ' border-0 p-menubar-root-list ',
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
            <a href="/docs/" class="btn-plain scale-animation rounded-lg h-[3.25rem] px-5 font-bold active:scale-95">
                <div class="flex flex-row text-[var(--primary)] items-center text-md">
                    <span class="text-[1.75rem] mb-1 mr-2 icon-[material-symbols--home-outline-rounded]" />
                    {{ title }}
                </div>
            </a>
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
            <a :href="item.url" v-ripple :aria-label=item.name :target=item.external
                class="btn-plain scale-animation rounded-lg h-[3.25rem] px-5 font-bold active:scale-95"
                v-bind="props.action">
                <div class="flex flex-row text-[var(--primary)] items-center text-md">
                    <span class="text-[1.75rem] mb-1 mr-2 " :class="item.icon" />
                    {{ item.label }}
                </div>
                <span v-if="item.shortcut"
                    class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
                        item.shortcut }}</span>
                <i v-if="hasSubmenu"
                    :class="['pi i-material-symbols-arrow-downward', { 'i-material-symbols-arrow-downward ml-2': root, 'i-material-symbols-arrow-right ml-auto': !root }]"></i>
            </a>
        </template>
        <template #end>
            <div class="">
            </div>
        </template>
    </Menubar>
</template>
