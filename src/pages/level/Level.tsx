import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../style';
import {Matrix} from '../components';
import {NumberBoard} from '../components/NumberBoard';
import {useDispatch, useSelector} from 'react-redux';
import {checkIsSolved, getLevel} from '../../store/levelSlice';
import {TopBar} from '../components/TopBar';
import {Win} from '../components/Win';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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

  useEffect(() => {
    dispatch(getLevel(route.params.id));
  }, []);

  const onBack = () => navigation.goBack();

  return (
    <View style={styles.level}>
      <TopBar onBack={onBack} />
      {isSolved ? (
        <Win />
      ) : (
        <>
          <Matrix />
          <NumberBoard />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  level: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: Colors.APP_PRIMARY,
    alignItems: 'center',
  },
});

export {Level};
