import { Component } from '@angular/core';

import { DashboardComponent } from './dashboard';

@Component({
  moduleId: module.id,
  selector: 'treat-me',
  templateUrl: './root.component.html',
  styles: [],
  directives: [
    DashboardComponent
  ]
})
export class TreatMeComponent {}