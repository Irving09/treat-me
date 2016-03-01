import { Component } from 'angular2/core';
import { Birthday } from '../birthday/birthday.component';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.component.html',
    directives: [ Birthday ]
})
export class Dashboard {
    staggeredTest: Array<string>;

    constructor() {
        this.staggeredTest = [
            'Birthday-component',
            'Halloween-component',
            'Veteran-component'
        ];
        console.log('Dashboard component loaded');
    }
}