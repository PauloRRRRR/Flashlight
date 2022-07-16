import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import imagex from 'assets\icons\4343278.png'
import imagey from 'assets\icons\4540933.png'

const App =()=>{
const toggle = false;

  return <View style={toggle ? style.containerLight: style.container}>;
  <Image
    style ={toggle ? lightinOn : style.lightingOff} 
    source = {
      toggle
      ? require('assets\icons\4343278.png')
      : require('assets\icons\4540933.png')
    }
  />
  </View>;
};

export default App;

const style = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerLight: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    lightingOn:{
      resizeMode: 'contain',
      alignSelf: 'center',
      width: 150,
      height: 150,
    },
    lightingOff:{
      resizeMode: 'contain',
      alignSelf: 'center',
      width: 150,
      height: 150,
    }
});