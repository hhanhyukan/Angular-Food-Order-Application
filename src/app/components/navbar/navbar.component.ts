import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    //
    quantity: string = '0';
    username: string = '';
    constructor(private cartService: CartService, private userService: UserService) {
        this.cartService.getCartObservable().subscribe((newCart) => {
            this.quantity = newCart.items?.length.toString();
        });

        this.username = this.userService.getCurrentUser().name;
    }

    logout() {
        this.userService.logout();
    }
}
