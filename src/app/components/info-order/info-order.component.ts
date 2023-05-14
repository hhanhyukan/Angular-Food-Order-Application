import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { IFoodOrder } from '../../shared/interfaces/IFoodOrder';
import { loadStripe } from '@stripe/stripe-js';
import { CartService } from '../../services/cart.service';
import { IFoodItem } from '../../shared/interfaces/IFoodCart';
import { IFoodCart } from '../../shared/interfaces/IFoodCart';
import { IUserPayLoad } from 'src/app/shared/interfaces/IUserPayLoad';
import { UserService } from 'src/app/services/user.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
    selector: 'app-info-order',
    templateUrl: './info-order.component.html',
    styleUrls: ['./info-order.component.scss']
})
export class InfoOrderComponent {
    private publicKey: string =
        'pk_test_51N0ECVB9r4bjv1XwpbicompqX3X74fCWU5SdARDEP55ZFvxwuuxGVSu0timy3KFy2sczTPrygB2J7vQg0StIDJse00Lhf9L6EF';
    value: string = '';
    order!: IFoodOrder;
    orderTime = new Date();
    totalCart!: number;
    cart!: IFoodCart;
    userDetail!: IUserPayLoad;
    latitude!: number;
    longitude!: number;

    constructor(
        private cartService: CartService,
        private orderService: OrderService,
        private userService: UserService,
        private locationService: LocationService
    ) {
        this.cartService.getCartObservable().subscribe((cart) => {
            this.cart = cart;
            this.totalCart = this.cart.totalPrice;
        });

        this.userDetail = this.userService.getCurrentUser();
        this.locationService.getCurrentLocation().subscribe((value) => {
            this.latitude = value.lat;
            this.longitude = value.lng;
        });
    }

    checkout() {
        const foodItem: IFoodItem[] = this.cartService.getCurrentCart().items;
        this.orderService
            .createOrder({
                items: this.cart.items,
                totalPrice: this.cart.totalPrice,
                name: this.userDetail.name,
                address: this.userDetail.address,
                addressLatLng: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                user: this.userDetail.id
            })
            .subscribe((response) => {
                this.orderService.payment(foodItem).subscribe(async (res: any) => {
                    let stripe = await loadStripe(this.publicKey);
                    this.cartService.resetCart();
                    stripe?.redirectToCheckout({
                        sessionId: res.id
                    });
                });
            });
    }
}
