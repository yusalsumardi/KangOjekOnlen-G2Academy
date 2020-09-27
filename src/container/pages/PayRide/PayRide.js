import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonLanding from '../../../component/atoms/ButtonLanding'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import Context from './../../../context';

class PayRide extends React.Component {
    static contextType = Context
    constructor(props) {
        super(props);
        this.state={
          title:"Ride",
          desc:this.props.route.params.asal + " - " + this.props.route.params.tujuan,
          price:35000,
        }
    }
    componentDidMount() {
      (async ()=>{
        try {
          const phone = await AsyncStorage.getItem("userLogged")
          const dataPhone = JSON.parse(phone)
          this.setState(dataPhone)
        } catch (e) {
          console.log(e);
        }
      })()
    }
    addHistory = async () =>{
      try {
        const ctx = this.context
        await firestore().collection("History").add({
          title:this.state.title ,
          desc:this.state.desc,
          price:this.state.price,
          phone:this.state.phone
        })
        const nwHs = await firestore().collection("History").where("phone","==",this.state.phone).get();
        ctx[3](nwHs.docs);
      } catch (e) {
        console.log(e);
      }
    }
    actionBayar =async () =>{
      try {
        const ctx = this.context
        if (ctx[0] >= this.state.price) {
          const curBalance = parseInt(ctx[0]) - this.state.price;
          const res = await firestore().doc(this.state.path).update({balance:curBalance})
          ctx[1](curBalance)
          await this.addHistory();
          this.props.navigation.navigate("Result")
        }else {
          alert("Saldo anda tidak cukup");
        }
      } catch (e) {
        console.log(e);
      }
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.contain}>
                    <Text
                    style={{
                        fontSize: 18
                    }}>
                        {this.props.route.params.asal} - {this.props.route.params.tujuan}
                    </Text>
                    <Text
                    style={{
                        fontSize: 18
                    }}>
                        Biaya: Rp 35.000
                    </Text>
                    <Text
                    style={{
                        fontSize: 18
                    }}>
                        Estimasi: 30 menit
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 25,
                            marginBottom: 30
                        }}>
                        <ButtonLanding style={styles.button}
                        buttonName="Batal"
                        action={() => this.props.navigation.navigate("Ride")}
                        />
                        <ButtonLanding style={styles.button}
                        buttonName="Proses"
                        action={this.actionBayar}
                        />
                    </View>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31b057'
  },
  contain: {
    paddingTop: 60,
    marginTop: 300,
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center'
  },
  button: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default PayRide;
