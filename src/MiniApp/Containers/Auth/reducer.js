import { SAVE_USER_DATA } from "./saga"
const initialState = {
	user: [],
	name: null,
}

export function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case SAVE_USER_DATA: {
			return {
				...state,
				user: [...state.user, action.payload],
			}
		}
		case "ADD_NAME": {
			return {
				...state,
				name: action.payload,
			}
		}
		default: {
			return {
				...state,
			}
		}
	}
}
