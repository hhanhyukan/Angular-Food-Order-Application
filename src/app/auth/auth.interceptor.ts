import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const user = this.userService.getCurrentUser();
        if (user.access_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.access_token}`
                }
            });
        }
        return next.handle(request);
    }
}
