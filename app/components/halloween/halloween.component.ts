import { Component } from 'angular2/core';

@Component({
    selector: 'halloween',
    templateUrl: './app/components/halloween/halloween.component.html'
})
export class Halloween {
    constructor() {
        console.log('Halloween component loaded');
    }
}