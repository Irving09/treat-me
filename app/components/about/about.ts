import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'about'
})
@View({
    templateUrl: './app/components/about/about.html'
})
export class About {
    constructor() {
        console.log('About component loaded');
    }
}