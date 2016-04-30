import { Component } from 'angular2/core';

@Component({
    selector: 'app',
    template: `
    	Treat me!
    `
})
export class App {
    constructor() {
        console.log('Treatme root component loaded');
    }
}