import {BackHandler, StyleSheet, View} from 'react-native';
import {Button} from './Button';
import {Back, Refresh} from './icons';

interface ITopBarProps {
  onBack: () => void;
}

const TopBar = (props: ITopBarProps) => {
  const {onBack} = props;
  const clearAllCells = () => {};

  return (
    <View style={styles.topBar}>
      <Button icon={<Back width={40} height={40} />} onPress={onBack} />
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
