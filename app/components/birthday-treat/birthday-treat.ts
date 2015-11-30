import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'birthday-treat'
})
@View({
    templateUrl: './app/components/birthday-treat/birthday-treat.html'
})
export class BirthdayTreat {
    constructor() {
        console.log('BirthdayTreat component loaded');
    }
}