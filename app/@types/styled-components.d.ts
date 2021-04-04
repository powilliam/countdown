import 'styled-components';

declare module 'styled-components' {
  export interface ColorVariants {
    default: string;
    primary?: string;
    secondary?: string;
  }

  export interface DefaultTheme {
    black: ColorVariants;
    white: ColorVariants;
  }
}
