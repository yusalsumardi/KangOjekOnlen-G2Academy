import React, {Component} from 'react';
import {Button, TouchableWithoutFeedback} from 'react-native';

const Main = (props) => {
  const onPressIcon = () => {};
  const buttonName = props.buttonName;

  return (
    <TouchableWithoutFeedback onPress={onPressIcon}>
      <Button>{buttonName}</Button>
    </TouchableWithoutFeedback>
  );
};
export default Main;
