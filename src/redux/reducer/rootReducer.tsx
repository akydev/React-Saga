import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  employee: employeeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
