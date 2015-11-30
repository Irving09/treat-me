import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'dashboard'
})
@View({
    templateUrl: './app/components/dashboard/dashboard.html',
    directives: [ROUTER_DIRECTIVES]
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
    
    feedback() {
        console.log('initialize feedback page!');
    }

    about() {
        console.log('initialize about page!');
    }
    
    dashboard() {
        console.log('initialize dashboard page!');
    }
}