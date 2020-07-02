import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, FlatList, Button, TouchableHighlight } from 'react-native';
import Pokemons from '../mock/Pokemons';
import PokeCard from './PokeCard';
import getRandomColor from '../utils/RandomColor';
import { stylesList } from '../styles/PokeList.style';

const PokeList = ({ navigation }) => {
  const [pokemons, setPokemons] = useState({ results:[] });
  const [showPokemon, setShowPokemon] = useState(false);
  const buttonTitle = showPokemon ? "Hide Pokemons" : "Load Pokemons";

  useEffect(() => {
    setPokemons(Pokemons);
  }, []);

  const getRandomHTMLColor = useCallback(() => getRandomColor(), );

  return (
    <View>
      <Text style={stylesList.title}>Native Pokédex</Text>
      <TouchableHighlight >
        <Button title={buttonTitle} onPress={() => setShowPokemon(!showPokemon)}/>
      </TouchableHighlight>

      {showPokemon && (<FlatList 
          data={pokemons.results}
          renderItem={({ item }) => 
            <View onTouchEndCapture={() => navigation.navigate('PokeDetail', { name: item.name, url: item.url, type: item.type })}>
              <PokeCard color={getRandomHTMLColor()} name={item.name}/>
            </View>
          }
          keyExtractor={item => item.id}
        />)
      }
    </View>
  );
};

export default PokeList;
