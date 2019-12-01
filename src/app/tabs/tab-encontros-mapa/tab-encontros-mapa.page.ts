import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'tab-app-encontros-mapa',
  templateUrl: './tab-encontros-mapa.page.html',
  styleUrls: ['./tab-encontros-mapa.page.scss'],
})
export class TabEncontrosMapaPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
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
