import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  RegisterFormInput,
  registerSchema,
} from "../../../validation/registerSchema";
import { apiV1 } from "../../../libs/api";
import { useNavigate } from "react-router-dom";

export function useRegisterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit({
    email,
    password,
    fullName,
    gender,
  }: RegisterFormInput) {
    try {
      const response = await apiV1.post("/user/register", {
        email,
        password,
        fullName,
        gender,
      });

      const { accessToken } = response.data.data;
      Cookies.set("token", accessToken, { expires: 2 });
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        iconColor: "#006dfc",
        timer: 1000,
      });
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(error.response.data);
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: `${error.response.data.message}`,
        });
      } else {
        console.error("Unexpected error", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An unexpected error occurred",
        });
      }
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
