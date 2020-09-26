import React, {Component} from 'react';
import {View, Text, RefreshControl} from 'react-native';
import {Input} from '@ui-kitten/components';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {timer: 5};
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState((prevState) => ({timer: prevState.timer - 1})),
      1000,
    );
  }

  componentDidUpdate() {
    if (this.state.timer <= 0) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  Main = () => {
    this.setState({
      timer: 5,
    });
    this.interval = setInterval(
      () => this.setState((prevState) => ({timer: prevState.timer - 1})),
      1000,
    );
  };

  render() {
    if (this.state.timer === 0) {
      return (
        <View
          style={{
            marginTop: 5,
          }}>
          <Input
            placeholder="*    *   *   *"
            style={{width: 250}}
            keyboardType="numeric"
            value={this.props.state.state.value}
            onChangeText={(text) => {
              this.props.state.setState({value: text});
            }}
          />
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text></Text>
          </View>
          <View style={{paddingTop: 5}}>
            <Text style={{color: '#31b057'}} onPress={this.Main}>
              Kirim nomor OTP lagi
            </Text>
          </View>
        </View>
      );
    } else {
      console.log(this.state.timer);
      return (
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            alignItems: 'center',
          }}>
          <Input
            placeholder="*    *   *   *"
            style={{width: 250}}
            keyboardType="numeric"
            value={this.props.state.state.value}
            onChangeText={(text) => {
              this.props.state.setState({value: text});
              console.log(this.props.state.value);
            }}
          />
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{paddingLeft: 15}}>{this.state.timer}</Text>
          </View>
        </View>
      );
    }
  }
}
