import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.action";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";


@Injectable()
export class CounterEffects {

    constructor(private actions$ : Actions ,  private store : Store<{counter : number}>){}

    loadCounter = createEffect(
        ()=> this.actions$.pipe(
            ofType(init),
            switchMap(
                ()=>{
                   const storedCounter = localStorage.getItem('count');
                   console.log("hello");
                   if(storedCounter){
                    return of(set({value : +storedCounter}));
                   }
                   return of(set({value : 0}));
                }
            )
        )
    )

    saveCounter = createEffect( 
        ()=>this.actions$.pipe(
            ofType(increment , decrement) ,
            withLatestFrom(this.store.select(selectCount)) ,
            tap(([action, counter])=>{
                console.log(action);
                localStorage.setItem('count' , counter.toString())
            })
        ) ,
        {dispatch : false}
    )
}