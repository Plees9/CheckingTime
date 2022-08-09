import axios from "axios";

const serverUrl = "https://timekeeper-01.herokuapp.com/api/v1";
export const checking = () => async (dispatch) => {
  try {
    dispatch({ type: "checkingRequest" });

    const { data } = await axios.post(`${serverUrl}/user/checking`);
    dispatch({ type: "checkingSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "checkingFailure", payload: error.response.data.message });
  }
}
export const updateAvatar = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updateAvatarRequest" });

    const { data } = await axios.put(`${serverUrl}/user/updateavatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "updateAvatarSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateAvatarFailure",
      payload: error.response.data.message,
    });
  }
};
export const loadTimesheet = () => async (dispatch) => {
  try {
    dispatch({ type: "timmesheetRequest" });

    const { data } = await axios.get(`${serverUrl}/user/timesheetinfo`);
    dispatch({ type: "timesheetSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "timesheetFailure", payload: error.response.data.message });
  }
}
export const getmyrank = () => async (dispatch) => {
  try {
    dispatch({ type: "getmyrankRequet" });

    const { data } = await axios.get(`${serverUrl}/user/rank`);
    dispatch({ type: "getmyrankSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getmyrankFailure", payload: error.response.data.message });
  }
}
export const loadCompany = () => async (dispatch) => {
  try {
    dispatch({ type: "companyRequest" });

    const { data } = await axios.get(`${serverUrl}/company/information`);
    dispatch({ type: "companySuccess", payload: data });
  } catch (error) {
    dispatch({ type: "companyFailure", payload: error.response.data.message });
  }
}
export const updateProfile = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });

    const { data } = await axios.put(`${serverUrl}/user/updateprofile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "updateProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateProfileFailure",
      payload: error.response.data.message,
    });
  }
};
export const login = (phoneNumber, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${serverUrl}/user/login`,
      { phoneNumber, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "loginSuccess", payload: data });
    // dispatch({ type: "timesheetSuccess", payload: data });
    // dispatch({ type: "getmyrankSuccess", payload: data });
    // dispatch({ type: "companySuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFailure", payload: error.response.data.message });
  }
};
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileReset"})
    dispatch({ type: "loadUserRequest" });
    const { data } = await axios.get(`${serverUrl}/user/myprofile`);
    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadUserFailure", payload: error.response.data.message });
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    await axios.post(`${serverUrl}/user/logout`);
    dispatch({type: "logoutTimesheet"})
    dispatch({type: "logoutCompany"})
    dispatch({ type: "logoutSuccess" });
  } catch (error) {
    dispatch({
      type: "logoutFailure",
      payload: error.response.data.message,
    });
  }
};
export const verify = (otp) => async (dispatch) => {
  try {
    dispatch({ type: "verificationRequest" });

    const { data } = await axios.post(
      `${serverUrl}/verify`,
      { otp },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "verificationSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "verificationFailure",
      payload: error.response.data.message,
    });
  }
};

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgetPasswordRequest" });

    const { data } = await axios.post(
      `${serverUrl}/user/forgetpassword`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "forgetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "forgetPasswordFailure",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (otp, newPassword, rewritePassword) => async (dispatch) => {
  try {
    dispatch({ type: "resetPasswordRequest" });

    const { data } = await axios.put(
      `${serverUrl}/user/resetpassword`,
      { otp, newPassword, rewritePassword },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "resetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "resetPasswordFailure",
      payload: error.response.data.message,
    });
  }
};
export const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });

    const { data } = await axios.post(`${serverUrl}/user/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "registerFailure",
      payload: error.response.data.message,
    });
  }
};