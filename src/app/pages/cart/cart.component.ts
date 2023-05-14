import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faClock, faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { IFoodCart } from '../../shared/interfaces/IFoodCart';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    starIcon = faStar;
    timeIcon = faClock;
    removeIcon = faXmark;
    increaseIcon = faPlus;
    descreaseIcon = faMinus;
    totalCart!: number;
    cart!: IFoodCart;

    constructor(private cartService: CartService, private router: Router) {
        this.cartService.getCartObservable().subscribe((cart) => {
            this.cart = cart;
            this.totalCart = this.cart.totalPrice;
        });
    }

    ngOnInit(): void {}

    removeItem(foodId: string) {
        console.log('test');
        this.cartService.removeItem(foodId);
    }

    changeQuantity(foodId: string, quantity: number) {
        this.cartService.changeQuantity(foodId, quantity);
    }

    submitOrder() {
        window.open('/order', '_blank');
    }
}
