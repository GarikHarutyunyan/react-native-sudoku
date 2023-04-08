import {ReactNode, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getLevels, selectLevels} from '../../store/levelSlice';
import {ILevel} from '../../data-structures';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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

  useEffect(() => {
    dispatch(getLevels());
  }, []);

  const levels: ILevel[] = useSelector(selectLevels);

  return (
    <>
      {levels.map((level: ILevel, index: number) => {
        return (
          <View key={level.id} style={styles.levels}>
            <TouchableNativeFeedback
              onPress={() => navigation.navigate('Level', {id: level.id})}
            >
              <Text style={styles.levels__item}>{`Level ${index + 1}`}</Text>
            </TouchableNativeFeedback>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  levels: {
    marginTop: 70,
    flex: 1,
    alignItems: 'center',
  },
  levels__item: {
    backgroundColor: Colors.APP_PRIMARY,
    fontSize: 30,
  },
});

export {Levels};
