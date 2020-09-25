import React from 'react';
import { View } from 'react-native';
import Icon from './component/atoms/Icon';
class Main extends React.Component {
  render(){
    return(
      <View>
        <Icon animation='pulse' fill='red' name='activity' />
      </View>
    )
  }
}
export default Main;
