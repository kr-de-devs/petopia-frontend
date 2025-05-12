import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';
import { PetopiaTheme } from '@/theme/theme';

const useStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const PostScreen = () => {
  const { colors } = useTheme<PetopiaTheme>();
  const styles = useStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>PostScreen </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default PostScreen;
