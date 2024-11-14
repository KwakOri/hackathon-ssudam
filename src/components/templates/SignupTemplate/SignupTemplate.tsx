import Button from "@/components/atoms/Button";
import SignUpHeader from "@/components/molecules/SignUpHeader";
import { PropsWithChildren } from "react";
interface SignupTemplateProps {
  title: string;
  isMain?: boolean;
  onClick: () => void;
}

const SignupTemplate = ({
  children,
  title,
  isMain = false,
  onClick,
}: PropsWithChildren<SignupTemplateProps>) => {
  return (
    <section className={"relative w-[375px] h-[800px]"}>
      <SignUpHeader title={title} isMain={isMain} />
      <div className={"flex flex-col gap-10 p-4"}>{children}</div>

      <Button onClick={onClick} className="absolute bottom-0 w-[343px] m-4">
        다음
      </Button>
    </section>
  );
};

export default SignupTemplate;
