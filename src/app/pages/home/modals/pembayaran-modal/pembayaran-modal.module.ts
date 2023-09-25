import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';
import { PembayaranModalPage } from './pembayaran-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: PembayaranModalPage
    }])
  ],
  declarations: [PembayaranModalPage]
})
export class PembayaranModalPageModule {}
