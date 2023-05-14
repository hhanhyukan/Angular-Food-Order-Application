import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Injectable({
    providedIn: 'root'
})
export class OrderGuard implements CanActivate {
    constructor(private cartService: CartService, private router: Router) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.cartService.getCurrentCart().items.length > 0) return true;
        this.router.navigate(['/404']);
        return false;
    }
}
