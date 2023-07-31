import { TouchableOpacity,Text} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Touchable() {
    const navigation = useNavigation(); 
  return (
    
    <TouchableOpacity style={{ width: 100, height: 40, borderRadius: 15, borderWidth: 1, borderColor: "darkblue", padding: 10 }} onPress={() => navigation.navigate("HomeScreen")} >
          
    <Text style={{ left: 14 }}>
    
      Giriş Yap

      </Text>
  </TouchableOpacity>
  );
};
  

