import { all } from "redux-saga/effects";
import watcherSaga from "./counterSaga";
import watcherUserSaga from "./userSaga";

export default function* rootSaga() {
  yield all([watcherSaga(), watcherUserSaga()]);
}
