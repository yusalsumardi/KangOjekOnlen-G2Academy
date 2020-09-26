import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ButtonLanding from '../../../component/atoms/ButtonLanding';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goScreen = (toScreen) => {
    return this.props.navigation.navigate(toScreen);
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 20,
        }}>
        <ButtonLanding
          buttonName="Masuk"
          action={() => this.goScreen('Login')}
        />
        <ButtonLanding
          buttonName="Daftar"
          action={() => this.goScreen('Register')}
        />
      </View>
    );
  }
}
