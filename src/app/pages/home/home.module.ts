import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PenarikPage } from '../penarik/penarik.page';
import { PencatatPage } from '../pencatat/pencatat.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'pencatat',
    component: PencatatPage
  },
  {
    path: 'penarik',
    component: PenarikPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
