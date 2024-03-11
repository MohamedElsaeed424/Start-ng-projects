import { Injectable } from "@angular/core";
import { ActiveUsersService } from "./activeUsers.service";

@Injectable()
export class inActiveUsersService {    
    inactiveUsers = ['Chris', 'Manu'];

    count = 0 ;

    constructor(private activeUService :ActiveUsersService){};

    moveToActiveUsers(id: number) {
        this.activeUService.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.activeUService.count ++ ;
        console.log('From Inactive to Active:'+this.activeUService.count);
    }
}