import * as React from 'react';
import { View, Text,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";


function HomeScreen() {
    const navigation = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"orange"}}>

        <Text>HomeScreen</Text>


      </View>
    );
  }

  


  export default HomeScreen;