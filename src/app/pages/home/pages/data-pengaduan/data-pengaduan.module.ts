import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DataPengaduanPage } from './data-pengaduan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DataPengaduanPage
      }
    ])
  ],
  declarations: [DataPengaduanPage]
})
export class DataPengaduanPageModule {}
