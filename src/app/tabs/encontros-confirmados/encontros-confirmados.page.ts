import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EncontrosModalComponent } from '../encontros-modal/encontros-modal.component';

@Component({
  selector: 'app-encontros-confirmados',
  templateUrl: './encontros-confirmados.page.html',
  styleUrls: ['./encontros-confirmados.page.scss'],
})
export class EncontrosConfirmadosPage implements OnInit {

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
      component: EncontrosModalComponent,
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