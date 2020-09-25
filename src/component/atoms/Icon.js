import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-eva-icons';

const Main = (props) => {
  const iconRef = React.useRef();
  const onPressIcon = () =>{
    iconRef.current?.startAnimation();
  }
  return(
    <TouchableWithoutFeedback onPress={onPressIcon}>
      <Icon ref={iconRef} {...props} />
    </TouchableWithoutFeedback>
  )
}
export default Main;
