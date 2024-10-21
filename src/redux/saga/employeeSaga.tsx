import { call, put, takeEvery } from "redux-saga/effects";
import { IEmployee } from "../interface/IEmployee";
import {
  EmployeeError,
  EmployeeSuccess,
  IEmployeeAction,
} from "../action/employeeAction";
import { AddEmployee } from "../services/employeeServices";

function* employeeSaga(action: IEmployeeAction) {
  try {
    const res: IEmployee = yield call(AddEmployee, action.payload);
    yield put(EmployeeSuccess(res));
  } catch (error: any) {
    yield put(EmployeeError(error.message));
  }
}

export default function* watcherEmployeeSaga() {
  yield takeEvery("EmployeeRequest", employeeSaga);
}
