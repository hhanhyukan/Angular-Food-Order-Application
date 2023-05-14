import { Component, OnInit } from '@angular/core';
import { ToastService } from './services/toast.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private toastService: ToastService, private messageService: MessageService) {}

    ngOnInit() {
        this.toastService.toastSubject.subscribe((message) => {
            this.messageService.add(message);
        });
    }
}
