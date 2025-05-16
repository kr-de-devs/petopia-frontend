import colors from '@/theme/colors';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { TextInput } from 'react-native-paper';

type InputFieldProps = {
  label: string;
  value: string;
  setValue: (text: string) => void;
  mode: 'flat' | 'outlined';
  style?: any;
};
const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
  const { label, value, setValue, mode, style } = props;
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={setValue}
      multiline
      mode={mode}
      style={[styles.input, style]}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.background,
  },
});
