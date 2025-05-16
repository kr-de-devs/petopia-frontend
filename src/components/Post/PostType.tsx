import { useState } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Chip from '../ui/Chips/Chip';
import colors from '@/theme/colors';

const PostType = () => {
  const [selectedType, setSelectedType] = useState<'Regular' | 'Missing' | 'Shopping' | null>(null);
  const handleTypeToggle = (type: typeof selectedType) => {
    setSelectedType((prev) => (prev === type ? null : type));
  };
  return (
    <View>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>게시글 유형</Text>
      {Platform.OS === 'ios' ? (
        <Chip />
      ) : (
        <RadioButton.Group
          onValueChange={(newValue) => setSelectedType(newValue as typeof selectedType)}
          value={selectedType}
        >
          <View style={styles.radioRow}>
            {['Regular', 'Missing', 'Shopping'].map((type) => (
              <View key={type} style={styles.radioItem}>
                <RadioButton value={type} />
                <Text>{type}</Text>
              </View>
            ))}
          </View>
        </RadioButton.Group>
      )}
    </View>
  );
};

export default PostType;

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
});
