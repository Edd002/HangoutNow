import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EncontrosModalComponent } from '../encontros-modal/encontros-modal.component';

@Component({
  selector: 'app-meus-encontros',
  templateUrl: './meus-encontros.page.html',
  styleUrls: ['./meus-encontros.page.scss'],
})
export class MeusEncontrosPage implements OnInit {

  public items;

  listScreen = true;
  addItemScreen = false;
  taskName;
  taskDetails;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.items = [
      { title: 'Encontro 1', description: 'Encontro Criado por Mim, Local no Mapa e Grupo de Conversa do Encontro' },
      { title: 'Encontro 2', description: 'Encontro Criado por Mim, Local no Mapa e Grupo de Conversa do Encontro' },
      { title: 'Encontro 3', description: 'Encontro Criado por Mim, Local no Mapa e Grupo de Conversa do Encontro' }
    ];
  }

  addItem() {
    this.listScreen = false;
    this.addItemScreen = true;
  }

  saveNewItem() {
    this.items.push({ title: this.taskName, description: this.taskDetails });
    //return to normal screens
    this.listScreen = true;
    this.addItemScreen = false;
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

  saveItem(item) {
    this.items.push(item);
  }

  viewItem(item) {
    this.openModal(item);
  }
}