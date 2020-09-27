import React from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Input } from '@ui-kitten/components';
import Header from './../../../component/molecules/Header';
import SearchBar from './../../../component/molecules/SearchBar';
import TitleContent from './../../../component/molecules/TitleContent';
import DataStore from './FileData';

import Slider from './../../organism/Slider';
import StoreList from './../../organism/StoreList';

function Title() {
  return(
    <>
      <View style={{backgroundColor: "#ED2736",padding: 3,borderRadius: 100,marginLeft: 20}}>
        <Icon fill="#fff" style={{width: 20,height: 20}} name="shopping-bag" />
      </View>
      <Text style={{fontSize: 20,marginLeft: 5,fontWeight: 'bold',alignSelf: 'flex-start'}}>goshop</Text>
    </>
  )
}

class ShopScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={style.container}>
        <Header title={()=><Title />} action={()=>this.props.navigation.goBack()}/>
        {/*Ini search bar*/}
        <SearchBar style={{marginTop: 20}} />
        {/*Ini Main Content*/}
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <Slider style={{marginTop: 10 }}>
              <View style={{width: 300,borderRadius: 20,marginRight: 20,overflow: 'hidden'}}>
                <Image
                  style={{resizeMode:'cover',width: "100%",height: 200}}
                  source={require('./../../../assets/img/Shop/slider1.png')}
              />
              </View>
              <View style={{width: 300,borderRadius: 20,marginRight: 20,overflow: 'hidden'}}>
                <Image
                  style={{resizeMode:'cover',width: "100%",height: 200}}
                  source={require('./../../../assets/img/Shop/slider1.png')}
              />
              </View>
              <View style={{width: 300,borderRadius: 20,marginRight: 20,overflow: 'hidden'}}>
                <Image
                  style={{resizeMode:'cover',width: "100%",height: 200}}
                  source={require('./../../../assets/img/Shop/slider1.png')}
              />
              </View>
              <View style={{width: 300,borderRadius: 20,marginRight: 20,overflow: 'hidden'}}>
                <Image
                  style={{resizeMode:'cover',width: "100%",height: 200}}
                  source={require('./../../../assets/img/Shop/slider1.png')}
              />
              </View>
            </Slider>
            {/*Title Content*/}
            <TitleContent iconName="bulb-outline" title="Recomend Store" />
            {/*Store List*/}

            {DataStore.map((item,i)=>{
              const img = `./../../../assets/img/Shop/${item.imgtoko}`;
              return (
                <StoreList key={i} name={item.toko} action={()=>this.props.navigation.navigate("DetailStore",{name:item.toko,data:item})} image={item.imgtoko} category={item.keterangan} />
              )
            })}
        </ScrollView>
      </View>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  }
})
export default ShopScreen;
