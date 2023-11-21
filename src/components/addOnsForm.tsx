import cn from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import iconCheck from "@/assets/images/icon-checkmark.svg";
import FormTitle from "./formTitle";
import { useStepContext } from "@/context/stepContext";
import StepForm from "./stepForm";
import NavigationButtons from "./navigationButtons";
import { getAddOns } from "@/api";

const Step3Schema = z.object({
  onlineService: z.boolean(),
  largerStorage: z.boolean(),
  customizableProfile: z.boolean(),
});

type Step3 = z.infer<typeof Step3Schema>;

const AddOnsForm: React.FC = () => {
  const addOns = getAddOns();
  const { step2, step3, setStep3, decreaseStep, increaseStep } = useStepContext();
  const { register, watch, trigger, handleSubmit } = useForm<Step3>({
    resolver: zodResolver(Step3Schema),
    defaultValues: step3,
  });

  const values = watch();

  const submitForm = async () => {
    const result = await trigger();
    if (!result) return result;
    await handleSubmit(onSubmit)();
    return true;
  };

  const onSubmit = (data: Step3) => {
    setStep3(data);
    increaseStep();
  };

  if (!step2) {
    decreaseStep();
    return null;
  }

  return (
    <StepForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-4">
        {addOns.map((addOn) => (
          <Fragment key={addOn.name}>
            <input
              type="checkbox"
              className="hidden peer"
              id={addOn.name}
              {...register(addOn.name)}
            />
            <label
              htmlFor={addOn.name}
              className={cn(
                "border p-4 rounded-lg cursor-pointer flex items-center flex-grow basis-0 select-none",
                values[addOn.name] && "border-purplish-blue bg-magnolia"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 border rounded text-white flex items-center justify-center",
                  values[addOn.name] && "bg-purplish-blue"
                )}
              >
                {values[addOn.name] && <img src={iconCheck} />}
              </div>
              <div className="leading-tight ml-4">
                <h4 className="text-marine-blue font-medium">{addOn.title}</h4>
                <p className="text-cool-gray">{addOn.desc}</p>
              </div>
              <span className="ml-auto text-purplish-blue">
                +{addOn.price[step2.renewal]}/
                {step2.renewal === "yearly" ? "yr" : "mo"}
              </span>
            </label>
          </Fragment>
        ))}
      </div>
      <NavigationButtons onNext={submitForm} onBack={submitForm} />
    </StepForm>
  );
};

export default AddOnsForm;
