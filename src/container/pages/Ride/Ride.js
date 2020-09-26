import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '@ui-kitten/components';
import { Icon } from 'react-native-eva-icons';
import { Button } from '@ui-kitten/components';

class Ride extends React.Component {
  constructor(props) {
    super(props);
  }
  state ={
    show : true
  }
  render() {
    return(
      <View style={{flex: 1,backgroundColor: "#31B057", justifyContent: 'flex-end'}}>
        {this.state.show ? (
          <Button
          style={{borderRadius: 100,width: 40,height: 40,padding: 0, backgroundColor: "#fff", borderWidth: 0, marginBottom: 10, marginLeft: 10}}
          accessoryLeft={()=><Icon name="arrow-back-outline" style={{width: 25,height: 25}} fill="#444" />}
          onPress={()=>this.props.navigation.goBack()}
          />
        ):null}
        <View style={this.state.show ? style.show : style.hide}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Mau kemana hari ini?</Text>
          <Input
          style={{marginTop: 10,borderRadius: 50}}
          placeholder='Cari Lokasi Tujuan'
          accessoryLeft={()=><Icon width="20" height="20" name="search-outline" fill="#444" />}
          onFocus={()=>this.setState({show:false})}
          onBlur={()=>this.setState({show:true})}
        />
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  show:{padding: 20,height: 200,backgroundColor: "#fff",width: "100%", borderTopRightRadius: 25,borderTopLeftRadius: 25},
  hide:{padding: 20, backgroundColor: "#fff",width: "100%", flex: 1},
})
export default Ride;
