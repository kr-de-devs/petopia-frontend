import InputField from '../General/InputField';

type PostDescriptionProps = {
  description: string;
  setDescription: (text: string) => void;
};
const PostDescription: React.FC<PostDescriptionProps> = (props: PostDescriptionProps) => {
  const { description, setDescription } = props;
  return (
    <InputField
      label="오늘의 추억을 기록해보세요 :)"
      value={description}
      setValue={setDescription}
      mode="outlined"
      style={{ height: 200 }}
    />
  );
};

export default PostDescription;
