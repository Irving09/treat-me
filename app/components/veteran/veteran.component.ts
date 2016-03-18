import { Component } from 'angular2/core';

@Component({
    selector: 'veteran',
    templateUrl: './app/components/veteran/veteran.component.html'
})
export class Veteran {
    constructor() {
        console.log('Veteran component loaded');
    }
}