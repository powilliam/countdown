import React from 'react';
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Column, ColumnProps } from 'app/shared/components/column';

export interface FloatingActionButtonProps
  extends BorderlessButtonProps,
    Omit<ColumnProps, 'hitSlop'> {
  icon: string;
}

export function FloatingActionButton({
  icon,
  ...props
}: FloatingActionButtonProps) {
  const { black, white } = useTheme();

  return (
    <Column
      as={BorderlessButton}
      width="56px"
      height="56px"
      alignItems="center"
      justifyContent="center"
      borderRadius={32}
      bg={black.primary}
      {...props}>
      <MaterialCommunityIcons name={icon} size={24} color={white.default} />
    </Column>
  );
}
