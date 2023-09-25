import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Pembayaran, PembayaranService } from 'src/app/services/pembayaran.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage {
  id: string;
  pembayaran: Pembayaran;
  constructor(
    private service: PembayaranService,
    private modalCtrl: ModalController,
    private navParams: NavParams
    ) {
     }

  getData(id: string) {
    this.service.get(id)
      .subscribe(pembayaran => this.pembayaran = pembayaran);
  }
  closeModal(){
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
