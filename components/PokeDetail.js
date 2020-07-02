import React from 'react';
import { View, Text } from 'react-native';
import { stylesDetail } from '../styles/PokeDetail.style';
import getRandomColor from '../utils/RandomColor';

const color = getRandomColor();

const TextFormat = ({ label, text }) => (
  <View>
    <Text style={stylesDetail.whiteText}>
      {label}
      <Text style={stylesDetail.boldWhiteText}> {text}</Text>
    </Text>
  </View>
);

export const PokeDetail = ({ route }) => {
  const { name, url, type } = route.params;
  return (
    <>
      <View>
        <Text style={stylesDetail.title}>{`${name.charAt(0).toUpperCase()
          .slice()}${name.slice(1)}`}</Text>
      </View>
      <View style={stylesDetail.container} backgroundColor={color}>
        <TextFormat label="Pokemon: " text={name}/>
        <TextFormat label="Type: " text={type} />
        <TextFormat label="More info: " text={url} />
      </View>
    </>
  )
};