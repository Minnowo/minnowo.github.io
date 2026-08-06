import { getCollection, type CollectionEntry } from 'astro:content';

// Post entry ids look like `2023-05-21-gpg.md`; strip the extension so it
// matches Jekyll's `permalink: /:year/:title/` (where :title is the
// filename with the leading date and extension removed).
export function postFilename(id: string): string {
  return id.replace(/\.mdx?$/, '');
}

export function postSlug(id: string): string {
  return postFilename(id).replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

export function postYear(id: string): string {
  return postFilename(id).slice(0, 4);
}

export function postUrl(id: string): string {
  return `/${postYear(id)}/${postSlug(id)}/`;
}

export async function getVisiblePosts(): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts', ({ data }) => !data.hidden);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Mirrors Jekyll's `site.posts` / `site.tags`, which are not filtered by
// `hidden` - only the home page, archive, notes and sidebar filter it out.
export async function getAllPosts(): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
