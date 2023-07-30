import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";

const logoImg = require("../assets/logo2.png");

function LoginScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Image source={logoImg} style={{ width: 350, height: 350, marginBottom: -50 }} />
      </View>

      <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center", paddingTop: 50 }}>
        <TextInput placeholder="Kullanıcı Adı" style={{ width: 240, height: 50, borderRadius: 15, borderWidth: 1.2, borderColor: "darkblue", padding: 15, marginBottom: 15, paddingRight: 30 }} />

        <TextInput placeholder="Şifre" style={{ width: 240, height: 50, borderRadius: 15, borderWidth: 1.2, borderColor: "darkblue", padding: 15, marginBottom: 25 }} />

        <TouchableOpacity style={{ width: 100, height: 40, borderRadius: 15, borderWidth: 1, borderColor: "darkblue", padding: 10 }}>
          <Text style={{ left: 14 }}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 200, height: 40, borderColor: "darkblue", padding: 10 }}>
          <Text style={{top:20,fontSize:15,left:4}}>Hesabın yok mu ? hesap oluştur</Text>
        </TouchableOpacity>
      </View>

    
      <View style={{ flex: 0.2, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "white" }}>
        <TouchableOpacity style={{ width: 200, height: 50,  borderColor: "darkblue", padding: 10 }}>
          <Text style={{left:85,color:"red"}}>Kullanım Şartları
          </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          
        <TouchableOpacity style={{ width: 200, height: 50,  borderColor: "darkblue", padding: 10 }}>
          <Text style={{left:10,color:"red"}}>Gizlilik Politikası
          </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
