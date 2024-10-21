import { IEmployeeAction } from "../action/employeeAction";
import { IEmployee } from "../interface/IEmployee";

export interface IEmployeeReducer {
  data: IEmployee;
  isLoading: boolean;
  error: any;
}

const initialState: IEmployeeReducer = {
  data: {
    avatar: "",
    createdAt: "",
    id: "",
    name: "",
  },
  error: {},
  isLoading: false,
};

export default (state = initialState, action: IEmployeeAction) => {
  switch (action.type) {
    case "Employee_Request":
      return { ...state, isLoading: true };

    case "Employee_Success":
      return { ...state, isLoading: false, data: action.payload };
    case "Employee_Error":
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
