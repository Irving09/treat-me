import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'veteran-treat'
})
@View({
    templateUrl: './app/components/veteran-treat/veteran-treat.html'
})
export class VeteranTreat {
    constructor() {
        console.log('VeteranTreat component loaded');
    }
}