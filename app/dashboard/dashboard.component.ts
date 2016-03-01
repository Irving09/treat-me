import { Component } from 'angular2/core';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.component.html'
})
export class Dashboard {
    constructor() {
        console.log('Dashboard component loaded');
    }
}