import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component ({
  selector: 'app-encontros-modal',
  templateUrl: './encontros-modal.component.html',
  styleUrls: ['./encontros-modal.component.scss'],
})
export class EncontrosModalComponent implements OnInit {

  @Input() data:any;

  constructor(private modalController: ModalController) { }

  async close(){
    await this.modalController.dismiss();
  }

  ngOnInit() {}

}
