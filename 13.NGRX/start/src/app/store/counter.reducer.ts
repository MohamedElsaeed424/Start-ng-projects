import { Action, createReducer, on } from "@ngrx/store";
// import { INCREMENT, IncrementAction } from "./counter.action";
import { decrement, increment, set } from "./counter.action";


const initialState = 0 ;

export const counterReucer =  createReducer(
    initialState ,
    on(increment , (state ,action)=> state + action.value ) ,
    on(decrement , (state , action)=> state- action.value) ,
    on(set , (state , action)=> action.value)
)


// OR
// export function counterReucer(state = initialState ,action : IncrementAction | Action){
//     if (action.type === INCREMENT){
//         return state+ (action as IncrementAction).value
//     }
//     return state;
// }