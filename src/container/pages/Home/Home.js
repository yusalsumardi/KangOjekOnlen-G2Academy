import React from 'react';
import { View, ScrollView,TouchableOpacity, Text } from 'react-native';
import SearchBar from './../../../component/molecules/SearchBar';
import Avatar from './../../../component/molecules/Avatar';
import { Icon } from 'react-native-eva-icons';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import Context from './../../../context';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      balance:0,
      history:[]
    }
  }
  componentDidMount() {
    (async ()=>{
      try {
        const data = await AsyncStorage.getItem("userLogged");
        const bln = await firestore().doc(JSON.parse(data).path).get();
        const history = await firestore()
        .collection("History")
        .where('phone','==',JSON.parse(data).phone)
        .get();
        const res = bln.data().balance
        if (data) {
          this.setState(JSON.parse(data))
        }
        this.setState({history:history.docs})
        this.setState({balance:res});
        this.setState({isLoading:false})
      } catch (e) {
        console.log(e);
      }
    })()
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "#35B031", justifyContent: 'space-between'}}>
        <View style={{flex: 1,paddingVertical: 20, backgroundColor: "#fff", borderTopRightRadius: 30,borderTopLeftRadius: 30, marginRight: 2}}>
          <ScrollView style={{flex: 1, padding: 20, }} showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'row', width: "100%", alignItems: 'center', justifyContent: 'space-between'}}>
              <SearchBar style={{width: "85%", borderRadius: 20}} title="Cari Layanan..." />
              <Avatar onPress={()=>this.props.navigation.navigate("Profile")} style={{backgroundColor: "#35B031",width: 40, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="person" width="30" height="30" fill="#fff" />
              </Avatar>
            </View>
            <View style={{width: "100%", height: 90, backgroundColor: "#3498db", marginTop: 20, borderRadius: 20, flexDirection: 'row', padding: 10}}>
              <View style={{width: "30%", backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 15, paddingVertical: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="credit-card" width="15" height="15" fill="#3498db" />
                  <Text style={{fontSize: 12, alignItems: 'center', marginLeft: 3}}>Gopay</Text>
                </View>
                <Context.Consumer>
                  {ctx=>(
                    <Text style={{fontWeight: 'bold', fontSize: 14}}>{ctx[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                  )}
                </Context.Consumer>
              </View>
              <View style={{width: "70%", padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{alignItems: 'center'}}>
                  <View style={{backgroundColor: "#fff", width: 30, alignItems: 'center', height: 30, justifyContent: 'center', borderRadius: 10}}>
                    <Icon name="upload-outline" width="20" height="20" fill="#3498db" />
                  </View>
                  <Text style={{color: "#fff", fontWeight: 'bold'}}>Bayar</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View style={{backgroundColor: "#fff", width: 30, alignItems: 'center', height: 30, justifyContent: 'center', borderRadius: 10}}>
                    <Icon name="flip-outline" width="20" height="20" fill="#3498db" />
                  </View>
                  <Text style={{color: "#fff", fontWeight: 'bold'}}>Isi Ulang</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View style={{backgroundColor: "#fff", width: 30, alignItems: 'center', height: 30, justifyContent: 'center', borderRadius: 10}}>
                    <Icon name="menu-2-outline" width="20" height="20" fill="#3498db" />
                  </View>
                  <Text style={{color: "#fff", fontWeight: 'bold'}}>Lainnya</Text>
                </View>
              </View>
            </View>
            <View style={{flex: 1, marginTop: 30, marginBottom: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="clipboard-outline" width="20" height="20" fill="#3498db" />
                <Text style={{fontSize: 18, marginBottom: 10, marginLeft: 5}}>Aktivitas kamu terakhir</Text>
              </View>
              {this.state.history.map((item,i)=>(
                <View key={i} style={{width: "100%", backgroundColor: "#fff" , borderWidth: 1, borderColor: "#ddd", borderRadius: 20, padding: 20, flexDirection: 'row', justifyContent: 'space-between',marginBottom: 10}}>
                  <View>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>{item.data().title}</Text>
                    <Text style={{fontSize: 16, color: "#333", marginTop: 5}}>{item.data().desc}</Text>
                  </View>
                  <Text style={{fontSize: 20}}>- Rp{item.data().price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                </View>
              ))}

            </View>
          </ScrollView>
        </View>
        <View style={{padding: 10, backgroundColor: "#fff", elevation: 15, flexDirection: 'row',justifyContent: 'space-around',marginRight: 2}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Ride")}>
              <View>
                <Icon width="25" height="25" fill="#3498db" name="compass-outline" />
                <Text style={{color: "#444"}}>Ride</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Shop")}>
              <View>
                <Icon width="25" height="25" fill="#3498db" name="shopping-cart-outline" />
                <Text style={{color: "#444"}}>Shop</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default Home;
