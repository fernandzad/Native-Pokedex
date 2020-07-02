import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from '../styles/PokeCard';

const Pokemon = ({ name, color, type }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container} backgroundColor={color}>
        <Text style={styles.whiteText}>
          Pokémon:
          <Text style={styles.boldWhiteText}> {name}</Text>
        </Text>
        <Text style={styles.whiteText}>
          Type:
          <Text style={styles.boldWhiteText}> {type}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Pokemon;