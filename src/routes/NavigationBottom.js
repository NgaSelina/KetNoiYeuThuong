import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from '../pages/account/home';
import Loginscreen from '../pages/loginscreen/LoginScreen';
import Registerscreen from '../pages/loginscreen/RegisterScreen';
import Forgetpassword from '../pages/loginscreen/ForgetPassword';
import Phone from '../pages/loginscreen/phone';
import Phone1 from '../pages/loginscreen/phone1';
import Profile from '../pages/userprofile/profile';
import Setup01 from '../pages/userprofile/AccountSetting';
import Setup02 from '../pages/userprofile/PersonalSetup';
import Phone01 from '../pages/userprofile/VerifyPhoneNumber';
import Phone02 from '../pages/userprofile/VerifyOTP';
import Email01 from '../pages/userprofile/VerifyEmail';
import Email02 from '../pages/userprofile/email02';
import Setupnote from '../pages/userprofile/setupnote';
import TabViewExample from '../pages/account/ScreenFollow';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#60B939', }}
      
      >
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
        
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Register" component={Registerscreen} />
        <Stack.Screen name="Forget" component={Forgetpassword} />
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="Phone1" component={Phone1} />
        <Stack.Screen name="setup01" component={Setup01} />
        <Stack.Screen name="setup02" component={Setup02} />
        <Stack.Screen name="phone01" component={Phone01} />
        <Stack.Screen name="phone02" component={Phone02} />
        <Stack.Screen name="email01" component={Email01} />
        <Stack.Screen name="email02" component={Email02} />
        <Stack.Screen name="setupnote" component={Setupnote} />
        <Stack.Screen name="home" component={Home} />
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
