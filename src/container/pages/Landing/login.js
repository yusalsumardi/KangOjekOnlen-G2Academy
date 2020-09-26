import React, {Component} from 'react';
import {Text, View} from 'react-native';
import InputLoginNomor from '../../organism/InputLoginNomor';
import {Icon} from 'react-native-eva-icons';
import {Button} from '@ui-kitten/components';

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  goScreen = (toScreen) => {
    console.log(this.props);
    this.props.navigation.navigate(toScreen);
  };

  render() {
    console.log(this.state);
    return (
      <View style={{paddingHorizontal: 20, flex: 1, backgroundColor: 'white'}}>
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
        <InputLoginNomor state={this} />
        {this.state.value.length >= 11 ? (
          <View
            style={{
              position: 'absolute',
              bottom: 15,
              right: 15,
            }}>
            <Button
              onPress={() => this.goScreen('OTP')}
              accessoryLeft={() => (
                <Icon
                  width={24}
                  height={24}
                  fill="#fff"
                  name="arrow-forward-outline"
                  style={{justifyContent: 'center', flexDirection: 'row'}}
                />
              )}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#31b057',
                borderWidth: 0,
              }}
            />
          </View>
        ) : (
          <View
            style={{
              position: 'absolute',
              bottom: 15,
              right: 15,
            }}>
            <Button
              accessoryLeft={() => (
                <Icon
                  width={24}
                  height={24}
                  fill="#fff"
                  name="arrow-forward-outline"
                  style={{justifyContent: 'center', flexDirection: 'row'}}
                />
              )}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#eee',
                borderWidth: 0,
              }}
            />
          </View>
        )}
      </View>
    );
  }
}
