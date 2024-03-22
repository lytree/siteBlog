<script setup lang="ts">
import { siteUtils } from "@/utils/utils";
import Card from 'primevue/card';
const { defaultCover, post } = defineProps(["defaultCover", "post"]);

const goToUrl = (slug: string) => {
    siteUtils.goToUrl("docs/post/" + slug);
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
    <Card class="mx-auto my-4 " style="width: 80%; overflow: hidden" @click=goToUrl(post.slug)>
        <template #header>
            <img class="transition ease-in-out hover:-translate-2 hover:scale-110 duration-300"
                :src="`${post.data.cover || defaultCover}`" />
            <a class="post-card-category" :href="`/categories/${post.data.category}`">
                {{ post.data.category }}
            </a>
        </template>
        <template #title>{{ post.data.title }}</template>
        <template #content>
            <p class="m-0">
                {{ post.data.description }}
            </p>
        </template>
        <template #footer>
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
        </template>
    </Card>
</template>
<style lang="scss">
.p-card {
    --at-apply: flex h-64;
    cursor: pointer;

    &-header {
        --at-apply: h-full flex justify-center;
        transition: .3s ease-in-out;
        border-radius: 15px 0 0 15px;

    }

    &-body {
        --at-apply: h-full flex flex-col col-6 ml-4;

    }

    &-footer {
        --at-apply: justify-center;
    }
}
</style>