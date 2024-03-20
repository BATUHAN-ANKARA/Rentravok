/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../StackNavigation/HomeStack';
import FavoriteStack from '../StackNavigation/FavoriteStack';
import ProfileStack from '../StackNavigation/ProfileStack';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Bottom = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#C80000',
          height: Platform.OS === 'ios' ? 85 : 60,
        },
      }}>
      <Bottom.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={focused ? '#fff' : '#fff'}
              size={30}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline'}
              color={focused ? '#fff' : '#fff'}
              size={30}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              color={focused ? '#fff' : '#fff'}
              size={30}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomTabNavigator;
