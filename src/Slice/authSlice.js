// src/Slice/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fakeApi = {
  register: async (userData) => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            ...userData,
            id: Date.now(),
            token: "fake-jwt-token-" + Date.now(),
          }),
        500
      )
    );
  },
  login: async ({ email, password }) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (email === "test@test.com" && password === "123456") {
          resolve({
            id: 1,
            email,
            name: "Test User",
            token: "fake-jwt-token-123",
          });
        } else {
          reject("Invalid credentials");
        }
      }, 500)
    );
  },
};

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await fakeApi.register(userData);
      localStorage.setItem("user", JSON.stringify(res));
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await fakeApi.login(credentials);
      localStorage.setItem("user", JSON.stringify(res));
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userFromStorage,
    loading: false,
    error: null,
    isAuthenticated: !!userFromStorage,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false; // Выходим
      // Данные в localStorage остаются
    },
    restoreSession: (state) => {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        state.user = JSON.parse(savedUser);
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout, restoreSession } = authSlice.actions;
export default authSlice.reducer;
