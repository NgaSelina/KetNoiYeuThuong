import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import loginscreen from '../pages/loginscreen/LoginScreen';
import registerscreen from '../pages/loginscreen/RegisterScreen';
import forgetpassword from '../pages/loginscreen/ForgetPassword';
import phone from '../pages/loginscreen/phone';
import phone1 from '../pages/loginscreen/phone1';
import profile from '../pages/userprofile/profile';
import setup01 from '../pages/userprofile/AccountSetting';
import setup02 from '../pages/userprofile/PersonalSetup';
import phone01 from '../pages/userprofile/VerifyPhoneNumber';
import phone02 from '../pages/userprofile/VerifyOTP';
import email01 from '../pages/userprofile/VerifyEmail';
import email02 from '../pages/userprofile/email02';
import setupnote from '../pages/userprofile/setupnote';
import home from '../pages/account/home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={loginscreen} />
      <Stack.Screen name="Register" component={registerscreen} />
      <Stack.Screen name="Forget" component={forgetpassword} />
      <Stack.Screen name="Phone" component={phone} />
      <Stack.Screen name="Phone1" component={phone1} />
      <Stack.Screen name="profile" component={profile} />
      <Stack.Screen name="setup01" component={setup01} />
      <Stack.Screen name="setup02" component={setup02} />
      <Stack.Screen name="phone01" component={phone01} />
      <Stack.Screen name="phone02" component={phone02} />
      <Stack.Screen name="email01" component={email01} />
      <Stack.Screen name="email02" component={email02} />
      <Stack.Screen name="setupnote" component={setupnote} />
      <Stack.Screen name="home" component={home} />
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