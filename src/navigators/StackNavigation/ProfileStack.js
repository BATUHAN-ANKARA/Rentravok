import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../screens/Profile/Profile';
import ProfileSettings from '../../screens/Profile/ProfileSettings';
import BookHistory from '../../screens/Profile/BookHistory';
import BookHistoryDetail from '../../screens/Profile/BookHistoryDetail';
import ChangePassword from '../../screens/Profile/ChangePassword';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="BookHistory" component={BookHistory} />
      <Stack.Screen name="BookHistoryDetail" component={BookHistoryDetail} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
