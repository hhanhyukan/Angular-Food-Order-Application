import { Component } from '@angular/core';
import { faPencil, faWrench } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from '../../services/order.service';
import { UserService } from 'src/app/services/user.service';
import { IUserPayLoad } from 'src/app/shared/interfaces/IUserPayLoad';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    faEdit = faPencil;
    faRef = faWrench;
    userDetail!: IUserPayLoad;

    constructor(private orderService: OrderService, private userSerivce: UserService) {
        this.userDetail = this.userSerivce.getCurrentUser();
    }
}
