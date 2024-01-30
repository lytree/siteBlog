import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import UnoCSS from 'unocss/astro'
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/readTime'
// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	markdown: {
		remarkPlugins: [remarkReadingTime],
		// drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				theme: 'material-theme-palenight',
				wrap: true
			},
			// drafts: true
		}),
		sitemap(),
		vue({ appEntrypoint: "./src/_app", reactivityTransform: true }),
		UnoCSS({ injectReset: true })]
});
