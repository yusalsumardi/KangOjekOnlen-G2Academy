import React from 'react';
import { View } from 'react-native';
import Icon from './component/atoms/Icon';
import {
  Shop,
  DetailStore,
  Payment,
  Result,
  Ride,
  PayRide,
  HomeView,
  Profile,
  Chat,
  Landing,
  Login,
  Register,
  OTP,
  Splash
} from './container/pages';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';

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
    <Stack.Navigator initialRouteName="HomeView">
      <Stack.Screen name="HomeView" component={HomeView} options={{headerShown:false}} />
      <Stack.Screen name="Ride" component={Ride} options={{headerShown:false}} />
      <Stack.Screen name="PayRide" component={PayRide} options={{headerShown:false}} />
      <Stack.Screen name="Shop" component={Shop} options={{headerShown:false}} />
      <Stack.Screen name="DetailStore" component={DetailStore} options={{headerShown:false}} />
      <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}} />
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}} />
      {/*Yusal*/}
      <Stack.Screen name="Profile" children={nav=><Profile {...nav} state={props.state} />}/>
      {/*Rifqi*/}
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

class App extends React.Component {
  state={
    isLogged:false,
    isLoading:true
  }
  componentDidMount() {
    (async ()=>{
      try {
        const cek = await AsyncStorage.getItem('isLogged');
        if (cek) {
          cek === "0" ? this.setState({isLogged:false}) : this.setState({isLogged:true});
        }
        this.setState({isLoading:false})
      } catch (e) {
        console.log(e);
      }
    })()
  }
  render(){
    return(
      <AppContext>
        <ApplicationProvider {...eva} theme={eva.light}>
          {this.state.isLoading ? (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
              </Stack.Navigator>
            </NavigationContainer>
          ):(
            <NavigationContainer>
              {this.state.isLogged ? <Logged state={this} /> : <NotLogged state={this} />}
            </NavigationContainer>
          )}
        </ApplicationProvider>
      </AppContext>
    )
  }
}

function AppContext(props) {
  const [balance,setBalance] = React.useState(0);
  React.useEffect(()=>{
    (async ()=>{
      try {
        const dataLocal = await AsyncStorage.getItem("userLogged");
        const bln = await firestore().doc(JSON.parse(dataLocal).path).get();
        const balance = bln.data().balance
        setBalance(balance)
      } catch (e) {
        console.log(e);
      }
    })()
  },[balance])
  return(
    <Context.Provider value={[balance,setBalance]}>
      {props.children}
    </Context.Provider>
  )
}
export default App;
