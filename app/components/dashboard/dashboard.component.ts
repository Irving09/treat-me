import { Component } from 'angular2/core';
import { Birthday } from '../birthday/birthday.component';
import { Halloween } from '../halloween/halloween.component';
import { Veteran } from '../Veteran/Veteran.component';

@Component({
    selector: 'dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    directives: [ Birthday, Halloween, Veteran ]
})
export class Dashboard {
    selected: Treat;

    constructor() {
        console.log('Dashboard component loaded');
    }

    ngOnInit() {
    	// TODO give an define type to Materialize
        this.selected = '#treat-info';
        Materialize.showStaggeredList('#treat-info');
        this.selected = Treat.Birthday;
    }

    // Materialize.showStaggeredList('#treat-info')
    showBirthdayInfo() {
        console.log('birthdayinfo clicked!');
        this.selected = Treat.Birthday;
    }

    showHalloweenInfo() {
        console.log('halloweenInfo clicked!');
        this.selected = Treat.Halloween;
    }

    showVeteranInfo() {
        console.log('veteranInfo clicked!');
        this.selected = Treat.Veteran;
    }
}

export enum Treat {
    Birthday,
    Halloween,
    Veteran
}