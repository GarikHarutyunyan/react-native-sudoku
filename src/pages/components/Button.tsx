import React, {ReactElement} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../../style';

interface IButtonProps {
  text?: string;
  icon?: ReactElement;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button = (props: IButtonProps) => {
  const onPress = () => {
    const {onPress} = props;

    onPress && onPress();
  };

  const {icon, text, style} = props;

  const buttonStyle = [styles.button, style];

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={buttonStyle}>
        {icon}
        <Text style={styles.text}>{text || ''}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    aspectRatio: 1,
    width: '18%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.TEXT_PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // elevation: 20,
    // shadowColor: "black",
  },
  text: {
    fontWeight: 'bold',
    fontSize: 42,
    color: Colors.TEXT_PRIMARY,
  },
});

export {Button};
