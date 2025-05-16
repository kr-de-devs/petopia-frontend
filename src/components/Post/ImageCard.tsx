import { Card, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Plus } from 'phosphor-react-native';
import colors from '@/theme/colors';

type ImageCardProps = {
  imageUrl?: string;
  onPressHandler?: () => void;
};
const ImageCard: React.FC<ImageCardProps> = (props: ImageCardProps) => {
  const { imageUrl, onPressHandler } = props;
  return (
    <>
      {imageUrl ? (
        <Card style={styles.imageCard}>
          <Card.Cover
            source={{ uri: imageUrl || 'https://placekitten.com/200/200' }}
            style={styles.imageCover}
          />
        </Card>
      ) : (
        <Card style={styles.imageCard}>
          <IconButton
            icon={() => <Plus size={24} color={colors.primary} />}
            onPress={onPressHandler}
          />
        </Card>
      )}
    </>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  imageCard: {
    width: 150,
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCover: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
  },
});
