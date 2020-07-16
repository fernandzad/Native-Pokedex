import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { stylesDetail } from '../styles/PokeDetail.style';

const Loading = () => {
  return ( 
    <View style={stylesDetail.loading}>
      <ActivityIndicator size="large" />
    </View>
  );
}
 
export default Loading;