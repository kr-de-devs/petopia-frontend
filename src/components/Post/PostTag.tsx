import InputField from '../General/InputField';

type PostTagProps = {
  tags: string;
  setTags: (text: string) => void;
};
const PostTag: React.FC<PostTagProps> = (props: PostTagProps) => {
  const { tags, setTags } = props;
  return <InputField label="#태그를 입력하세요" value={tags} setValue={setTags} mode="outlined" />;
};
export default PostTag;
