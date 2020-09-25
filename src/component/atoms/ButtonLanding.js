import React, {Component} from 'react';
import {Button, TouchableOpacity, StyleSheet, Text} from 'react-native';

const Main = (props) => {
  const onPressIcon = () => {};
  const buttonName = props.buttonName;
  return (
    <TouchableOpacity onPress={onPressIcon} style={styles.buttonStyle}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
        {buttonName}
      </Text>
    </TouchableOpacity>
  );
};
export default Main;

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    backgroundColor: '#00A512',
    borderRadius: 25,
  },
});
