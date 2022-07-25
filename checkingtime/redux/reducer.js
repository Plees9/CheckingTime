import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
  {},
  {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    loadUserRequest: (state) => {
        state.loading = true;
      },
      loadUserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      },
      loadUserFailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },
      logoutRequest: (state) => {
        state.loading = true;
      },
      logoutSuccess: (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
      },
      logoutFailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
      },
  
      verificationRequest: (state) => {
        state.loading = true;
      },
      verificationSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      verificationFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    clearError: (state) => {
        state.error = null;
      },
  
      clearMessage: (state) => {
        state.message = null;
      },
    }
  );
  export const messageReducer = createReducer(
    {},
    {
      forgetPasswordRequest: (state) => {
        state.loading = true;
      },
      forgetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      forgetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      resetPasswordRequest: (state) => {
        state.loading = true;
      },
      resetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      resetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      clearError: (state) => {
        state.error = null;
      },
  
      clearMessage: (state) => {
        state.message = null;
      },
    }
  );
  