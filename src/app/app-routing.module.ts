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
  { path: 'home', loadChildren: './tabs/home/home.module#HomePageModule'},
  { path: 'meus-encontros', loadChildren: './tabs/meus-encontros/meus-encontros.module#MeusEncontrosPageModule' },
  { path: 'encontros-disponiveis', loadChildren: './tabs/encontros-disponiveis/encontros-disponiveis.module#EncontrosDisponiveisPageModule' },
  { path: 'encontros-confirmados', loadChildren: './tabs/encontros-confirmados/encontros-confirmados.module#EncontrosConfirmadosPageModule' },
  { path: 'encontros-mapa', loadChildren: './tabs/encontros-mapa/encontros-mapa.module#EncontrosMapaPageModule' },
  { path: 'conversar-amigos', loadChildren: './tabs/conversar-amigos/conversar-amigos.module#ConversarAmigosPageModule' },
  { path: 'perfil', loadChildren: './tabs/perfil/perfil.module#PerfilPageModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
