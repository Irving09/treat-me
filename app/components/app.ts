import { Component, View, ViewEncapsulation } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { Dashboard } from './dashboard/dashboard';
import { About } from './about/about';
import { Feedback } from './feedback/feedback';

@Component({
    selector: 'app'
})
@View({
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app/components/app.html',
    styleUrls: ['./app/components/app.css'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', redirectTo: '/home' },
    { path: '/home', as: 'Home', component: Dashboard },
    { path: '/about', as: 'About', component: About },
    { path: '/feedback', as: 'Feedback', component: Feedback }
])
export class App {
    constructor() {
        console.log('App component loaded');
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