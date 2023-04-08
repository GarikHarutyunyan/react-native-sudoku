import {BackHandler, StyleSheet, View} from 'react-native';
import {Button} from './Button';
import {Back, Refresh} from './icons';
import {useDispatch, useSelector} from 'react-redux';
import {getLevel, selectLevel} from '../../store/levelSlice';
import {useCallback} from 'react';

interface ITopBarProps {
  onBack: () => void;
}

const TopBar = (props: ITopBarProps) => {
  const {onBack} = props;
  const dispatch = useDispatch<any>();
  const activeLevel = useSelector(
    selectLevel,
    (level1, level2) => level1?.id === level2?.id
  );
  const onResetLevel = useCallback(() => {
    activeLevel && dispatch(getLevel(activeLevel?.id));
  }, [activeLevel]);

  return (
    <View style={styles.topBar}>
      <Button icon={<Back width={40} height={40} />} onPress={onBack} />
      <Button
        icon={<Refresh width={40} height={40} />}
        onPress={onResetLevel}
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
    marginTop: 0,
  },
});

export {TopBar};
