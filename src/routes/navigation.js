import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import loginscreen from '../pages/loginscreen/LoginScreen';
import registerscreen from '../pages/loginscreen/RegisterScreen';
import forgetpassword from '../pages/loginscreen/ForgetPassword';
import phone from '../pages/loginscreen/phone';
import phone1 from '../pages/loginscreen/phone1';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={loginscreen} />
      <Stack.Screen name="Register" component={registerscreen} />
      <Stack.Screen name="Forget" component={forgetpassword} />
      <Stack.Screen name="Phone" component={phone} />
      <Stack.Screen name="Phone1" component={phone1} />
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