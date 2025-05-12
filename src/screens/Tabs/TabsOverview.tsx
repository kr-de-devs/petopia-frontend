import { ChatCircle, House, MagnifyingGlass, MapPin, Storefront } from 'phosphor-react-native';
import colors from '@/theme/colors';
import HomeScreen from '../HomeScreen/HomeScreen';

import PeopleScreen from '../PeopleScreen/PeopleScreen';
import BoardScreen from '../BoardScreen/BoardScreen';
import MapScreen from '../MapScreen/MapScreen';
import MarketScreen from '../MarketScreen/MarketScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type BottomTabParamList = {
  HomeScreen: undefined;
  PeopleScreen: undefined;
  BoardScreen: undefined;
  MapScreen: undefined;
  MarketScreen: undefined;
};
const BottomTabs = createBottomTabNavigator<BottomTabParamList>();

const TabsOverview = () => {
  return (
    <BottomTabs.Navigator
      // @ts-expect-error: type system doesn't allow string id here but it's supported at runtime
      id="MainTabs"
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        tabBarStyle: { backgroundColor: colors.background },
        tabBarActiveTintColor: colors.accent,
      }}
    >
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => <House size={size} color={color} weight="fill" />,
        }}
      />
      <BottomTabs.Screen
        name="PeopleScreen"
        component={PeopleScreen}
        options={{
          tabBarLabel: 'People',
          tabBarIcon: ({ size, color }) => (
            <MagnifyingGlass size={size} color={color} weight="fill" />
          ),
        }}
      />
      <BottomTabs.Screen
        name="BoardScreen"
        component={BoardScreen}
        options={{
          tabBarLabel: 'Board',
          tabBarIcon: ({ size, color }) => <ChatCircle size={size} color={color} weight="fill" />,
        }}
      />
      <BottomTabs.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ size, color }) => <MapPin size={size} color={color} weight="fill" />,
        }}
      />
      <BottomTabs.Screen
        name="MarketScreen"
        component={MarketScreen}
        options={{
          tabBarLabel: 'Market',
          tabBarIcon: ({ size, color }) => <Storefront size={size} color={color} weight="fill" />,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabsOverview;
