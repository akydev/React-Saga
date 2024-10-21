import { call, put, takeEvery } from "redux-saga/effects";
import { GetUsers } from "../services/userServices";
import { UserError, UserRequest, UserSuccess } from "../action/userAction";
import { IUser } from "../interface/IUser";

function* userSaga() {
  try {
    const res: IUser[] = yield call(GetUsers);
    yield put(UserSuccess(res));
  } catch (error: any) {
    yield put(UserError(error.message));
  }
}

export default function* watcherUserSaga() {
  yield takeEvery(UserRequest().type, userSaga);
}
