import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment, TreatMeComponent } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TreatMeComponent);

