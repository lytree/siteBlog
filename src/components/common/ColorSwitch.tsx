import { type DefineComponent, defineComponent, type PropType } from 'vue';
import Button from "primevue/button";
import { toggleDark } from "@/composables/dark";

export default defineComponent({
    name: "ColorSwitch",
    inheritAttrs: false,
    setup(props) {
        return () => (
            <Button icon="pi i-mdi-white-balance-sunny dark:i-mdi-weather-night" text rounded onClick={() => toggleDark()}>
            </Button>
        );
    },
})