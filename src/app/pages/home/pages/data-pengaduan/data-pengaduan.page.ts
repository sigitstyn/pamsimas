/* eslint-disable @typescript-eslint/naming-convention */
import { DatePipe } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Pengaduan, PengaduanService } from '../../../../services/pengaduan.service';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-data-pengaduan',
  templateUrl: './data-pengaduan.page.html',
  styleUrls: ['./data-pengaduan.page.scss'],
})
export class DataPengaduanPage {
  pengaduan: Pengaduan[];
  constructor(
    private service: PengaduanService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private router: Router,
    @Inject(DatePipe) private datePipe: DatePipe
  ) { }
  ionViewWillEnter(){
    this.getData();
  }

  async getData(){
    this.service.getAll().subscribe(response => {
      this.pengaduan = response.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
     // console.log(response);
    });
  }
  removePengaduan(id: string){
    // console.log('remove');
    this.alertCtrl.create({
     header: 'Delete',
     message: 'Seberapa yakin kamu?',
     buttons: [{
       text: 'Yakin banget',
       handler: () => {
         this.service.remove(id).subscribe(() =>{
           this.pengaduan = this.pengaduan.filter(warn => warn.id !== id);
         });
       }
      },
      {
        text: 'Tidak'
      }
     ]
    }).then(alertCrtl => alertCrtl.present());
   }
   async onDeleteAllData() {
    const alert = await this.alertCtrl.create({
      header: 'Delete',
      message: 'Bersihkan Semua Data?',
      buttons: [
      {
        text: 'Batal',
        role: 'cancel',
        handler: () => {
          console.log('Batal');
        }
      },
      {
        text: 'Yakin banget',
        handler: () => {
        this.service.deleteAllData().subscribe(response => {
        console.log(response);
        this.presentToast();
        this.getData();
            });
          }
        }
      ]
     });


    await alert.present();
  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Semua Data Berhasil dihapus',
      duration: 2000
    });
    toast.present();
  }

  }
