import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pokemon-components/Home';
import { Detail } from '../pokemon-components/Detail';

const HomeStack = createStackNavigator();

export function HomeNavigation() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" options={{ name: 'Native Pokedex' }} component={Home} />
			<HomeStack.Screen name="Detail" component={Detail} />
		</HomeStack.Navigator>
	);
}
