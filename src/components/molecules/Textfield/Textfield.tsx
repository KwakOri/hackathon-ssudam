import Button from "@/components/atoms/Button";
import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";

interface ITextfieldProps {
  label: string;
  caption: string;
  placeholder: string;
  errorMessage?: string;
  validationOption?: string;
  buttonLabel?: string;
  buttonOnClick?: () => void;
}

const Textfield = ({
  label,
  caption,
  placeholder,
  errorMessage,
  validationOption,
  buttonOnClick,
  buttonLabel = "",
}: ITextfieldProps) => {
  return (
    <article className={"flex flex-col gap-2 w-full"}>
      <div className="flex gap-1 items-center">
        <Paragraph
          fontSize={"body2"}
          fontWeight={"medium"}
          className="text-label-normal"
        >
          {label}
        </Paragraph>
        <Paragraph
          fontSize={"caption1"}
          fontWeight={"medium"}
          className="text-label-alternative"
        >
          {caption}
        </Paragraph>
      </div>
      <div className="flex gap-2">
        <div className="flex w-full justify-between items-center p-3 rounded-[13px] border border-line-normal bg-fill-pale">
          <input
            placeholder={" " + placeholder}
            type="text"
            className={
              "text-label-strong placeholder-label-alternative bg-transparent outline-none"
            }
          />
          <button className={"flex items-center gap-2"}>
            <Paragraph
              fontSize={"caption1"}
              fontWeight={"medium"}
              className={"text-label-alternative"}
            >
              Option
            </Paragraph>
            <SVGIcon
              icon={"Fail"}
              size={"sm"}
              className={"fill-label-neutral"}
            />
          </button>
        </div>
        {buttonLabel && (
          <Button intent={"light"} size={"lg"} onClick={buttonOnClick}>
            {buttonLabel}
          </Button>
        )}
      </div>
      {validationOption ? (
        <Paragraph
          fontSize={"caption1"}
          fontWeight={"medium"}
          className={"text-label-alternative"}
        >
          {errorMessage}
        </Paragraph>
      ) : (
        <Paragraph fontSize={"caption1"} fontWeight={"medium"}></Paragraph>
      )}
    </article>
  );
};

export default Textfield;
