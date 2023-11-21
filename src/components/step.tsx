import { useStepContext } from "@/context/stepContext";
import cn from "@/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
  text: string;
}

const Step: React.FC<Props> = ({ step, text, ...props }) => {
  const { currentStep } = useStepContext();

  return (
    <div className="left-0 top-0 flex gap-4 items-center" {...props}>
      <div
        className={cn(
          "w-8 h-8 rounded-full border border-white grid place-content-center text-white text-sm",
          currentStep === step && "bg-light-blue text-marine-blue border-none",
        )}
      >
        {step}
      </div>
      <div className="hidden md:flex flex-col leading-none">
        <span className="text-light-gray text-sm">STEP {step}</span>
        <span className="font-bold uppercase text-white">{text}</span>
      </div>
    </div>
  );
};

export default Step;
