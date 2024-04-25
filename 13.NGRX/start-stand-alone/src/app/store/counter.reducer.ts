import { createReducer, on } from "@ngrx/store";
import { decrement, increment, set } from "./counter.action";
import { Action } from "rxjs/internal/scheduler/Action";


const initialState = 0 ;

export const counterReucer =  createReducer(
    initialState  ,
    on(increment , (state ,action)=> state+action.value ) ,
    on(decrement , (state , action)=> state - action.value) ,
    on(set , (state , action)=> action.value)
)

// export function counterReucer(state = initialState){
//     return state;
// }