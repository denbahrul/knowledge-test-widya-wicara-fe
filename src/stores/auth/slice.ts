import { createSlice } from "@reduxjs/toolkit";
import { getUserLogged } from "./async";
import { UserEntity } from "../../entities/user";

interface AuthState {
  entities: UserEntity | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState: AuthState = {
  entities: null,
  loading: "idle",
  error: undefined,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserLogged.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getUserLogged.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getUserLogged.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string; // Assign error message here
    });
  },
});

export default authSlice.reducer;
