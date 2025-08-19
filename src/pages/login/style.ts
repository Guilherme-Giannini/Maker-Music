import { Dimensions, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxtop: {
    height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 100,
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    marginTop: 40,
    alignSelf: 'center',
  },
  boxmid: {
    height: 'auto',
    width: '100%'
  },
  boxbottom: {
    height: Dimensions.get('window').height/3,
    width: '100%',
  },
  emailInput: {
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
    marginTop: 20,
  },
  senhaInput: {
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
  },

  button: {
    marginTop: 50,
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    height: 50,
  },

  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 50,
  },
  forget: {
    marginTop: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
});