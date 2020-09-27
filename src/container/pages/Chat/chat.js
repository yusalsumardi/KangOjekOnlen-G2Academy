import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    LogBox,
    YellowBox
} from "react-native"
import ChatBot from 'react-native-chatbot'
YellowBox.ignoreWarnings([""])

const steps = [
    {
        id: "1",
        message: "Hai Kak, Terima kasih sudah memesan :)",
        trigger: "2"
    },
    {
        id: "2",
        message: "Mohon ditunggu ya Kak (9^-^)9",
        trigger: "3"
    },
    {
        id: "3",
        user: true,
        trigger: "4"
    },
    {
        id: "4",
        message: "Siaaaap Meluncur",
        trigger: "5"
    },
    {
        id: "5",
        user: true,
        trigger: "6"
    },
    {
        id: "6",
        message: "Dekat Kak, maaf Kakak pakai baju apa ya?",
        trigger: "7"
    },
    {
        id: "7",
        user: true,
        trigger: "8"
    },
    {
        id: "8",
        message: "Oh iya sudah keliatan",
        trigger: "9"
    },
    {
        id: "9",
        user: true,
        trigger: "10"
    },
    {
        id: "10",
        message: "Siap2 berangkat Kak :)",
        end: true
    }
]

export default class Chat extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
          <View style={{flex: 1, backgroundColor: "#35B031"}}>
            <View style={styles.container}>
              <ChatBot steps={steps} contentStyle={{backgroundColor: "#fff"}} />
            </View>
          </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#fff",
    }
})
