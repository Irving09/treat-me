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
        this.selected = '#birthday-treat';
		Materialize.showStaggeredList(this.selected);
    }
}