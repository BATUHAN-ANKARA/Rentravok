import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favorite from '../../screens/Favorite/Favorite';

const Stack = createStackNavigator();

const FavoriteStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
