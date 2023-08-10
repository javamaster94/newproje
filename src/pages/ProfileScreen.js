import * as React from 'react';
import { View, Text,Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"


const logoImg = require('../assets/emin.jpg');

function ProfileScreen() {
  
    const navigation = useNavigation();

    return (
      <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
        
  <View style={{ height: 300, backgroundColor: 'skyblue'}}>
  <Image
          source={logoImg}
          style={{width: 400, height: 350}}
        />
  </View>
  <View style={{ flex: 1, paddingHorizontal:10, backgroundColor:"white",}}>
    
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20,fontWeight: 900,color:"tomato"}}>
  
      Emin_Ex

    </Text>
    
    
    <Text style={{ fontSize: 17, color: 'gray', marginBottom: 10, fontWeight: 900,marginLeft:20 }}>
    <Ionicons name="heart" color={"red"} size={30} />    Beğeni: 500

    </Text>
   
    <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray',  borderRadius: 5,backgroundColor:"white"}}>
      
      <Text style={{ fontSize: 17, color: 'gray',marginLeft:20,fontWeight: 900 }}>
      <Ionicons name="person-sharp" color={"black"} size={30} />    Takipçi    254
            
 
      </Text>
    </View>
  
    <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray',  borderRadius: 5,backgroundColor:"white"}}>
      
      <Text style={{ fontSize: 17, color: 'gray' ,marginLeft:20,fontWeight: 900  }}>
      <Ionicons name="person-add-sharp" color={"black"} size={30} />    Takip Edilen
        
        </Text>
    </View>
   
    <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray', borderRadius: 5,backgroundColor:"white"}}>
      
      <Text style={{ fontSize: 16, color: 'gray' ,marginLeft:20,fontWeight: 900 }}>
      <Ionicons name="logo-mastodon" color={"black"} size={30} />    Mesaj

      </Text>
    </View>
    <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5 , borderColor: 'gray',  borderRadius: 5,backgroundColor:"white"}}>
      
      <Text style={{ fontSize: 16, color: 'gray' ,marginLeft:20,fontWeight: 900 }}>
      <Ionicons name="library-sharp" color={"black"} size={30} />    Biyografi

        </Text>
    </View>
  </View>
</View>


     

    );
  }

  


  export default ProfileScreen;