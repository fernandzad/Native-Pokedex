import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Button, TouchableHighlight } from 'react-native';
import Pokemons from '../mock/Pokemons';
import PokeCard from './PokeCard';
import getRandomColor from '../utils/RandomColor';
import { styles } from '../styles/PokeList';

const PokeList = () => {
  const [pokemons, setPokemons] = useState({ results:[] });
  const [showPokemon, setShowPokemon] = useState(false);
  const buttonTitle = showPokemon ? "Hide Pokemons" : "Load Pokemons";

  useEffect(() => {
    setPokemons(Pokemons);
  }, []);

  return (
    <View>
      <Text style={styles.title}>Native Pokédex</Text>
      <TouchableHighlight style={styles.button}>
        <Button color="#fff" title={buttonTitle} onPress={() => setShowPokemon(!showPokemon)}/>
      </TouchableHighlight>

      {showPokemon && (<FlatList 
          data={pokemons.results}
          renderItem={({ item }) => <PokeCard color={getRandomColor()} name={item.name} type={item.type}/>}
          keyExtractor={item => item.id}
        />)
      }
    </View>
  );
};

export default PokeList;
