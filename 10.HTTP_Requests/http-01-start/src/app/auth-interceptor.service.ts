import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { take } from "rxjs-compat/operator/take";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modiefiedReq = req.clone(
            {headers : req.headers.append('Authee' , 'mohamed elsaeed')}
        ) ;
        return next.handle(modiefiedReq)
    }
}