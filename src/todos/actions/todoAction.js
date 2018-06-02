export const CREATE_TODO = "CREATE_TODO";


export function createTodo(payload){
    console.log("payload is", payload);
    return {
        type: CREATE_TODO,
        payload
    }
}