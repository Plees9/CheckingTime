import axios from "axios";

const serverUrl = "https://timekeeper-01.herokuapp.com/api/v1";
export const loadAlluser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadAllUserRequest" });
    const { data } = await axios.get(`${serverUrl}/user/getallprofile`);
    dispatch({ type: "loadAllUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadAllUserFailure", payload: error.response.data.message });
  }
};
export const queryUser = (name, privilege, typeOfEmployee, role, contractStatus) => async (dispatch) => {
  try {
    dispatch({ type: "queryUserRequest" });
    const { data } = await axios.get(`${serverUrl}/user/searchuser?name=${name}&privilege=${privilege}&typeOfEmployee=${typeOfEmployee}&role=${role}&contractStatus=${contractStatus}`);
    dispatch({ type: "queryUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "queryUserFailure", payload: error.response.data.message });
  }
};
export const ranking = () => async (dispatch) => {
  try {
    dispatch({ type: "rankRequest" });

    const { data } = await axios.get(`${serverUrl}/user/gettop5`);
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
export const checkingTask = (taskId ) => async (dispatch) => {
  try {
    dispatch({ type: "checkingTaskRequest" });
    
    const { data } = await axios.post(`${serverUrl}/user/checkingtask`, { taskId },);
    dispatch({ type: "checkingTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "checkingTaskFailure", payload: error.response.data.message });
  }
}
export const checkingApporved = (taskId ) => async (dispatch) => {
  try {
    dispatch({ type: "checkingApprovedRequest" });
    
    const { data } = await axios.post(`${serverUrl}/user/approvingtask`, { taskId },);
    dispatch({ type: "checkingApprovedSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "checkingApprovedFailure", payload: error.response.data.message });
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

    const { data } = await axios.get(`${serverUrl}/user/getchecking`);
    dispatch({ type: "timesheetSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "timesheetFailure", payload: error.response.data.message });
  }
}
export const getmyrank = () => async (dispatch) => {
  try {
    dispatch({ type: "getmyrankRequet" });

    const { data } = await axios.get(`${serverUrl}/user/getmyrank`);
    dispatch({ type: "getmyrankSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getmyrankFailure", payload: error.response.data.message });
  }
}
export const loadCompany = () => async (dispatch) => {
  try {
    dispatch({ type: "companyRequest" });

    const { data } = await axios.get(`${serverUrl}/company/getinformation`);
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
    dispatch({ type: "updatePasswordSuccess", payload: data });
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
    const { data } = await axios.get(`${serverUrl}/user/getmyprofile`);
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
    dispatch({type: "logouttimesheetFilter"})
    dispatch({type: "logoutTaskContributor"})
    dispatch({type: "logoutTaskManager"})
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
      `${serverUrl}/user/forgetpasswordemail`,
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
      `${serverUrl}/user/forgetpasswordphone`,
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
    dispatch({ type: "registerSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "registerFailure",
      payload: error.response.data.message,
    });
  }
};
export const registerTask = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "registerTaskRequest" });
    const { data } = await axios.post(`${serverUrl}/user/createtask`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "registerTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "registerTaskFailure",
      payload: error.response.data.message,
    });
  }
}
export const updateTask = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updateTaskRequest" });
    const { data } = await axios.put(`${serverUrl}/user/updatetask`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "updateTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateTaskFailure",
      payload: error.response.data.message,
    });
  }
};


  export const loadAllTask = () => async (dispatch) => {
    try {
      dispatch({ type: "updateProfileReset"})
      dispatch({ type: "loadAllTaskRequest" });
      const { data } = await axios.get(`${serverUrl}/user/getalltask`);
      dispatch({ type: "loadAllTaskSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "loadAllTaskFailure",
        payload: error.response.data.message,
      });
    }
  };
  export const loadTaskManager = () => async (dispatch) => {
    try {
      dispatch({ type: "loadTaskManagerRequest" });
      const { data } = await axios.get(`${serverUrl}/user/getmytaskasmanager`);
      dispatch({ type: "loadTaskManagerSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "loadTaskManagerFailure", payload: error.response.data.message });
    };
  }
  export const loadTaskContributor = () => async (dispatch) => {
    try {
      dispatch({ type: "updateProfileReset"})
      dispatch({ type: "loadTaskContributorRequest" });
      const { data } = await axios.get(`${serverUrl}/user/getmytaskascontributor`);
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

export const search = (name) => async (dispatch) => {
  try {
    dispatch({ type: "queryUserTaskRequest" });

    const { data } = await axios.get(`${serverUrl}/user/searchusertask/?name=${name}`);
    dispatch({ type: "queryUserTaskSuccess", payload: data });
    
  } catch (error) {
    dispatch({
      type: "queryUserTaskFailure",
      payload: error.response.data.message,
    });
  }
}
export const searchTask = (name) => async (dispatch) => {
  try {
    dispatch({ type: "queryTaskRequest" });

    const { data } = await axios.get(`${serverUrl}/user/searchtask/?name=${name}`);
    dispatch({ type: "queryTaskSuccess", payload: data });
    
  } catch (error) {
    dispatch({
      type: "queryTaskFailure",
      payload: error.response.data.message,
    });
  }
}

export const loadTimesheetFilter = () => async (dispatch) => {
  try {
    dispatch({ type: "timesheetFilterRequest" });

    const { data } = await axios.get(`${serverUrl}/user/filtertimesheetbythismonth`);
    dispatch({ type: "timesheetFilterSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "timesheetFilterFailure", payload: error.response.data.message });
  }
}
export const loadTimesheetFilterByUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: "timesheetFilterByUserRequest" });
    console.log("ayyo")
    const { data } = await axios.post(`${serverUrl}/user/filtertimesheetbythismonthbyuser`, {userId});
    console.log(data)
    dispatch({ type: "timesheetFilterByUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "timesheetFilterByUserFailure", payload: error.response.data.message });
  }
}
export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteTaskRequest" });

    const { data } = await axios.delete(`${serverUrl}/user/deletetask` , {data: {taskId}} );
    dispatch({ type: "deleteTaskSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "deleteTaskFailure", payload: error.response.data.message });
  }
}

export const loadCheckPoint = () => async (dispatch) => {
  try {
    dispatch({ type: "checkPointRequest" });

    const { data } = await axios.get(`${serverUrl}/user/gettimesheetboard`);
    dispatch({ type: "checkPointSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "checkPointFailure", payload: error.response.data.message });
  }
}
