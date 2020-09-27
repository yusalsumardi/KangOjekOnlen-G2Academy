import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Header from './../../../component/molecules/Header';
import TitleContent from './../../../component/molecules/TitleContent';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import Context from './../../../context';

function Title() {
  return(
    <Text style={{fontSize: 20,marginLeft: 5,fontWeight: 'bold',alignSelf: 'flex-start'}}>Toko A</Text>
  )
}

class Payment extends React.Component {
  static contextType = Context
  constructor(props) {
    super(props);
    this.state = {
      jumlah : 1,
      price : this.props.route.params.data.harprod,
      ongkir : 12000,
      title:this.props.route.params.title,
      desc:this.props.route.params.desc
    };
  }
  componentDidMount() {
    (async ()=>{
      try {
        const data = await AsyncStorage.getItem("userLogged");
        const bln = await firestore().doc(JSON.parse(data).path).get();
        const res = bln.data().balance
        if (data) {
          this.setState(JSON.parse(data))
        }
        this.setState({balance:res});
        this.setState({isLoading:false})
      } catch (e) {
        console.log(e);
      }
    })()
  }
  componentDidUpdate(){
    if (this.state.jumlah < 1) {
      this.setState({jumlah:1})
    }
  }
  toCurency(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  addHistory = async () =>{
    try {
      const ctx = this.context
      const data = {
        title:this.state.title + " - " + this.props.route.params.data.namprod,
        desc:this.state.desc,
        price:(this.state.jumlah * this.state.price) + this.state.ongkir,
        phone:this.state.phone
      }
      await firestore().collection("History").add(data)
      const nwHs = await firestore().collection("History").where("phone","==",this.state.phone).get();
      ctx[3](nwHs.docs);
    } catch (e) {
      console.log(e);
    }
  }
  actionBayar = async () => {
    try {
      const ctx = this.context
      if (this.state.balance >= (this.state.jumlah * this.state.price) + this.state.ongkir) {
        const curBalance = parseInt(this.state.balance) - parseInt((this.state.jumlah * this.state.price) + this.state.ongkir);
        const res = await firestore().doc(this.state.path).update({balance:curBalance})
        ctx[1](curBalance)
        this.addHistory();
        this.props.navigation.navigate("Result")
      }else {
        alert("Saldo anda tidak cukup");
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <>
        <View style={style.container}>
          <Header title={()=><Title />} action={()=>this.props.navigation.goBack()} />
          {/*Title Content*/}
          <TitleContent title="Pesanan" />
          {/*Data Barang*/}
          <View style={{width: "100%", backgroundColor: "#fff", elevation: 5, marginTop: 20, flexDirection: 'row'}}>
            <View style={{width: "30%",padding: 10}}>
              <Image
                style={{resizeMode:'cover',width: 80,height: 80, alignSelf: 'flex-start', borderRadius: 20}}
                source={this.props.route.params.data.imgprod}
                />
            </View>
            <View style={{width: "70%",position: 'relative'}}>
              <Text style={{fontWeight: 'bold',fontSize: 20}}>{this.props.route.params.data.namprod}</Text>
              <Text style={{fontSize: 16}}>{this.props.route.params.data.ketprod}</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>{this.props.route.params.data.harprod.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
              <View style={{borderWidth: 1,borderColor: "transparent", flexDirection: 'row', alignItems: 'center',position: 'absolute',right: 10,bottom: 10,width: 80, justifyContent: 'space-between', paddingHorizontal: 10}}>
                <TouchableWithoutFeedback onPress={()=>this.setState(state=>({jumlah:state.jumlah-1}))}>
                  <Text style={{color: "#00A512",fontWeight: 'bold',fontSize: 18}}>-</Text>
                </TouchableWithoutFeedback>
                <Text>{this.state.jumlah}</Text>
                <TouchableWithoutFeedback onPress={()=>this.setState(state=>({jumlah:state.jumlah+1}))}>
                  <Text style={{color: "#00A512",fontWeight: 'bold',fontSize: 18}}>+</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>

          {/*Title Content*/}
          <TitleContent title="Detail Pembayaran" />
          <View style={{borderWidth: 1,padding: 10,borderRadius: 20,marginTop: 10, borderColor: "#ddd"}}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', paddingVertical: 10}}>
              <Text style={{fontSize: 16,color:"#333"}}>Harga</Text>
              <Text style={{fontSize: 16,color:"#333"}}>{this.toCurency(this.state.jumlah * this.state.price)}</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', paddingVertical: 10}}>
              <Text style={{fontSize: 16,color:"#333"}}>Ongkir</Text>
              <Text style={{fontSize: 16,color:"#333"}}>{this.toCurency(this.state.ongkir)}</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', paddingVertical: 10,borderTopWidth: 1,borderColor: "#ddd"}}>
              <Text style={{fontSize: 17,color:"#333", fontWeight: 'bold'}}>Total Pembayaran</Text>
              <Text style={{fontSize: 17,color:"#333", fontWeight: 'bold'}}>{this.toCurency((this.state.jumlah * this.state.price) + this.state.ongkir)}</Text>
            </View>
          </View>
        </View>
        <View style={{position: 'absolute', bottom: 15, width: "100%", alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={this.actionBayar}>
            <View style={{backgroundColor: "#31B057",width: "90%", padding: 10, borderRadius: 5}}>
                <Text style={{textAlign: 'center',fontWeight: 'bold', color:'#fff'}}>Bayar</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </>
    );
  }
}
const style = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 20,
    position: 'relative',
    backgroundColor: "#fff"
  }
})
export default Payment;
