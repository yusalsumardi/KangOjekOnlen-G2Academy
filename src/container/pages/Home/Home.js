import React from "react";
import {
    View,
    StyleSheet
} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeView from "../HomeView"
import Chat from "../Chat"

const TabTop = createMaterialTopTabNavigator()

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <NavigationContainer>
                <View style={styles.container}>
                    <TabTop.Navigator
                    tabBarOptions={{
                        style: {
                            backgroundColor: '#06AD38',                        
                        },
                        labelStyle: { color: 'white' },
                        pressColor: '#24723B'
                    }}
                    >
                        <TabTop.Screen 
                            name="Home" 
                            children={(props) =>
                            <HomeView {...props}
                            />} 
                        />
                        <TabTop.Screen name="Chat" 
                            children={(props) =>
                            <Chat {...props}
                            />}
                        />
                    </TabTop.Navigator>
                </View>
            </NavigationContainer>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FEE9E4'
    } 
})