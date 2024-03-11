<script setup lang="ts">
import { siteUtils } from "@/utils/utils";

const { defaultCover, posts } = defineProps(["defaultCover", "posts"]);

const goToUrl = (slug: string) => {
    siteUtils.goToUrl(slug);
}

</script>
<template>
    <div class="posts-list">
        <div v-for="post in posts">
            <div class="main-card post-card" @click=goToUrl(post.slug)>
                <div class="post-card-cover">
                    <img :src="`${post.data.cover || defaultCover}`" alt="post-cover" />
                </div>
                <div class="post-card-info">
                    <header class="post-card-header">
                        <a v-if="post.data?.category" class="post-card-category"
                            :href="`/categories/${post.data.category}`">
                            {{ post.data.category }}
                        </a>

                        <div v-else class="post-card-category">{{ post.data.category }}</div>

                    </header>
                    <div class="post-card-title">{{ post.data.title }}</div>
                    <div class="post-card-desc"> {{ post.data.description }}</div>
                    <footer class="post-card-footer">
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
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>