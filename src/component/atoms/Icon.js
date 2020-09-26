import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-eva-icons';

const Main = (props) => {
  const iconRef = React.useRef();
  const onPressIcon = () =>{
    iconRef.current?.startAnimation();
  }
  return(
    <Icon ref={iconRef} {...props} />
  )
}
export default Main;
