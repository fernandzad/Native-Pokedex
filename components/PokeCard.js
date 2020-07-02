import * as React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from '../styles/PokeCard';

const Pokemon = ({ name, color }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container} backgroundColor={color}>
        <Text style={{color: '#fff'}}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Pokemon;