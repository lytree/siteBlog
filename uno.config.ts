import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetWind,
    transformerDirectives,
} from 'unocss'
import { presetGrid } from './plugin/unocss/BoostrapGrid'
export default defineConfig({
    content: {
        pipeline: {
            exclude: ['node_modules', 'dist', '.git', '.husky', '.vscode', 'public', 'build', 'mock', './stats.html', 'assets/style'],
        },
    },
    transformers: [transformerDirectives()],
    shortcuts: [
        ['border-top', 'border-t-[1px] border-b-0 border-x-0   light:border-[#3c3c3c1f] dark:border-[#5454547a] border-solid'],
        ['border-bottom', 'border-b-[1px] border-t-0 border-x-0   light:border-[#3c3c3c1f] dark:border-[#5454547a] border-solid'],
    ],
    rules: [],
    theme: {
        colors: {
            primary: "rgb(var(--color-primary) / <alpha-value>)",
            secondary: "rgb(var(--color-secondary) / <alpha-value>)",
            accent: "rgb(var(--color-accent) / <alpha-value>)",
            warning: "rgb(var(--color-warning) / <alpha-value>)",
            danger: "rgb(var(--color-danger) / <alpha-value>)",
            success: "rgb(var(--color-success) / <alpha-value>)",
            light: "rgb(var(--color-light) / <alpha-value>)",
            dark: "rgb(var(--color-dark) / <alpha-value>)",
            info: "rgb(var(--color-info) / <alpha-value>)",
        },
        fontFamily: {
            sans: ["'Inter Tight Variable'", "Helvetica", "Verdana", "sans-serif"],
            body: ["'Inter Tight Variable'", "Helvetica", "Verdana", "sans-serif"],
        },
        boxShadow: {
            inset: " inset 2px 2px 40px -20px rgba(0, 0, 0, 0.3)",
            "inset-s": " inset 2px 2px 30px -10px rgba(0, 0, 0, 0.4)",
        }
    },
    presets: [
        presetGrid(),
        presetWind(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
        presetTypography({
            selectorName: 'markdown-body',
            cssExtend: {
                '*': {
                    'text-align': 'left',
                },
                'p img': { display: 'block', margin: '0 auto' },
            },
        }),
        // presetGrid({
        //   piece: "0px"
        // })
        // presetWebFonts({
        //   fonts: {
        //     sans: 'DM Sans',
        //     serif: 'DM Serif Display',
        //     mono: 'DM Mono',
        //   },
        // }),
    ],
})