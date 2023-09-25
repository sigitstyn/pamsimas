import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { DataScanqrPage } from './data-scanqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DataScanqrPage
      }
    ])
  ],
  declarations: [DataScanqrPage]
})
export class DataScanqrPageModule {}
