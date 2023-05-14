import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
    @Input()
    visible = true; //false
    @Input()
    mess = 'ERROR 404: Arent ya lost?';
    @Input()
    resetLinkText = 'Refresh';
    @Input()
    resetLinkRoute = '/home';
}
