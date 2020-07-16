import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../components/Home';
import { PokeDetail } from '../components/PokeDetail';

const HomeStack = createStackNavigator();

export function HomeNavigation() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" options={{ name: 'Native Pokedex' }} component={Home} />
			<HomeStack.Screen name="PokeDetail" component={PokeDetail} />
		</HomeStack.Navigator>
	);
}
