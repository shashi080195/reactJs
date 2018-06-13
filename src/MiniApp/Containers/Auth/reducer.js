import { SAVE_USER_DATA } from "./saga"
const initialState = {
	user: null,
}

export function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case SAVE_USER_DATA: {
			return {
				...state,
				user: action.payload,
			}
		}
		default: {
			return {
				...state,
			}
		}
	}
}
