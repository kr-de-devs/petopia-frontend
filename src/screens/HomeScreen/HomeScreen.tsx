import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import HeaderComponent from '@/components/General/HeaderComponent';
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
    marginVertical: Platform.OS === 'android' ? 8 : 32,
  },
});
