<script lang="tsx" setup>

import DataView from 'primevue/dataview';
import ClientOnly from '@components/common/ClientOnly';
import { getCollection } from "astro:content";
const posts = (await getCollection("docs")).sort(
    (a, b) => a.data.published.valueOf() - b.data.published.valueOf(),
);

</script>
<template>
    <!-- <ClientOnly>
        <Timeline pt:root="w-full" :value="posts">
            <template #content="slotProps">
                {{ slotProps.item.data.title }}
            </template>
</Timeline>
</ClientOnly> -->
    <DataView :value="posts" class="w-full " paginator :rows="8">
        <template #list="slotProps">
            <div class="flex flex-col">
                <div v-for="(item, index) in slotProps.items" :key="index">
                    <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                        :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                        <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                            <div class="flex flex-row md:flex-col justify-between items-start gap-2">

                            </div>
                            <div class="flex flex-col md:items-end gap-8">
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </DataView>
</template>