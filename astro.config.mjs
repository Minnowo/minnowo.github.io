import { defineConfig } from 'astro/config';

// This is a user/organization page (minnowo.github.io), so it is served
// from the domain root - no `base` path needed. If you ever convert this
// to a project page (e.g. username.github.io/reponame), set base: '/reponame'.
export default defineConfig({
  site: 'https://minnowo.github.io',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'material-theme-darker',
      wrap: false,
    },
  },
});
