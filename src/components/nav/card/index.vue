<script lang="tsx" setup>
import { ref } from "vue";
import type { NavGroup } from "./type";

withDefaults(defineProps<{
    list: NavGroup[]
}>(), {
    list: () => []
})
const cardPt = {
    /**
         * Class name of the root element
         */
    root: 'p-card',
    /**
     * Class name of the header element
     */
    header: 'p-card-header',
    /**
     * Class name of the body element
     */
    body: 'p-card-body',
    /**
     * Class name of the caption element
     */
    caption: 'p-card-caption',
    /**
     * Class name of the title element
     */
    title: 'p-card-title',
    /**
     * Class name of the subtitle element
     */
    subtitle: 'p-card-subtitle',
    /**
     * Class name of the content element
     */
    content: 'p-card-content',
    /**
     * Class name of the footer element
     */
    footer: 'p-card-footer'
}

</script>
<template>

    <div v-for="nav in list" class="py-1 ">
        <Card :pt="cardPt">
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
