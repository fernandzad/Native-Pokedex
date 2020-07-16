import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Button, TouchableHighlight, Image } from 'react-native';
import PokeCard from './PokeCard';
import { stylesList } from '../styles/PokeList.style';
import ImagePokedex from '../assets/pkdx.png';
import { uri } from '../utils/uri';

const pokemonsURI = `${uri}?limit=700`;

const PokeList = () => {
	const [pokemons, setPokemons] = useState([]);
	const [showPokemon, setShowPokemon] = useState(false);
	const buttonTitle = showPokemon ? 'Turn off' : 'Turn on';

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetch(pokemonsURI);
				const pokemons = await data.json();

				setPokemons(pokemons.results);
			} catch (err) {
				console.log('Error fetching data PokeList-----------', err);
			}
		};
		fetchData();
	}, []);

	return (
		<View>
			<Text style={stylesList.title}> Native Pokédex </Text>
			<TouchableHighlight>
				<Button title={buttonTitle} onPress={() => setShowPokemon(!showPokemon)} />
			</TouchableHighlight>

			{!showPokemon && (
				<View style={stylesList.inlineContainer}>
					<Image source={ImagePokedex} />
				</View>
			)}

			{showPokemon && (
				<FlatList
					data={pokemons}
					renderItem={({ item }) => (
						<View>
							<PokeCard item={item} />
						</View>
					)}
					keyExtractor={(item) => item.id}
				/>
			)}
		</View>
	);
};

export default PokeList;
