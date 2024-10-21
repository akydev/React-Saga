import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer/rootReducer";
import rootSaga from "../saga/rootSaga";

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the root saga
sagaMiddleware.run(rootSaga);

// Export the type for dispatch
export type AppDispatch = typeof store.dispatch;
export default store;
