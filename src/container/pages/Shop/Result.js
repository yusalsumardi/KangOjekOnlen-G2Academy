import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SearchBar from './../../../component/molecules/SearchBar';
import { Icon } from 'react-native-eva-icons';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  myRef = React.createRef();
  componentDidMount(){
    this.myRef.current?.startAnimation();
  }
  render() {
    return(
      <View style={{flex: 1, padding: 20,backgroundColor: "#fff"}}>
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
          <View style={{width: 150,height: 150, borderRadius: 150, backgroundColor: "#35B031", justifyContent: 'center',alignItems: 'center'}}>
            <Icon name="checkmark" animation="zoom" ref={this.myRef} width="100" height="100" fill="#fff" />
          </View>
          <View style={{width: "70%", marginTop: 20}}>
            <Text style={{textAlign: 'center', fontSize: 18, color: "#444"}}>
              Berhasil melakukan transaksi.
              Saldo telah di potong
            </Text>
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}>
            <View style={{borderWidth: 2,paddingVertical: 10, paddingHorizontal: 20, borderColor: "#35B031", borderRadius: 20}}>
              <Text style={{color: "#35B031", fontWeight: 'bold'}}>Kembali ke Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Result;
