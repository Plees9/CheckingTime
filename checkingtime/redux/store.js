import { configureStore } from "@reduxjs/toolkit";
import { authReducer, messageReducer, companyReducer, passwordReducer, timesheetReducer, allReducer, searchReducer} from "./reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    company: companyReducer,
    message: messageReducer,
    password: passwordReducer,
    timesheet: timesheetReducer ,   
    allUser: allReducer,
    search: searchReducer,
  },
});

export default store;