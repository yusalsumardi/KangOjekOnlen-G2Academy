import React from 'react';
import { ScrollView } from 'react-native';
function Slider(props) {
  return(
    <ScrollView horizontal={true} {...props} showsHorizontalScrollIndicator={false}>
      {props.children}
    </ScrollView>
  )
}
export default Slider;
