import { Component } from 'angular2/core';

@Component({
    selector: 'birthday',
    templateUrl: './app/birthday/birthday.component.html'
})
export class Birthday {
    title: string;
    constructor() {
        this.title = 'Birthday Treats!';
        console.log('Birthday component loaded');
    }
}