import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Inject, Injectable } from "@angular/core";



interface Server {
    id : number ,
    name :string ,
    status : string
}

@Injectable()
export class ServiceResolver implements Resolve<Server>{

    constructor(private serverService : ServersService ){}

    resolve(route: ActivatedRouteSnapshot, state:
         RouterStateSnapshot): Server |
          Observable<Server> |
           Promise<Server> {
        return this.serverService.getServer(+route.params['id']) ;
    }
}