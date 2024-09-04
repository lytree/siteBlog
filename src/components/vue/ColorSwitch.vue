<template>
    <div class="inline-block">
        <ClientOnly>
            <Button :pt="pt" icon="pi" :iconClass="isDark ? 'i-mdi:moon-waning-crescent' : 'i-mdi:white-balance-sunny'"
                size="small" text rounded @click="toggleDark()">
            </Button>
        </ClientOnly>
    </div>
</template>

<script lang="tsx" setup>
import Button from "primevue/button";
import { toggleDark, isDark } from "@/composables/dark";
import ClientOnly from "@/components/vue/ClientOnly";

const pt: any = {
    root: ({ instance, props }: any) => [
        'p-button p-component',
        {
            'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
            'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
            'p-button-loading': props.loading,
            'p-button-link': props.link,
            [`p-button-${props.severity}`]: props.severity,
            'p-button-raised': props.raised,
            'p-button-rounded': props.rounded,
            'p-button-text': props.text,
            'p-button-outlined': props.outlined,
            'p-button-sm': props.size === 'small',
            'p-button-lg': props.size === 'large',
            'p-button-plain': props.plain,
            'p-button-fluid': instance.hasFluid
        }
    ],
    loadingIcon: 'p-button-loading-icon',
    icon: ({ props }: any) => [
        'p-button-icon',
        {
            [`p-button-icon-${props.iconPos}`]: props.label
        }
    ],
    label: 'p-button-label'
};


</script>