import FormInput from "../../../components/ui/form-input";
import { useRegisterForm } from "../hooks/use-register-form";

export default function Register() {
  const { register, handleSubmit, errors, onSubmit } = useRegisterForm();

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
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
        <select className="rounded-xl bg-gray-200 p-3" {...register("gender")}>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
        </select>
      </div>
      {errors.gender && (
        <p className="text-rose-600">* {errors.gender.message}</p>
      )}
      <FormInput
        label="Email"
        type="email"
        placeholder="Enter email"
        {...register("email")}
      />
      {errors.email && (
        <p className="text-rose-600">* {errors.email.message}</p>
      )}
      <FormInput
        label="Password"
        type="password"
        placeholder="Enter password"
        {...register("password")}
      />
      {errors.password && (
        <p className="text-rose-600">* {errors.password.message}</p>
      )}
      <button className="mt-4 w-full rounded-xl bg-blueB p-3 text-white">
        Sign up
      </button>
    </form>
  );
}
