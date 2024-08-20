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
        borderRadius: {
            none: '0',
            xs: '2px',
            sm: '4px',
            md: '6px',
            lg: '8px',
            xl: '12px',
            "2xl": '16px',
            "3xl": '24px'
        },
        colors: {
            "dark": '#18181b',
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
        },		// 这里使用了与「吐槽大王部落格」同款的圆体字体。
        // 如果你希望使用其它字体或默认字体，可以修改下面的字体列表或直接删除这一属性。
        fontFamily: {
            sans: ['"ChillRoundF"', "'-apple-system'", "'Microsoft YaHei'", "sans-serif"]
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