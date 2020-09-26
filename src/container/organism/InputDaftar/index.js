import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input} from '@ui-kitten/components';

export default class index extends Component {
  render() {
    return (
      <View>
        <View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Nama Lengkap<Text style={{color: 'red'}}>*</Text>
          </Text>
          <Input placeholder="Contoh: Ironmen" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Email<Text style={{color: 'red'}}>*</Text>
          </Text>
          <Input placeholder="Contoh: Ironmen@Apenjer.com" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Nomor HP<Text style={{color: 'red'}}>*</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              backgroundColor: '#eee',
              paddingHorizontal: 10,
              fontSize: 12,
              borderRadius: 10,
              borderColor: '#ccc',
              borderWidth: 1,
            }}>
            +62
          </Text>
          <Input
            placeholder="Input Nomor HP"
            style={{marginLeft: 10, width: 250, flex: 1}}
            keyboardType="numeric"
          />
        </View>
      </View>
    );
  }
}
