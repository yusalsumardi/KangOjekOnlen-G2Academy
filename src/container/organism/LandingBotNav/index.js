import React, {Component} from 'react';
import {View} from 'react-native';
import {ButtonLanding} from '../../../component/atoms/ButtonLanding';

export default class index extends Component {
  render() {
    return (
      <View>
        <ButtonLanding buttonName="Masuk"></ButtonLanding>
        <ButtonLanding buttonName="Daftar"></ButtonLanding>
      </View>
    );
  }
}
