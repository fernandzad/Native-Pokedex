import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const Pokemon = ({ name, color }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container} backgroundColor={color}>
        <Text style={{color: '#fff'}}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius:10,
    margin: 3,
    padding: 30,
  },
});

export default Pokemon;