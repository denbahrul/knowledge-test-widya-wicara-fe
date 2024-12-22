import { z } from "zod";
import { genderEnum } from "../entities/user";

export const registerSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  gender: z.enum([genderEnum.Male, genderEnum.Female], {
    errorMap: () => ({ message: "Gender must be Male or Female" }),
  }),
  email: z.string().email("Email must be a valid email"),
  password: z.string().min(6, "Password must be at least 6 character"),
});

export type RegisterFormInput = z.infer<typeof registerSchema>;
