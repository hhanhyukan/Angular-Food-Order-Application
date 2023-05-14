import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFoodCart, IFoodItem } from '../shared/interfaces/IFoodCart';
import { Cart } from '../shared/models/Cart';
import { ToastService } from './toast.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cart: IFoodCart = this.getCartFromLocalStorage();
    private cartSubject: BehaviorSubject<IFoodCart> = new BehaviorSubject(this.cart);

    constructor(private toastService: ToastService) {}

    private getCartFromLocalStorage(): IFoodCart {
        const cartJson = localStorage.getItem('Cart');
        return cartJson ? JSON.parse(cartJson) : new Cart();
    }

    getCurrentCart(): IFoodCart {
        return this.cartSubject.value;
    }

    addToCart(item: IFoodItem): void {
        let cartItem = this.cart?.items.find((object) => object.food.id === item.food.id);
        if (cartItem) return this.toastService.getToast(this.toastService.showAddToCart('failed'));
        this.cart.items.push(item);
        this.cart.totalPrice += item.price;
        this.setCartToLocalStorage();
        this.toastService.getToast(this.toastService.showAddToCart('success'));
    }

    removeItem(foodId: string): void {
        this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
        this.setCartToLocalStorage();
        this.toastService.getToast(this.toastService.showRemoveItemFromCart('success'));
    }

    changeQuantity(foodId: string, quantity: number) {
        let cartItem = this.cart.items.find((item) => item.food.id === foodId);
        if (!cartItem) return;
        cartItem.quantity = quantity;
        cartItem.price = quantity * cartItem.food.price;
        this.setCartToLocalStorage();
    }

    resetCart() {
        this.cart = new Cart();
        this.setCartToLocalStorage();
    }

    getCartObservable(): Observable<IFoodCart> {
        return this.cartSubject.asObservable();
    }

    private setCartToLocalStorage(): void {
        this.cart.totalPrice = this.cart.items.reduce(
            (prevSum, curItem) => prevSum + curItem.price,
            0
        );
        const cartJson = JSON.stringify(this.cart);
        localStorage.setItem('Cart', cartJson);
        this.cartSubject.next(this.cart);
    }
}
