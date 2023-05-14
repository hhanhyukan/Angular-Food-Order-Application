import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpEventType
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private loadingService: LoadingService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.loadingService.setLoading(true);

        return next.handle(request).pipe(
            finalize(() => {
                this.loadingService.setLoading(false);
            })
        );
    }
}
