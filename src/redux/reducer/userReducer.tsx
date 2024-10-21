import { IUserAction } from "../action/userAction";
import { IUser } from "../interface/IUser";

export interface IUserReducer {
  users: IUser[];
  isLoading: boolean;
  error: any;
}

const initialState = {
  users: [],
  isLoading: false,
  error: {},
};

export default (state = initialState, action: IUserAction): IUserReducer => {
  switch (action.type) {
    case "User_Request":
      return { ...state, isLoading: true };
    case "User_Success":
      return { ...state, isLoading: false, users: action.payload };
    case "User_Error":
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
