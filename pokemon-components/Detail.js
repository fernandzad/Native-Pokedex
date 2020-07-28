import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Types } from './Types';
import { Abilities } from './Abilities';
import { CustomText } from '../generic-components/CustomText';
import Loading from '../generic-components/Loading';
import Stats from './Stats';
import { stylesDetail } from '../styles/PokeDetail.style';
import { uri } from '../utils/uri';

export const Detail = ({ route }) => {
	const { name } = route.params;
	const [loading, setLoading] = useState(false);
	const [pokemon, setPokemon] = useState({});
	const [images, setImages] = useState({});
	const [types, setTypes] = useState([]);
	const [abilities, setAbilities] = useState([]);
	const [stats, setStats] = useState([]);

	useEffect(() => {
		const fetchPokemon = async () => {
			setLoading(true);
			
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
			setLoading(false);
		};
		fetchPokemon();
	}, []);

	if (loading) return <Loading />;

	return (
		<ScrollView>
			<View>
				<Text style={stylesDetail.title}>{`${name.charAt(0).toUpperCase().slice()}${name.slice(1)}`}</Text>
			</View>
			<View style={stylesDetail.container}>
				<View style={stylesDetail.inlineContainer}>
					<CustomText label="Base experience: " text={pokemon.base_experience} />
				</View>
				<View style={stylesDetail.inlineContainer}>
					<CustomText label="Height: " text={pokemon.height} />
					<CustomText label="Weight: " text={pokemon.weight} />
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
