import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PenarikPageRoutingModule } from './penarik-routing.module';

import { PenarikPage } from './penarik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PenarikPageRoutingModule
  ],
  declarations: [PenarikPage]
})
export class PenarikPageModule {}
