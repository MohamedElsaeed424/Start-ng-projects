import { Component, ElementRef, EventEmitter, Output, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter <{serverName:string , serverContent:string}>();
  @Output() bluePrintCreated = new EventEmitter <{serverName:string , serverContent:string} >();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput' ,{static : true})  serverContentInput :ElementRef;

  // onAddServer() {
  //   this.serverCreated.emit({serverName :  this.newServerName ,serverContent : this.newServerContent});
  // }
  // onAddBlueprint() {
  //   this.bluePrintCreated.emit({serverName :  this.newServerName ,serverContent : this.newServerContent});
  // }

  // using local refrences 
  onAddServer(serverName : HTMLInputElement ) {
    this.serverCreated.emit(
      {
        serverName :  serverName.value ,
        serverContent : this.serverContentInput.nativeElement.value
      }
    );
  }
  onAddBlueprint(serverName : HTMLInputElement) {
    this.bluePrintCreated.emit(    
      {
        serverName :  serverName.value ,
        serverContent : this.serverContentInput.nativeElement.value
      }
    );
  }
}
