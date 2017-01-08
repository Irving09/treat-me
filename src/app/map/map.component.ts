declare const google;

import { Component } from '@angular/core';

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

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          let map = new this.maps.Map(
            document.getElementById('map'), {
              zoom: 17,
              center: currentLocation
            });

          let marker = new this.maps.Marker({
            position: currentLocation,
            title: 'You are here',
            animation: this.maps.Animation.DROP
          });

          marker.setMap(map);
          map.setCenter(currentLocation);

        });
      }

    }
  }

}
