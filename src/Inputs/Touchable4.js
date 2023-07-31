import { TouchableOpacity,Text} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Touchable4() {
    const navigation = useNavigation(); 
  return (
    <TouchableOpacity style={{ width: 200, height: 50,  borderColor: "darkblue", padding: 10 }}>
          <Text style={{left:10,color:"red"}}>
            
            Gizlilik Politikası

          </Text>
          </TouchableOpacity>
  );
};
  

