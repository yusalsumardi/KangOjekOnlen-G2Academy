import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import LandingBotNav from '../../organism/LandingBotNav';

export default class landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'column',
          flex: 1,
        }}>
        <Image
          source={require('../../../assets/img/imgLanding.jpg')}
          style={{
            width: undefined,
            height: 150,
            justifyContent: 'center',
            flexDirection: 'row',
            marginHorizontal: 35,
            borderRadius: 30,
          }}
        />
        <View
          style={{
            marginHorizontal: 15,
            marginBottom: 8,
            marginTop: 50,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Selamat Datang di KangOjekOnlen!
          </Text>
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text style={{color: '#444'}}>
            Aplikasi yang bikin hidup kamu lebih dekat dengan Kang Ojek! Kamu
            bisa minta antar Kang Ojek, bisa juga kamu minta beliin barang sama
            Kang Ojek!
          </Text>
        </View>
        <LandingBotNav />
        <View
          style={{
            backgroundColor: '#e6ffff',
            width: '100%',
            height: 40,
          }}>
          <Text
            style={{
              fontSize: 12,
              marginHorizontal: 15,
              marginBottom: 5,
            }}>
            Dengan masuk atau mendaftar, kamu menyetujui{' '}
            <Text style={{color: '#00A512'}}>Ketentuan Layanan</Text> dan{' '}
            <Text style={{color: '#00A512'}}>Kebihakan Privasi</Text>.
          </Text>
        </View>
      </View>
    );
  }
}
