// A Shiki theme built from the ponkotsu role colors in src/styles/ponkotsu.css, so code blocks use the site's own colors
// instead of a bundled third-party theme.
const palette = {
  bg: '#413c3f',
  text: '#e9e0e3',
  muted: '#cfc3ca',
  outline: '#b4a8af',
  primary: '#e2badc',
  secondary: '#a7caec',
  tertiary: '#d7c68f',
  error: '#edbaba',
  success: '#aecdc1',
};

export default {
  name: 'ponkotsu',
  type: 'dark',
  colors: {
    'editor.background': palette.bg,
    'editor.foreground': palette.text,
  },
  tokenColors: [
    { scope: 'comment', settings: { foreground: palette.outline, fontStyle: 'italic' } },
    { scope: 'string, string.quoted', settings: { foreground: palette.success } },
    { scope: 'constant.numeric, constant.language, constant.character', settings: { foreground: palette.tertiary } },
    { scope: 'keyword, keyword.control, storage, storage.type', settings: { foreground: palette.primary } },
    { scope: 'entity.name.function, support.function', settings: { foreground: palette.secondary } },
    { scope: 'entity.name.tag', settings: { foreground: palette.primary } },
    { scope: 'entity.other.attribute-name', settings: { foreground: palette.tertiary } },
    { scope: 'entity.name.class, entity.name.type, support.class', settings: { foreground: palette.error } },
    { scope: 'variable, variable.parameter', settings: { foreground: palette.text } },
    { scope: 'punctuation, meta.brace', settings: { foreground: palette.muted } },
  ],
};
