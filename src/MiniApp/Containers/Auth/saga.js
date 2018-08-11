import { takeLatest, call, put } from "redux-saga/effects"
import Api from "../../Api"
export const GET_USER_DATA = "GET_USER_DATA"
export const SAVE_USER_DATA = "SAVE_USER_DATA"

export const getUserData = payload => ({
	type: GET_USER_DATA,
	payload,
})

export const saveUserData = payload => ({
	type: SAVE_USER_DATA,
	payload,
})

export function* authSaga(dispatch) {
	yield takeLatest(GET_USER_DATA, handleGetUserData)
}

function* handleGetUserData(action) {
	try {
		//let userData = yield call(Api.fetchUserData, action.payload)
		yield put(
			saveUserData({
				name: "shashi",
				id: 123,
			}),
		)
	} catch (error) {
		console.log("error in getUserdata", error)
	}
}
