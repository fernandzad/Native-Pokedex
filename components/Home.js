import React from 'react';
import { View, SafeAreaView } from 'react-native';
import PokeList from './PokeList';
import { styles } from '../styles/Home.style';
import { PokedexContext } from '../context/PokedexContext';

export const Home = ({ navigation }) => {
  return (
    <PokedexContext.Provider value={navigation}>
      <SafeAreaView style={styles.container}>
        <View>
          <PokeList />
        </View>
      </SafeAreaView>
    </PokedexContext.Provider>
  );
};
