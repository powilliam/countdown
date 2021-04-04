import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from 'app/shared/components/icons/icon-props';

export function SVGChevronDoubleDown({
  width,
  height,
  color,
  opacity,
}: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.59 5.59L18 7L12 13L6 7L7.41 5.59L12 10.17L16.59 5.59ZM16.59 11.59L18 13L12 19L6 13L7.41 11.59L12 16.17L16.59 11.59Z"
        fill={color}
        opacity={opacity}
      />
    </Svg>
  );
}

SVGChevronDoubleDown.defaultProps = {
  with: 24,
  height: 24,
  color: '#FFFFFF',
  opacity: 1,
};
