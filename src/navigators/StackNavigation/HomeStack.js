import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home/Home';
import CarDetail from '../../screens/Home/CarDetail';
import AllCars from '../../screens/Home/AllCars';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CarDetail" component={CarDetail} />
      <Stack.Screen name="AllCars" component={AllCars} />
    </Stack.Navigator>
  );
};

export default HomeStack;
