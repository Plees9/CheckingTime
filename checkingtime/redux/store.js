import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  messageReducer,
  companyReducer,
  passwordReducer,
  timesheetReducer,
  allReducer,
  taskReducer,
  taskMessageReducer,
} from "./reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    company: companyReducer,
    message: messageReducer,
    password: passwordReducer,
    timesheet: timesheetReducer,   
    allUser: allReducer,
    task: taskReducer,
    taskMessage: taskMessageReducer,
  },
});

export default store;