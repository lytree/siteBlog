import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  selector: 'html',
  storageKey: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
})

export const toggleDark = useToggle(isDark)
