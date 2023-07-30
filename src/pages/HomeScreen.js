import * as React from 'react';
import { View, Text,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"


function HomeScreen() {

    const navigation = useNavigation();

    return (
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center',backgroundColor:"orange"}}>

        <Text>HomeScreen</Text>
        <Ionicons name="hand-right" color={"coral"} size={200} />
        


      </View>
    );
  }

  


  export default HomeScreen;