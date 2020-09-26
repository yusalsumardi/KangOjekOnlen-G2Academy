import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Layout, Spinner} from '@ui-kitten/components';

export default class index extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/iconLogoText.png')}
        />
        <View style={{marginTop: 50}}>
          <Spinner status="success" size="giant" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
});
