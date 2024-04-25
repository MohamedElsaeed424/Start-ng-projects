import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  evens : number[] = [] ; 
  odds : number[] = [] ; 

  onGameStarted(num : number){
    if (num %2 === 0){
      this.evens.push(num) ;
    }else{
      this.odds.push(num) ;
    }
  }

}
