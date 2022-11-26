// styled.ts

export interface ITheme {
  colors: {
    accent: string;
    secondary: string;
    expense: string;
    input: string;

    bg: string;
    font: string;
  };

  media: {
    desc: string;
    tablet: string;
    mobileOnly: string;
  };

  sizes: {
    header: { height: number };
    container: { width: number };
    footer: { height: number };
    modal: { width: number };
  };

  durations: {
    ms300: number;
  };

  order: {
    header: number;
    modal: number;
  };
}
