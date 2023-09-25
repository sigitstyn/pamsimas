import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PencatatPageRoutingModule } from './pencatat-routing.module';

import { PencatatPage } from './pencatat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PencatatPageRoutingModule
  ],
  declarations: [PencatatPage]
})
export class PencatatPageModule {}
