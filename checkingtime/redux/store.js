import { configureStore } from "@reduxjs/toolkit";
import { authReducer, messageReducer, companyReducer} from "./reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    company: companyReducer,
    message: messageReducer,
    
  },
});

export default store;