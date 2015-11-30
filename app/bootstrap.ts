import {
    bootstrap,
    provide
} from 'angular2/angular2';

import {
    APP_BASE_HREF,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    ROUTER_PRIMARY_COMPONENT,
    HashLocationStrategy,
    LocationStrategy,
    Router,
    RouteConfig,
    RouteParams,
} from "angular2/router";

import { App } from './components/app';

bootstrap(App, [
    ROUTER_PROVIDERS,
    provide(ROUTER_PRIMARY_COMPONENT, { useValue: App }),
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(APP_BASE_HREF, { useValue: '/' })
]);