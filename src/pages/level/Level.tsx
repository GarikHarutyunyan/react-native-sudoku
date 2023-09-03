import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Matrix, Refresh} from '../components';
import {NumberBoard} from '../components/NumberBoard';
import {useDispatch, useSelector} from 'react-redux';
import {
  checkIsSolved,
  getLevel,
  selectLevel,
  selectLevelStatus,
} from '../../store/levelSlice';
import {BallIndicator} from 'react-native-indicators';
import {TopBar} from '../components/TopBar';
import {Win} from '../components/Win';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Screen} from '../components/Screen';
import {changeLastAvailableLevel} from '../../store/userSlice';
import {ILevel, RequestStatus} from '../../data-structures';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
  const activeLevel: ILevel | null = useSelector(
    selectLevel,
    (level1, level2) => level1?.id === level2?.id
  );
  const levelStatus: RequestStatus = useSelector(selectLevelStatus);
  const isLoading: boolean = levelStatus === RequestStatus.LOADING;

  useEffect(() => {
    dispatch(getLevel(route.params.id));
  }, []);

  useEffect(() => {
    if (isSolved) {
      dispatch(changeLastAvailableLevel(activeLevel?.index || 0));
    }
  }, [isSolved]);

  const onBack = () => navigation.goBack();

  const onReset = useCallback(() => {
    activeLevel && dispatch(getLevel(activeLevel?.id));
  }, [activeLevel]);

  return (
    <Screen style={styles.level}>
      <TopBar onBack={onBack}>
        <Button icon={<Refresh width={40} height={40} />} onPress={onReset} />
      </TopBar>
      {isSolved ? (
        <Win />
      ) : isLoading ? (
        <BallIndicator
          color={Colors.TEXT_PRIMARY}
          count={10}
          size={55}
          style={{marginBottom: 55}}
        />
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
