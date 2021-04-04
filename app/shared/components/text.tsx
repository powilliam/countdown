import { TextProps as RNTextProps } from 'react-native';
import styled from 'styled-components/native';
import {
  space,
  color,
  layout,
  border,
  variant,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
} from 'styled-system';

export enum TextVariants {
  THIN = 'thin',
  LIGHT = 'light',
  REGULAR = 'regular',
  MEDIUM = 'medium',
  BOLD = 'bold',
}

export interface WithVariant {
  variant?: TextVariants;
}

export type TextProps = RNTextProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  BorderProps &
  WithVariant;

export const Text = styled.Text<TextProps>`
  ${space};
  ${color};
  ${layout};
  ${border};
  ${variant({
    variants: {
      [TextVariants.THIN]: {
        fontFamily: 'RobotoMono-Thin',
      },
      [TextVariants.LIGHT]: {
        fontFamily: 'RobotoMono-Light',
      },
      [TextVariants.REGULAR]: {
        fontFamily: 'RobotoMono-Regular',
      },
      [TextVariants.MEDIUM]: {
        fontFamily: 'RobotoMono-Medium',
      },
      [TextVariants.BOLD]: {
        fontFamily: 'RobotoMono-Bold',
      },
    },
  })}
`;

Text.defaultProps = {
  variant: TextVariants.REGULAR,
};
