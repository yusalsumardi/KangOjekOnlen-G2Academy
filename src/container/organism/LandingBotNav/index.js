import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ButtonLanding from '../../../component/atoms/ButtonLanding';

export default class index extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 20,
        }}>
        <ButtonLanding buttonName="Masuk" />
        <ButtonLanding buttonName="Daftar" />
      </View>
    );
  }
}
