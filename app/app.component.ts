import { Component } from 'angular2/core';
import { MdButton } from '@angular2-material/button';

@Component({
    selector: 'app',
    template: `
    	Treat me!
    	<button>Button</button>
    	<button md-button>Material Button</button>
    `,
    directives: [MdButton]
})
export class App {
    constructor() {
        console.log('Treatme root component loaded');
    }
}