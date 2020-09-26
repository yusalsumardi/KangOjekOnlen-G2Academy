import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Header from './../../../component/molecules/Header';
import TitleContent from './../../../component/molecules/TitleContent';

function Title() {
  return(
    <Text style={{fontSize: 20,marginLeft: 5,fontWeight: 'bold',alignSelf: 'flex-start'}}>Toko A</Text>
  )
}

class Payment extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    jumlah : 1,
    price : 50000,
    ongkir : 12000
  };
  componentDidUpdate(){
    if (this.state.jumlah < 1) {
      this.setState({jumlah:1})
    }
  }
  toCurency(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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
                source={require('./../../../assets/img/Shop/produk.jpg')}
                />
            </View>
            <View style={{width: "70%",position: 'relative'}}>
              <Text style={{fontWeight: 'bold',fontSize: 20}}>Cookie Monster</Text>
              <Text style={{fontSize: 16}}>Blue Monster with fudgy chocolate chip filling</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>50.000</Text>
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
          <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("Result")}>
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
