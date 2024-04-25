import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  @Output() gameStarted = new EventEmitter <number>() ;
  lastnum = 0 ;
  interval ;

  onStart(){
    this.interval = setInterval ( ()=>{
      this.gameStarted.emit(this.lastnum +1)  ;
      this.lastnum ++ ;
    } ,100)
  }

  onEnd(){
    clearInterval(this.interval) ;
  }

}
