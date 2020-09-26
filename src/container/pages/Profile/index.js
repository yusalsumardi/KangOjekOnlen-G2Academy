import React, {Component} from 'react';
import {Icon} from 'react-native-eva-icons';
import {Text, View, Image, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Input} from '@ui-kitten/components';

export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 10,
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              style={styles.profile}
              source={require('../../../assets/img/profile.jpg')}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                paddingLeft: 10,
              }}>
              User
            </Text>
          </View>
          <View style={{paddingLeft: 50}}>
            <Text>0888888888888</Text>
            <Text>user@user.com</Text>
          </View>
          <View style={{marginTop: 50}}>
            <Text style={{fontWeight: 'bold'}}>Edit Akun</Text>
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Nama Lengkap<Text style={{color: 'red'}}>*</Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="person-outline"
                  width={24}
                  height={24}
                  fill="#31b057"
                />
                <Input
                  placeholder="Contoh: Ironmen"
                  style={{width: '100%', flex: 1, paddingLeft: 5}}
                />
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                Email<Text style={{color: 'red'}}>*</Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="email-outline"
                  width={24}
                  height={24}
                  fill="#31b057"
                />
                <Input
                  placeholder="Contoh: Ironmen@Apenjer.com"
                  style={{width: '100%', flex: 1, paddingLeft: 5}}
                />
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                Nomor HP<Text style={{color: 'red'}}>*</Text>
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  paddingHorizontal: 1,
                  height: 24,
                  width: 24,
                  borderRadius: 7,
                  borderColor: '#31b057',
                  borderWidth: 2,
                  textAlign: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 9,
                  }}>
                  +62
                </Text>
              </View>
              <Input
                placeholder="Input Nomor HP"
                style={{paddingLeft: 5, width: 250, flex: 1}}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#31b057',
              height: 40,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: 15,
              marginBottom: 20,
            }}>
            <TouchableOpacity>
              <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
                Simpan
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontWeight: 'bold'}}>About Apps</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              paddingTop: 5,
            }}>
            <Icon
              width={24}
              height={24}
              fill="#FA7D09"
              name="star-outline"
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            />
            <Text style={{paddingLeft: 10}}>KangOjekOnlen v_1.1</Text>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              height: 40,
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'flex-end',
              width: '100%',
              marginTop: 50,
              marginBottom: 20,
            }}>
            <TouchableOpacity onPress={()=>this.props.state.setState({isLogged:false})}>
              <Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>
                Keluar
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
