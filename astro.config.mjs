import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import icon from 'astro-icon';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import swup from '@swup/astro';
import sitemap from '@astrojs/sitemap';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeComponents from 'rehype-components'; /* Render the custom directive content */
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive'; /* Handle directives */
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives';
import remarkMath from 'remark-math';
import { AdmonitionComponent } from './src/plugins/rehype-component-admonition.mjs';
import { GithubCardComponent } from './src/plugins/rehype-component-github-card.mjs';
import { parseDirectiveNode } from './src/plugins/remark-directive-rehype.js';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import { remarkExcerpt } from './src/plugins/remark-excerpt.js';

import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.prideyang.top',
  devToolbar: {
    enabled: false
  },
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime, remarkExcerpt, remarkGithubAdmonitionsToDirectives, remarkDirective, parseDirectiveNode],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypeComponents,
        {
          components: {
            github: GithubCardComponent,
            note: (x, y) => AdmonitionComponent(x, y, 'note'),
            tip: (x, y) => AdmonitionComponent(x, y, 'tip'),
            important: (x, y) => AdmonitionComponent(x, y, 'important'),
            caution: (x, y) => AdmonitionComponent(x, y, 'caution'),
            warning: (x, y) => AdmonitionComponent(x, y, 'warning')
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor']
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['anchor-icon'],
              'data-pagefind-ignore': true
            },
            children: [
              {
                type: 'text',
                value: '#'
              }
            ]
          }
        }
      ]
    ],
    // drafts: true,
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  integrations: [
    UnoCSS({
      injectReset: true // or a path to the reset file
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'dracula',
        wrap: true
      }
      // drafts: true
    }),
    sitemap(),
    swup({
      theme: false,
      animationClass: 'transition-swup-',
      // see https://swup.js.org/options/#animationselector
      // the default value `transition-` cause transition delay
      // when the Tailwind class `transition-all` is used
      containers: ['main'],
      smoothScrolling: true,
      cache: true,
      preload: true,
      accessibility: true,
      updateHead: true,
      updateBodyClass: false,
      globalInstance: true
    }),
    vue({
      appEntrypoint: './src/_app'
    }),
    
    icon({
      include: {
        'material-symbols': ['*'],
        'fa6-brands': ['*'],
        'fa6-regular': ['*'],
        'fa6-solid': ['*'],
        mdi: ['*']
      }
    })
  ],
  vite: {
    plugins: [yaml()],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: `assets/[name].[ext]`
        },
        onwarn(warning, warn) {
          // temporarily suppress this warning
          if (warning.message.includes('is dynamically imported by') && warning.message.includes('but also statically imported by')) {
            return;
          }
          warn(warning);
        },
        external: ['fsevents', new RegExp('/patches/.*')]
      }
    }
  }
});
