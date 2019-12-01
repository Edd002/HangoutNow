import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'tab-app-encontros-mapa',
  templateUrl: './tab-encontros-mapa.page.html',
  styleUrls: ['./tab-encontros-mapa.page.scss'],
})
export class TabEncontrosMapaPage implements OnInit {
  mapRef = null;

  constructor(
    private alertController: AlertController,
    private geolocation: Geolocation,
    private loadCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    const loading = await this.loadCtrl.create();
    loading.present();

    const myLatLng = await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
      loading.dismiss();
      this.addMarker(myLatLng.lat, myLatLng.lng);
    });
  }

  private addMarker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: {lat, lng },
      zoom: 8,
      map: this.mapRef,
      title: 'Marker'
    });
  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    }
    //console.log(myLatLng);
  }

  async atualizarMapa() {
    const alert = await this.alertController.create({
      header: 'Entros no Mapa',
      subHeader: '',
      message: 'Mapa atualizado.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
