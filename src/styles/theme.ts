import { ITheme } from 'interfaces/styled';

export const baseTheme: ITheme = {
  colors: {
    accent: '#24cca7',
    secondary: '#4a56e2',
    expense: '#ff6596',
    input: '#e0e0e0',

    bg: '#E5E4E8',
    font: '#19191B',
  },

  media: {
    desc: '(min-width: 1440)',
    tablet: '(min-width: 768)',
    mobileOnly: '(max-width: 480)',
  },

  // in px
  sizes: {
    header: { height: 56 },
    container: { width: 1200 },
    footer: { height: 128 },
    modal: { width: 540 },
  },

  // in ms
  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 50,
    modal: 100,
  },
};
