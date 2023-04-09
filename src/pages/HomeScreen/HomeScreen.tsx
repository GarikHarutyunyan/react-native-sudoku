import {StyleSheet, Text} from 'react-native';
import {Container} from '../components/Container';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Screen} from '../components/Screen';
import {Colors} from '../../style';

type RootStackParamList = {
  Levels: {};
};

type LevelNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Levels'
>;

interface IHomeScreenProps {
  navigation: LevelNavigationProp;
}

export const HomeScreen = (props: IHomeScreenProps) => {
  const {navigation} = props;
  const onPlay = () => {
    navigation.navigate('Levels', {});
  };

  return (
    <Screen style={styles.screen}>
      <Container onPress={onPlay} style={styles.container}>
        <Text style={styles.text}>{'Play'}</Text>
      </Container>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '70%',
    aspectRatio: 5,
    borderRadius: 45,
  },
  text: {
    fontSize: 35,
    color: Colors.TEXT_PRIMARY,
  },
});
