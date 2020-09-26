import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Text
} from "react-native"

export default class Chat extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <ScrollView>
                <View>
                    <Text>Chat</Text>
                </View>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    
})