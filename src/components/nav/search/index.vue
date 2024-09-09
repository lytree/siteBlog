<script lang="tsx" setup>
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

const CardClass = {
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

const TabsClass = {
    /**
 * Class name of the root element
 */
    root: 'p-tabs'
}
const TabListClasses = {
    /**
 * Class name of the root element
 */
    root: 'p-tablist',
    /**
     * Class name of the content element
     */
    content: 'p-tablist-content',
    /**
     * Class name of the tabs element
     */
    tabList: 'p-tablist-tab-list',
    /**
     * Class name of the activebar element
     */
    activeBar: 'p-tablist-active-bar',
    /**
     * Class name of the previous button element
     */
    prevButton: 'p-tablist-prev-button',
    /**
     * Class name of the next button element
     */
    nextButton: 'p-tablist-next-button'
}

const TabPanelsClasses = {
    /**
     * Class name of the root element
     */
    root: 'p-tabpanels'
}

const TabPanelClasses = {
    /**
     * Class name of the root element
     */
    root: 'p-tabpanel'
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
    <Card :pt="CardClass">
        <template #content>
            <Tabs class="w-full" v-model:value="activeName" :pt="TabsClass">
                <TabList :pt="TabListClasses">
                    <Tab value="0">百度一下</Tab>
                    <Tab value="1">谷歌搜索</Tab>
                    <Tab value="2">Bing</Tab>
                    <Tab value="3">微博</Tab>
                </TabList>
                <TabPanels :pt="TabPanelsClasses">
                    <TabPanel :pt="TabPanelClasses" value="0">
                        <IconField>
                            <InputIcon class="pi pi-search" />
                            <InputText v-model="searchText" placeholder="百度一下" pt:root="input-with-select" />
                        </IconField>
                    </TabPanel>
                    <TabPanel :pt="TabPanelClasses" value="1">
                        <IconField>
                            <InputIcon class="pi pi-search" />
                            <InputText v-model="searchText" placeholder="谷歌搜索" pt:root="input-with-select" />
                        </IconField>
                    </TabPanel>
                    <TabPanel :pt="TabPanelClasses" value="2">
                        <IconField>
                            <InputIcon class="pi pi-search" />
                            <InputText v-model="searchText" placeholder="Bing搜索" pt:root="input-with-select" />
                        </IconField>
                    </TabPanel>
                    <TabPanel :pt="TabPanelClasses" value="3">
                        <IconField>
                            <InputIcon class="pi pi-search" />
                            <InputText v-model="searchText" placeholder="微博搜索" pt:root="input-with-select" />
                        </IconField>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </template>
    </Card>
</template>

<style lang="scss" scoped>
.card {
    padding: 0.5rem;
    border-radius: 10px;
    margin-bottom: 0.5rem;
}

:deep(.p-tabpanels) {
    --at-apply: py-4 px-0
}

.input-with-select {
    border: 1px solid #cbd5e1;
    --at-apply: pl-2.5 h-10 w-full;
}
</style>
