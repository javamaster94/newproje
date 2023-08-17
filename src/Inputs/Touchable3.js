import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

export default function Touchable3({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{width: 200, height: 50, borderColor: 'darkblue', padding: 10}}>
      <Text style={{left: 80, color: 'red'}}>
        
        Kullanim Şartları

        </Text>
    </TouchableOpacity>
  );
}
