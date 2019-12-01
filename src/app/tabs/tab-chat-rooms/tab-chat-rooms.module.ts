import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabChatRoomsPage } from './tab-chat-rooms.page';

const routes: Routes = [
  {
    path: '',
    component: TabChatRoomsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabChatRoomsPage]
})

export class TabChatRoomsPageModule {}