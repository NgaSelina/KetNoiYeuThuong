import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import profile from '../pages/userprofile/profile';
import setup01 from '../pages/userprofile/AccountSetting';
import setup02 from '../pages/userprofile/PersonalSetup';
import phone01 from '../pages/userprofile/VerifyPhoneNumber';
import phone02 from '../pages/userprofile/VerifyOTP';
import email01 from '../pages/userprofile/VerifyEmail';
import email02 from '../pages/userprofile/email02';
import setupnote from '../pages/userprofile/setupnote';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" component={profile} />
      <Stack.Screen name="setup01" component={setup01} />
      <Stack.Screen name="setup02" component={setup02} />
      <Stack.Screen name="phone01" component={phone01} />
      <Stack.Screen name="phone02" component={phone02} />
      <Stack.Screen name="email01" component={email01} />
      <Stack.Screen name="email02" component={email02} />
      <Stack.Screen name="setupnote" component={setupnote} />
    </Stack.Navigator>
  );
}

const  AppContainer = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

export default AppContainer;