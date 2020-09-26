import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input} from '@ui-kitten/components';

export default class index extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Text
          style={{
            backgroundColor: '#eee',
            paddingHorizontal: 10,
            paddingVertical: 5,
            fontSize: 12,
            borderRadius: 10,
            borderColor: '#ccc',
            borderWidth: 1,
          }}>
          +62
        </Text>
        <Input
          placeholder="Input Nomor HP"
          style={{marginLeft: 10, width: 250}}
          keyboardType="numeric"
        />
      </View>
    );
  }
}
