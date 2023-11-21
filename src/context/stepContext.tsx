import { Step1, Step2, Step3 } from "@/types/steps";
import { useState, createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

interface StepContext {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  increaseStep: () => void;
  decreaseStep: () => void;
  step1?: Step1;
  step2?: Step2;
  step3?: Step3;
  setStep1: React.Dispatch<React.SetStateAction<Step1>>;
  setStep2: React.Dispatch<React.SetStateAction<Step2>>;
  setStep3: React.Dispatch<React.SetStateAction<Step3>>;
}

export const StepContext = createContext<StepContext>({
  currentStep: 1,
  setCurrentStep: () => {},
  increaseStep: () => {},
  decreaseStep: () => {},
  setStep1: () => {},
  setStep2: () => {},
  setStep3: () => {},
});

export const useStepContext = () => {
  return useContext(StepContext);
};

export const StepContextProvider: React.FC<Props> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1, setStep1] = useState<Step1>({
    name: "",
    email: "",
    phone: "",
  });
  const [step2, setStep2] = useState<Step2>({
    plan: "arcade",
    renewal: "monthly",
  });
  const [step3, setStep3] = useState<Step3>({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const increaseStep = () => setCurrentStep(currentStep + 1);
  const decreaseStep = () => setCurrentStep(currentStep - 1);

  const contextValue = {
    currentStep,
    setCurrentStep,
    increaseStep,
    decreaseStep,
    step1,
    step2,
    step3,
    setStep1,
    setStep2,
    setStep3,
  };

  return (
    <StepContext.Provider value={contextValue}>
      {children}
    </StepContext.Provider>
  );
};
