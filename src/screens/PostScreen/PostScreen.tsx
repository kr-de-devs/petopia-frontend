import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  TextInput,
  Button,
  Checkbox,
  Text,
  useTheme,
  Avatar,
  Card,
  IconButton,
  RadioButton,
} from 'react-native-paper';
import { PetopiaTheme } from '@/theme/theme';
import { Plus } from 'phosphor-react-native';
import colors from '@/theme/colors';

const PostScreen = () => {
  const { colors } = useTheme<PetopiaTheme>();

  const [text, setText] = useState('');
  const [tags, setTags] = useState('');
  const [selectedType, setSelectedType] = useState<'Regular' | 'Missing' | 'Shopping' | null>(null);

  const handleTypeToggle = (type: typeof selectedType) => {
    setSelectedType((prev) => (prev === type ? null : type));
  };

  return (
    <ScrollView style={[styles.scroll, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <View style={styles.imageRow}>
          <Card style={[styles.imageCard, { alignItems: 'center', justifyContent: 'center' }]}>
            <IconButton icon={() => <Plus size={24} color={colors.primary} />} onPress={() => {}} />
          </Card>
        </View>

        <TextInput
          label="오늘의 추억을 기록해보세요 :)"
          value={text}
          onChangeText={setText}
          multiline
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="#태그를 입력하세요"
          value={tags}
          onChangeText={setTags}
          mode="outlined"
          style={styles.tagInput}
        />

        <TextInput label="펫 또는 사용자 태그" mode="outlined" style={styles.input} />

        <Text style={[styles.sectionTitle, { color: colors.text }]}>게시글 유형</Text>
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

        <Button
          mode="contained"
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={() => console.log('게시하기')}
        >
          게시하기
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    // paddingVertical: 8,
    marginHorizontal: 24,
    marginVertical: 24,
    gap: 16,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageCard: {
    width: 150,
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
  },
  tagInput: {
    backgroundColor: colors.background,
  },
  input: {
    backgroundColor: colors.background,
    height: 100,
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    marginTop: 20,
    borderRadius: 8,
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

export default PostScreen;
