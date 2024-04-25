import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { doubleCount, selectCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports:[AsyncPipe]
})
export class CounterOutputComponent {
  counter$ : Observable<number>;
  doubleCount$ : Observable<number>;
  constructor(private store : Store<{counter :number}>) {
    this.counter$ = store.select(selectCount)
    this.doubleCount$ = store.select(doubleCount)
  }
}
