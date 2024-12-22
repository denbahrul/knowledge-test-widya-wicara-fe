import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { apiV1 } from "../../libs/api";
import { UserEntity } from "../../entities/user";
import { UpdateProfileDTO } from "../../validation/profileSchema";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("user/profile");

      return res.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const updateProfile = createAsyncThunk<UserEntity, UpdateProfileDTO>(
  "profile/updateProfile",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "profilePhoto" && value instanceof FileList) {
          Array.from(value).forEach((file) => {
            formData.append("profilePhoto", file);
          });
        } else if (key !== "profilePhoto") {
          formData.append(key, value);
        }
      });
      const res = await apiV1.patch("/user/update", formData);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        iconColor: "#006dfc",
        timer: 1500,
      });
      return res.data.profile;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
