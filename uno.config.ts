import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography, presetWind,
    transformerDirectives,
} from 'unocss'
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
            "dark": '#18181b'
        }
    },
    presets: [

        presetWind({
            dark: "class"
        }),
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