<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import Card from "primevue/card";
import type { NavGroup, NavItem } from "./type.ts"
import { siteUtils } from "../../../utils/utils";

const navs = await siteUtils.getJson(`/scripts/navs.json`);
</script>
<template>
    <div v-for="nav in navs" class="py-4 ">
        <Card class="nav">
            <template #title>
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="nav.icon"></use>
                </svg>
                <span>{{ nav.title }}</span>
            </template>
            <template #content>
                <div class="flex flex-wrap">
                    <div v-for="item in nav?.items" class="label">
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
.nav {
    .label {
        --at-apply: overflow-hidden rounded-lg px-10px text-14px transition md:col-1 col-3;

        svg.icon {
            --at-apply: mx-0 block h-42px w-42px rounded-10px p-8px;
        }
    }

    :deep(.p-card-title) {
        border-bottom: 1px solid var(--surface-border);

        svg.icon {
            display: inline;
            width: 24px;
            height: 24px;
            margin: 0 5px 0 8px;
            fill: currentColor;
            overflow: hidden;
        }


    }

}
</style>