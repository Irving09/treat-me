import { Component } from 'angular2/core';
import { BirthdayModel } from './birthday.model';

@Component({
    selector: 'birthday',
    templateUrl: './app/birthday/birthday.component.html'
})
export class Birthday {
    model: BirthdayModel;
    constructor() {
        this.model = new BirthdayModel();
    }
}