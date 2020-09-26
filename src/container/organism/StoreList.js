import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import { Icon } from 'react-native-eva-icons';

class StoreList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <TouchableWithoutFeedback onPress={this.props.action}>
        <View style={{marginTop: 15,flexDirection: 'row',borderRadius: 20,padding: 10}}>
          <View style={{width: "15%",padding: 8,borderRadius: 20,marginRight: 10,backgroundColor: "#eee"}}>
            <Image
              source={this.props.image}
              style={{resizeMode:'cover',width: "100%",height: 40,borderRadius: 10}}
               />
          </View>
          <View style={{borderBottomWidth: 1, borderColor:"#ddd",flex: 1,paddingBottom: 5}}>
            <Text style={{fontSize: 18,fontWeight: 'bold', color:"#444"}}>{this.props.name}</Text>
            <Text style={{fontSize: 16, color:"#444"}}>{this.props.category}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default StoreList;
