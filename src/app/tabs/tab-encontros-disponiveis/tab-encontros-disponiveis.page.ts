import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalEncontrosDisponiveisComponent } from '../modal-encontros-disponiveis/modal-encontros-disponiveis.component';

@Component({
  selector: 'app-tab-encontros-disponiveis',
  templateUrl: './tab-encontros-disponiveis.page.html',
  styleUrls: ['./tab-encontros-disponiveis.page.scss']
})
export class TabEncontrosDisponiveisPage implements OnInit {

  public items;

  listScreen = true;
  addItemScreen = false;
  taskName;
  taskDetails;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.items = [
      { title: 'Encontro Disponível 1', description: 'Primerio Encontro Disponível Utilizando o HangoutNow' },
      { title: 'Encontro Disponível 2', description: 'Segundo Encontro Disponível Utilizando o HangoutNow' },
      { title: 'Encontro Disponível 3', description: 'Terceiro Encontro Disponível Utilizando o HangoutNow' }
    ];
  }

  async openModal(item) {
    const modal = await this.modalController.create({
      component: ModalEncontrosDisponiveisComponent,
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