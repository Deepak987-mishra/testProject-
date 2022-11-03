import { all, fork } from "redux-saga/effects";
import watchDummySaga from "./DummySaga";
import { watchGlobalSaga } from "./GlobalSaga";
//import { watchGlobalSaga } from "./GlobalSaga";

export function* rootSaga() {
  yield all([
   fork(watchGlobalSaga),
    fork(watchDummySaga),

  ]);
}

