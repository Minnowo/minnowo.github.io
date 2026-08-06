// A tiny monochromatic-red Shiki theme built from the same palette as
// public/assets/css/main.css, so code blocks use the site's own colors
// instead of a bundled third-party theme.
const palette = {
  base: '#1b1b1b',
  crust: '#161616',
  surface1: '#383838',
  text: '#e6e6e6',
  subtext1: '#c8c8c8',
  subtext0: '#9a9a9a',
  overlay1: '#545454',
  rosewater: '#d9a3a3',
  flamingo: '#c75a5a',
  red: '#a74c48',
  maroon: '#c97e6d',
  peach: '#c7987a',
};

export default {
  name: 'catfish-red',
  type: 'dark',
  colors: {
    'editor.background': palette.crust,
    'editor.foreground': palette.text,
  },
  tokenColors: [
    { scope: 'comment', settings: { foreground: palette.overlay1, fontStyle: 'italic' } },
    { scope: 'string, string.quoted', settings: { foreground: palette.maroon } },
    { scope: 'constant.numeric, constant.language, constant.character', settings: { foreground: palette.peach } },
    { scope: 'keyword, keyword.control, storage, storage.type', settings: { foreground: palette.flamingo } },
    { scope: 'entity.name.function, support.function', settings: { foreground: palette.rosewater } },
    { scope: 'entity.name.tag', settings: { foreground: palette.flamingo } },
    { scope: 'entity.other.attribute-name', settings: { foreground: palette.peach } },
    { scope: 'entity.name.class, entity.name.type, support.class', settings: { foreground: palette.red } },
    { scope: 'variable, variable.parameter', settings: { foreground: palette.subtext1 } },
    { scope: 'punctuation, meta.brace', settings: { foreground: palette.subtext0 } },
  ],
};
