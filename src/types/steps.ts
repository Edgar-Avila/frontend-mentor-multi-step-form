import { z } from "zod";

export const Step1Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  phone: z.string().min(1, "Phone is required"),
});

export const Step2Schema = z.object({
  plan: z.enum(["arcade", "advanced", "pro"]),
  renewal: z.enum(["monthly", "yearly"]),
});

export const Step3Schema = z.object({
  onlineService: z.boolean(),
  largerStorage: z.boolean(),
  customizableProfile: z.boolean(),
});

export type Step1 = z.infer<typeof Step1Schema>;
export type Step2 = z.infer<typeof Step2Schema>;
export type Step3 = z.infer<typeof Step3Schema>;