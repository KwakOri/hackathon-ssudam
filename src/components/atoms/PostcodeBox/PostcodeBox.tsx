import Header from "@/components/molecules/Header";
import { useAddress } from "@/contexts/Address/address.context";
import DaumPostcodeEmbed from "react-daum-postcode";

interface PostcodeBoxProps {
  onComplete: (data: any) => void;
}
const PostcodeBox = ({ onComplete }: PostcodeBoxProps) => {
  const address = useAddress();
  return (
    <div className={"w-full h-full absolute top-0 z-50 flex flex-col"}>
      <Header
        intent="labelWithBackIcon"
        leftIconOnClink={() => address.close()}
      >
        주소 검색
      </Header>
      <DaumPostcodeEmbed className="grow" onComplete={onComplete} />
    </div>
  );
};

export default PostcodeBox;
