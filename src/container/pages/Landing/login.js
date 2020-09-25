import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import InputLoginNomor from '../../organism/InputLoginNomor';

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <View style={{marginTop: 50, marginBottom: 5}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Masuk</Text>
        </View>
        <View>
          <Text>Silahkan masukan nomor HP kamu yang sudah terdaftar.</Text>
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
        <InputLoginNomor />
        <View
          style={{
            position: 'absolute',
            bottom: 15,
            right: 15,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: '#31b057',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                justifyContent: 'center',
                alignSelf: 'center',
                color: 'white',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
