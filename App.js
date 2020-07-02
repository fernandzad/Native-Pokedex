import * as React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import PokeList from './components/PokeList';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <PokeList />
      </View>
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
})