import { Injectable } from "@angular/core";
import { inActiveUsersService } from "./inactiveUsers.service";



@Injectable()
export class ActiveUsersService {
    
    activeUsers = ['Mohamed' ,'Ibrahim']
    count =0 ;

    moveToInactiveUsers(id: number ,inactiveUsers : string []){
        inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);

        
    }
}