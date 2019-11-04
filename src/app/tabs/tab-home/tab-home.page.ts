import { Component } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-tab-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss'],
})
export class TabHomePage {

  constructor(private appService: AppService) {
  }

  ionViewWillEnter() {
    this.appService.loginState = true;
  }

  segmentChanged($event){
  }
}