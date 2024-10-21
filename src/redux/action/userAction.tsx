import { IUser } from "../interface/IUser";

export interface IUserAction {
  type: string;
  payload?: IUser[] | any;
}
export const UserRequest = (): IUserAction => {
  return {
    type: "User_Request",
  };
};

export const UserSuccess = (playload: IUser[]): IUserAction => {
  return {
    type: "User_Success",
    payload: playload,
  };
};

export const UserError = (payload: any): IUserAction => {
  return {
    type: "User_Error",
    payload: payload,
  };
};
