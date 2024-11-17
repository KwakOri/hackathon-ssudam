import Button from "@/components/atoms/Button";
import SignUpHeader from "@/components/molecules/SignUpHeader";
import { PropsWithChildren } from "react";
interface SignupFunnelStepProps {
  title: string;
  isMain?: boolean;
  onClick: any;
}

const SignupFunnelStep = ({
  children,
  title,
  isMain = false,
  onClick,
}: PropsWithChildren<SignupFunnelStepProps>) => {
  return (
    <section className={"flex flex-col relative w-full h-full"}>
      <SignUpHeader title={title} isMain={isMain} />
      <div className={"grow w-full flex flex-col justify-between p-4"}>
        <div className={"flex flex-col gap-10 p-4"}>{children}</div>

        <Button onClick={onClick} className="">
          다음
        </Button>
      </div>
    </section>
  );
};

export default SignupFunnelStep;
