/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, NgIterable, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonTabs, ModalController } from '@ionic/angular';
import { PelangganModalPage } from '../../modals/pelanggan-modal/pelanggan-modal.page';
import { Pelanggan, PelangganService } from '../../../../services/pelanggan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-pelanggan',
  templateUrl: './data-pelanggan.page.html',
  styleUrls: ['./data-pelanggan.page.scss'],
})
export class DataPelangganPage implements OnInit {
  @ViewChild(IonTabs) tabs: IonTabs;
  selectedTab = 'home1';
  home1Color = 'black';
  home2Color = 'cadetblue';

  pelanggan: Pelanggan[];

  //search
  searchPelanggan: string;

  constructor(
    private service: PelangganService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.pelanggan = response;
     // console.log(response);
    });
  }
  ionTabsWillChange(event) {
    this.selectedTab = event.tab;
  }
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  addPelanggan(){
    this.modalCtrl.create({
      component: PelangganModalPage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
  }).then(({data, role}) => {
    if(role=== 'created'){
      this.pelanggan.push(data);
      this.router.navigateByUrl('/home/data-pelanggan');
    }
  });
  }

  updatePelanggan(pelanggan: Pelanggan){
    this.modalCtrl.create({
      component: PelangganModalPage,
      componentProps: { pelanggan },
      breakpoints: [0, 0.0, 0.8],
      initialBreakpoint: 0.8
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data, role}) => {
      this.pelanggan = this.pelanggan.filter(plg => {
        if(data.id === plg.id){
          return data;
        }
        return plg;
      });
    });
  }

  removePelanggan(id: string){
   // console.log('remove');
   this.alertCtrl.create({
    header: 'Delete',
    message: 'Seberapa yakin kamu?',
    buttons: [{
      text: 'Yakin banget',
      handler: () => {
        this.service.remove(id).subscribe(() =>{
          this.pelanggan = this.pelanggan.filter(plg => plg.id !== id);
        });
      }
     },
     {
       text: 'Tidak'
     }
    ]
   }).then(alertCrtl => alertCrtl.present());
  }

}
