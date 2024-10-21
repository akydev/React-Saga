import { delay, put, takeEvery } from "redux-saga/effects";
import { DEC, INC } from "../action/counterAction";

function* counterSagaInc() {
  //   console.log("D");
  //   yield delay(1000); // Wait for 1 second
  yield put(INC()); // Dispatch increment action
  //   yield delay(1000); // Wait again to see the increment effect
  //   yield put(DEC()); // Dispatch decrement action
}
function* counterSagaDec() {
  //   yield delay(1000); // Wait for 1 second
  yield put(DEC()); // Dispatch decrement action
}

export default function* watcherSaga() {
  yield takeEvery("CounterAsyncInc", counterSagaInc); // Match with increment action
  yield takeEvery("CounterAsyncDec", counterSagaDec); // Match with decrement action
}
