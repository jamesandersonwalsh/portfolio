import RSS from 'rss'

import { JAMES_WALSH, PRODUCTION_URL, SITE_DESCRIPTION } from '@/lib/constants'
import { fetchPublishedPosts } from '@/lib/posts'

export async function GET() {
  const feed = new RSS({
    title: JAMES_WALSH,
    description: SITE_DESCRIPTION,
    site_url: PRODUCTION_URL,
    feed_url: `${PRODUCTION_URL}/feed.xml`,
    copyright: `${new Date().getFullYear()} ${JAMES_WALSH}}`,
    managingEditor: JAMES_WALSH,
    webMaster: JAMES_WALSH,
    language: 'en',
    pubDate: new Date(),
  })

  fetchPublishedPosts().forEach((post) => {
    feed.item({
      title: post.title,
      description: post.brief,
      url: `${PRODUCTION_URL}/${post.url}`,
      categories: post.tags,
      author: JAMES_WALSH,
      date: new Date(post.publishedAt),
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
