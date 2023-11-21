import { useStepContext } from "@/context/stepContext";
import cn from "@/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onBack?: () => void;
  onNext?: () => void;
  nextText?: string;
  nextClassName?: string;
  backText?: string;
  backClassName?: string;
  mobile?: boolean;
}

const NavigationButtons: React.FC<Props> = ({
  className,
  onBack,
  onNext,
  nextText = "Next Step",
  nextClassName,
  backText = "Go Back",
  backClassName,
  mobile = false,
  ...props
}) => {
  const { currentStep, increaseStep, decreaseStep } = useStepContext();

  return (
    <div className={cn("mt-auto", mobile ? "flex md:hidden" : "hidden md:flex" ,className)} {...props}>
      {currentStep > 1 && (
        <button
          className={cn("text-cool-gray font-bold", backClassName)}
          type="button"
          onClick={async () => {
            decreaseStep();
          }}
        >
          {backText}
        </button>
      )}
      <button
        className={cn(
          "bg-marine-blue text-white px-4 py-2 rounded-md ml-auto",
          nextClassName
        )}
        type="submit"
        form={`step-form-${currentStep}`}
      >
        {nextText}
      </button>
    </div>
  );
};

export default NavigationButtons;
