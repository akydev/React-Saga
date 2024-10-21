import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./redux/reducer/rootReducer";
import { AppDispatch } from "./redux/store/store";

export default function Counter() {
  const counter = useSelector<AppState>((state) => state.counter) as number;

  const dispatch = useDispatch<AppDispatch>();

  const onIncrement = () => {
    dispatch({ type: "CounterAsyncInc" });
  };

  const onDecrement = () => {
    dispatch({ type: "CounterAsyncDec" });
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}
