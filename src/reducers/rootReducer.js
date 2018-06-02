import { combineReducers } from "redux";
import {TodoListReducer} from "../todos/reducer/todoReducer";
import { DemoReducer} from "../todos/reducer/demoReducer";
export const rootReducer = combineReducers({
    todos: TodoListReducer,
    demo: DemoReducer
})
