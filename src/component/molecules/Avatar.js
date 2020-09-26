import React from 'react';
import { View, TouchableOpacity } from 'react-native';

function Avatar(props) {
  return(
    <TouchableOpacity {...props}>
      {props.children}
    </TouchableOpacity>
  )
}
export default Avatar;
