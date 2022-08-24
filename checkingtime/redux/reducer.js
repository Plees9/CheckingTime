import { createReducer } from "@reduxjs/toolkit";
export const timesheetReducer = createReducer({}, {
  rankRequest: (state) => {
    state.loading = true;
  },
  rankSuccess: (state, action) => {
    state.loading = false;
    state.array = action.payload;
  },
  rankFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  checkPointRequest: (state) => {
    state.loading = true;
  },
  checkPointSuccess: (state, action) => {
    state.loading = false;
    state.checkpoint = action.payload;
  },
  checkPointFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  
  checkingRequest: (state) => {
    state.loading = true;
  },
  checkingSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  checkingFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  timesheetRequest: (state) => {
    state.loading = true;
  },
  timesheetFilterRequest: (state) => {
    state.loading = true;
  } ,
  timesheetFilterSuccess: (state, action) => {
    state.loading = false;
    state.timesheetFilter = action.payload;
  } ,
  timesheetFilterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  timesheetFilterByUserRequest: (state) => {
    state.loading = true;
  } ,
  timesheetFilterByUserSuccess: (state, action) => {
    state.loading = false;
    state.timesheetFilterByUser = action.payload;
  } ,
  timesheetFilterByUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  logouttimesheetFilter: (state) => {
    state.loading = false
    state.timesheetFilter = null

  } ,
  timesheetSuccess: (state, action) => {
    state.loading = false;
    state.timesheet = action.payload;
  },
  timesheetFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  logoutTimesheet: (state) => {
    state.loading = false
    state.timesheet = null
    state.number = null
  },
  getmyrankRequest: (state) => {
    state.loading = true;
  },
  getmyrankSuccess: (state, action) => {
    state.loading = false;
    state.number = action.payload;
  },
  getmyrankFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },

  clearMessage: (state) => {
    state.message = null;
  },
});
export const companyReducer = createReducer({}, {
  companyRequest: (state) => {
    state.loadingCompany = true;
  },
  companySuccess: (state, action) => {
    state.loadingCompany = false;
    state.company = action.payload;
  },
  companyFailure: (state, action) => {
    state.loadingCompany = false;
    state.error = action.payload;
  },
  logoutCompany: (state) => {
    state.loading = false
    state.company = null;
  },
  clearError: (state) => {
    state.error = null;
    state.errorCompany = null 
  },

  clearMessage: (state) => {
    state.message = null;
    state.messageCompany = null ;
  },
});
export const allReducer = createReducer({}, {
  
  loadAllUserRequest: (state) => {
    state.loading = true;
  },
  loadAllUserSuccess: (state, action) => {
    state.loading = false;
    state.allUser = action.payload;
  },
  loadAllUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  queryUserRequest: (state) => {
    state.loading = true;
  },
  queryUserSuccess: (state, action) => {
    state.loading = false;
    state.allUser = action.payload;
  },
  queryUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  queryUserTaskRequest: (state) => {
    state.loading = true;
  },
  queryUserTaskSuccess: (state, action) => {
    state.loading = false;
    state.allUser = action.payload;
  },
  queryUserTaskFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },

  clearMessage: (state) => {
    state.message = null;
  },
})
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
  export const passwordReducer = createReducer (
    {} ,
    { updatePasswordRequest: (state) => {
      state.loading = true;
    },
    updatePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updatePasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

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
    phonePasswordRequest: (state) => {
      state.loading = true;
    },
    phonePasswordSuccess: (state, action) => {
      state.loading = false;
      state.messagePhone = action.payload;
    },
    phonePasswordFailure: (state, action) => {
      state.loading = false;
      state.errorPhone = action.payload;
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
      state.errorPhone = null;
    },

    clearMessage: (state) => {
      state.message = null;
      state.messagePhone = null;
    },
  }
)

  export const messageReducer = createReducer(
    {},
    {
      loadProfileRequest: (state) => {
        state.loading = true;
      },
      loadProfileSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
      },
      loadProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      deleteProfileRequest: (state) => {
        state.loading = true;
      },
      deleteProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateAdminRequest: (state) => {
        state.loading = true;
      },
      updateAdminSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.isUpdated = true;
      },
      updateCompanyIpRequest: (state) => {
        state.loading = true;
      },
      updateCompanyIpSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      updateCompanyIpFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateAdminReset: (state) => {
          state.isUpdated = false ;
      },
      updateAdminFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateProfileRequest: (state) => {
        state.loading = true;
      },
      updateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.isUpdated = true;
      },
      updateProfileReset: (state) => {
state.isUpdated = false ;
      },
      updateProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      registerRequest: (state) => {
        state.loading = true;
      },
      registerSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      registerFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
        registerTaskRequest: (state) => {
          state.loading = true;
        } ,
        registerTaskSuccess : (state, action) => {
          state.loading = false;
          state.message = action.payload;
        } ,
        registerTaskFailure : (state, action) => {
          state.loading = false;
          state.error = action.payload;
        } ,
        updateTaskRequest : (state) => {
          state.loading = true;
        } ,
        updateTaskSuccess : (state, action) => {
          state.loading = false;
          state.message = action.payload;
        } ,
        updateTaskFailure : (state, action) => {
          state.loading = false;
          state.error = action.payload;
        } ,
      updateAvatarRequest: (state) => {
        state.loading = true;
      },
      updateAvatarSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      updateAvatarFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateDeviceIdRequest: (state) => {
        state.loading = true;
      },
      updateDeviceIdSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      updateDeviceIdFailure: (state, action) => {
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
    export const taskReducer = createReducer(
      {},
      {
        logoutTaskContributor: (state) => {
          state.loading = false
          state.taskContributor = null;
        },
        logoutTaskManager: (state) => {
          state.loading = false
          state.taskManager = null;
        },
        queryTaskRequest: (state) => {
          state.loading = true;
        },
        queryTaskSuccess: (state, action) => {
          state.loading = false;
          state.allTask = action.payload;
        },
        queryTaskFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
       
        loadAllTaskRequest: (state) => {
          state.loading = true;
        },
        loadAllTaskSuccess: (state, action) => {
          state.loading = false;
          state.allTask = action.payload;
        },
        loadAllTaskFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        loadTaskByIdRequest: (state) => {
          state.loading = true;
        },
        loadTaskByIdSuccess: (state, action) => {
          state.loading = false;

          state.task = action.payload;
        },
        loadTaskByIdReset: (state, action) => {
          state.loading = false;

          state.task = null;
        },
        loadTaskByIdFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        loadTaskManagerRequest: (state) => {
          state.loading = true;
        } ,
        loadTaskManagerSuccess: (state, action) => {
          state.loading = false;
          state.taskManager = action.payload;
        } ,
        loadTaskManagerFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        } ,
        loadTaskContributorRequest: (state) => {
          state.loading = true;
        },
        loadTaskContributorSuccess: (state, action) => {
          state.loading = false;
          state.taskContributor = action.payload;
        },
        loadTaskContributorFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
          // Ba Kien viet them
        } ,
        
        loadTaskAssigneeRequest: (state) => {
          state.loading = true;
        } ,
        loadTaskAssigneeSuccess: (state, action) => {
          state.loading = false;
          state.taskAssignee = action.payload;
        } ,
        loadTaskAssigneeFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        } ,
        checkingTaskRequest: (state) => {
          state.loadingTask = true;
        },
        checkingTaskSuccess: (state, action) => {
          state.loadingTask = false;
          state.message = action.payload;
        },
        checkingTaskFailure: (state, action) => {
          state.loadingTask = false;
          state.error = action.payload;
        },
        checkingApprovedRequest: (state) => {
          state.loading = true;
        },
        checkingApporvedSuccess: (state, action) => {
          state.loading = false;
          state.message = action.payload;
        },
        checkingApporvedFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        // den day

        clearError: (state) => {
          state.error = null;
        },

        clearMessage: (state) => {
          state.message = null;
        },
      },
    );
    export const taskMessageReducer = createReducer (
      {},
      { deleteTaskRequest: (state) => {
        state.loading = true;
      },
      deleteTaskSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      },
      deleteTaskFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      clearError: (state) => {
        state.error = null;
      },

      clearMessage: (state) => {
        state.message = null;
      },}
    )
    