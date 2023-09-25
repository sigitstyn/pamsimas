import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenarikPage } from './penarik.page';

const routes: Routes = [
  {
    path: '',
    component: PenarikPage
  },
  {
    path: 'scanqr',
    loadChildren: () => import('./scanqr/scanqr.module').then( m => m.ScanqrPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PenarikPageRoutingModule {}
