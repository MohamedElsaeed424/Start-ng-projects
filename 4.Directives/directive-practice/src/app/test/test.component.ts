import { Component } from '@angular/core';
import { timeout, timestamp } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  displayStatus : string = "off" ;
  logs : number []  =[Date.now()] 

  onDisplay(){
    this.displayStatus = "on" ;
    this.logs.push(Date.now());
    setTimeout( ()=>{this.displayStatus = "off"},2000)
  }
}
