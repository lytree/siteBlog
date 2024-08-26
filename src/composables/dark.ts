import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  selector: 'html',
  attribute: "class",
  storageKey: 'theme',
  valueDark: 'dark',
  valueLight: 'light',
})


export const toggleDark = useToggle(isDark); 
