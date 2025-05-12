import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { petopiaTheme } from './theme/theme';
import colors from './theme/colors';
import TabsOverview from './screens/Tabs/TabsOverview';
import PostScreen from './screens/PostScreen/PostScreen';

export type RootStackParamList = {
  PostScreen: undefined;
};

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider theme={petopiaTheme}>
      <NavigationContainer>
        <Stack.Navigator
          // @ts-expect-error: type system doesn't allow string id here but it's supported at runtime
          id="MainStack"
        >
          <Stack.Screen name="Tabs" component={TabsOverview} options={{ headerShown: false }} />
          <Stack.Screen
            name="PostScreen"
            component={PostScreen}
            options={{
              headerStyle: { backgroundColor: colors.background },
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
