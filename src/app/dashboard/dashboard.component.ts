import { Component, OnInit } from '@angular/core';
import { MdCard } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'tm-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [ MdCard, MdButton ]
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}