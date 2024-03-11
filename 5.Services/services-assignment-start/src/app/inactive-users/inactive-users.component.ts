import { Component, EventEmitter, Input, Output } from '@angular/core';
import { inActiveUsersService } from '../services/inactiveUsers.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent  {
  @Input() users: string[];

  constructor(private inactiveUService : inActiveUsersService){}

  onSetToActive(id: number) {
    this.inactiveUService.moveToActiveUsers(id);
  }
}
