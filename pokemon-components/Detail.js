import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Stats from './Stats';
import { stylesDetail } from '../styles/PokeDetail.style';
import { uri } from '../utils/uri';

const TextFormat = ({ label, text }) => (
	<View>
		<Text style={stylesDetail.whiteText}>
			{label}
			<Text style={stylesDetail.boldWhiteText}> {`${text} `}</Text>
		</Text>
	</View>
);

const Types = ({ types }) => {
	return (
		<React.Fragment>
			{types.map((item, key) => {
				const { type } = item;
				return <TextFormat label={`Type #${key + 1}:`} text={type.name} />;
			})}
		</React.Fragment>
	);
};

const Abilities = ({ abilities }) => {
	return (
		<React.Fragment>
			{abilities.map((item, key) => {
				const { ability } = item;
				return <TextFormat label={`Ability #${key + 1}:`} text={ability.name} />;
			})}
		</React.Fragment>
	);
};

export const Detail = ({ route }) => {
	const { name } = route.params;
	const [pokemon, setPokemon] = useState({});
	const [images, setImages] = useState({});
	const [types, setTypes] = useState([]);
	const [abilities, setAbilities] = useState([]);
	const [stats, setStats] = useState([]);

	useEffect(() => {
		const fetchPokemon = async () => {
			try {
				const data = await fetch(`${uri}/${name}`);
				const info = await data.json();

				setPokemon({ ...info });
				setImages(info.sprites);
				setTypes(info.types);
				setAbilities(info.abilities);
				setStats(info.stats);
			} catch (err) {
				console.log('Error fetching data PokeDetail-----------', err);
			}
		};
		fetchPokemon();
	}, []);

	return (
		<ScrollView>
			<View>
				<Text style={stylesDetail.title}>{`${name.charAt(0).toUpperCase().slice()}${name.slice(1)}`}</Text>
			</View>
			<View style={stylesDetail.container}>
				<View style={stylesDetail.inlineContainer}>
					<TextFormat label="Id: " text={pokemon.id} />
					<TextFormat label="Base experience: " text={pokemon.base_experience} />
				</View>
				<View style={stylesDetail.inlineContainer}>
					<TextFormat label="Height: " text={pokemon.height} />
					<TextFormat label="Weight: " text={pokemon.weight} />
				</View>
				<View style={stylesDetail.list}>
					<Types types={types} />
					<Abilities abilities={abilities} />
				</View>
				<Stats stats={stats} />
				<View style={stylesDetail.inlineContainer}>
					<Image source={{ width: 150, height: 150, uri: images.front_default }} />
					<Image source={{ width: 150, height: 150, uri: images.back_default }} />
				</View>
				<View style={stylesDetail.inlineContainer}>
					<Image source={{ width: 150, height: 150, uri: images.front_shiny }} />
					<Image source={{ width: 150, height: 150, uri: images.back_shiny }} />
				</View>
			</View>
		</ScrollView>
	);
};
