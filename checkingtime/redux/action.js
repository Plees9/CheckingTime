import axios from "axios";

const serverUrl = "https://timekeeper-01.herokuapp.com/api/v1";
export const loadAlluser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadTaskByIdReset" });
    dispatch({ type: "loadAllUserRequest" });
    const { data } = await axios.get(`${serverUrl}/user/profiles`);
    dispatch({ type: "loadAllUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadAllUserFailure", payload: error.response.data.message });
  }
};
export const queryUser = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "queryUserRequest" });
    const { data } = await axios.get(`${serverUrl}/user/searchuser?name=${keyword}`);
    dispatch({ type: "queryUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "queryUserFailure", payload: error.response.data.message });
  }
};
export const ranking = () => async (dispatch) => {
  try {
    dispatch({ type: "rankRequest" });

    const { data } = await axios.get(`${serverUrl}/user/top5`);
    dispatch({ type: "rankSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "rankFailure", payload: error.response.data.message });
  }
}
export const deleteProfile = (userId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteProfileRequest" });

    const { data } = await axios.delete(`${serverUrl}/user/deleteprofile`, {data: {userId}} );
    dispatch({ type: "deleteProfileSuccess", payload: data.message });
    
  } catch (error) {
    dispatch({ type: "deleteProfileFailure", payload: error.response.data.message });
  }
}
export const checking = (networkIp, deviceId ) => async (dispatch) => {
  try {
    dispatch({ type: "checkingRequest" });
    
    const { data } = await axios.post(`${serverUrl}/user/checking`, { networkIp, deviceId },);
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
export const updateDeviceId = (deviceId) => async (dispatch) => {
  try {
    dispatch({ type: "updateDeviceIdRequest" });

    const { data } = await axios.put(`${serverUrl}/user/updatedeviceid`, {deviceId});
    dispatch({ type: "updateDeviceIdSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateDeviceIdFailure",
      payload: error.response.data.message,
    });
  }
};
export const updateCompanyIp = (companyIp) => async (dispatch) => {
  try {
    dispatch({ type: "updateCompanyIpRequest" });
    const { data } = await axios.put(`${serverUrl}/company/updatecompanyip`, {companyIp});
    dispatch({ type: "updateCompanyIpSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateCompanyIpFailure",
      payload: error.response.data.message,
    });
  }
};
export const loadProfile = (_id) => async (dispatch) => {
  try {
    dispatch({ type: "loadProfileRequest" });

    const { data } = await axios.post(`${serverUrl}/user/getprofile`, {_id});
    dispatch({ type: "loadProfileSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadProfileFailure", payload: error.response.data.message });
  }
}

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
export const updateAdmin = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updateAdminRequest" });

    const { data } = await axios.put(`${serverUrl}/user/updateadmin`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "updateAdminSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateAdminFailure",
      payload: error.response.data.message,
    });
  }
};
export const updatePassword = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updatePasswordRequest" });

    const { data } = await axios.put(`${serverUrl}/user/updatepassword`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "updatePasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updatePasswordFailure",
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
export const phonePassword = (phoneNumber) => async (dispatch) => {
  try {
    dispatch({ type: "phonePasswordRequest" });

    const { phoneNumber } = await axios.post(
      `${serverUrl}/user/phonepassword`,
      { phoneNumber },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "phonePasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "phonePasswordFailure",
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

  export const loadAllTask = () => async (dispatch) => {
    try {
      dispatch({ type: "updateProfileReset"})
      dispatch({ type: "loadAllTaskRequest" });
      const { data } = await axios.get(`${serverUrl}/user/alltask`);
      dispatch({ type: "loadAllTaskSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "loadAllTaskFailure",
        payload: error.response.data.message,
      });
    }
  };
    
  export const loadTask = () => async (dispatch) => {
    try {
      dispatch({ type: "loadTaskRequest" });
      const { data } = await axios.get(`${serverUrl}/user/mytask`);
      dispatch({ type: "loadTaskSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "loadTaskFailure", payload: error.response.data.message });
    };
  }
  export const loadTaskManager = () => async (dispatch) => {
    try {
      dispatch({ type: "loadTaskManagerRequest" });
      const { data } = await axios.get(`${serverUrl}/user/mytaskasmanager`);
      dispatch({ type: "loadTaskManagerSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "loadTaskManagerFailure", payload: error.response.data.message });
    };
  }
  export const loadTaskContributor = () => async (dispatch) => {
    try {
      dispatch({ type: "loadTaskContributorRequest" });
      const { data } = await axios.get(`${serverUrl}/user/mytaskascontributor`);
      dispatch({ type: "loadTaskContributorSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "loadTaskContributorFailure", payload: error.response.data.message });
    };
  }
    export const loadTaskById = (_id) => async (dispatch) => {
      try {
        dispatch({ type: "loadTaskByIdRequest" });
        const { data } = await axios.get(`${serverUrl}/user/${_id}`);
        dispatch({ type: "loadTaskByIdSuccess", payload: data });
      } catch (error) {
        dispatch({ type: "loadTaskByIdFailure", payload: error.response.data.message });
      }
    }

export const search = (search) => async (dispatch) => {
  try {
    dispatch({ type: "searchRequest" });

    const { data } = await axios.get(`${serverUrl}/user/searchuser/${search}`);
    dispatch({ type: "searchSuccess", payload: data });
    
  } catch (error) {
    dispatch({
      type: "searchFailure",
      payload: error.response.data.message,
    });
  }
}

export const loadTimesheetFilter = () => async (dispatch) => {
  try {
    dispatch({ type: "timesheetFilterRequest" });

    const { data } = await axios.get(`${serverUrl}/user/filtertimesheetdatabythismonth`);
    dispatch({ type: "timesheetFilterSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "timesheetFilterFailure", payload: error.response.data.message });
  }
}

export const loadTimesheetPoint = () => async (dispatch) => {
  try {
    dispatch({ type: "timesheetPointRequest" });

    const { data } = await axios.get(`${serverUrl}/user/timesheetpoint`);
    dispatch({ type: "timesheetPointSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "timesheetPointFailure", payload: error.response.data.message });
  }
}