import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalEncontrosConfirmadosComponent } from '../modal-encontros-confirmados/modal-encontros-confirmados.component';

@Component({
  selector: 'app-tab-encontros-confirmados',
  templateUrl: './tab-encontros-confirmados.page.html',
  styleUrls: ['./tab-encontros-confirmados.page.scss'],
})
export class TabEncontrosConfirmadosPage implements OnInit {

  public items;

  listScreen = true;
  addItemScreen = false;
  taskName;
  taskDetails;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.items = [
      { title: 'Encontro Confirmado 1', description: 'Pessoas que Confirmaram o Encontro, Local no Mapa e Grupo de Conversa do Encontro' },
      { title: 'Encontro Confirmado 2', description: 'Pessoas que Confirmaram o Encontro, Local no Mapa e Grupo de Conversa do Encontro' },
      { title: 'Encontro Confirmado 3', description: 'Pessoas que Confirmaram o Encontro, Local no Mapa e Grupo de Conversa do Encontro' }
    ];
  }

  async openModal(item) {
    const modal = await this.modalController.create({
      component: ModalEncontrosConfirmadosComponent,
      componentProps: {
        data: item.description
      }
    })
    await modal.present();
  }

  viewItem(item) {
    this.openModal(item);
  }
}