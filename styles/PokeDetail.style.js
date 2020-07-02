import { StyleSheet} from 'react-native';

export const stylesDetail = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 10,
    alignContent: 'center',
    color: '#000'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius:10,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    padding: 30,
    color: '#fff'
  },
  whiteText: {
    color: '#fff',
    margin: 8,
  },
  boldWhiteText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});