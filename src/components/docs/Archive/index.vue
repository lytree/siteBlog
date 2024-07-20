<script lang="tsx" setup>

import Timeline from 'primevue/timeline';
import ClientOnly from '@components/common/ClientOnly';

const { posts } = defineProps(["posts"]);

console.log(posts);
</script>
<template>
    <ClientOnly>
        <Timeline pt:root="w-full" :value="posts">
            <template #content="slotProps">
                {{ slotProps.item.data.title }}
            </template>
        </Timeline>
    </ClientOnly>
</template>