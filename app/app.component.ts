import { Component } from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        Treatme root component loaded
        <input #test>
        <button (click)="onClick(test.value)">Submit</button>
    `
})
export class App {
    constructor() {
        console.log('Treatme root component loaded');
    }
    onClick(value): void {
        alert(value);
    };
}