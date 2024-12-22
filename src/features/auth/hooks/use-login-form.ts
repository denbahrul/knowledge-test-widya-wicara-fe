import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { LoginFormInput, loginSchema } from "../../../validation/loginSchema";
import { getUserLogged } from "../../../stores/auth/async";
import { apiV1 } from "../../../libs/api";
import { useAppDispatch } from "../../../hooks/use-store";

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(loginSchema),
  });

  const dispatch = useAppDispatch();
  async function onSubmit({ email, password }: LoginFormInput) {
    try {
      const response = await apiV1.post("/user/login", { email, password });

      const { accessToken } = response.data.data;
      Cookies.set("token", accessToken, { expires: 2 });
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        background: "#1D1D1D",
        color: "#fff",
        iconColor: "#04A51E",
        timer: 1000,
      });
      dispatch(getUserLogged());
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(error.response.data);
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: `${error.response.data.message}`,
          background: "#1D1D1D",
          color: "#fff",
        });
      } else {
        console.error("Unexpected error", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An unexpected error occurred",
          background: "#1D1D1D",
          color: "#fff",
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
