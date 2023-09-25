import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
      {
        path: 'login',
        loadChildren: () => import('./auth/pages/admin-login/login.module').then( m => m.LoginPageModule)
      },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
    {
      path: 'pelanggan-modal',
      loadChildren: () => import('./pages/home/modals/pelanggan-modal/pelanggan-modal.module').then( m => m.PelangganModalPageModule)
    },
    {
      path: 'users-modal',
      loadChildren: () => import('./pages/home/modals/users-modal/users-modal.module').then( m => m.UsersModalPageModule)
    },
    {
      path: 'register',
      loadChildren: () => import('./pages/home/modals/register-users/register.module').then( m => m.RegisterPageModule),
    },
    {
      path: 'invoice',
      loadChildren: () => import('./pages/home/modals/invoice-modal/invoice.module').then( m => m.InvoicePageModule)
    },
    {
      path: 'pembayaran-modal',
      loadChildren: () => import('./pages/home/modals/pembayaran-modal/pembayaran-modal.module').then( m => m.PembayaranModalPageModule)
    },


  {
    path: 'penarik',
    loadChildren: () => import('./pages/penarik/penarik.module').then( m => m.PenarikPageModule)
  },
  {
    path: 'pencatat',
    loadChildren: () => import('./pages/pencatat/pencatat.module').then( m => m.PencatatPageModule)
  },
  {
    path: 'redirect',
    loadChildren: () => import('./pages/redirect/redirect.module').then( m => m.RedirectPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
