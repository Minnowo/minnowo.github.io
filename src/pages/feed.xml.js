import rss from '@astrojs/rss';
import { getAllPosts, postUrl } from '../lib/posts';
import { SITE } from '../site.config';

export async function GET(context) {
  const posts = await getAllPosts();

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: posts.slice(0, 100).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post.id),
    })),
  });
}
