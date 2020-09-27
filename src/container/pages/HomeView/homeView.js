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
    }
    render(){
        return(
            <View style={styles.container}>
                <TabTop.Navigator
                    tabBarOptions={{
                        style: {
                            backgroundColor: '#35B031',
                            borderWidth:0,
                            elevation:0
                        },
                        labelStyle: {
                            color: 'white'
                        },
                        tabStyle: {
                            marginVertical: 5
                        },
                        pressColor: '#24723B',
                        upperCaseLabel: 'false',
                        showIcon: true,
                        showLabel: true,
                        indicatorStyle: {
                            width: "20%",
                            backgroundColor: "#24723B",
                            borderWidth: 15,
                            borderColor: '#24723B',
                            borderRadius: 30,
                            marginBottom:12,
                            marginLeft:60
                        }
                    }}
                >
                    <TabTop.Screen name="Home" component={Home} />
                    <TabTop.Screen name="Chat" component={Chat} />
                </TabTop.Navigator>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    }
})
