import React, {ReactNode} from 'react';
import {StyleSheet, StyleProp, View, ViewStyle} from 'react-native';
import {Colors} from '../../style';

interface IScreenProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export const Screen = (props: IScreenProps) => {
  const {style, children} = props;

  return <View style={[styles.screen, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: Colors.APP_PRIMARY,
  },
});
