import { Component } from '@angular/core';
import { MdButton } from '@angular2-material/button';

import { HeaderComponent } from './header';
import { DashboardComponent } from './dashboard';

@Component({
  moduleId: module.id,
  selector: 'treat-me',
  templateUrl: './root.component.html',
  styles: [],
  directives: [
    MdButton,
    HeaderComponent,
    DashboardComponent
  ]
})
export class TreatMeComponent {}