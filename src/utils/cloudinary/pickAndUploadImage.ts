import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { CLOUD_NAME, UPLOAD_PRESET } from '@env';
import { ImageFormData } from '@/types';

export const pickAndUploadImage = async (): Promise<string | null> => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images', 'videos'],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);
  console.log(CLOUD_NAME);
  console.log(UPLOAD_PRESET);

  if (result.canceled) {
    return null;
  }

  const imageUri = result.assets[0].uri;

  const formData = new FormData();
  formData.append('file', {
    uri: imageUri,
    name: 'photo.jpg',
    type: 'image/jpeg',
  } as any);
  formData.append('upload_preset', UPLOAD_PRESET);

  console.log(formData);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return response.data.secure_url;
  } catch (error) {
    console.error('Upload failed', error);
    return null;
  }
};
