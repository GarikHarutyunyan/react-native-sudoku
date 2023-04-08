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
  const dispatch = useDispatch<any>();
  const levels: ILevel[] = useSelector(selectLevels);

  useEffect(() => {
    dispatch(getLevels());
  }, []);

  const renderItem = ({item: level, index}: {item: ILevel; index: number}) => {
    return (
      <Container
        key={level.id}
        style={styles.item}
        onPress={() => navigation.navigate('Level', {id: level.id})}
      >
        <Text style={styles.levels__itemText}>{`Level ${index + 1}`}</Text>
      </Container>
    );
  };

  return (
    <Screen style={styles.screen}>
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
