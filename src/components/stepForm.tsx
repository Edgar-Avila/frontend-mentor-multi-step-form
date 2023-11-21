import { useStepContext } from "@/context/stepContext";
import cn from "@/utils";
import { forwardRef } from "react";

interface Props extends React.HTMLAttributes<HTMLFormElement> {}

const StepForm = forwardRef<HTMLFormElement, Props>(
  ({ className, children, ...props }, ref) => {
    const { currentStep } = useStepContext();
    return (
      <form
        className={cn(
          "flex flex-col gap-4 text-sm mx-4 md:mx-10 lg:mx-20 flex-grow basis-2/3",
          className
        )}
        ref={ref}
        id={`step-form-${currentStep}`}
        {...props}
      >
        {children}
      </form>
    );
  }
);

export default StepForm;
