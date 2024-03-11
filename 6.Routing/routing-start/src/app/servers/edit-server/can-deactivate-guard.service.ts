import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/Observable";

export interface CanComponentDeactivate {
    canDeactivate() :  boolean | Observable<boolean> |Promise<boolean> 
}


export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
         currentRoute: ActivatedRouteSnapshot,
         currentState: RouterStateSnapshot, 
         nextState: RouterStateSnapshot):
          boolean | Observable<boolean >|Promise<boolean> {
            return component.canDeactivate() ;
    }


}