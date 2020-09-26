/*Ini header*/
import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Icon } from 'react-native-eva-icons';

function TitleContent(props) {
  return(
    <View style={{marginTop: 20,flexDirection: 'row',alignItems: 'center'}} {...props}>
      {props.iconName ? (
        <Icon style={{width: 28,height: 28,marginRight: 5}} fill="#ED2736" name={props.iconName} />
      ):null}
      <Text style={{fontSize: 18,color: "#444",fontWeight: 'bold'}}>{props.title}</Text>
    </View>
  )
}
export default TitleContent;
