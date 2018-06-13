import { fork } from "redux-saga/effects"

import { authSaga } from "./Containers/Auth/saga"

export default function* miniAppSaga() {
	yield [fork(authSaga)]
}
