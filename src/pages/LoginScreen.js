import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Inputs from '../Inputs/Inputs';
import Inputs1 from '../Inputs/Inputs1';
import Touchable from '../Inputs/Touchable';
import Touchable2 from '../Inputs/Touchable2';
import Touchable3 from '../Inputs/Touchable3';
import Touchable4 from '../Inputs/Touchable4';
import HomeScreen from './HomeScreen';

const logoImg = require('../assets/logo2.png');

function LoginScreen() {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Kullanıcı adı:', user);
    console.log('Şifre:', password);
    if (user === 'eminex' && password === '1234') {
      navigation.navigate('HomeScreen');
    } else {
      alert('Kullanıcı Adı veya Şifre yanlış,lütfen tekrar deneyiniz...');
      setUser('');
      setPassword('');
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          source={logoImg}
          style={{width: 350, height: 350, marginBottom: -50}}
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 50,
        }}>
        <Inputs user={user} setUser={setUser} />
        <Inputs1 password={password} setPassword={setPassword} />

        <Touchable handleLogin={handleLogin} />
        <Touchable2 />
      </View>
      <View style={{flex: 0.2, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Touchable3 />
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Touchable4 />
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
