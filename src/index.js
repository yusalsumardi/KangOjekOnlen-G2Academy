import React from 'react';
import { View } from 'react-native';
import Icon from './component/atoms/Icon';
import Shop from './container/pages/Shop/ShopScreen';
import DetailStore from './container/pages/Shop/DetailStore';
import Payment from './container/pages/Shop/Payment';
import Result from './container/pages/Shop/Result';
import Ride from './container/pages/Ride';
import Home from './container/pages/Home';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

class Main extends React.Component {
  render(){
    return(
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="Ride" component={Ride} options={{headerShown:false}} />
            <Stack.Screen name="Shop" component={Shop} options={{headerShown:false}} />
            <Stack.Screen name="DetailStore" component={DetailStore} options={{headerShown:false}} />
            <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}} />
            <Stack.Screen name="Result" component={Result} options={{headerShown:false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    )
  }
}
export default Main;
