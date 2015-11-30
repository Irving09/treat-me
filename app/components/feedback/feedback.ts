import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'feedback'
})
@View({
    templateUrl: './app/components/feedback/feedback.html'
})
export class Feedback {
    constructor() {
        console.log('Feedback component loaded');
    }
}