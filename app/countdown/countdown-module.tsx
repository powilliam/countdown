import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { Column } from 'app/shared/components/column';
import { Row } from 'app/shared/components/row';
import { Text, TextVariants } from 'app/shared/components/text';
import { Chip } from 'app/shared/components/chip';
import { FloatingActionButton } from 'app/shared/components/floating-action-button';

import { useCountdown } from 'app/countdown/hooks/use-countdown';

import { formatter } from 'app/countdown/utils/elapsed-formatter';

export function CountdownModule() {
  const { black, white } = useTheme();
  const { counting, elapsed, toggle, reset } = useCountdown({
    duration: 60 * 60,
    formatter,
  });

  return (
    <Column
      flex={1}
      as={SafeAreaView}
      p="16px"
      justifyContent="space-between"
      bg={black.default}>
      <StatusBar backgroundColor={black.default} barStyle="light-content" />

      <Row>
        <Chip icon="briefcase-outline" text="60 min" />
      </Row>

      <Column alignSelf="center" alignItems="center">
        <Text fontSize="14px" letterSpacing="0.25px" color={white.primary}>
          {counting ? 'WORKING' : 'RESTING'}
        </Text>

        <Text
          variant={TextVariants.LIGHT}
          fontSize="60px"
          letterSpacing="-0.5px"
          color={white.default}>
          {elapsed}
        </Text>
      </Column>

      <Row alignSelf="center">
        {counting && (
          <FloatingActionButton mr="8px" icon="stop" onPress={reset} />
        )}

        <FloatingActionButton
          icon={counting ? 'pause' : 'play'}
          onPress={toggle}
        />
      </Row>
    </Column>
  );
}
