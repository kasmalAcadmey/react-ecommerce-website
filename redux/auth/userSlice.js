import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: null,
  error: false,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    LoginStart: (state) => {
      (state.loading = true), (state.error = null);
    },
    loginSuccuss: (state, action) => {
      (state.loading = false),
        (state.error = null),
        (state.user = action.payload);
    },
    LoginFailer: (state, action) => {
      (state.loading = false),
        (state.user = null),
        (state.error = action.payload);
    },

    LogoutUser: (state) => {
      (state.loading = false), (state.user = null), (state.error = null);
    },
  },
});

export const { LoginStart, LoginFailer, loginSuccuss, LogoutUser } =
  userSlice.actions;

export default userSlice.reducer;
