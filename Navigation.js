import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Main from './Main';
import SimpleMode from './SimpleMode';
import ShiftMode from './ShiftMode';

const Stack = createStackNavigator();

const Navig = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerMode: 'screen' }}>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen
          name="SimpleMode"
          component={SimpleMode}
          options={{
            headerStyle: { backgroundColor: '#434547' },
            headerTitle: 'Mode',
            headerTitleStyle: { color: 'white', fontWeight: 'bold' },
            headerTintColor: 'white',
            gestureDirection: 'horizontal-inverted', 
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen name="ShiftMode" component={ShiftMode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navig;
