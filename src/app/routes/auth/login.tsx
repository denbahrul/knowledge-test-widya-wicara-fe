import React from "react";
import FormInput from "../../../components/ui/form-input";

export default function Login() {
  return (
    <div>
      <p>Sign in</p>
      <p>
        Don't have an account? <a>Register Here</a>
      </p>
      <form>
        <FormInput label="Email" placeholder="Enter email" />
      </form>
    </div>
  );
}
