import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { PetopiaTheme } from '@/theme/theme';

const Chip = () => {
  const { colors } = useTheme<PetopiaTheme>();
  const [selected, setSelected] = useState<'Regular' | 'Missing' | 'Shopping'>('Regular');

  const types: Array<'Regular' | 'Missing' | 'Shopping'> = ['Regular', 'Missing', 'Shopping'];

  return (
    <View style={styles.chipContainer}>
      {types.map((type) => {
        const isSelected = selected === type;
        return (
          <TouchableOpacity
            key={type}
            onPress={() => setSelected(type)}
            style={[
              styles.chip,
              {
                backgroundColor: isSelected ? colors.accent : 'transparent',
                borderColor: isSelected ? colors.primary : '#ccc',
              },
            ]}
          >
            <Text style={{ color: isSelected ? 'white' : colors.text }}>{type}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: 6,
  },
});
