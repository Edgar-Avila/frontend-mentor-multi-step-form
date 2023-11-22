import Switch from "./switch";
import cn, { capitalize } from "@/utils";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Fragment } from "react";
import { Step2, Step2Schema } from "@/types/steps";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTitle from "./formTitle";
import StepForm from "./stepForm";
import NavigationButtons from "./navigationButtons";
import { useStepContext } from "@/context/stepContext";
import { getPlans } from "@/api";

const PlanForm: React.FC = () => {
  const plans = getPlans();
  const { step2, setStep2, increaseStep } = useStepContext();
  const { register, watch, control, trigger, handleSubmit } = useForm<Step2>({
    resolver: zodResolver(Step2Schema),
    defaultValues: step2,
  });

  const selectedPlan = watch("plan");
  const selectedRenewal = watch("renewal");

  const submitForm = async () => {
    const result = await trigger();
    if (!result) return result;
    await handleSubmit(onSubmit)();
    return true;
  };

  const onSubmit: SubmitHandler<Step2> = (data) => {
    setStep2(data);
    increaseStep();
  };

  return (
    <StepForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-2">
          {Object.values(plans).map((plan) => (
            <Fragment key={plan.name}>
              <input
                type="radio"
                className="hidden"
                value={plan.name}
                id={`plan-${plan.name}`}
                {...register("plan")}
              />
              <label
                htmlFor={`plan-${plan.name}`}
                className={cn(
                  "border p-2 md:p-4 rounded-lg cursor-pointer flex-grow basis-0 flex md:inline-block gap-4 md:flex-col",
                  selectedPlan === plan.name &&
                    "border-purplish-blue bg-magnolia"
                )}
              >
                <img src={plan.icon} alt={plan.name} className="md:mb-12"/>
                <div>
                  <p className="font-bold text-marine-blue">
                    {capitalize(plan.name)}
                  </p>
                  <p className="text-cool-gray">
                    ${plan.price[selectedRenewal]}/
                    {selectedRenewal === "yearly" ? "yr" : "mo"}
                  </p>
                  {selectedRenewal === "yearly" && (
                    <p className="text-marine-blue text-sm font-medium">2 months free</p>
                  )}
                </div>
              </label>
            </Fragment>
          ))}
        </div>

        <div className="bg-alabaster rounded-lg flex justify-center gap-8 mt-8 p-2">
          <span
            className={cn(
              "font-medium",
              selectedRenewal === "monthly"
                ? "text-marine-blue"
                : "text-cool-gray"
            )}
          >
            Monthly
          </span>
          <Controller
            defaultValue="monthly"
            control={control}
            name="renewal"
            render={({ field }) => (
              <Switch
                {...field}
                checked={field.value === "yearly"}
                onChange={(event) =>
                  field.onChange(
                    event.currentTarget.checked ? "yearly" : "monthly"
                  )
                }
              />
            )}
          />
          <span
            className={cn(
              "font-medium",
              selectedRenewal === "yearly"
                ? "text-marine-blue"
                : "text-cool-gray"
            )}
          >
            Yearly
          </span>
        </div>
      </div>
      <NavigationButtons onNext={submitForm} onBack={submitForm} />
    </StepForm>
  );
};

export default PlanForm;
