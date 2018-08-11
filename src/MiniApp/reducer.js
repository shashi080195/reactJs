import { combineReducers } from "redux"
import { AuthReducer } from "./Containers/Auth/reducer"
import { dashBoardReducer } from "./Containers/DashBoard/reducer"
export default function reducer(asyncReducers) {
	return combineReducers({
		auth: AuthReducer,
		//dash: dashBoardReducer,
		...asyncReducers,
	})
}
