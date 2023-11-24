import * as React from 'react';

import HomeScreen from './pages/home';
import DiceGame from './pages/dice';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dice" component={DiceGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;