import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './components/Home';
import { PokeDetail } from './components/PokeDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="PokeDetail" component={PokeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

