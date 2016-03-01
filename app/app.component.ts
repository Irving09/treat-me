import { Component } from 'angular2/core';
import { Dashboard } from './dashboard/dashboard.component';

@Component({
    selector: 'app',
    template: `
        <dashboard></dashboard>
    `,
    directives: [ Dashboard ]
})
export class App {
    constructor() {
        console.log('Treatme root component loaded');
    }
}