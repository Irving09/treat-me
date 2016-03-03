import { Component } from 'angular2/core';
import { Dashboard } from './dashboard/dashboard.component';

@Component({
    selector: 'app',
    template: `
    	<div class="container">
    		<dashboard></dashboard>
    	</div>
    `,
    directives: [ Dashboard ]
})
export class App {
    constructor() {
        console.log('Treatme root component loaded');
    }
}