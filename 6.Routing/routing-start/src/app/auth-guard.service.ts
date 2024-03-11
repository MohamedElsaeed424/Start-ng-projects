import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { root } from "rxjs/internal-compatibility";

@Injectable()
export class AuthGuard implements CanActivate , CanActivateChild {

    constructor(private autService : AuthService  ,private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        boolean | Observable<boolean> |Promise<boolean> {
            
       return this.autService.isAuthenticated().then(
            (autheticated : boolean)=>{
                if (autheticated){
                    return true ;
                }else{
                    this.router.navigate(['/']);
                }
            }
        )
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
         boolean | Observable<boolean> |Promise<boolean> {
        return this.canActivate(root , state);
    }
}