import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../style';
import {Matrix} from '../components';
import {NumberBoard} from '../components/NumberBoard';
import {useDispatch, useSelector} from 'react-redux';
import {checkIsSolved, getLevel, selectLevel} from '../../store/levelSlice';
import {TopBar} from '../components/TopBar';
import {Win} from '../components/Win';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Screen} from '../components/Screen';
import {changeLastAvailableLevel} from '../../store/userSlice';

type RootStackParamList = {
  Level: {id: string};
};

type LevelRouteProp = RouteProp<RootStackParamList, 'Level'>;
type LevelNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Level'
>;

interface ILevelProps {
  route: LevelRouteProp;
  navigation: LevelNavigationProp;
}

const Level = (props: ILevelProps) => {
  const {navigation, route} = props;
  const dispatch = useDispatch<any>();
  const isSolved = useSelector(checkIsSolved);
  const activeLevel = useSelector(
    selectLevel,
    (level1, level2) => level1?.id === level2?.id
  );

  useEffect(() => {
    dispatch(getLevel(route.params.id));
  }, []);

  useEffect(() => {
    if (isSolved) {
      dispatch(changeLastAvailableLevel(activeLevel?.index || 0));
    }
  }, [isSolved]);

  const onBack = () => navigation.goBack();

  return (
    <Screen style={styles.level}>
      <TopBar onBack={onBack} />
      {isSolved ? (
        <Win />
      ) : (
        <>
          <Matrix />
          <NumberBoard />
        </>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  level: {
    // alignSelf: 'stretch',
    alignItems: 'center',
  },
});

export {Level};
