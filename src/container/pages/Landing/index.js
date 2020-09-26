import React, {Component} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './landing';
import Login from './login';
import Register from './register';
import OTP from './otp';

const Stack = createStackNavigator();

export default class index extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen
            name="LandingPage"
            component={Landing}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="OTP" component={OTP} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
