import React from 'react';
import { View } from 'react-native';

function Avatar(props) {
  return(
    <View {...props}>
      {props.children}
    </View>
  )
}
export default Avatar;
