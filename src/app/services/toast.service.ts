import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    toastSubject = new Subject<Message>();

    constructor() {}

    getToast(message: Message) {
        this.toastSubject.next(message);
    }

    showLogin(option: 'success' | 'failed') {
        let message: Message = {
            life: 3000
        };
        if (option === 'success') {
            message['severity'] = 'success';
            message['summary'] = 'Login Successful';
        } else {
            message['severity'] = 'error';
            message['summary'] = 'Login Failed';
        }
        return message;
    }

    showRegister(option: 'success' | 'failed') {
        let message: Message = {
            life: 3000
        };
        if (option === 'success') {
            message['severity'] = 'success';
            message['summary'] = 'Register Successful';
        } else {
            message['severity'] = 'error';
            message['summary'] = 'Register error';
        }
        return message;
    }

    showAddToCart(option: 'success' | 'failed') {
        let message: Message = {
            life: 2000
        };
        if (option === 'success') {
            message['severity'] = 'info';
            message['summary'] = 'Added to cart';
        } else {
            message['severity'] = 'warn';
            message['summary'] = 'Already added';
        }
        return message;
    }

    showRemoveItemFromCart(option: 'success' | 'failed') {
        let message: Message = {
            life: 2000
        };
        if (option === 'success') {
            message['severity'] = 'warn';
            message['summary'] = 'Removed item';
        } else {
            message['severity'] = 'info';
            message['summary'] = 'Not found item';
        }
        return message;
    }

    showOrder(option: 'success' | 'failed') {
        let message: Message = {
            life: 2000
        };
        if (option === 'success') {
            message['severity'] = 'success';
            message['summary'] = 'Order Confirmed';
        } else {
            message['severity'] = 'error';
            message['summary'] = 'Order Rejected';
        }
        return message;
    }
}
