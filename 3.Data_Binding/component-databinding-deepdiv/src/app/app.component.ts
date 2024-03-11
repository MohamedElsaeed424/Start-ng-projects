import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements : object [] = [{type : "server" , name: "Server 1", content :"Hello"}];
  
  onChangeName(){
    this.serverElements[0]  = {type : "server" , name : 'changed' , content : "Hello"} ;
  }

  OnCreatedServer(serverData :{serverName:string , serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  OnBluePrintCreated(bluePrintData :{serverName:string , serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
  onDeleteFisrt(){
    this.serverElements.splice(0,1)

  }


}
