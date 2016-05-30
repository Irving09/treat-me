import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'treat-me',
  template: `
  	<h1>{{title}}</h1>
  `,
  styles: []
})
export class TreatMeComponent {
  title = 'treat-me works!';
}
