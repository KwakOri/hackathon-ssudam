interface PaginationBarProps {
  steps: number;
  currentStep: number;
}

const PaginationBar = ({ steps, currentStep }: PaginationBarProps) => {
  const step = currentStep > steps ? 1 : currentStep / steps;
  return (
    <div className="w-[343px] h-[6px] rounded-full bg-fill-normal">
      <div
        style={{ width: `${step * 100}%` }}
        className="h-full bg-primary-normal rounded-full"
      ></div>
    </div>
  );
};

export default PaginationBar;
