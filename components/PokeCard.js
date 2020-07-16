import React, { useContext } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { stylesCard } from '../styles/PokeCard.style';
import { PokedexContext } from '../context/PokedexContext';

const Pokemon = ({ item }) => {
	const { name } = item;
	const navigation = useContext(PokedexContext);
	return (
		<TouchableOpacity>
			<View
				onTouchEnd={() =>
					navigation.navigate('PokeDetail', {
						name,
					})
				}
				style={stylesCard.container}
			>
				<Text style={stylesCard.boldWhiteText}>{`${name.charAt(0).toUpperCase().slice()}${name.slice(1)}`}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Pokemon;
