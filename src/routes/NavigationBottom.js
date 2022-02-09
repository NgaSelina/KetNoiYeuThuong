import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import home from '../pages/account/home';
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
import TabViewExample from '../pages/account/ScreenFollow';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#60B939' }}>
        <Tab.Screen name="Trang chủ" component={MyStack} 
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon:({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size}  /> }} />
        <Tab.Screen name="Cộng đồng" component={TabViewExample} 
        options={{
          tabBarLabel: 'Cộng đồng',
          tabBarIcon:({color, size}) => <MaterialCommunityIcons name="hand-heart" color={color} size={size} /> }} />
        <Tab.Screen name="Tin nhắn" component={TabViewExample} 
          options={{
          tabBarLabel: 'Tin nhắn',
          tabBarIcon:({color, size}) => <MaterialCommunityIcons name="facebook-messenger" color={color} size={size} /> }} />
        <Tab.Screen name="Quản lý" component={TabViewExample} 
          options={{
            tabBarLabel: 'Quản lý',
            tabBarIcon:({color, size}) => <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} /> }} />
        <Tab.Screen name="Tài khoản" component={MyStack} 
          options={{
            tabBarLabel: 'Tài khoản',
            tabBarIcon:({color, size}) =>  <MaterialCommunityIcons name="account-circle" color={color} size={size} /> }} />
       
      </Tab.Navigator>
    );
  }

  const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="profile" component={profile} />
        <Stack.Screen name="Login" component={loginscreen} />
        <Stack.Screen name="Register" component={registerscreen} />
        <Stack.Screen name="Forget" component={forgetpassword} />
        <Stack.Screen name="Phone" component={phone} />
        <Stack.Screen name="Phone1" component={phone1} />
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
              <MyTabs />
          </NavigationContainer>
      )
  }
  
  export default AppContainer;
