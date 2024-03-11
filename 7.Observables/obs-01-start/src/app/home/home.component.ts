import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';
import { filter, map } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {

  // firstObsSubscription : Subscription ;

  constructor(private userService : UserService) { }

  ngOnInit() {
    // // this.firstObsSubscription =interval(500).subscribe( (count)=>{console.log(count);}) ;
    // const customIntervalObservable = Observable.create(observer =>{
    //   let count = 0 ;
    //   setInterval( 
    //     ()=>{
    //       observer.next(count) 
    //       if (count === 4){
    //         observer.complete();
    //       }
    //       if(count > 2){
    //         observer.error(new Error('Count greater Than 2')) ;
    //       }
    //       count++ 
    //     }
    //     ,1000) ;
    // })
    //  this.firstObsSubscription =customIntervalObservable.pipe(
    //   map((data : number) =>{return 'Round:' + (data) ;})  ,filter((data)=>{return data > 0}))
    //           .subscribe(
    //             (count : number)=>{
    //               console.log(count);
    //             } ,
    //             (error :Error)=>{
    //               alert(error.message) ;
    //             } ,
    //             ()=>{
    //               console.log('Completed');
    //             }
    //   )
  }

  ngOnDestroy(): void {
    // this.firstObsSubscription.unsubscribe() ;
  }



}
