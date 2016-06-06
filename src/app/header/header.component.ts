import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'tm-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [
    MdToolbar,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdButton
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
