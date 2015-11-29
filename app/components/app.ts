import { Component, View } from 'angular2/angular2';
import { Dashboard } from './dashboard/dashboard';

@Component({
    selector: 'app'
})
@View({
    templateUrl: './app/components/app.html',
    directives: [Dashboard]
})
export class App {
    constructor() {
        console.log('App component loaded');
    }
}