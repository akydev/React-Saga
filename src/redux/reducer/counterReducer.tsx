import { ICounter } from "../interface/ICounter";

const initialState: number = 0;

const counterReducer = (state = initialState, action: ICounter) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state > 0 ? state - 1 : state; // Prevents negative values

    // case "DECREMENT":
    //   if (state !== 0) {
    //     return state - 1;
    //   } else {
    //     return state;
    //   }
    default:
      return state;
  }
};
export default counterReducer;
