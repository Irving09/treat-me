import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import { TreatmeAppComponent, environment } from './app/';

import { MdIconRegistry } from '@angular2-material/icon/icon-registry';

if (environment.production) {
  enableProdMode();
}

bootstrap(TreatmeAppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	MdIconRegistry
]);

