import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import List from './List';
import { styles } from '../styles/Home.style';
import { PokedexContext } from '../context/PokedexContext';

export const Home = ({ navigation }) => {
	return (
		<PokedexContext.Provider value={navigation}>
			<SafeAreaView style={styles.container}>
				<View>
					<List />
				</View>
			</SafeAreaView>
		</PokedexContext.Provider>
	);
};


