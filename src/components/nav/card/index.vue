<script lang="tsx" setup>
import { ref } from "vue";

const getJson = async function (url: string | URL | Request) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}


const navs = await getJson(`/scripts/navs.json`);


const items = ref([
    {
        label: 'New',
        icon: 'pi pi-plus',
        shortcut: '⌘+N'
    },
    {
        label: 'Search',
        icon: 'pi pi-search',
        shortcut: '⌘+S'
    }
    ,
    {
        label: 'Settings',
        icon: 'pi pi-cog',
        shortcut: '⌘+O'
    },
    {
        label: 'Messages',
        icon: 'pi pi-inbox',
        badge: 2
    },
    {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        shortcut: '⌘+Q'
    }
]);
</script>
<template>

    <div v-for="nav in navs" class="py-1 ">
        <Card pt:root="bg-white" pt:title="border-solid border-b-1 border-slate-600" pt:content="card-content">
            <template #title>
                <div class=" ">
                    <svg class="icon inline" aria-hidden="true">
                        <use :xlink:href="nav.icon"></use>
                    </svg>
                    <span class="py-[8px]">{{ nav.title }}</span>
                </div>
            </template>
            <template #content>
                <div class="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-3">
                    <div v-for="item in nav?.items" class="overflow-hidden rounded-lg px-[10px] text-[14px] transition">
                        <a rel="nofollow" :href="item.url" target="_blank">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.icon"></use>
                            </svg><span>{{ item.content }}</span></a>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>
<style lang="scss" scoped>
svg.icon {
    --at-apply: mx-0 h-[42px] w-[42px] rounded-[10px] p-[8px];
}
</style>
