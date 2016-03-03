import { Component } from 'angular2/core';
import { Birthday } from '../birthday/birthday.component';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.component.html',
    directives: [ Birthday ]
})
export class Dashboard {

    constructor() {
        console.log('Dashboard component loaded');
    }
}