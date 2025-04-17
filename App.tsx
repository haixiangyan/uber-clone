import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import EatsScreen from './screens/EatsScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from './store';

import './global.css';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Eats" component={EatsScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
