import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// MOCK API
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ mobile, password }) => {
    // API call later
    return {
      token: "abc123",
      role: "admin" // or seller
    };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    role: null,
    loading: false
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.role = action.payload.role;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
