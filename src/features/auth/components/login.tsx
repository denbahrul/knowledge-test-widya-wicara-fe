import FormInput from "../../../components/ui/form-input";

export default function Login() {
  return (
    <form className="flex flex-col gap-3">
      <FormInput label="Email" placeholder="Enter email" />
      <FormInput label="Password" placeholder="Enter password" />
      <button className="bg-blueB text-white mt-4 w-full rounded-xl p-3">
        Sign in
      </button>
    </form>
  );
}
