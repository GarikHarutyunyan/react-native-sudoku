import {BackHandler, StyleSheet, View} from 'react-native';
import {Button} from './Button';
import {Back, Refresh} from './icons';

const TopBar = () => {
  const onExit = () => {
    BackHandler.exitApp();
  };

  const clearAllCells = () => {};

  return (
    <View style={styles.topBar}>
      <Button icon={<Back width={40} height={40} />} onPress={onExit} />
      <Button
        icon={<Refresh width={40} height={40} />}
        onPress={clearAllCells}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    margin: 25,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 70,
  },
});

export {TopBar};
