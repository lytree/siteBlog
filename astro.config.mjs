import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro'
import { remarkReadingTime } from './src/utils/readTime'





// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	markdown: {
		remarkPlugins: [remarkReadingTime],
		// drafts: true,
		shikiConfig: {
			theme: 'dracula',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				theme: 'dracula',
				wrap: true
			},
			// drafts: true
		}),
		sitemap(),
		vue({ appEntrypoint: "./src/_app", jsx: true }),
		UnoCSS({
			injectReset: true // or a path to the reset file
		}),
	],
	vite: {
		build: {
			rollupOptions: {
				onwarn(warning, warn) {
					// temporarily suppress this warning
					if (warning.message.includes("is dynamically imported by") && warning.message.includes("but also statically imported by")) {
						return;
					}
					warn(warning);
				}
			}
		}
	}
});
