export const SITE = {
  title: 'catfish',
  name: 'catfish',
  description: 'A no Javascript static site',
  url: 'https://minnowo.github.io',
  sourceCode: 'https://github.com/minnowo/minnowo.github.io',
};

export const FOOTER = {
  showSourceCode: true,
  showRssUrl: true,
  showLicenseUrl: false,
  showAppleWorm: true,
};

export const NAV = [
  { href: '/', label: '/home' },
  { href: '/notes/', label: '/notes' },
  { href: '/archive/', label: '/archive' },
  { href: '/tags/', label: '/tags' },
  { href: '/links/', label: '/links' },
  { href: '/sites/', label: '/sites' },
];

// Sub-sites are built separately and copied into dist/<name>/ by
// scripts/build-subsites.sh. They are listed on /sites/.
export const SITES = [
  {
    name: 'ponkotsu',
    href: '/ponkotsu/',
    description: 'A simplified Material Design 3 style for Tailwind v4. Live preview, color generator and reference.',
  },
];
