import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Searchbar, useTheme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';
import { PetopiaTheme } from '@/theme/theme';
import { Backend_URL } from '@env';
import HeaderComponent from '@/components/ui/HeaderComponent';
import { useState } from 'react';
import ButtonIcon from '@/components/ui/Buttons/ButtonIcon';
import colors from '@/theme/colors';

type HomeScreenProps = {
  addNewPost: () => void;
};
const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
  const { addNewPost } = props;
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderComponent>
        <ButtonIcon icon="plus" onPressHandler={addNewPost} color={colors.primary} size={24} />
        <ButtonIcon icon="bell" onPressHandler={addNewPost} color={colors.primary} size={24} />
        <ButtonIcon icon="run-fast" onPressHandler={addNewPost} color={colors.primary} size={24} />
      </HeaderComponent>
      <View>
        <Text>FriendsRecommend</Text>
      </View>
      <View>
        <Text>PostList</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 32,
  },
});
