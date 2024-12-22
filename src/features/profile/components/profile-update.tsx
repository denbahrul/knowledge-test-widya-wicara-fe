import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { getProfile, updateProfile } from "../../../stores/profile/async";
import FormInput from "../../../components/ui/form-input";
import { useForm } from "react-hook-form";
import {
  UpdateProfileDTO,
  updateProfileSchema,
} from "../../../validation/profileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../components/ui/button";
import { getUserLogged } from "../../../stores/auth/async";

export default function ProfileUpdate({ onUpdate }: { onUpdate: any }) {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile.entities);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfileDTO>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      profilePhoto: profile?.profilePhoto,
      fullName: profile?.fullName,
      gender: profile?.gender,
      email: profile?.email,
    },
  });

  async function onSubmit(data: UpdateProfileDTO) {
    await dispatch(updateProfile(data)).unwrap();
    await dispatch(getUserLogged()).unwrap();
    onUpdate();
  }

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10">
      <form
        className="flex w-96 flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          {...register("profilePhoto")}
          type="file"
          label="Profile Photo"
        />
        <FormInput
          label="Name"
          type="text"
          placeholder="Enter name"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-rose-600">* {errors.fullName.message}</p>
        )}
        <div className="flex flex-col">
          <label>Gender *</label>
          <select
            className="rounded-xl bg-gray-200 p-3"
            {...register("gender")}
          >
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
        </div>
        {errors.gender && (
          <p className="text-rose-600">* {errors.gender.message}</p>
        )}
        <FormInput
          disabled
          label="Email"
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-rose-600">* {errors.email.message}</p>
        )}
        <Button
          type="submit"
          buttonName={isSubmitting ? "Updating profile..." : "Update Profile"}
        />
      </form>
    </div>
  );
}
