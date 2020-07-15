import { StyleSheet } from 'react-native';

export const stylesCard = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
    padding: 30,
    color: '#fff',
    backgroundColor: '#1A7981',
  },
  whiteText: {
    color: '#fff',
  },
  boldWhiteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
