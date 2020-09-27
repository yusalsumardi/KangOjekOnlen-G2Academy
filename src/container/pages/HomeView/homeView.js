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
                        activeTintColor: '#e91e63',
                        labelStyle: { color: 'white' },
                        pressColor: '#24723B'
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
