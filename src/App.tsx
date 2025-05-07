import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { petopiaTheme } from './theme/theme';
import HomeScreen from './screens/HomeScreen/HomeScreen';

export default function App() {
  return (
    <PaperProvider theme={petopiaTheme}>
      <HomeScreen />
    </PaperProvider>
  );
}
