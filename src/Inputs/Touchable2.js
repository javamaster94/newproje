import { TouchableOpacity,Text} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Touchable2() {
    const navigation = useNavigation(); 
  return (
    <TouchableOpacity style={{ width: 200, height: 40, borderColor: "darkblue", padding: 10 }}>
    <Text style={{top:20,fontSize:15,left:4}}>
      
      Hesabın yok mu ? hesap oluştur
      
      </Text>
  </TouchableOpacity>
  );
};
  

