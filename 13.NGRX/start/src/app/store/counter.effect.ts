import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.action";
import { switchMap, tap, withLatestFrom } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";
import { of } from "rxjs";

@Injectable()
export class CounterEffects {
    constructor(private actions$ : Actions , private store : Store<{counter : number}>){}

    loadCount = createEffect(
        ()=>this.actions$.pipe(
            ofType(init),
            switchMap(
                ()=>{ // returns observable 
                   const storedCounter = localStorage.getItem('count');
                   if (storedCounter){
                        return of(set({value : +storedCounter}))  //dispatching new action 
                   }
                   return of(set({value : 0}))
                }
            )
        )
    )

    saveCount = createEffect(
        ()=>this.actions$.pipe(
            ofType(increment , decrement),
            withLatestFrom(this.store.select(selectCount)) ,
            tap(([action , counter])=>{
                console.log(action);
                localStorage.setItem('count' , counter.toString()); 
            })
        ) ,
        {dispatch : false}
    );
}