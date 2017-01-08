declare const google;

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  maps: any;

  constructor() {
  }

  ngAfterViewInit() {
    if (google === undefined) {
      throw new Error('google maps not initialized');
    } else {
      this.maps = google.maps;

      let uluru = {
        lat: 47.6062, lng: -122.3321
      };

      console.log('document.getElementById(\'map\'):', document.getElementById('map'));

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
