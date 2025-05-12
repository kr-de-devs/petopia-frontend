import { IconButton } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

type IconButtonProps = {
  icon: IconSource;
  onPressHandler: () => void;
  color: string;
  size: number;
};
const ButtonIcon: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { icon, onPressHandler, color, size } = props;
  return (
    <IconButton icon={icon} iconColor={color} size={size} onPress={onPressHandler}></IconButton>
  );
};

export default ButtonIcon;
