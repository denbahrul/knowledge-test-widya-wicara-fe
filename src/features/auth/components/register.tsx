import FormInput from "../../../components/ui/form-input";

export default function Register() {
  return (
    <form className="flex flex-col gap-3">
      <FormInput label="Name" placeholder="Enter name" />
      <div className="flex flex-col">
        <label>Gender *</label>
        <select className="bg-gray-200 rounded-xl p-3">
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
        </select>
      </div>
      <FormInput label="Email" placeholder="Enter email" />
      <FormInput label="Password" placeholder="Enter password" />
      <button className="bg-blueB text-white mt-4 w-full rounded-xl p-3">
        Sign up
      </button>
    </form>
  );
}
