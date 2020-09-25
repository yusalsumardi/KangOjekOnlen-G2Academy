import React, {Component} from 'react';
import {View} from 'react-native';
import {LandingBotNav} from '../../organism/LandingBotNav';

export default class landing extends Component {
  render() {
    return (
      <View>
        <LandingBotNav buttonName="Masuk"></LandingBotNav>
      </View>
    );
  }
}
