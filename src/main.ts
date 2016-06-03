import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { enableProdMode } from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';

import { MdIconRegistry } from '@angular2-material/icon/icon-registry';

import { environment, TreatMeComponent } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TreatMeComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	MdIconRegistry
]);

