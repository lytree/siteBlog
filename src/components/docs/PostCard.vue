<script setup lang="ts">
import { siteUtils } from "@/utils/utils";
import Card from 'primevue/card';
const { defaultCover, post } = defineProps(["defaultCover", "post"]);

const goToUrl = (slug: string) => {
    siteUtils.goToUrl(slug);
}

</script>
<template>
    <!-- <div class="main-card post-card" @click=goToUrl(post.slug)>
        <div class="post-card-cover">
            <img :src="`${post.data.cover || defaultCover}`" alt="post-cover" />
        </div>
        <div class="post-card-info">
            <header class="post-card-header">
                <a v-if="post.data?.category" class="post-card-category" :href="`/categories/${post.data.category}`">
                    {{ post.data.category }}
                </a>

                <div v-else class="post-card-category">{{ post.data.category }}</div>

            </header>
            <div class="post-card-title">{{ post.data.title }}</div>
            <div class="post-card-desc"> {{ post.data.description }}</div>
            <div class="post-card-footer">
                <ul class="post-card-tags">
                    <li v-for="tag in post.data.tags" class="post-card-tag">
                        <a v-if="tag && tag != ''" :href="`/tags/${tag}`">{{ tag }}</a>
                    </li>

                </ul>
                <div class="post-card-update">
                    <a href="/">
                        {{ siteUtils.formatDate(post.data.updatedDate || post.data.pubDate) }}
                    </a>
                </div>
            </div>
        </div>
    </div> -->
    <Card class="mx-auto" style="width: 60%; overflow: hidden">
        <template #header>
            <img :src="`${post.data.cover || defaultCover}`" />
        </template>
        <template #title>{{ post.data.title }}</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
            <p class="m-0">
                {{ post.data.description }}
            </p>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button label="Cancel" severity="secondary" outlined class="w-full" />
                <Button label="Save" class="w-full" />
            </div>
        </template>
    </Card>
</template>