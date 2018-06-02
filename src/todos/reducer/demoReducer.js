const initialState = {
    demo:true
}
export function DemoReducer(state=initialState, action) {
    switch (action.type) {
        default:{
            return{
                ...state
            }
        }
    }

}