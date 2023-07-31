import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from './src/pages/LoginScreen';
import HomeScreen from './src/pages/HomeScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import SearchScreen from './src/pages/SearchScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from './src/pages/SettingsScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen">
          {() => (
            <Tab.Navigator screenOptions={{headerShown:false}}>
              <Tab.Screen name="Home" options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"tomato"} size={size} />
          ),
        }} component={HomeScreen} />
              <Tab.Screen name="Search" options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={"tomato"} size={size} />
          ),
        }}  component={SearchScreen} />
              <Tab.Screen name="Profile" options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={"tomato"} size={size} />
          ),
        }} component={ProfileScreen} />
        <Tab.Screen name="Settings" options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={"tomato"} size={size} />
          ),
        }} component={SettingsScreen} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
