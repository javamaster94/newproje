import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Touchable({ handleLogin }) {
  return (
    <TouchableOpacity
      style={{
        width: 100,
        height: 40,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'darkblue',
        padding: 10,
      }}
      onPress={() => handleLogin()}>
      <Text style={{ left: 14 }}>Giriş Yap</Text>
    </TouchableOpacity>
  );
}
