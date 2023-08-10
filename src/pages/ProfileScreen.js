import * as React from 'react';
import { View, Text,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"


function ProfileScreen() {

    const navigation = useNavigation();

    return (
      <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
  <View style={{ height: 300, backgroundColor: 'skyblue'}}>
  
  </View>
  <View style={{ flex: 1, paddingHorizontal:10, backgroundColor:"white",}}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20,fontWeight: 900 }}>
      Emin_Ex  
    </Text>
    <Text style={{ fontSize: 16, color: 'gray', marginBottom: 10, fontWeight: 900 }}>
      Beğeni: 500
    </Text>
   
    <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray',  borderRadius: 5,backgroundColor:"white"}}>
      
      <Text style={{ fontSize: 12, color: 'gray',marginLeft:20,fontWeight: 900 }}>Takipçi</Text>
    </View>
  
    <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray',  borderRadius: 5,backgroundColor:"white"}}>
      
      <Text style={{ fontSize: 12, color: 'gray' ,marginLeft:20,fontWeight: 900  }}>Takip Edilen</Text>
    </View>
   
    <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray', borderRadius: 5,backgroundColor:"white"}}>
      
      <Text style={{ fontSize: 12, color: 'gray' ,marginLeft:20,fontWeight: 900 }}>Mesaj</Text>
    </View>
    <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5 , borderColor: 'gray',  borderRadius: 5,backgroundColor:"white"}}>
      
      <Text style={{ fontSize: 12, color: 'gray' ,marginLeft:20,fontWeight: 900 }}>sada</Text>
    </View>
  </View>
</View>


     

    );
  }

  


  export default ProfileScreen;