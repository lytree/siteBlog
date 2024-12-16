/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const { addDynamicIconSelectors } = require('@iconify/tailwind');
import plugin from 'tailwindcss/plugin';
export default {
  content: ['./src/**/*.{astro,html,css,scss,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.{astro,html,css,scss,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      color: {
        'primary': {
          '50': '#f2f7fb',
          '100': '#e7f0f8',
          '200': '#d3e2f2',
          '300': '#b9cfe8',
          '400': '#9cb6dd',
          '500': '#839dd1',
          '600': '#6a7fc1',
          '700': '#6374ae',
          '800': '#4a5989',
          '900': '#414e6e',
          '950': '#262c40',
        },
        'accent': {
          '50': '#fffbea',
          '100': '#fff2c5',
          '200': '#ffe585',
          '300': '#ffd146',
          '400': '#ffbc1b',
          '500': '#ff9800',
          '600': '#e27100',
          '700': '#bb4c02',
          '800': '#983a08',
          '900': '#7c300b',
          '950': '#481700',
        },
      },
    },
  },
  corePlugins: {
    container: false, // 不在项目中使用 container 类; 禁用
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('flowbite/plugin'),
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
    }),
    addDynamicIconSelectors({
      scale: 1.5,
    })
  ]
}

