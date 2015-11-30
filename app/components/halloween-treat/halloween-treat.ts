import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'halloween-treat'
})
@View({
    templateUrl: './app/components/halloween-treat/halloween-treat.html'
})
export class HalloweenTreat {
    constructor() {
        console.log('HalloweenTreat component loaded');
    }
}