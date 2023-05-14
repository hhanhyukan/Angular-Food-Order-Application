import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IFoodOrder } from '../shared/interfaces/IFoodOrder';
import { IFoodItem } from '../shared/interfaces/IFoodCart';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient) {}

    createOrder(data: IFoodOrder) {
        return this.http.post(environment.ORDER_CREATE_URL, data);
    }

    payment(data: IFoodItem[]) {
        return this.http.post(environment.PAYMENT_URL, data);
    }

    history(userId: string) {
        return this.http.get<IFoodOrder[]>(`${environment.ORDER_HISTORY_URL}${userId}`);
    }
}
