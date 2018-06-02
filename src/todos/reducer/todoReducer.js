import {CREATE_TODO} from "../actions/todoAction";

const initialState = {
    todo: [
        {name:"shashi", id: "1"}
    ],
    isAll:false
}
export function TodoListReducer(state=initialState, action) {
    switch (action.type) {
        case CREATE_TODO:{
            return{
                ...state,
                todo: action.payload
            }
        }
        default:{
            return{
                ...state
            }
        }
    }

}