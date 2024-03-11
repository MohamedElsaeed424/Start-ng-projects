import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer : boolean = false ;
  statusCreateServer : string = "No server Created" ;
  serverCreated : boolean = false
  serverName : string = "Server 2";
  servers : string [] = ["Server 1" , "Server 2"] ;
  
  constructor(){
    setTimeout( ()=>{this.allowNewServer = true},2000 )
  }
  // onInputServerName(event : Event){
  //   this.serverName = (<HTMLInputElement>event.target).value ;
  // }
  // onCreateServer(){
  //   this.statusCreateServer = "Server Created Successfully , Name is :" + this.serverName ;
  //   document.getElementById("p1").style.color = "green";
  // }
  onCreateServer (){
    this.serverCreated = true ;
    this.servers.push(this.serverName)
    this.statusCreateServer = "Server Created Successfully , Name is :" + this.serverName ;
  }

}
