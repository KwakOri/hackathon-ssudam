import Button from "@/components/atoms/Button";
import { PropsWithChildren } from "react";
interface SignupFunnelStepProps {
  onNext: () => void;
}

const CounselingFunnelStep = ({
  children,
  onNext,
}: PropsWithChildren<SignupFunnelStepProps>) => {
  return (
    <>
      <div className={"grow w-full flex flex-col p-4 "}>{children}</div>
      <div className={"p-4 bg-static-white border-t border-line-normal"}>
        <Button onClick={onNext} className="w-full">
          다음
        </Button>
      </div>
    </>
  );
};

export default CounselingFunnelStep;
