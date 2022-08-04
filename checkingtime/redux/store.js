import { configureStore } from "@reduxjs/toolkit";
import { authReducer, messageReducer, companyReducer, passwordReducer} from "./reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    company: companyReducer,
    message: messageReducer,
    password: passwordReducer,
    
  },
});

export default store;