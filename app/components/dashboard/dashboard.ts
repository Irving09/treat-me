import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'dashboard'
})
@View({
    templateUrl: './app/components/dashboard/dashboard.html'
})
export class Dashboard {
    constructor() {
        console.log('Dashboard component loaded');
    }

    birthdayTreat() {
        console.log('initialize birthday page!');
    }

    veteranTreat() {
        console.log('initialize veteran page!');
    }

    halloweenTreat() {
        console.log('initialize halloween page!');
    }
}