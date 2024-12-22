import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { UserEntity } from "../../entities/user";
import { apiV1 } from "../../libs/api";

export const getUserLogged = createAsyncThunk<UserEntity, undefined>(
  "users/getUserLogged",
  async (_, thunkAPI) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        return thunkAPI.rejectWithValue("");
      }
      const res = await apiV1.get("/user/me");

      if (!res.data) {
        return thunkAPI.rejectWithValue("Invalid authorization header");
      }

      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
