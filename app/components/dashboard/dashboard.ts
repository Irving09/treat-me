import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';

import { BirthdayTreat } from '../birthday-treat/birthday-treat';
import { HalloweenTreat } from '../halloween-treat/halloween-treat';
import { VeteranTreat } from '../veteran-treat/veteran-treat';

enum Treat {
    BIRTHDAY,
    HALLOWEEN,
    VETERAN
};

@Component({
    selector: 'dashboard'
})
@View({
    templateUrl: './app/components/dashboard/dashboard.html',
    directives: [
        BirthdayTreat,
        HalloweenTreat,
        VeteranTreat,
        CORE_DIRECTIVES
    ]
})
export class Dashboard {

    treat: Treat;

    constructor() {
        console.log('Dashboard component loaded');
        this.treat = Treat.BIRTHDAY;
    }

    birthdayTreat() {
        this.treat = Treat.BIRTHDAY;
        console.log('render the birthday treat component');
    }

    halloweenTreat() {
        this.treat = Treat.HALLOWEEN;
        console.log('initialize halloween page!');
    }

    veteranTreat() {
        this.treat = Treat.VETERAN;
        console.log('initialize veteran page!');
    }
}