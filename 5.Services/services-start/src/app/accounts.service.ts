import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
    constructor(private logService : LoggingService){};
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>() ;

    addAccount(name : string , status : string){
        this.accounts.push({name , status});
        this.logService.logToConsole(status) ;
    }

    updateStatus (id:number ,newStatus : string){
        this.accounts[id].status = newStatus;
        this.logService.logToConsole(newStatus) ;
    }



    
}