/*Ini header*/
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';

function Header(props) {
  return(
    <View style={{flexDirection: 'row',alignItems: 'center',paddingBottom: 10,borderBottomWidth: 1,borderColor: "#eee"}}>
      <Icon width={24} height={24} fill="#333" name="arrow-back-outline"onPress={props.action} />
      {props.title ? props.title() : null}
    </View>
  )
}
export default Header;
