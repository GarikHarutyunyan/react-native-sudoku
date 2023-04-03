import {StyleSheet, Text, View} from 'react-native';
import {Level} from './src/pages/level/Level';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Level />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
