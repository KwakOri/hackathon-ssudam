import Paragraph from "@/components/atoms/Paragraph";

interface OptionTitleProps {
  option: string;
  optionText: string;
}

const OptionTitle = ({ option, optionText }: OptionTitleProps) => {
  return (
    <div className="flex gap-[12px]">
      <Paragraph
        fontSize={"caption1"}
        fontWeight={"medium"}
        className={"text-label-neutral"}
      >
        {option}
      </Paragraph>
      <Paragraph
        fontSize={"caption1"}
        fontWeight={"medium"}
        className={"text-label-normal"}
      >
        {optionText}
      </Paragraph>
    </div>
  );
};

export default OptionTitle;
