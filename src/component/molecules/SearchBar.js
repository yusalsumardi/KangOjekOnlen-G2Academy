/*Ini header*/
import React from 'react';
import { View } from 'react-native';
import { Input } from '@ui-kitten/components';
import { Icon } from 'react-native-eva-icons';

function SearchBar(props) {
  return(
    <View>
      <Input
        placeholder='Mau beli apa hari ini?'
        accessoryLeft={()=><Icon fill="#aaa" style={{width: 20,height: 20}} name="search" />}
        {...props}
      />
    </View>
  )
}
export default SearchBar;
