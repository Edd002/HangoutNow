import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule'},
  { path: 'tab-home', loadChildren: './tabs/tab-home/tab-home.module#TabHomePageModule'},
  { path: 'tab-meus-encontros', loadChildren: './tabs/tab-meus-encontros/tab-meus-encontros.module#TabMeusEncontrosPageModule' },
  { path: 'tab-encontros-disponiveis', loadChildren: './tabs/tab-encontros-disponiveis/tab-encontros-disponiveis.module#TabEncontrosDisponiveisPageModule' },
  { path: 'tab-encontros-confirmados', loadChildren: './tabs/tab-encontros-confirmados/tab-encontros-confirmados.module#TabEncontrosConfirmadosPageModule' },
  { path: 'tab-encontros-mapa', loadChildren: './tabs/tab-encontros-mapa/tab-encontros-mapa.module#TabEncontrosMapaPageModule' },
  { path: 'tab-chat-rooms', loadChildren: './tabs/tab-chat-rooms/tab-chat-rooms.module#TabChatRoomsPageModule' },
  { path: 'tab-perfil', loadChildren: './tabs/tab-perfil/tab-perfil.module#TabPerfilPageModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
