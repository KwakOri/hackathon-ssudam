import ChatInput from "@/components/atoms/ChatInput";
import SVGIcon from "@/components/atoms/SVGIcon";

interface MapInputBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MapInputBox = ({ value, onChange, onSubmit }: MapInputBoxProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="pl-4 pr-2 pt-2 pb-2 flex justify-between items-center rounded-full bg-background-normal border-line-normal border neon-weak"
    >
      <ChatInput
        value={value}
        onChange={onChange}
        placeholder="의료시설,지원센터 검색"
      />
      <div className="flex gap-3 items-center">
        <button type={"button"}>
          <SVGIcon icon={"Mic"} size={"md"} />
        </button>
      </div>
    </form>
  );
};

export default MapInputBox;
