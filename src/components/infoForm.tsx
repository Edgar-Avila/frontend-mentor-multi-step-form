import { Step1, Step1Schema } from "@/types/steps";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import FormTitle from "./formTitle";
import NavigationButtons from "./navigationButtons";
import StepForm from "./stepForm";
import cn from "@/utils";
import { useStepContext } from "@/context/stepContext";

const InfoForm: React.FC = () => {
  const { step1, setStep1, increaseStep } = useStepContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1>({
    resolver: zodResolver(Step1Schema),
    defaultValues: step1,
  });

  const onSubmit: SubmitHandler<Step1> = (data) => {
    setStep1(data);
    increaseStep();
  };

  return (
    <StepForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle
        title="Personal info"
        subtitle="Please provide your name, email address and phone number."
      />
      <div className="space-y-4 flex flex-col">
        {/* Name */}
        <div>
          <div className="flex justify-between">
            <label htmlFor="name" className="text-marine-blue">
              Name
            </label>
            <label htmlFor="name" className="text-strawberry-red font-medium">
              {errors.name?.message}
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            className={cn(
              "border px-4 py-2 rounded-lg w-full",
              errors.name && "border-strawberry-red"
            )}
            {...register("name")}
          />
        </div>

        {/* Email */}
        <div>
          <div className="flex justify-between">
            <label htmlFor="email" className="text-marine-blue">
              Email Address
            </label>
            <label htmlFor="email" className="text-strawberry-red font-medium">
              {errors.email?.message}
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            className={cn(
              "border px-4 py-2 rounded-lg w-full",
              errors.email && "border-strawberry-red"
            )}
            {...register("email")}
          />
        </div>

        {/* Phone */}
        <div>
          <div className="flex justify-between">
            <label htmlFor="phone" className="text-marine-blue">
              Phone Number
            </label>
            <label htmlFor="phone" className="text-strawberry-red font-medium">
              {errors.phone?.message}
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            className={cn(
              "border px-4 py-2 rounded-lg w-full",
              errors.phone && "border-strawberry-red"
            )}
            {...register("phone")}
          />
        </div>
      </div>
      <NavigationButtons />
    </StepForm>
  );
};

export default InfoForm;
