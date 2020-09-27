import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import InputLoginNomor from '../../organism/InputLoginNomor';
import {Icon} from 'react-native-eva-icons';
import {Button} from '@ui-kitten/components';
import InputDaftar from '../../organism/InputDaftar';
import firestore from '@react-native-firebase/firestore';

export default class register extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:"",
      email:"",
      phone:"+62"
    }
  }
  registerProcess = async () =>{
    if (this.state.name === "" || this.state.email === "" || this.state.phone.length < 8 ) {
      alert("Field tidak boleh kosong")
    }else {
      try {
        const count = await firestore().collection("User").where("phone","==",this.state.phone).get();
        if (count.size > 0) {
          alert("Nomor Telah di daftarkan");
        }else {
          const data = await firestore().collection("User").add(this.state);
          this.setState({path:data.path})
          this.props.navigation.navigate("OTP",{data:this.state});
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  render() {
    return (
      <View style={{paddingHorizontal: 20, flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <View style={{marginTop: 50, marginBottom: 5}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Daftar</Text>
          </View>
          <View>
            <Text>
              Kami ingin mengenal kamu lebih dekat. Lengkapi data dirimu dibawah
              ini ya!
            </Text>
          </View>
          <InputDaftar state={this} />
        </ScrollView>
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
              backgroundColor: '#31b057',
              borderWidth: 0,
            }}
            onPress={this.registerProcess}
            />
        </View>
      </View>
    );
  }
}
