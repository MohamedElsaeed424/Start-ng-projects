import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActiveUsersService } from '../services/activeUsers.service';
import { inActiveUsersService } from '../services/inactiveUsers.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private activeUServise : ActiveUsersService ,
    private inactiveUService : inActiveUsersService){}

  onSetToInactive(id: number) {
    this.activeUServise.moveToInactiveUsers(
      id ,
      this.inactiveUService.inactiveUsers ,

    );
    this.inactiveUService.count ++ ;
    console.log('From Active to Inactive:'+this.inactiveUService.count);
  }
}
