import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { stylesCard } from '../styles/PokeCard.style';

const Pokemon = ({ name, color }) => {
  return (
    <TouchableOpacity>
      <View style={stylesCard.container} backgroundColor={color}>
        <Text style={stylesCard.boldWhiteText}>
          {`${name.charAt(0).toUpperCase().slice()}${name.slice(1)}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Pokemon;