import React, {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import {Colors} from '../../style';

interface IContainerProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export const Container = (props: IContainerProps) => {
  const {onPress, style, children} = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
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
});
