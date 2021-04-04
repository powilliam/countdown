import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Column } from 'app/shared/components/column';
import { Row } from 'app/shared/components/row';
import { Text, TextVariants } from 'app/shared/components/text';

import { useCountdown } from 'app/countdown/hooks/use-countdown';

export function CountdownModule() {
  const { black, white } = useTheme();
  const { counting, elapsed, toggle } = useCountdown();

  return (
    <Column
      flex={1}
      as={SafeAreaView}
      p="16px"
      justifyContent="space-between"
      bg={black.default}>
      <StatusBar backgroundColor={black.default} barStyle="light-content" />

      <Row>
        <Row
          as={BorderlessButton}
          px="12px"
          alignItems="center"
          height={32}
          bg={black.primary}
          borderRadius={32}>
          <MaterialCommunityIcons
            name="briefcase-outline"
            size={18}
            color={white.primary}
          />

          <Text
            ml="8px"
            fontSize="14px"
            letterSpacing="0.25px"
            color={white.primary}>
            60 min
          </Text>
        </Row>

        <Row
          as={BorderlessButton}
          px="12px"
          alignItems="center"
          ml="8px"
          height={32}
          bg={black.primary}
          borderRadius={32}>
          <MaterialCommunityIcons name="bed" size={18} color={white.primary} />

          <Text
            ml="8px"
            fontSize="14px"
            letterSpacing="0.25px"
            color={white.primary}>
            30 min
          </Text>
        </Row>
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

      <Column alignSelf="flex-end">
        <Column
          as={BorderlessButton}
          width="56px"
          height="56px"
          mr="-8px"
          mb="-8px"
          alignItems="center"
          justifyContent="center"
          borderRadius={32}
          bg={black.primary}
          onPress={toggle}>
          <MaterialCommunityIcons
            name={counting ? 'pause' : 'play'}
            size={24}
            color={white.default}
          />
        </Column>
      </Column>
    </Column>
  );
}
