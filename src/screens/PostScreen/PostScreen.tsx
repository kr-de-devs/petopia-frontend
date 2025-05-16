import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
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
import Chip from '@/components/ui/Chips/Chip';
import PostType from '@/components/Post/PostType';
import InputField from '@/components/General/InputField';
import PostDescription from '@/components/Post/PostDescription';
import PostTag from '@/components/Post/PostTag';
import PeopleTag from '@/components/Post/PeopleTag';
import { pickAndUploadImage } from '@/utils/cloudinary/pickAndUploadImage';
import ImageCard from '@/components/Post/ImageCard';

const PostScreen = () => {
  const { colors } = useTheme<PetopiaTheme>();

  const [text, setText] = useState('');
  const [tags, setTags] = useState('');
  const [friendTags, setFriendTags] = useState('');
  const [uploadedImages, setUploadedImages] = useState<string[]>([
    'https://res.cloudinary.com/dambyu1dq/image/upload/v1747423411/rxhqkaiqsufkydazt4q4.jpg',
  ]);

  const handleUpload = async () => {
    const imageUrl = await pickAndUploadImage();
    if (imageUrl) {
      setUploadedImages([...uploadedImages, imageUrl]);
    }
  };

  let firstImage: string | null =
    'https://res.cloudinary.com/dambyu1dq/image/upload/v1747423411/rxhqkaiqsufkydazt4q4.jpg';
  let firstTwoImages: string[] | null = null;

  if (uploadedImages.length > 0) {
    firstImage = uploadedImages[0];
  }
  if (uploadedImages.length > 1) {
    firstTwoImages = uploadedImages.slice(0, 2);
  }

  console.log('firstImage', firstImage);
  return (
    <ScrollView style={[styles.scroll, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <View style={styles.imageRow}>
          {uploadedImages && firstImage && !firstTwoImages && (
            <View style={styles.imageCard}>
              <ImageCard imageUrl={firstImage} />
            </View>
          )}
          {uploadedImages &&
            firstTwoImages &&
            firstTwoImages.map((image) => (
              <View key={image} style={styles.imageCard}>
                <ImageCard imageUrl={image} />
              </View>
            ))}
          <ImageCard onPressHandler={handleUpload} />
        </View>
        <View style={styles.descriptionContainer}>
          <PostDescription description={text} setDescription={setText} />
        </View>
        <PostTag tags={tags} setTags={setTags} />

        <View style={styles.peopleTagContainer}>
          <PeopleTag tags={friendTags} setTags={setFriendTags} />
        </View>

        <View style={styles.peopleTagContainer}>
          <PostType />
        </View>

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
  descriptionContainer: {
    marginVertical: 16,
  },
  peopleTagContainer: {
    marginBottom: 16,
  },
  button: {
    marginTop: 20,
    borderRadius: 8,
  },
});

export default PostScreen;
