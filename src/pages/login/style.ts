import { Dimensions, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxtop: {
    height: Dimensions.get('window').height/3,
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  boxmid: {
    height: Dimensions.get('window').height/4,
    backgroundColor: 'green',
    width: '100%',
  },
  boxbottom: {
    height: Dimensions.get('window').height/3,
    backgroundColor: 'blue',
    width: '100%',
  },
});