import React from 'react';
import { View } from 'react-native';
import Icon from './component/atoms/Icon';
import {
  Shop,
  DetailStore,
  Payment,
  Result,
  Ride,
  Home,
  Profile,
  Chat,
  Landing,
  Login,
  Register,
  OTP
} from './container/pages';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Context from './context';
const Stack = createStackNavigator();

function NotLogged(props) {
  return(
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="OTP" children={nav=><OTP {...nav} state={props.state} />} />
    </Stack.Navigator>
  )
}
function Logged(props) {
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Ride" component={Ride} options={{headerShown:false}} />
      <Stack.Screen name="Shop" component={Shop} options={{headerShown:false}} />
      <Stack.Screen name="DetailStore" component={DetailStore} options={{headerShown:false}} />
      <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}} />
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}} />
      {/*Yusal*/}
      <Stack.Screen name="Profile" children={nav=><Profile {...nav} state={props.state} />}/>
      {/*Rifqi*/}
      <Stack.Screen name="Chat" component={Chat}/>
    </Stack.Navigator>
  )
}

class App extends React.Component {
  state={
    isLogged:false
  }
  render(){
    return(
      <AppContext>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            {this.state.isLogged ? <Logged state={this} /> : <NotLogged state={this} />}
          </NavigationContainer>
        </ApplicationProvider>
      </AppContext>
    )
  }
}
class AppContext extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isLogged:false
    }
  }

  render() {
    return (
      <Context.Provider value={{state:this.state,setState:this.setState}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default App;
