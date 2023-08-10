import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen">
          {() => (
            <Tab.Navigator screenOptions={{headerShown: false}}>
              <Tab.Screen
                name="Home"
                options={{
                  //İCONLARIN İSMİNİ BURADAN DEĞİŞTİR.
                  tabBarLabel: 'Home',
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                      name="home"
                      color={'tomato'}
                      size={size}
                    />
                  ),
                }}
                component={HomeScreen}
              />
              <Tab.Screen
                name="Search"
                options={{
                  tabBarLabel: 'Search',
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                      name="magnify"
                      color={'tomato'}
                      size={size}
                    />
                  ),
                }}
                component={SearchScreen}
              />
              <Tab.Screen
                name="Profile"
                options={{
                  tabBarLabel: 'Profil',
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                      name="account-circle"
                      color={'tomato'}
                      size={size}
                    />
                  ),
                }}
                component={ProfileScreen}
              />
              <Tab.Screen
                name="Settings"
                options={{
                  tabBarLabel: 'Settings',
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                      name="cogs"
                      color={'tomato'}
                      size={size}
                    />
                  ),
                }}
                component={SettingsScreen}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
