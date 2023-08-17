import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Touchable(props) {
  
  const {handleLogin} = props

  return (
    <TouchableOpacity  
      onPress={handleLogin}
      
      style={{

        width: 100,
        height: 40,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'darkblue',
        padding: 10,
      }}>
      <Text style={{left: 14}}>Giriş Yap</Text>
    </TouchableOpacity>
  );
}
