import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';
import { PetopiaTheme } from '@/theme/theme';
import { Backend_URL } from '@env';

const useStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const HomeScreen = () => {
  const { colors } = useTheme<PetopiaTheme>();
  const styles = useStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Welcome To Petopia! {Backend_URL} </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
