import { configureStore } from "@reduxjs/toolkit";
import { authReducer, messageReducer, companyReducer, passwordReducer, timesheetReducer} from "./reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    company: companyReducer,
    message: messageReducer,
    password: passwordReducer,
    timesheet: timesheetReducer ,
    
  },
});

export default store;