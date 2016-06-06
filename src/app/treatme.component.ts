import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { DashboardComponent } from './+dashboard';
import { HeaderComponent } from './header';

@Component({
  moduleId: module.id,
  selector: 'treatme-app',
  templateUrl: 'treatme.component.html',
  styleUrls: ['treatme.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent}
])
export class TreatmeAppComponent {
  title = 'treatme works!';
}
