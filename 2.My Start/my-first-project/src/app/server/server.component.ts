import { Component } from "@angular/core";
@Component({
   selector : "app-server",
   templateUrl : "./server.component.html" ,
   styleUrl :  "./server.component.css"
})
export class ServerComponent {
   private serverID : number  = 1;
   serverStatus : string = "Offline" ;

   constructor(){
      this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline"  ;
   }

   getColor(){
      if (this.serverStatus === "Offline" ) {
         return "red" ;
      }
      return "green" ;
   }

   public getServerID () :  number{
      return this.serverID ;
   }
}   