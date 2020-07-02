import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableHighlight } from 'react-native';
import Pokemons from './Pokemons';
import Pokemon from './Pokemon';
import getRandomColor from '../styles/RandomColor';


const PokeList = () => {
  const [pokemons, setPokemons] = React.useState({ results:[] });
  const [showPokemon, setShowPokemon] = React.useState(false);
  const buttonTitle = showPokemon ? "Hide Pokemons" : "Load Pokemons";

  React.useEffect(() => {
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
          renderItem={({ item }) => <Pokemon color={getRandomColor()} name={item.name}/>}
          keyExtractor={item => item.id}
        />)
      }
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 10,
  }, 
  button: {
    marginRight:80,
    marginLeft:80,
    marginTop:10,
    marginBottom: 10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

export default PokeList;
