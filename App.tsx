import {StyleSheet, Text, View} from 'react-native';
import {Level} from './src/pages/level/Level';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersistGate} from 'redux-persist/integration/react';
import {Levels} from './src/pages/levels/Levels';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={'Levels'}
          >
            <Stack.Screen name="Levels" component={Levels} />
            <Stack.Screen name="Level" component={Level} />
          </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
