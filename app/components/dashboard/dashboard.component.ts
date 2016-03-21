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
    selected: string;

    constructor() {
        console.log('Dashboard component loaded');
    }

    ngOnInit() {
    	// TODO give an define type to Materialize
        this.selected = 'birthday';
        Materialize.showStaggeredList('#treat-info');
    }

    // Materialize.showStaggeredList('#treat-info')
    showBirthdayInfo() {
        this.renderSlider('birthday');
    }

    showHalloweenInfo() {
        this.renderSlider('halloween');
    }

    showVeteranInfo() {
        this.renderSlider('veteran');
    }

    renderSlider(occassion): void {
        if (this.selected !== occassion) {
            this.selected = occassion;
            Materialize.showStaggeredList('#treat-info');
        }
    }
}