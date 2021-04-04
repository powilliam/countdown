import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';

import { CountdownModule } from 'app/countdown/countdown-module';

import { theme } from 'app/shared/themes/dark';

const Stack = createStackNavigator();

export function AppModule() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Coutdown" component={CountdownModule} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
