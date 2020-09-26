/*Ini header*/
import React from 'react';
import { View } from 'react-native';
import { Input } from '@ui-kitten/components';
import { Icon } from 'react-native-eva-icons';

function SearchBar(props) {
  const title = props.title ? props.title : "Mau beli apa hari ini?";
  return(
    <Input
      placeholder={title}
      accessoryLeft={()=><Icon fill="#aaa" style={{width: 20,height: 20}} name="search" />}
      style={{width: "100%"}}
      {...props}
      />
  )
}
export default SearchBar;
