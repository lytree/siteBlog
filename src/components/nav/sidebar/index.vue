<template>
    <Menu :model="items">
    </Menu>
</template>

<script setup lang="tsx">
import { ref } from "vue";

const items = ref([
    {
        label: 'New',
        icon: 'pi pi-plus',
        shortcut: '⌘+N'
    },
    {
        label: 'Search',
        icon: 'pi pi-search',
        shortcut: '⌘+S'
    }
    , {
        label: 'Settings',
        icon: 'pi pi-cog',
        shortcut: '⌘+O'
    },
    {
        label: 'Messages',
        icon: 'pi pi-inbox',
        badge: 2
    },
    {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        shortcut: '⌘+Q'
    }

]);
</script>
