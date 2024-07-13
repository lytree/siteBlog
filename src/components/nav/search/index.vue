<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import Card from "primevue/card"
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from "primevue/inputtext"

import { type TabViewChangeEvent } from 'primevue/tabview';


const activeName = ref("0")
const searchText = ref('')

let url = 'https://www.baidu.com/s?wd='

function tabChange(originalEvent: TabViewChangeEvent) {
    console.log(originalEvent)

    switch (originalEvent.index) {
        case 0:
            url = 'https://www.baidu.com/s?wd='
            break
        case 1:
            url = 'https://www.google.com.hk/search?hl=zh-CN&q='
            break
        case 2:
            url = 'https://bing.com/search?q='
            break
        case 3:
            url = 'https://s.weibo.com/weibo?q='
            break
        default:
            break
    }
}

onMounted(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            // 在这里执行要触发的逻辑
            window.location.href = `${url}${searchText.value}`
        }
    }

    // 添加键盘事件监听
    document.addEventListener('keydown', handleKeyDown)

    // 在组件卸载时移除事件监听
    // 考虑到你想要的是在页面卸载前移除事件监听，因此这里使用了`beforeUnmount`
    // 如果你希望在页面卸载后再移除事件监听，可以使用`onUnmounted`
    onBeforeUnmount(() => {
        document.removeEventListener('keydown', handleKeyDown)
    })
})
</script>

<template>
    <Card class="card">
        <template #content>
            <Tabs class="w-full" v-model:value="activeName">
                <TabList>
                    <Tab value="0">百度一下</Tab>
                    <Tab value="1">谷歌搜索</Tab>
                    <Tab value="2">Bing</Tab>
                    <Tab value="3">微博</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="0">
                        <span class="p-input-icon-left w-full">
                            <i class="pi i-mdi-magnify"></i>
                            <InputText v-model="searchText" placeholder="百度一下" class="input-with-select" />
                        </span>
                    </TabPanel>
                    <TabPanel value="1">
                        <span class="p-input-icon-left w-full">
                            <i class="pi i-mdi-magnify"></i>
                            <InputText v-model="searchText" placeholder="谷歌搜索" class="input-with-select" />
                        </span>
                    </TabPanel>
                    <TabPanel value="2">
                        <span class="p-input-icon-left w-full">
                            <i class="pi i-mdi-magnify"></i>
                            <InputText v-model="searchText" placeholder="Bing搜索" class="input-with-select" />
                        </span>
                    </TabPanel>
                    <TabPanel value="3">
                        <span class="p-input-icon-left w-full">
                            <i class="pi i-mdi-magnify"></i>
                            <InputText v-model="searchText" placeholder="微博搜索" class="input-with-select" />
                        </span>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </template>
    </Card>
</template>

<style lang="scss">
.card {
    padding: 0.5rem;
    border-radius: 10px;
    margin-bottom: 0.5rem;
}


.input-with-select {
    --at-apply: pl-[2.5rem] h-[40px] w-full;
    border: 1px solid #cbd5e1;
}
</style>import type { TabClasses } from "primevue/tab/style";
