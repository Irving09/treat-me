declare const google;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  maps: any;

  constructor() { }

  ngAfterViewInit() {
    if (google === undefined) {
      throw new Error('google maps not initialized');
    } else {
      this.maps = google.maps;

      let uluru = {
        lat: 47.6062, lng: -122.3321
      };

      let map = new this.maps.Map(
        document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });

      let marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
  }

}
