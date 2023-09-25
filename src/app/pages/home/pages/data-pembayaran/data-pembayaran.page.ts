import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Pembayaran, PembayaranService } from '../../../../services/pembayaran.service';
import { InvoicePage } from '../../modals/invoice-modal/invoice.page';
import { PembayaranModalPage } from '../../modals/pembayaran-modal/pembayaran-modal.page';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-data-pembayaran',
  templateUrl: './data-pembayaran.page.html',
  styleUrls: ['./data-pembayaran.page.scss'],
})
export class DataPembayaranPage {
  selectTabs='0';
  //search
  pembayaran: Pembayaran[];
  searchPembayaran: string;
  selectedDate: string;
  data: any[];

  constructor(private service: PembayaranService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private http: HttpClient,
    private router: Router) { }
  ionViewWillEnter(){
    this.getData();

    const date = new Date(this.selectedDate);
    const month = date.getMonth() + 1; // Add 1 because getMonth() returns a zero-based index
    const year = date.getFullYear();
  }

  async getData(){
    this.service.getAll().subscribe(response => {
      this.pembayaran = response;
      //console.log(response);
    });
  }
  getNomorUrut(index: number) {
    return index + 1;
  }

  async detailInvoice(pembayaran: Pembayaran) {
    this.modalCtrl.create({
      component: InvoicePage,
      componentProps: { pembayaran },
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data, role}) => {
      this.pembayaran = this.pembayaran.filter(inv => {
        if(data.id === inv.id){
          return data;
        }
        return inv;
      });
    });
  }
  async updateInv(pembayaran: Pembayaran){
    this.modalCtrl.create({
      component: PembayaranModalPage,
      componentProps: { pembayaran },
      initialBreakpoint: 0.6
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data, role}) => {
      this.pembayaran = this.pembayaran.filter(inv => {
        if(data.id === inv.id){
          return data;
        }
        return inv;
      });
    });
  }

}
