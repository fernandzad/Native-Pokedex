import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeNavigation } from './navigation/home.navigation';
import { RegionsNavigation } from './navigation/regions.navigation';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === 'Home') {
							iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
						} else if (route.name === 'Regions') {
							iconName = focused ? 'ios-list-box' : 'ios-list';
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray',
				}}
			>
				<Tab.Screen name="Home" component={HomeNavigation} />
				<Tab.Screen name="Regions" component={RegionsNavigation} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
