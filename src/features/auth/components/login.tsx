import Button from "../../../components/ui/button";
import FormInput from "../../../components/ui/form-input";
import { useLoginForm } from "../hooks/use-login-form";

export default function Login() {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        {...register("email")}
        label="Email"
        type="Email"
        placeholder="Enter email"
      />
      {errors.email && (
        <p className="text-rose-600">* {errors.email.message}</p>
      )}
      <FormInput
        label="Password"
        {...register("password")}
        type="Password"
        placeholder="Enter password"
      />
      {errors.password && (
        <p className="text-rose-600">* {errors.password.message}</p>
      )}
      <Button buttonName="Sign in" type="submit" />
    </form>
  );
}
