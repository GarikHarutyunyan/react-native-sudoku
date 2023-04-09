import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getLevels, selectLevels} from '../../store/levelSlice';
import {ILevel} from '../../data-structures';
import {StyleSheet, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors} from '../../style';
import {Container} from '../components/Container';
import {Screen} from '../components/Screen';
import {Grid} from '../components/Grid';
import {selectLastAvailableLevel} from '../../store/userSlice';

type RootStackParamList = {
  Level: {id: string};
};

type LevelNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Level'
>;

interface ILevelsProps {
  navigation: LevelNavigationProp;
}

const Levels = (props: ILevelsProps) => {
  const {navigation} = props;
  const levels: ILevel[] = useSelector(selectLevels);
  const lastAvailableLevel: number = useSelector(selectLastAvailableLevel);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getLevels());
  }, []);

  const renderItem = ({item: level}: {item: ILevel; index: number}) => {
    const isDisabled: boolean = level.index > lastAvailableLevel;

    return (
      <Container
        key={level.id}
        style={styles.item}
        onPress={() => navigation.navigate('Level', {id: level.id})}
        isDisabled={isDisabled}
      >
        <Text style={styles.levels__itemText}>{`Level ${level.index}`}</Text>
      </Container>
    );
  };

  return (
    <Screen>
      <Grid
        items={levels}
        renderItem={renderItem}
        itemStyle={styles.item}
        numColumns={3}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 10,
  },
  levels__itemText: {
    fontSize: 25,
  },
});

export {Levels};
