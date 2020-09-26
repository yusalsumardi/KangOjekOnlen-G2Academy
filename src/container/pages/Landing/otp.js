import React, {Component} from 'react';
import {Text, View} from 'react-native';
import InputOTP from '../../organism/InputOTP';
import {Icon} from 'react-native-eva-icons';
import {Button} from '@ui-kitten/components';

export default class otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      OTP: 1234,
      isOTPTrue: false,
    };
  }

  authOTP = (val) => {
    if (val == this.state.OTP) {
      this.props.state.setState({isLogged:true})
    } else {
      this.setState({
        isOTPTrue: true,
      });
    }
  };

  goScreen = (toScreen) => {
    this.props.navigation.navigate(toScreen);
  };

  render() {
    return (
      <View style={{paddingHorizontal: 20, flex: 1, backgroundColor: 'white'}}>
        <View style={{marginTop: 50, marginBottom: 5}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Kode OTP sudah dikirim!
          </Text>
        </View>
        <View>
          <Text>
            Masukkan kode OTP yang kami SMS ke nomor HP-mu yang sudah terdaftar!
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            OTP<Text style={{color: 'red'}}>*</Text>
          </Text>
        </View>
        <InputOTP state={this} />
        {this.state.isOTPTrue ? (
          <Text style={{color: 'red'}}>Salah tong</Text>
        ) : null}
        {this.state.value.length >= 4 ? (
          <View
            style={{
              position: 'absolute',
              bottom: 15,
              right: 15,
            }}>
            <Button
              onPress={() => this.authOTP(this.state.value)}
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
