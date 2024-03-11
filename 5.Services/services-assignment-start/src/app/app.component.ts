import { Component, OnInit } from '@angular/core';
import { ActiveUsersService } from './services/activeUsers.service';
import { inActiveUsersService } from './services/inactiveUsers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  activeUsers : string [] = [] ;
  inactiveUsers :string [] = [] ;

  constructor(private activeUServise : ActiveUsersService , 
              private inactiveUService : inActiveUsersService){}

  ngOnInit(): void {
    this.activeUsers = this.activeUServise.activeUsers ;
    this.inactiveUsers = this.inactiveUService.inactiveUsers ;
  }
  
    
}
  