import { z } from "zod";
import { genderEnum } from "../entities/user";

export const updateProfileSchema = z.object({
  fullName: z.string(),
  gender: z.enum([genderEnum.Male, genderEnum.Female]),
  email: z.string().email("Email must be a valid email"),
  profilePhoto: z.any(),
});

export type UpdateProfileDTO = z.infer<typeof updateProfileSchema>;
