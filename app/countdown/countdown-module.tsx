import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { Column } from 'app/shared/components/column';
import { Text } from 'app/shared/components/text';

export function CountdownModule() {
  const { black } = useTheme();

  return (
    <Column
      flex={1}
      as={SafeAreaView}
      p="16px"
      alignItems="center"
      justifyContent="center"
      bg={black.default}>
      <StatusBar backgroundColor={black.default} barStyle="light-content" />

      <Text color={black.primary}>Coutdown Module</Text>
    </Column>
  );
}
