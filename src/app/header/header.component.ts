import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';

import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'tm-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [
  	MdToolbar,
	MdIcon
  ]
})
export class HeaderComponent implements OnInit {

  constructor(mdIconRegistry: MdIconRegistry) {
	  mdIconRegistry
		  .addSvgIcon('thumb-up', '/app/assets/thumbup-icon.svg')
		  .addSvgIcon('search', '/app/assets/search-icon.svg')
		  .addSvgIcon('core', '/app/assets/core-icon-set.svg');
  }

  ngOnInit() {
  }

}
