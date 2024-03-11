import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions= signal<string[]>([]);
  counter = signal(0);
  constructor(){
    effect(()=> console.log(this.counter()));
  }
  increment() {
    this.counter.update((oldCounter)=>oldCounter+1);
    const doubledCounter = computed(()=>this.counter() * 2) ;
    this.actions.update((oldArray)=>[...oldArray , 'INCREMENT']) ;
  }
  decrement() {
    this.counter.update(oldCounter=>oldCounter-1);
    this.actions.update((oldArray)=>[...oldArray , 'DECREMENT']) ;
  }
}


