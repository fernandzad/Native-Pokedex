import React from 'react';
import { View, SafeAreaView } from 'react-native';
import PokeList from './PokeList';
import { styles } from '../styles/Home.style';

export const Home = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View>
      <PokeList navigation={navigation}/>
    </View>
  </SafeAreaView>
);