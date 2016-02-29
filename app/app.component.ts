import { Component } from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        treatme root component loaded
        <input #inno>
        
        <button (click)="onClick(inno.value)">Click me!</button>
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