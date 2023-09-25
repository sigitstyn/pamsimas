import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AuthGuard } from 'src/app/auth/auth-guard/auth.guard';
import { PencatatPage } from '../pencatat/pencatat.page';
import { PenarikPage } from '../penarik/penarik.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  {
    path: 'pencatat',
    component: PencatatPage,
    canActivate: [AuthGuard],
    data: { role: 'pencatat' } // sesuaikan dengan role masing-masing halaman home
  },
  {
    path: 'penarik',
    component: PenarikPage,
    canActivate: [AuthGuard],
    data: { role: 'penarik' } // sesuaikan dengan role masing-masing halaman home
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'data-pelanggan',
    loadChildren: () => import('./pages/data-pelanggan/data-pelanggan.module').then( m => m.DataPelangganPageModule)
  },
  {
    path: 'data-user',
    loadChildren: () => import('./pages/data-user/data-user.module').then( m => m.DataUserPageModule)
  },
  {
    path: 'data-scanqr',
    loadChildren: () => import('./pages/data-scanqr/data-scanqr.module').then( m => m.DataScanqrPageModule)
  },
  {
    path: 'data-pengaduan',
    loadChildren: () => import('./pages/data-pengaduan/data-pengaduan.module').then( m => m.DataPengaduanPageModule)
  },
  {
    path: 'data-keuangan',
    loadChildren: () => import('./pages/data-keuangan/data-keuangan.module').then( m => m.DataKeuanganPageModule)
  },
  {
    path: 'data-pembayaran',
    loadChildren: () => import('./pages/data-pembayaran/data-pembayaran.module').then( m => m.DataPembayaranPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
