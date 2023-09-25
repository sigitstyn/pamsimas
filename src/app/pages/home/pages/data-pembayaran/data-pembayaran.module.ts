import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { DataPembayaranPage } from './data-pembayaran.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DataPembayaranPage
      }
    ])
  ],
  declarations: [DataPembayaranPage]
})
export class DataPembayaranPageModule {}
