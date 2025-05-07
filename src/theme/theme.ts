import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import colors from './colors';

export const petopiaTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  roundness: 16,
};

export type PetopiaTheme = typeof petopiaTheme;
