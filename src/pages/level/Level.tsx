import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../style';
import {Matrix} from '../components';
import {NumberBoard} from '../components/NumberBoard';
import {useDispatch, useSelector} from 'react-redux';
import {checkIsSolved, getLevel} from '../../store/levelSlice';
import {TopBar} from '../components/TopBar';
import {Win} from '../components/Win';

const Level = () => {
  const dispatch = useDispatch<any>();
  const isSolved = useSelector(checkIsSolved);

  useEffect(() => {
    dispatch(getLevel('bbbbbbbbbb' as string));
  }, []);

  return (
    <View style={styles.level}>
      <TopBar />
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
