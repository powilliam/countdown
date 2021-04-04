import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
// import Reanimated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withRepeat,
//   withSequence,
//   withTiming,
//   withDelay,
// } from 'react-native-reanimated';

import { Column } from 'app/shared/components/column';
import { Row } from 'app/shared/components/row';
import { Text, TextVariants } from 'app/shared/components/text';

// import { SVGBriefcaseOutline } from 'app/shared/components/icons/SVGBriefcaseOutline';
// import { SVGBed } from 'app/shared/components/icons/SVGBed';
import { SVGChevronDoubleDown } from 'app/shared/components/icons/SVGChevronDoubleDown';

export function CountdownModule() {
  const { black, white } = useTheme();
  // const translateY = useSharedValue(0);

  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [{ translateY: translateY.value }],
  // }));

  // useEffect(() => {
  //   translateY.value = withRepeat(
  //     withSequence(
  //       withDelay(1000, withTiming(5)),
  //       withTiming(-5),
  //       withTiming(0),
  //     ),
  //     -1,
  //   );
  // }, [translateY]);

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
          {/* <SVGBriefcaseOutline color={white.primary} opacity={0.8} /> */}

          <Text
            // ml="8px"
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
          {/* <SVGBed color={white.primary} opacity={0.8} /> */}

          <Text
            // ml="8px"
            fontSize="14px"
            letterSpacing="0.25px"
            color={white.primary}>
            30 min
          </Text>
        </Row>
      </Row>

      <Column alignSelf="center" alignItems="center">
        <Text fontSize="14px" letterSpacing="0.25px" color={white.primary}>
          RESTING
        </Text>

        <Text
          variant={TextVariants.LIGHT}
          fontSize="60px"
          letterSpacing="-0.5px"
          color={white.default}>
          00:00
        </Text>
      </Column>

      <Column alignSelf="center">
        <Text mb="4px" color={white.secondary}>
          Tap on the screen to start
        </Text>

        <SVGChevronDoubleDown color={white.secondary} />
      </Column>
    </Column>
  );
}
