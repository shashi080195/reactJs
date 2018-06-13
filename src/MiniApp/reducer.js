import { combineReducers } from "redux"
import { AuthReducer } from "./Containers/Auth/reducer"

export default function reducer(asyncReducers) {
	return combineReducers({
		auth: AuthReducer,
		...asyncReducers,
	})
}
