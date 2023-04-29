import { createSlice, configureStore } from "@reduxjs/toolkit";

const init = {
  username: {},
  role: sessionStorage.getItem("role") ?? "",
  token: sessionStorage.getItem("token") ?? "",
};

const AuthSlice = createSlice({
  name: "authorisation",
  initialState: init,
  reducers: {
    login(state, actions) {
      state.role = actions.payload.role.toLowerCase();
      sessionStorage.setItem("role", actions.payload.role.toLowerCase());
      sessionStorage.setItem("token", actions.payload.accessToken);
      state.token = actions.payload.accessToken;
    },
    logout(state) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role");
      state.role = "";
      state.token = "";
      state.username = "";
    },
  },
});

export const Store = configureStore({
  reducer: AuthSlice.reducer,
});

export const AuthActions = AuthSlice.actions;
