import { Component } from 'angular2/core';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.component.html'
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