import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigation } from './navigation/home.navigation';
import { ItemsNavigation } from './navigation/Items.navigation';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === 'Home')
							iconName = focused ? 'home' : 'home';
						else if (route.name === 'Items')
							iconName = focused ? 'star' : 'star';

						return <Icon name={iconName} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: 'red',
					inactiveTintColor: 'gray',
				}}
			>
				<Tab.Screen name="Home" component={HomeNavigation} />
				<Tab.Screen name="Items" component={ItemsNavigation} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
