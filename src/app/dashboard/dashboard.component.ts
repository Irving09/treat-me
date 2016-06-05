import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdCard } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';


@Component({
  moduleId: module.id,
  selector: 'tm-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [
  	MdCard,
  	MdButton,
  	MdToolbar,
	  MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES
  ]
})
export class DashboardComponent implements OnInit {

  constructor(mdIconRegistry: MdIconRegistry) {
    mdIconRegistry
      .addSvgIcon('thumb-up', '/app/assets/thumbup-icon.svg')
      .addSvgIcon('search', '/app/assets/search-icon.svg')
      .addSvgIcon('core', '/app/assets/core-icon-set.svg');
  }

  ngOnInit() {
  }

}