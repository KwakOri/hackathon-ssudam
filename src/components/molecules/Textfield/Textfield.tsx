import Button from "@/components/atoms/Button";
import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { InputHTMLAttributes } from "react";

interface ITextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  caption?: string;
  placeholder: string;
  helperMessage?: string;
  validationOption?: string;
  buttonLabel?: string;
  buttonOnClick?: () => void;
  IsInputDelButton?: boolean;
  isValid?: boolean;
  errorMessage?: string;
}

const Textfield = ({
  label,
  caption = "",
  placeholder,
  helperMessage,
  validationOption,
  buttonOnClick,
  errorMessage,
  buttonLabel = "",
  IsInputDelButton = false,
  isValid = true,
  ...props
}: ITextfieldProps) => {
  return (
    <article className={"flex flex-col gap-2 w-full"}>
      <div className="flex gap-1 items-center">
        <Paragraph
          fontSize={"body2"}
          fontWeight={"medium"}
          className={`${
            isValid ? "text-label-normal" : "text-accent-red-normal"
          } `}
        >
          {label}
        </Paragraph>
        <Paragraph
          fontSize={"caption1"}
          fontWeight={"medium"}
          className={`${
            isValid ? "text-label-alternative" : "text-accent-red-normal"
          } `}
        >
          {caption}
        </Paragraph>
      </div>
      <div className="flex gap-2">
        <div className="grow flex justify-between items-center p-3 rounded-[13px] border border-line-normal bg-fill-pale">
          <input
            placeholder={" " + placeholder}
            type="text"
            className={
              " text-label-strong placeholder-label-alternative bg-transparent outline-none"
            }
            {...props}
          />
          {IsInputDelButton && (
            <button className={"flex items-center gap-2"}>
              <SVGIcon
                icon={"Fail"}
                size={"sm"}
                className={"fill-label-neutral"}
              />
            </button>
          )}
        </div>
        {buttonLabel && (
          <Button
            className={"p-0 w-[85px]"}
            intent={"light"}
            size={"lg"}
            onClick={buttonOnClick}
          >
            {buttonLabel}
          </Button>
        )}
      </div>

      {!isValid && errorMessage ? (
        <Paragraph
          fontSize={"caption1"}
          fontWeight={"medium"}
          className={"text-accent-red-normal"}
        >
          {errorMessage}
        </Paragraph>
      ) : helperMessage ? (
        <Paragraph
          fontSize={"caption1"}
          fontWeight={"medium"}
          className={"text-label-alternative"}
        >
          {helperMessage}
        </Paragraph>
      ) : (
        <Paragraph fontSize={"caption1"} fontWeight={"medium"}></Paragraph>
      )}
    </article>
  );
};

export default Textfield;
