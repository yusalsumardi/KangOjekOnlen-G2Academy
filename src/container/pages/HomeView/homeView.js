import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TextInput
} from "react-native"
import SearchBar from "../../../component/molecules/SearchBar"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const TabBottom = createBottomTabNavigator();

export default class HomeView extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.section}>
                    <View style={styles.input}>
                        <TextInput
                        placeholder="Ayo mau beli apa?"
                        name="input"
                        style={styles.textInput} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
    },
    section: {        
        flexDirection: 'row',
        backgroundColor:'white',
        width: '80%',
        paddingVertical:1,
        paddingHorizontal:10,
        borderRadius:30,
        borderColor: '#929191',
        borderWidth: 1  
    },
    input: {
        flex:1
    },
    textInput: {
        paddingLeft:10
    },
})