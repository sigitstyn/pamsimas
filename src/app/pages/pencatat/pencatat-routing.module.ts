import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PencatatPage } from './pencatat.page';

const routes: Routes = [
  {
    path: '',
    component: PencatatPage
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
export class PencatatPageRoutingModule {}
