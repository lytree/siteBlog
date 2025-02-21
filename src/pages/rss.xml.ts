import rss from '@astrojs/rss'
import { siteConfig } from '@/blog-config'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'
import { getSortedPosts } from '@/theme/blog/utils/content-utils'
const parser = new MarkdownIt()

export async function GET(context: any) {
  const blog = await getSortedPosts()
  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle || 'No description',
    site: context.site,
    items: blog.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
  })
}
