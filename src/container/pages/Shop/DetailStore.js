import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import Header from './../../../component/molecules/Header';
import { Icon } from 'react-native-eva-icons';
import TitleContent from './../../../component/molecules/TitleContent';

function SearchIcon() {
  return(
    <>
      <View style={{padding: 3,marginLeft: "auto"}}>
        <Icon fill="#444" style={{width: 20,height: 20}} name="search" />
      </View>
    </>
  )
}

class DetailStore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={style.container}>
        <Header title={()=><SearchIcon />} action={()=>this.props.navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* title toko */}
          <View style={{marginTop: 20, flexDirection: 'row',justifyContent: 'space-between'}}>
            <View style={{width: "60%"}}>
                <Text style={{fontSize: 18,fontWeight: 'bold'}}>{this.props.route.params.name}</Text>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop: 15,alignItems: 'center'}}>
                  <View style={{backgroundColor: "#FA7D09",paddingHorizontal: 10, paddingVertical: 4,borderRadius: 25,flexDirection: 'row'}}>
                    <Icon name="heart" width="20" height="20" fill="#fff" />
                    <Text style={{color: "#fff",marginLeft: 5}}>Super</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name="pin-outline" width="20" height="20" fill="#666" />
                    <Text style={{fontSize: 14,color: "#666"}}>Kalibata Tengah</Text>
                  </View>
                </View>
                <View style={{padding: 5,marginTop: 5,flexDirection: 'row'}}>
                  <Icon name="star" width="20" height="20" fill="#ffd57e" />
                  <Text style={{marginLeft: 5,color: "#333",fontWeight: "bold"}}>4.3/5</Text>
                </View>
            </View>
            <View style={{marginLeft: 40}}>
              <View style={{borderWidth: 1, borderColor: "#eee", borderRadius: 20, padding: 10}}>
              <Image
                style={{resizeMode:'cover',width: 60,height: 60, alignSelf: 'center'}}
                source={require('./../../../assets/img/Shop/detailToko.jpg')}
                />
              </View>
            </View>
          </View>
          {/*Title Content*/}
          <TitleContent title="Produk" style={{borderBottomWidth: 1, borderColor: "#ccc",paddingBottom: 10,marginTop: 20}} />
          {/* Produk list */}
          <View style={{flexDirection: 'row',marginTop: 20,justifyContent: 'space-between'}}>
            <View style={{width: "70%"}}>
              <Text style={{fontWeight: 'bold',fontSize: 18,color: "#333"}}>Cookie Monster</Text>
              <Text style={{fontSize: 16,color: "#444",marginTop: 5}}>Blue Monster with fudgy chocolate chip filling</Text>
              <Text style={{fontWeight: "bold",fontSize: 16,marginTop: 20}}>50.000</Text>
            </View>
            <View>
            <Image
              style={{resizeMode:'cover',width: 80,height: 80, alignSelf: 'center'}}
              source={require('./../../../assets/img/Shop/produk.jpg')}
              />
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("Payment")}>
                <Text style={{backgroundColor: "#fff",borderWidth: 2,borderColor: "#31B057",textAlign: 'center',color: "#31B057",borderRadius: 30,paddingVertical: 1,marginTop: 10, fontWeight: 'bold',fontSize: 16}}>Beli</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={{flexDirection: 'row',marginTop: 20,justifyContent: 'space-between'}}>
            <View style={{width: "70%"}}>
              <Text style={{fontWeight: 'bold',fontSize: 18,color: "#333"}}>Cookie Monster</Text>
              <Text style={{fontSize: 16,color: "#444",marginTop: 5}}>Blue Monster with fudgy chocolate chip filling</Text>
              <Text style={{fontWeight: "bold",fontSize: 16,marginTop: 20}}>50.000</Text>
            </View>
            <View>
            <Image
              style={{resizeMode:'cover',width: 80,height: 80, alignSelf: 'center'}}
              source={require('./../../../assets/img/Shop/produk.jpg')}
              />
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("Payment")}>
                <Text style={{backgroundColor: "#fff",borderWidth: 2,borderColor: "#31B057",textAlign: 'center',color: "#31B057",borderRadius: 30,paddingVertical: 1,marginTop: 10, fontWeight: 'bold',fontSize: 16}}>Beli</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={{flexDirection: 'row',marginTop: 20,justifyContent: 'space-between'}}>
            <View style={{width: "70%"}}>
              <Text style={{fontWeight: 'bold',fontSize: 18,color: "#333"}}>Cookie Monster</Text>
              <Text style={{fontSize: 16,color: "#444",marginTop: 5}}>Blue Monster with fudgy chocolate chip filling</Text>
              <Text style={{fontWeight: "bold",fontSize: 16,marginTop: 20}}>50.000</Text>
            </View>
            <View>
            <Image
              style={{resizeMode:'cover',width: 80,height: 80, alignSelf: 'center'}}
              source={require('./../../../assets/img/Shop/produk.jpg')}
              />
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("Payment")}>
                <Text style={{backgroundColor: "#fff",borderWidth: 2,borderColor: "#31B057",textAlign: 'center',color: "#31B057",borderRadius: 30,paddingVertical: 1,marginTop: 10, fontWeight: 'bold',fontSize: 16}}>Beli</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={{flexDirection: 'row',marginTop: 20,justifyContent: 'space-between'}}>
            <View style={{width: "70%"}}>
              <Text style={{fontWeight: 'bold',fontSize: 18,color: "#333"}}>Cookie Monster</Text>
              <Text style={{fontSize: 16,color: "#444",marginTop: 5}}>Blue Monster with fudgy chocolate chip filling</Text>
              <Text style={{fontWeight: "bold",fontSize: 16,marginTop: 20}}>50.000</Text>
            </View>
            <View>
            <Image
              style={{resizeMode:'cover',width: 80,height: 80, alignSelf: 'center'}}
              source={require('./../../../assets/img/Shop/produk.jpg')}
              />
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("Payment")}>
                <Text style={{backgroundColor: "#fff",borderWidth: 2,borderColor: "#31B057",textAlign: 'center',color: "#31B057",borderRadius: 30,paddingVertical: 1,marginTop: 10, fontWeight: 'bold',fontSize: 16}}>Beli</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>

      </View>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  }
})
export default DetailStore;
