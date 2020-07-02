import * as React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import PokeList from './components/PokeList';
import { styles } from './styles/App';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <PokeList />
      </View>
    </SafeAreaView>
      
  );
}

