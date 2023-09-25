import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


import { DataKeuanganPage } from './data-keuangan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DataKeuanganPage
      }
    ])
  ],
  declarations: [DataKeuanganPage]
})
export class DataKeuanganPageModule {}
