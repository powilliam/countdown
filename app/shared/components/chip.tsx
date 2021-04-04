import React from 'react';
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Row, RowProps } from 'app/shared/components/row';
import { Text } from 'app/shared/components/text';

export interface ChipProps
  extends BorderlessButtonProps,
    Omit<RowProps, 'hitSlop'> {
  icon: string;
  text: string;
}

export function Chip({ icon, text, ...props }: ChipProps) {
  const { black, white } = useTheme();

  return (
    <Row
      as={BorderlessButton}
      px="12px"
      alignItems="center"
      height={32}
      bg={black.primary}
      borderRadius={32}
      {...props}>
      <MaterialCommunityIcons name={icon} size={18} color={white.primary} />

      <Text
        ml="8px"
        fontSize="14px"
        letterSpacing="0.25px"
        color={white.primary}>
        {text}
      </Text>
    </Row>
  );
}
