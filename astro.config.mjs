import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import ponkotsuTheme from './shiki-theme.mjs';

// This is a user/organization page (minnowo.github.io), so it is served
// from the domain root - no `base` path needed. If you ever convert this
// to a project page (e.g. username.github.io/reponame), set base: '/reponame'.
export default defineConfig({
  site: 'https://minnowo.github.io',
  trailingSlash: 'always',
  redirects: {
    // the about page was removed; external links still point at /about
    '/about': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      // Custom theme built from the site's own ponkotsu palette (see
      // shiki-theme.mjs) instead of a bundled third-party theme.
      theme: ponkotsuTheme,
      wrap: false,
    },
  },
});
