import InputField from '../General/InputField';

type PeopleTagProps = {
  tags: string;
  setTags: (text: string) => void;
};
const PeopleTag: React.FC<PeopleTagProps> = (props: PeopleTagProps) => {
  const { tags, setTags } = props;
  return <InputField label="#친구를 태그하세요" value={tags} setValue={setTags} mode="outlined" />;
};
export default PeopleTag;
