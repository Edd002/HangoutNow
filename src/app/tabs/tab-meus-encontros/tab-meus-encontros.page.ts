import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMeusEncontrosComponent } from '../modal-meus-encontros/modal-meus-encontros.component';

@Component({
  selector: 'app-tab-meus-encontros',
  templateUrl: './tab-meus-encontros.page.html',
  styleUrls: ['./tab-meus-encontros.page.scss'],
})
export class TabMeusEncontrosPage implements OnInit {

  public items;

  listScreen = true;
  addItemScreen = false;
  taskName;
  taskTime;
  taskDay;
  taskDetails;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.items = [
      { title: 'Meu Encontro 1', description: 'Meu Primeiro Encontro Utilizando no HangoutNow' },
      { title: 'Meu Encontro 2', description: 'Meu Segundo Encontro Utilizando no HangoutNow' },
      { title: 'Meu Encontro 3', description: 'Meu Terceiro Encontro Utilizando no HangoutNow' }
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

  cancelNewItem() {
    this.listScreen = true;
    this.addItemScreen = false;
  }

  async openModal(item) {
    const modal = await this.modalController.create({
      component: ModalMeusEncontrosComponent,
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