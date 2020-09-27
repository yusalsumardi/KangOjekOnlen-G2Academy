import React from "react";
import {
    View,
    StyleSheet
} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from "../Home"
import Chat from "../Chat"

const TabTop = createMaterialTopTabNavigator()

export default class HomeView extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    
    render(){
        return(
            <View style={styles.container}>
                <TabTop.Navigator
                    tabBarOptions={{
                        style: {
                            backgroundColor: '#35B031',
                        },
                        labelStyle: {
                            color: 'white',
                        },
                        tabStyle: {
                            marginHorizontal: 50,
                            marginVertical: 5                           
                        },
                        pressColor: '#24723B',
                        upperCaseLabel: 'false',
                        showIcon: true,
                        showLabel: true,
                        indicatorStyle: {
                            width: "25%",
                            backgroundColor: "#24723B",
                            borderWidth: 25,
                            borderColor: '#24723B',
                            borderRadius: 30,
                            marginTop: 5,
                            marginBottom: 5,
                            marginLeft: 55
                        }                        
                    }}
                >
                    <TabTop.Screen 
                            name="Home" 
                            children={(props) =>
                            <Home {...props}
                            />} 
                    />
                    <TabTop.Screen name="Chat" 
                            children={(props) =>
                            <Chat {...props}
                            />}
                    />
                </TabTop.Navigator>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FEE9E4'
    } 
})