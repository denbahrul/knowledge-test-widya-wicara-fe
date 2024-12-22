import { createSlice } from "@reduxjs/toolkit";
import { getProfile, updateProfile } from "./async";
import { UserEntity } from "../../entities/user";

interface ProfileState {
  entities?: UserEntity;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ProfileState = {
  entities: {} as UserEntity,
  loading: "idle",
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get profile
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getProfile.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getProfile.rejected, (state) => {
      state.loading = "failed";
    });
    //update profile
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(updateProfile.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(updateProfile.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default profileSlice.reducer;
