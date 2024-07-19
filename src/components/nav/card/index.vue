<script lang="tsx" setup>
import Card from "primevue/card";

import { siteUtils } from "../../../utils/utils";

const navs = await siteUtils.getJson(`/scripts/navs.json`);
</script>
<template>
    <div>
        <div v-for="nav in navs" class="py-4">
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
                    <div class="grid md:grid-cols-6 grid-cols-3">
                        <div v-for="item in nav?.items"
                            class="overflow-hidden rounded-lg px-[10px] text-[14px] transition">
                            <a rel="nofollow" :href="item.url" target="_blank">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="item.icon"></use>
                                </svg><span>{{ item.content }}</span></a>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>
<style lang="scss" >
svg.icon {
    --at-apply: mx-0 h-[42px] w-[42px] rounded-[10px] p-[8px];
}
</style>