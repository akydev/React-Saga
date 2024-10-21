import { IEmployee } from "../interface/IEmployee";

export interface IEmployeeAction {
  type: string;
  payload?: IEmployee | any;
}

export const EmployeeRequest = (payload: IEmployee): IEmployeeAction => {
  return {
    type: "Employee_Request",
    payload: payload,
  };
};

export const EmployeeSuccess = (playload: IEmployee): IEmployeeAction => {
  return {
    type: "Employee_Success",
    payload: playload,
  };
};

export const EmployeeError = (payload: any): IEmployeeAction => {
  return {
    type: "Employee_Error",
    payload: payload,
  };
};
