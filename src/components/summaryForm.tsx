import { useStepContext } from "@/context/stepContext";
import FormTitle from "./formTitle";
import StepForm from "./stepForm";
import { capitalize } from "@/utils";
import { getAddOns, getPlans } from "@/api";
import { Fragment } from "react";
import NavigationButtons from "./navigationButtons";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const SummaryForm: React.FC<Props> = () => {
  const addOns = getAddOns();
  const plans = getPlans();
  const { setCurrentStep, step2, step3, increaseStep } = useStepContext();

  if (!step2) {
    setCurrentStep(2);
    return null;
  }

  if (!step3) {
    setCurrentStep(3);
    return null;
  }

  const planPrice = plans[step2.plan].price[step2.renewal];
  const addOnsPrice = addOns
    .map((addOn) => step3[addOn.name] ? addOn.price[step2.renewal] : 0)
    .reduce((a, b) => a + b, 0);
  const totalPrice = planPrice + addOnsPrice;

  const onSubmit = () => {
    increaseStep();
  }

  return (
    <StepForm className="flex flex-col flex-grow" onSubmit={onSubmit}>
      <FormTitle
        title="Finishing up"
        subtitle="Double-check everything look OK before confirming."
      />
      <div className="rounded-lg bg-alabaster p-8 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-marine-blue font-medium">
              {capitalize(step2.plan)} ({capitalize(step2.renewal)})
            </h4>
            <button
              className="text-cool-gray underline"
              onClick={() => setCurrentStep(2)}
            >
              Change
            </button>
          </div>
          <span className="text-marine-blue font-bold">
            ${plans[step2.plan].price[step2.renewal]}/
            {step2.renewal === "monthly" ? "mo" : "yr"}
          </span>
        </div>
        <hr />
        {addOns.map((addOn) => (
          <Fragment key={addOn.name}>
            {step3[addOn.name] && (
              <div className="flex justify-between">
                <span className="text-cool-gray">{addOn.title}</span>
                <span className="text-marine-blue">
                  ${addOn.price[step2.renewal]}/
                  {step2.renewal === "monthly" ? "mo" : "yr"}
                </span>
              </div>
            )}
          </Fragment>
        ))}
      </div>
      <div className="px-8 flex justify-between items-center">
        <span className="text-cool-gray">
          Total {step2.renewal === "monthly" ? "(Per month)" : "(Per year)"}
        </span>
        <span className="text-purplish-blue font-bold text-lg">
          +{totalPrice}/{step2.renewal === "monthly" ? "mo" : "yr"}
        </span>
      </div>
      <NavigationButtons nextClassName="bg-purplish-blue" nextText="Confirm" />
    </StepForm>
  );
};

export default SummaryForm;
