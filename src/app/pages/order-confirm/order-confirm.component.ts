import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';
import { IFoodOrder } from '../../shared/interfaces/IFoodOrder';
import { OrderService } from '../../services/order.service';
import { IUserPayLoad } from 'src/app/shared/interfaces/IUserPayLoad';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-order-confirm',
    templateUrl: './order-confirm.component.html',
    styleUrls: ['./order-confirm.component.scss']
})
export class OrderConfirmComponent implements OnInit {
    order!: IFoodOrder[];
    userDetail!: IUserPayLoad;
    cols!: any[];

    constructor(private orderService: OrderService, private userService: UserService) {
        this.userDetail = this.userService.getCurrentUser();
    }

    ngOnInit() {
        this.orderService.history(this.userDetail.id).subscribe((value) => {
            this.order = value;
        });
    }

    clear(table: Table) {
        table.clear();
    }
    getSeverity(status: string) {
        switch (status) {
            case 'Confirmed':
                return 'success';
            case 'Pending':
                return 'warning';
            case 'Rejected':
                return 'danger';
            default:
                return '';
        }
    }
}
