import React from 'react';
import Shop from './ShopScreen';
import DetailStore from './DetailStore';
import Result from './Result';
import Payment from './Payment';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Shop">
        <Stack.Screen name="Shop" component={Shop} options={{headerShown:false}} />
        <Stack.Screen name="DetailStore" component={DetailStore} options={{headerShown:false}} />
        <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}} />
        <Stack.Screen name="Result" component={Result} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
